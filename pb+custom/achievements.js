const iconFolder =
    // comment line below locally
    "https://jeremygamer13.vercel.app/" +
    // uncomment line below locally when testing non main page achievements
    // "../" +
    "images/achievements/"
const AchievementMetadata = [
    { rating: 3, name: "Just Hacked it", description: "Complete /puzzle.", icon: iconFolder + "just_hacked_it" + ".png" },
    { rating: 3, name: "What's a JavaScript?", description: "Return a function that returns the result of inputs x and y added then multiplied by two in JavaScript.", icon: iconFolder + "whats_a_javascript" + ".png" },
    { rating: 2, name: "I LOVE LUA", description: "Insert code to print 10 to the console as a number into the C O D E.", icon: iconFolder + "i_love_lua" + ".png" },
    { rating: 3, name: "The ID is important", description: "Find a certain piece of an ID and insert it into the C O D E.", icon: iconFolder + "the_id_is_important" + ".png" },
    { rating: 3, name: "One step away", description: "Miss the last decoding step in /puzzle.", icon: iconFolder + "one_step_away" + ".png" },
    { rating: 3, name: "Har har har har...", description: "Insert a date as a string of numbers into the C O D E.", icon: iconFolder + "har_har_har_har" + ".png" },
    { rating: 2, name: "404_NOT_FOUND", description: "Find and insert a C O D E.", icon: iconFolder + "404_NOT_FOUND" + ".png" },
    { rating: 2, name: "Found them all", description: "Find every guardian's URL.", icon: iconFolder + "found_them_all" + ".png" },
    { rating: 2, name: "Too Shy To Meet Her", description: "Find the Pink guardian.", icon: iconFolder + "too_shy_to_meet_her" + ".png" },
    { rating: 2, name: "Finky Dinky", description: "Find the Green guardian.", icon: iconFolder + "finky_dinky" + ".png" },
    { rating: 2, name: "Lumby's Friend", description: "Find the Yellow guardian.", icon: iconFolder + "lumbys_friend" + ".png" },
    { rating: 2, name: "History is (un)Important", description: "Insert a certain string of numbers into the C O D E.", icon: iconFolder + "history_is_unimportant" + ".png" },
    { rating: 2, name: "Super Secret Password", description: "Insert a pattern into the C O D E.", icon: iconFolder + "super_secret_password" + ".png" },
    { rating: 2, name: "Encounter Jack", description: "Find Jack in the C O D E page.", icon: iconFolder + "encounter_jack" + ".png" },
    { rating: 1, name: "Who the heck did this?", description: "Find the C O D E page.", icon: iconFolder + "who_the_hell_did_this" + ".png" },
    { rating: 1, name: "I'm a teapot", description: "Find the hidden page.", icon: iconFolder + "im_a_teapot" + ".png" },
    { rating: 1, name: "HTTP Unauthorized", description: "Find the hidden page.", icon: iconFolder + "http_unauthorized" + ".png" },
    { rating: 2, name: "I'm gonna watch him sleep.", description: "Find the Blue guardian.", icon: iconFolder + "im_gonna_watch_him_sleep" + ".png" },
    { rating: 1, name: "It's just a prank bro", description: "Get trolled by a useless secret.", icon: iconFolder + "its_just_a_prank_bro" + ".png" },
    { rating: 1, name: "Meet the Nerd", description: "Find the nerd.", icon: iconFolder + "meet_the_nerd" + ".png" },
    { rating: 1, name: "Cheese Disturbance", description: "Disturb the cheese.", icon: iconFolder + "cheese_disturbance" + ".png" },
    { rating: 1, name: "The Prism Holder", description: "Find the cave.", icon: iconFolder + "the_prism_holder" + ".png" },
    { rating: 1, name: "Jeremy Teaches Typing", description: "Type the forbidden word.", icon: iconFolder + "jeremy_teaches_typing" + ".png" },
].reverse()

if (!localStorage.getItem("JEREMYGAMER13_achievements")) {
    localStorage.setItem("JEREMYGAMER13_achievements", "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]")
}

class AchievementsManager {
    static iconFolder = iconFolder
    static metadata = AchievementMetadata
    static achievementDiv = Util.CreateElement("div", Util.GetDocumentBody(), div => {
        Util.Restyle(div, {
            position: "fixed",
            top: "2.5%",
            right: "16px",
            width: "50%",
            height: "97.5%",
            pointerEvents: "none",
            zIndex: 9999999
        })
    })

    static AwardAchievement(id) {
        console.log("rewarding achievement", id)

        let savedData = localStorage.getItem("JEREMYGAMER13_achievements")
        if (!savedData) {
            localStorage.setItem("JEREMYGAMER13_achievements", "[]")
            savedData = "[]"
        }
        if (!Util.IsJson(savedData)) {
            localStorage.setItem("JEREMYGAMER13_achievements", "[]")
            savedData = "[]"
        }
        savedData = JSON.parse(savedData)
        if (!savedData.includes(id)) {
            savedData.push(id)
        }
        localStorage.setItem("JEREMYGAMER13_achievements", JSON.stringify(savedData))
        // comment if testing achievements
    }
    static HasAchievement(id) {
        let savedData = localStorage.getItem("JEREMYGAMER13_achievements")
        if (!savedData) {
            return false
        }
        if (!Util.IsJson(savedData)) {
            return false
        }
        savedData = JSON.parse(savedData)
        if (savedData.includes(id)) {
            return true
        }
    }
    static ShowAchievementMessage(id) {
        console.log("showing achievement", id)

        const modal = Util.CreateElement("div", AchievementsManager.achievementDiv)
        let targetYPixel = 168 * Util.Clamp(Util.GetAllChildren(AchievementsManager.achievementDiv, false).length - 1, 0, Infinity)
        Util.AddClass(modal, "achievement-modal")
        Util.Restyle(modal, {
            position: "absolute",
            left: "150%",
            top: targetYPixel + "px"
        });

        (function () { // fill modal with achievement ibnfo
            Util.CreateElement("a", modal, p => {
                p.innerHTML = "UNLOCKED ACHIEVEMENT"
                Util.Restyle(p, {
                    position: "absolute",
                    left: "4px",
                    top: "4px",
                    fontSize: "20px",
                    fontWeight: "bold"
                })
            })
            Util.CreateElement("img", modal, img => {
                img.src = AchievementMetadata[id].icon
                img.width = 110
                img.height = 110
                Util.Restyle(img, {
                    borderRadius: "110px",
                    position: "absolute",
                    bottom: "6px",
                    left: "6px"
                })
            })
            Util.CreateElement("a", modal, p => {
                p.innerHTML = AchievementMetadata[id].name
                Util.Restyle(p, {
                    position: "absolute",
                    left: "128px",
                    top: "32px",
                    fontSize: "48px",
                    fontWeight: "bold"
                })
            })
            Util.CreateElement("a", modal, p => {
                p.innerHTML = AchievementMetadata[id].description
                Util.Restyle(p, {
                    position: "absolute",
                    left: "128px",
                    top: "82px",
                    fontSize: "24px",
                })
            })
        })();

        modal.targetXPrecent = 0
        const movementInterval = setInterval(() => {
            modal.style.left = Util.Lerp(Number(String(Number((String(modal.style.left).startsWith("-") ? "-" : "") + String(modal.style.left).replace(/[^0-9\.]*/gmi, ""))).substring(0, 4)), modal.targetXPrecent, 0.05) + "%"
        }, 10)
        setTimeout(() => {
            modal.targetXPrecent = 150
        }, 3000);
        setTimeout(() => {
            clearInterval(movementInterval)
            Util.Delete(modal)
        }, 5000);
    }
}

Util.AddDocumentCore("AchievementsManager", AchievementsManager)
