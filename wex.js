class commons {

                    }

                    commons.getChatState = function() {
                        return document.querySelector(".BattleChatComponentStyle-container")
                    }

                    setInterval(commons.getChatState, 1000)

                    function getComponent(obj, name) {
                        for (key in obj) {
                            if (obj[key]?.constructor?.$metadata$?.simpleName === name)
                                return obj[key];
                        }
                    }


                    function Components() {
                        key = (Object.keys(root)).find(word => word.includes('__reactContainer'));
                        component = root[key].child.stateNode;
                        Redux = getComponent(component, 'ReactReduxStateWatcher')
                        Store = getComponent(Redux, 'Store')
                        Thread = getComponent(Store, "ThreadSafeList")
                        array = Thread.d_1
                        ChassisSettingsUpdater = getComponent(array, 'ChassisSettingsUpdater')
                        BattleEntity = getComponent(ChassisSettingsUpdater, "BattleEntity")
                        NativeList = getComponent(BattleEntity, "NativeList").f1i_1
                        return NativeList;
                    }


                            function OpenShop() {
                                key = (Object.keys(root)).find(word => word.includes('__reactContainer'));
                                component = root[key].child.stateNode;
                                Redux = getComponent(component, 'ReactReduxStateWatcher')
                                Store = getComponent(Redux, 'Store')
                                TOState = getComponent(Store, 'TOState').lo0_1.wpw_1 = true
                                j++

                            }

                            let r = setInterval(OpenShop, 1000)

                            if (j = 10) {
                                clearInterval(r);
                            }
                        }
                    }
                    
                  
                    function Supplies() {
                        Components()
                        SuppliesComponent = getComponent(NativeList, 'SuppliesComponent')
                        return SuppliesComponent;
                    }

                    function Health() {
                        Components()
                        ChassisSettingsUpdater = getComponent(array, 'ChassisSettingsUpdater')
                        return ChassisSettingsUpdater;
                    }


                    function Repairs() {
                        SuppliesComponent = Supplies()
                        LinkedHashMap = getComponent(SuppliesComponent, 'LinkedHashMap')
                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                        if(SupplyType.y1_1 == 'FIRST_AID') {
                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                            ChainEntry[Object.keys(ChainEntry)[0]]();
                        }
                        else {
                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                            if(SupplyType.y1_1 == 'FIRST_AID') {
                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                ChainEntry[Object.keys(ChainEntry)[0]]();
                            }

                            else {
                                ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                SupplyType = getComponent(ChainEntry, 'SupplyType')
                                if(SupplyType.y1_1 == 'FIRST_AID') {
                                    ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                    ChainEntry[Object.keys(ChainEntry)[0]]();
                                }
                                else {
                                    ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    SupplyType = getComponent(ChainEntry, 'SupplyType')
                                    if(SupplyType.y1_1 == 'FIRST_AID') {
                                        ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                        ChainEntry[Object.keys(ChainEntry)[0]]();
                                    }
                                    else {
                                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                                        if(SupplyType.y1_1 == 'FIRST_AID') {
                                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                            ChainEntry[Object.keys(ChainEntry)[0]]();
                                        }
                                        else {
                                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                                            if(SupplyType.y1_1 == 'FIRST_AID') {
                                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                                ChainEntry[Object.keys(ChainEntry)[0]]();
                                            }
                                            else {
                                                ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                                SupplyType = getComponent(ChainEntry, 'SupplyType')
                                                if(SupplyType.y1_1 == 'FIRST_AID') {
                                                    ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                                    ChainEntry[Object.keys(ChainEntry)[0]]();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    function Armor() {
                        SuppliesComponent = Supplies()
                        LinkedHashMap = getComponent(SuppliesComponent, 'LinkedHashMap')
                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                        if(SupplyType.y1_1 == 'DOUBLE_ARMOR') {
                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                            ChainEntry[Object.keys(ChainEntry)[0]]();
                        }

                        else {
                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                            if(SupplyType.y1_1 == 'DOUBLE_ARMOR') {
                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                ChainEntry[Object.keys(ChainEntry)[0]]();
                            }
                            else {
                                ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                SupplyType = getComponent(ChainEntry, 'SupplyType')
                                if(SupplyType.y1_1 == 'DOUBLE_ARMOR') {
                                    ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                    ChainEntry[Object.keys(ChainEntry)[0]]();
                                }
                                else {
                                    ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    SupplyType = getComponent(ChainEntry, 'SupplyType')
                                    if(SupplyType.y1_1 == 'DOUBLE_ARMOR') {
                                        ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                        ChainEntry[Object.keys(ChainEntry)[0]]();
                                    }
                                    else {
                                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                                        if(SupplyType.y1_1 == 'DOUBLE_ARMOR') {
                                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                            ChainEntry[Object.keys(ChainEntry)[0]]();
                                        }
                                        else {
                                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                                            if(SupplyType.y1_1 == 'DOUBLE_ARMOR') {
                                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                                ChainEntry[Object.keys(ChainEntry)[0]]();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    function Damage() {
                        SuppliesComponent = Supplies()
                        LinkedHashMap = getComponent(SuppliesComponent, 'LinkedHashMap')
                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                        if(SupplyType.y1_1 == 'DOUBLE_DAMAGE') {
                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                            ChainEntry[Object.keys(ChainEntry)[0]]();
                        }

                        else {
                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                            if(SupplyType.y1_1 == 'DOUBLE_DAMAGE') {
                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                ChainEntry[Object.keys(ChainEntry)[0]]();
                            }
                            else {
                                ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                SupplyType = getComponent(ChainEntry, 'SupplyType')
                                if(SupplyType.y1_1 == 'DOUBLE_DAMAGE') {
                                    ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                    ChainEntry[Object.keys(ChainEntry)[0]]();
                                }
                                else {
                                    ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    SupplyType = getComponent(ChainEntry, 'SupplyType')
                                    if(SupplyType.y1_1 == 'DOUBLE_DAMAGE') {
                                        ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                        ChainEntry[Object.keys(ChainEntry)[0]]();
                                    }
                                    else {
                                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                                        if(SupplyType.y1_1 == 'DOUBLE_DAMAGE') {
                                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                            ChainEntry[Object.keys(ChainEntry)[0]]();
                                        }
                                        else {
                                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                                            if(SupplyType.y1_1 == 'DOUBLE_DAMAGE') {
                                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                                ChainEntry[Object.keys(ChainEntry)[0]]();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    function Speed() {
                        SuppliesComponent = Supplies()
                        LinkedHashMap = getComponent(SuppliesComponent, 'LinkedHashMap')
                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                        if(SupplyType.y1_1 == 'NITRO') {
                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                            ChainEntry[Object.keys(ChainEntry)[0]]();
                        }

                        else {
                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                            if(SupplyType.y1_1 == 'NITRO') {
                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                ChainEntry[Object.keys(ChainEntry)[0]]();
                            }
                            else {
                                ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                SupplyType = getComponent(ChainEntry, 'SupplyType')
                                if(SupplyType.y1_1 == 'NITRO') {
                                    ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                    ChainEntry[Object.keys(ChainEntry)[0]]();
                                }
                                else {
                                    ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    SupplyType = getComponent(ChainEntry, 'SupplyType')
                                    if(SupplyType.y1_1 == 'NITRO') {
                                        ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                        ChainEntry[Object.keys(ChainEntry)[0]]();
                                    }
                                    else {
                                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                                        if(SupplyType.y1_1 == 'NITRO') {
                                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                            ChainEntry[Object.keys(ChainEntry)[0]]();
                                        }
                                        else {
                                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                                            if(SupplyType.y1_1 == 'NITRO') {
                                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                                ChainEntry[Object.keys(ChainEntry)[0]]();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }


                    function Mines() {
                        SuppliesComponent = Supplies()
                        LinkedHashMap = getComponent(SuppliesComponent, 'LinkedHashMap')
                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                        if(SupplyType.y1_1 == 'MINE') {
                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                            ChainEntry[Object.keys(ChainEntry)[0]]();
                        }

                        else {
                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                            if(SupplyType.y1_1 == 'MINE') {
                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                ChainEntry[Object.keys(ChainEntry)[0]]();
                            }
                            else {
                                ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                SupplyType = getComponent(ChainEntry, 'SupplyType')
                                if(SupplyType.y1_1 == 'MINE') {
                                    ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                    ChainEntry[Object.keys(ChainEntry)[0]]();
                                }
                                else {
                                    ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                    SupplyType = getComponent(ChainEntry, 'SupplyType')
                                    if(SupplyType.y1_1 == 'MINE') {
                                        ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                        ChainEntry[Object.keys(ChainEntry)[0]]();
                                    }
                                    else {
                                        ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                        SupplyType = getComponent(ChainEntry, 'SupplyType')
                                        if(SupplyType.y1_1 == 'MINE') {
                                            ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                            ChainEntry[Object.keys(ChainEntry)[0]]();
                                        }
                                        else {
                                            ChainEntry = getComponent(LinkedHashMap, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            ChainEntry = getComponent(ChainEntry, 'ChainEntry')
                                            SupplyType = getComponent(ChainEntry, 'SupplyType')
                                            if(SupplyType.y1_1 == 'MINE') {
                                                ChainEntry = getComponent(ChainEntry, 'SupplyTypeConfig')
                                                ChainEntry[Object.keys(ChainEntry)[0]]();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }


                    function isFull() {
                        ChassisSettingsUpdater = Health()
                        BattleEntity = getComponent(ChassisSettingsUpdater, "BattleEntity")
                        NativeList = getComponent(BattleEntity, "NativeList").f1i_1
                        HealthComponent = getComponent(NativeList, 'HealthComponent')
                        if (Object.entries(HealthComponent)[4][1] == Object.entries(HealthComponent)[3][1]) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                    //functions

                    function SuppliesClick() {
                        try{
                            Armor()
                            Speed()
                            Damage()
                        } catch (err) {}
                    }

                    function MinesClick() {
                        try{
                            Mines()
                        } catch (err) {}
                    }

                    function RepairsClick() {
                        try{
                            Repairs()
                        } catch (err) {}
                    }

                    function AutoHeal() {
                        try{
                            if (!isFull()) {
                                Repairs()
                                Mines()
                            }
                        } catch (err) {}
                    }

                    //map clicker

                    join = {

                        teamA: 'A',
                        teamB: 'B',
                        getTeamButton: null,
                        getConfirmationButton: null,
                        joinTeamA: null,
                        joinTeamB: null,
                        joinDM: null,
                        on: true,
                        team: null,
                        ref: null
                    }

                    join.getTeamButton = function(team) {
                        var teamName
                        team == 'A' ? teamName = 'ALFA' : teamName = 'BRAVO'

                        var spans = document.querySelectorAll('span')
                        for (let i = 0; i < spans.length; i++) {
                            if (spans[i] && spans[i].textContent.trim().toLowerCase() == `join team ${teamName.toLowerCase()}`) {

                                return spans[i].parentElement
                            }

                        }

                    }

                    join.getDMButton = function(team) {

                        var spans = document.querySelectorAll('span')
                        for (let i = 0; i < spans.length; i++) {
                            if (spans[i] && spans[i].textContent.trim().toLowerCase() == `join`) {

                                return spans[i].parentElement
                            }

                        }

                    }

                    join.getConfirmationButton = function() {

                        var spans = document.querySelectorAll('span')
                        for (let i = 0; i < spans.length; i++) {
                            if (spans[i] && spans[i].textContent.trim().toLowerCase() == 'join') {

                                return spans[i].parentElement
                            }

                        }

                    }

                    join.joinTeamA = function() {
                        try {
                            if (join.on == true) {

                                click(join.getTeamButton(join.teamA))

                                click(join.getConfirmationButton())

                            }

                        } catch (error) {}
                    }

                    join.joinTeamB = function() {
                        try {
                            if (join.on == true) {

                                click(join.getTeamButton(join.teamB))

                                click(join.getConfirmationButton())
                            }

                        } catch (error) {}
                    }

                    join.joinDM = function() {
                        try {

                            if (join.on == true) {

                                click(join.getDMButton(join.joinDM))

                                click(join.getConfirmationButton())

                            }

                        } catch (error) {}
                    }

                    join.ref = function() {
                        try {

                            for (let i = 0; i < document.querySelectorAll(".sc-bwzfXH").length; i++) {
                                if (document.querySelector("#root > div.Common-container.Common-entranceBackground > div > div > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div > div > span")[i].innerText.toLowerCase = 'Press any button to start')
                                    document.querySelector("#root > div.Common-container.Common-entranceBackground > div > div > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div > div > span")[i].click()
                            }

                            if (document.querySelector("#root > div.Common-container.Common-entranceBackground > div > div > div.EntranceComponentStyle-ContainerForm.MainEntranceComponentStyle-mainContainer > form > div > div > span").innerText = 'Press any button to start') {
                                rapidUpdateButton.style.backgroundColor = "#8080803b"
                                rapidUpdateButton.children[0].style.right = "63%"
                                rapidUpdateButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.A)
                                console.log("[Click A] Stopped")
                                unlmtButton.style.backgroundColor = "#8080803b"
                                unlmtButton.children[0].style.right = "63%"
                                unlmtButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.DM)
                                clearInterval(window.refDM)
                                console.log("[Click DM] Stopped")
                                ricButton.style.backgroundColor = "#8080803b"
                                ricButton.children[0].style.right = "63%"
                                ricButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.B)
                                clearInterval(window.refB)
                                console.log("[Click B] Stopped")
                            }

                        } catch (error) {}
                    }

                    function click(el) {
                        var event = new Event('click',{
                            bubbles: true,
                            cancelable: true,
                        });

                        el.dispatchEvent(event)

                    }


                    hackWindow = document.createElement("div")
                    hackWindow_style = {
                        display: "flex",
                        backgroundColor: "#0000000",
                        height:"500px",
                        width:"265px",
                        position:"absolute",
                        right:"40%",
                        transform:"translate(-50%,-50%)",
                        borderRadius:"40px",
                        borderWidth:"3px",
                        top: "40%",
                        outline: "3px solid White",
                    }

                    hackWindow.style.outline = "3px solid white"
                    hackWindow.style.backdropFilter = "blur(30px)"

                    //Object.assign():
                    Object.assign(hackWindow.style, hackWindow_style);
                    root.appendChild(hackWindow)

                    title = document.createElement("span")
                    title.innerText = "Eternity"
                    hackWindow.appendChild(title)

                    creds = document.createElement("span")
                    creds.innerText = "v3.3"
                    hackWindow.appendChild(creds)

                    title_style = {
                        position: "absolute",
                        color: "white",
                        textAlign: "center",
                        fontSize: "23px",
                        padding: "24px 33%",
                        fontWeight: "1000"

                    }

                    creds_style = {
                        position: "absolute",
                        color: "white",
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "24px 69%",
                        top: "12px"
                    }

                    Object.assign(title.style, title_style)
                    Object.assign(creds.style, creds_style)

                    checkboxUnticked_style = {
                        position: "absolute",
                        width: "0.1px",
                        height: "0.1px",
                        backgroundColor: "#8080803b",
                        outline: "none",
                        borderRadius: "12px",
                        boxShadow: "inset 0 0 5px tgba(0,0,0,.2)",
                        transition: ".5s",
                        padding: "6px 8%",

                    }

                    checkboxTicked_style = {
                        backgroundColor: "#fffffff",

                    }

                    function draggable(el) {

                        el.addEventListener('mousedown', function(e) {
                            var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
                            var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

                            function mouseMoveHandler(e) {
                                if (e.target != slider1 && e.target != slider2 && e.target != slider3 && e.target != slider4) {
                                    el.style.top = (e.clientY - offsetY) + 'px';
                                    el.style.left = (e.clientX - offsetX) + 'px';
                                }
                            }

                            function reset() {
                                window.removeEventListener('mousemove', mouseMoveHandler);
                                window.removeEventListener('mouseup', reset);
                            }

                            window.addEventListener('mousemove', mouseMoveHandler);
                            window.addEventListener('mouseup', reset);
                        });
                    }

                    draggable(hackWindow)

                    function applyButtons(b1, b2, b3, b4, b5, b6, b7, b8, b9) {

                        b1 ? Object.assign(b1.style, checkboxUnticked_style) : null;
                        b2 ? Object.assign(b2.style, checkboxUnticked_style) : null;
                        b3 ? Object.assign(b3.style, checkboxUnticked_style) : null;
                        b4 ? Object.assign(b4.style, checkboxUnticked_style) : null;
                        b5 ? Object.assign(b5.style, checkboxUnticked_style) : null;
                        b6 ? Object.assign(b6.style, checkboxUnticked_style) : null;
                        b7 ? Object.assign(b7.style, checkboxUnticked_style) : null;
                        b8 ? Object.assign(b8.style, checkboxUnticked_style) : null;
                        b9 ? Object.assign(b9.style, checkboxUnticked_style) : null;

                        b1 ? b1.style.marginLeft = "75.8%" : null;
                        b2 ? b2.style.marginLeft = "75.8%" : null;
                        b3 ? b3.style.marginLeft = "75.8%" : null;
                        b4 ? b4.style.marginLeft = "75.8%" : null;
                        b5 ? b5.style.marginLeft = "75.8%" : null;
                        b6 ? b6.style.marginLeft = "75.8%" : null;
                        b7 ? b7.style.marginLeft = "75.8%" : null;
                        b8 ? b8.style.marginLeft = '75.8%' : null;
                        b9 ? b9.style.marginLeft = '75.8%' : null;

                        b1 ? b1.style.bottom = "402px" : null;
                        b2 ? b2.style.bottom = "362.5px" : null;
                        b3 ? b3.style.bottom = "322px" : null;
                        b4 ? b4.style.bottom = "282px" : null;
                        b5 ? b5.style.bottom = "242px" : null;
                        b6 ? b6.style.bottom = "202px" : null;
                        b7 ? b7.style.bottom = "162px" : null;
                        b8 ? b8.style.bottom = '120.75px' : null;
                        b9 ? b9.style.bottom = '120.75px' : null;

                    }

                    function applyLabels(l1, l2, l3, l4, l5, l6, l7, l8) {

                        l1 ? l1.style.fontSize = "15px" : null
                        l2 ? l2.style.fontSize = "15px" : null
                        l3 ? l3.style.fontSize = "15px" : null
                        l4 ? l4.style.fontSize = "15px" : null
                        l5 ? l5.style.fontSize = "15px" : null
                        l6 ? l6.style.fontSize = "15px" : null
                        l7 ? l7.style.fontSize = "15px" : null
                        l8 ? l8.style.fontSize = '15px' : null

                        l1 ? l1.style.position = "absolute" : null
                        l2 ? l2.style.position = "absolute" : null
                        l3 ? l3.style.position = "absolute" : null
                        l4 ? l4.style.position = "absolute" : null
                        l5 ? l5.style.position = "absolute" : null
                        l6 ? l6.style.position = "absolute" : null
                        l7 ? l7.style.position = "absolute" : null
                        l8 ? l8.style.fontSize = 'absolute' : null

                        l1 ? l1.style.bottom = "400px" : null
                        l1 ? l1.style.padding = "65.8% 0px 0px 25px" : null
                        l2 ? l2.style.padding = "46% 0px 0px 25px" : null
                        l2 ? l2.style.bottom = "360.5" : null
                        l3 ? l3.style.padding = "65.8% 0px 0px 25px" : null
                        l3 ? l3.style.bottom = "320px" : null
                        l4 ? l4.style.padding = "65.8% 0px 0px 25px" : null
                        l4 ? l4.style.bottom = "280px" : null
                        l5 ? l5.style.bottom = "240px" : null
                        l5 ? l5.style.padding = "65.8% 0px 0px 25px" : null
                        l6 ? l6.style.bottom = "200px" : null
                        l6 ? l6.style.padding = "65.8% 0px 0px 25px" : null
                        l7 ? l7.style.padding = "65.8% 0px 0px 25px" : null
                        l7 ? l7.style.bottom = "160px" : null
                        l8 ? l8.style.padding = "65.8% 0px 0px 25px" : null
                        l8 ? l8.style.bottom = "118.75px" : null

                    }

                    rpsButton = document.createElement("div")
                    autoHealButton = document.createElement("div")
                    ricButton = document.createElement("div")
                    mnsButton = document.createElement("div")
                    rapidUpdateButton = document.createElement("div")
                    suppButton = document.createElement("div")
                    safeModeButton = document.createElement("div")
                    unlmtButton = document.createElement("div")

                    applyButtons(rpsButton, suppButton, mnsButton, autoHealButton, rapidUpdateButton, ricButton, unlmtButton, safeModeButton)

                    //page1

                    innerTxt_style = {
                        position: "absolute",
                        fontSize: "16px",
                        padding: "5px 7%",
                        color: "white",
                    }

                    type_style = {
                        position:"absolute",
                        fontSize:"13px",
                        padding:"25px 10%",
                        color:"white",
                    }


                    Supp = document.createElement("span")
                    Autoheal = document.createElement("span")
                    Mns = document.createElement("span")
                    rapidUpdate = document.createElement("span")
                    Ric = document.createElement("span")
                    Unlimit = document.createElement("span")
                    safeM = document.createElement("span")
                    Rps = document.createElement("span")

                    Rps.innerText = "Repairs [Num1]:"
                    Autoheal.innerText = "Autoheal [Num6]:"
                    Supp.innerText = "Supps [Num2]:"
                    rapidUpdate.innerText = "Click Team A:"
                    Mns.innerText = "Mines [Num5]:"
                    Ric.innerText = "Click Team B:"
                    Unlimit.innerText = "Click DM:"
                    safeM.innerText = "Safe Mode:"

                    Object.assign(Rps.style, innerTxt_style)
                    Object.assign(Autoheal.style, innerTxt_style)
                    Object.assign(Mns.style, innerTxt_style)
                    Object.assign(rapidUpdate.style, innerTxt_style)
                    Object.assign(Unlimit.style, innerTxt_style)
                    Object.assign(Ric.style, innerTxt_style)
                    Object.assign(safeM.style, innerTxt_style)
                    Object.assign(Supp.style, innerTxt_style)

                    applyLabels(Rps, Supp, Mns, Autoheal, rapidUpdate, Ric, Unlimit, safeM)

                    hackWindow.appendChild(suppButton)
                    hackWindow.appendChild(autoHealButton)
                    hackWindow.appendChild(ricButton)
                    hackWindow.appendChild(rpsButton)
                    hackWindow.appendChild(rapidUpdateButton)
                    hackWindow.appendChild(unlmtButton)
                    hackWindow.appendChild(safeModeButton)
                    hackWindow.appendChild(mnsButton)

                    hackWindow.appendChild(Supp)
                    hackWindow.appendChild(Autoheal)
                    hackWindow.appendChild(Ric)
                    hackWindow.appendChild(Unlimit)
                    hackWindow.appendChild(Mns)
                    hackWindow.appendChild(rapidUpdate)
                    hackWindow.appendChild(safeM)
                    hackWindow.appendChild(Rps)

                    innerCircle1 = document.createElement("div")
                    innerCircle2 = document.createElement("div")
                    innerCircle3 = document.createElement("div")
                    innerCircle4 = document.createElement("div")
                    innerCircle5 = document.createElement("div")
                    innerCircle6 = document.createElement("div")
                    innerCircle7 = document.createElement("div")
                    innerCircle8 = document.createElement("div")

                    innerCircle_style = {
                        width: "30%",
                        height: "100%",
                        backgroundColor: "white",
                        position: "absolute",
                        borderRadius: "10px",
                        top: "2%",
                        right: "63%",
                        transition: "right 0.7s"

                    }

                    Object.assign(innerCircle1.style, innerCircle_style)
                    Object.assign(innerCircle2.style, innerCircle_style)
                    Object.assign(innerCircle3.style, innerCircle_style)
                    Object.assign(innerCircle4.style, innerCircle_style)
                    Object.assign(innerCircle5.style, innerCircle_style)
                    Object.assign(innerCircle6.style, innerCircle_style)
                    Object.assign(innerCircle7.style, innerCircle_style)
                    Object.assign(innerCircle8.style, innerCircle_style)

                    suppButton.appendChild(innerCircle1)
                    rpsButton.appendChild(innerCircle2)
                    autoHealButton.appendChild(innerCircle3)
                    ricButton.appendChild(innerCircle4)
                    unlmtButton.appendChild(innerCircle5)
                    safeModeButton.appendChild(innerCircle6)
                    rapidUpdateButton.appendChild(innerCircle7)
                    mnsButton.appendChild(innerCircle8)

                    //sliders

                    slider1 = document.createElement("input")

                    slider1.type = "range"

                    slider1.step = 5

                    slider1.min = 0
                    slider1.max = 200
                    slider1.style.position = "absolute"
                    slider1.style.bottom = "350px"
                    slider1.style.marginLeft = "50%"

                    slider2 = document.createElement("input")

                    slider2.type = "range"

                    slider2.step = 5

                    slider2.min = 0
                    slider2.max = 200
                    slider2.style.position = "absolute"
                    slider2.style.marginLeft = "50%"
                    slider2.style.bottom = "300px"

                    slider4 = document.createElement("input")

                    slider4.type = "range"

                    slider4.step = 5

                    slider4.min = 0
                    slider4.max = 200
                    slider4.style.position = "absolute"
                    slider4.style.marginLeft = "50%"
                    slider4.style.bottom = "400px"

                    slider3 = document.createElement("input")

                    slider3.type = "range"

                    slider3.step = 5

                    slider3.min = 0
                    slider3.max = 200
                    slider3.style.position = "absolute"
                    slider3.style.marginLeft = "50%"
                    slider3.style.bottom = "250px"

                    window.onload = setTimeout(() => { function setValues() {
                        try{
                            if(window.location.href == 'https://tankionline.com/play/') {
                                var a = slider1.value = 200
                                var b = slider2.value = 100
                                var c = slider3.value = 100
                                var d = slider4.value = 100
                                }

                            else {

                                var x = slider1.value = 200
                                var y = slider2.value = 50
                                var w = slider3.value = 50
                                var z = slider4.value = 50

                                }

                        } catch (e) {}
                    }

                                                      setValues()
                },5000)

                    function checker1(){
                        if(slider1.value <= 25 && window.location.href == 'https://tankionline.com/play/'){
                            let response = window.prompt("You are in main, are you sure you want to click at such low speed?\n Type Y if yes, N if no")
                            if(response == 'Y'){
                                clearInterval(chk1)
                            }
                            if(response == 'N'){
                                safeMode = true
                                slider1.value = 100
                            }

                        }
                    }


                    function checker2(){
                        if(slider2.value <= 25 && window.location.href == 'https://tankionline.com/play/'){
                            let response = window.prompt("You are in main, are you sure you want to click at such low speed?\n Type Y if yes, N if no")
                            if(response == 'Y'){
                                clearInterval(chk2)
                            }
                            if(response == 'N'){
                                safeMode = true
                                slider2.value = 100
                            }

                        }
                    }


                    function checker3(){
                        if(slider3.value <= 25 && window.location.href == 'https://tankionline.com/play/'){
                            let response = window.prompt("You are in main, are you sure you want to click at such low speed?\n Type Y if yes, N if no")
                            if(response == 'Y'){
                                clearInterval(chk3)
                            }
                            if(response == 'N'){
                                safeMode = true
                                slider3.value = 100
                            }

                        }
                    }

                    function checker4(){
                        if(slider4.value <= 25 && window.location.href == 'https://tankionline.com/play/'){
                            let response = window.prompt("You are in main, are you sure you want to click at such low speed?\n Type Y if yes, N if no")
                            if(response == 'Y'){
                                clearInterval(chk4)
                            }
                            if(response == 'N'){
                                safeMode = true
                                slider4.value = 100
                            }

                        }
                    }

                    chk1 = setInterval(checker1, 1000)
                    chk2 = setInterval(checker2, 1000)
                    chk3 = setInterval(checker3, 1000)
                    chk4 = setInterval(checker4, 1000)

                    SuppsTxt = document.createElement("span")
                    setInterval(function() {
                        try {
                            SuppsTxt.innerText = `Supplies Ms [${slider1.value}]:`
                        } catch (error) {}
                    }, 100)

                    MinesTxt = document.createElement("span")
                    setInterval(function() {
                        try {
                            MinesTxt.innerText = `Mines Ms [${slider2.value}]:`
                        } catch (error) {}
                    }, 100)

                    AutoTxt = document.createElement("span")
                    setInterval(function() {
                        try {
                            AutoTxt.innerText = `AutoHeal Ms [${slider3.value}]:`
                        } catch (error) {}
                    }, 100)

                    RepsTxt = document.createElement("span")
                    setInterval(function() {
                        try {
                            RepsTxt.innerText = `Repairs Ms [${slider4.value}]:`
                        } catch (error) {}
                    }, 100)


                    textStyle_style = {
                        fontSize: '15px',
                        position: 'absolute',
                        padding: '64.8% 0px 0px 26px',
                        fontWeight: '1000'
                    }

                    RepsTxt.style.bottom = '400px'
                    SuppsTxt.style.bottom = '350px'
                    MinesTxt.style.bottom = '300px'
                    AutoTxt.style.bottom = '250px'

                    Object.assign(SuppsTxt.style, textStyle_style)
                    Object.assign(MinesTxt.style, textStyle_style)
                    Object.assign(AutoTxt.style, textStyle_style)
                    Object.assign(RepsTxt.style, textStyle_style)

                    page1 = document.createElement("div")
                    page2 = document.createElement("div")
                    page3 = document.createElement("div")
                    page4 = document.createElement("div")
                    page5 = document.createElement("div")

                    page_style = {
                        position: 'absolute',
                        width: "6%",
                        height: "3%",
                        borderRadius: "20px",
                        backgroundColor: "grey",
                        bottom: "11%",

                    }

                    Object.assign(page1.style, page_style)
                    Object.assign(page2.style, page_style)
                    Object.assign(page3.style, page_style)
                    Object.assign(page4.style, page_style)
                    Object.assign(page5.style, page_style)

                    hackWindow.appendChild(page1)
                    hackWindow.appendChild(page2)
                    hackWindow.appendChild(page3)
                    hackWindow.appendChild(page4)
                    hackWindow.appendChild(page5)

                    page1.style.marginLeft = "40px"
                    page2.style.marginLeft = "82.5px"
                    page3.style.marginLeft = "125px"
                    page4.style.marginLeft = "167.5px"
                    page5.style.marginLeft = "210px"

                    //page1 end

                    //page2


                    //page2 end

                    //click count vars
                    s1p = 0
                    s2p = 0
                    s3p = 0
                    s4p = 0
                    s5p = 0
                    s6p = 0
                    s7p = 0
                    s8p = 0


                    //end vars

                    //js for buttons

                    safeModeButton.addEventListener('click', function() {
                        s1p += 1
                        if (s1p % 2 == 1) {
                            safeModeButton.style.backgroundColor = "white"
                            safeModeButton.children[0].style.right = "10%"
                            safeModeButton.children[0].style.backgroundColor = "#404040"

                            safeMode = true
                        }
                        if (s1p % 2 == 0) {
                            safeModeButton.style.backgroundColor = "#8080803b"
                            safeModeButton.children[0].style.right = "63%"
                            safeModeButton.children[0].style.backgroundColor = "white"
                            safeMode = false
                            window.alert('Are you sure you want to turn off Safe Mode?')

                        }
                    })

                    suppButton.addEventListener('click', (e)=>{
                        s2p++
                        if (s2p % 2 == 1) {
                            suppButton.style.backgroundColor = "white"
                            suppButton.children[0].style.right = "10%"
                            suppButton.children[0].style.backgroundColor = "#404040"
                            window.Sups = setInterval(SuppliesClick, slider1.value)
                            console.log(`[Supplies] Delay set as ${slider1.value} , Press [Numpad2] to toggle`)
                            console.log("[Supplies] Started")

                        }

                        if (s2p % 2 == 0) {

                            suppButton.style.backgroundColor = "#8080803b"
                            suppButton.children[0].style.right = "63%"
                            suppButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.Sups)
                            console.log("[Supplies] Stopped")

                        }

                    }
                                               )

                    document.addEventListener('keydown', (e)=>{
                        if (e.keyCode === 98 && commons.getChatState() == null) {
                            s2p++
                            if (s2p % 2 == 1) {
                                suppButton.style.backgroundColor = "white"
                                suppButton.children[0].style.right = "10%"
                                suppButton.children[0].style.backgroundColor = "#404040"
                                window.Sups = setInterval(SuppliesClick, slider1.value)
                                console.log(`[Supplies] Delay set as ${slider1.value} , Press [Numpad2] to toggle`)
                                console.log("[Supplies] Started")

                            }

                            if (s2p % 2 == 0) {

                                suppButton.style.backgroundColor = "#8080803b"
                                suppButton.children[0].style.right = "63%"
                                suppButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.Sups)
                                console.log("[Supplies] Stopped")

                            }

                        }
                    })

                    rpsButton.addEventListener("click", function() {
                        s4p += 1
                        if (s4p % 2 == 1) {
                            rpsButton.style.backgroundColor = "white"
                            rpsButton.children[0].style.right = "10%"
                            rpsButton.children[0].style.backgroundColor = "#404040"
                            window.Reps = setInterval(RepairsClick, slider4.value)
                            console.log(`[Repairs] Delay set as ${slider4.value} , Press [Numpad1] to toggle`)
                            console.log("[Repairs] Started")
                        }

                        if (s4p % 2 == 0) {
                            rpsButton.style.backgroundColor = "#8080803b"
                            rpsButton.children[0].style.right = "63%"
                            rpsButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.Reps)
                            console.log("[Repairs] Stopped")
                        }

                    })

                    document.addEventListener("keydown", (e)=>{
                        if (e.keyCode == 97 && commons.getChatState() == null) {
                            s4p++

                            if (s4p % 2 == 1) {
                                rpsButton.style.backgroundColor = "white"
                                rpsButton.children[0].style.right = "10%"
                                rpsButton.children[0].style.backgroundColor = "#404040"
                                window.Reps = setInterval(RepairsClick, slider4.value)
                                console.log(`[Repairs] Delay set as ${slider4.value} , Press [Numpad1] to toggle`)
                                console.log("[Repairs] Started")
                            }

                            if (s4p % 2 == 0) {
                                rpsButton.style.backgroundColor = "#8080803b"
                                rpsButton.children[0].style.right = "63%"
                                rpsButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.Reps)
                                console.log("[Repairs] Stopped")


                            }

                        }
                    }
                                             )

                    autoHealButton.addEventListener("click", (e)=>{
                        s3p++

                        if (s3p % 2 == 1) {
                            autoHealButton.style.backgroundColor = "white"
                            autoHealButton.children[0].style.right = "10%"
                            autoHealButton.children[0].style.backgroundColor = "#404040"
                            window.Auto = setInterval(AutoHeal, slider3.value)
                            console.log(`[AutoHeal] Delay set as ${slider3.value} , Press [Numpad8] to toggle`)
                            console.log("[AutoHeal] Started")
                        }

                        if (s3p % 2 == 0) {
                            autoHealButton.style.backgroundColor = "#8080803b"
                            autoHealButton.children[0].style.right = "63%"
                            autoHealButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.Auto)
                            console.log("[AutoHeal] Stopped")

                        }

                    }
                                                   )

                    document.addEventListener("keydown", (e)=>{
                        if (e.keyCode == 102 && commons.getChatState() == null) {
                            s3p++

                            if (s3p % 2 == 1) {
                                autoHealButton.style.backgroundColor = "white"
                                autoHealButton.children[0].style.right = "10%"
                                autoHealButton.children[0].style.backgroundColor = "#404040"
                                window.Auto = setInterval(AutoHeal, slider3.value)
                                console.log(`[AutoHeal] Delay set as ${slider3.value} , Press [Numpad8] to toggle`)
                                console.log("[AutoHeal] Started")
                            }

                            if (s3p % 2 == 0) {
                                autoHealButton.style.backgroundColor = "#8080803b"
                                autoHealButton.children[0].style.right = "63%"
                                autoHealButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.Auto)
                                console.log("[AutoHeal] Stopped")

                            }

                        }
                    })


                    ricButton.addEventListener("click", function() {
                        s5p += 1

                        if (s5p % 2 == 1) {
                            ricButton.style.backgroundColor = "white"
                            ricButton.children[0].style.right = "10%"
                            ricButton.children[0].style.backgroundColor = "#404040"
                            window.B = setInterval(join.joinTeamB, 1)
                            window.refB = setInterval(join.ref, 500)
                            console.log("[Click B] Clicking")


                        }

                        if (s5p % 2 == 0) {
                            ricButton.style.backgroundColor = "#8080803b"
                            ricButton.children[0].style.right = "63%"
                            ricButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.B)
                            clearInterval(window.refB)
                            console.log("[Click B] Stopped")

                        }

                    })

                    unlmtButton.addEventListener("click", function() {
                        s8p += 1

                        if (s8p % 2 == 1) {
                            unlmtButton.style.backgroundColor = "white"
                            unlmtButton.children[0].style.right = "10%"
                            unlmtButton.children[0].style.backgroundColor = "#404040"
                            window.DM = setInterval(join.joinDM, 1)
                            window.refDM = setInterval(join.ref, 500)
                            console.log("[Click DM] Clicking")


                        }

                        if (s8p % 2 == 0) {
                            unlmtButton.style.backgroundColor = "#8080803b"
                            unlmtButton.children[0].style.right = "63%"
                            unlmtButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.DM)
                            clearInterval(window.refDM)
                            console.log("[Click DM] Stopped")

                        }

                    })

                    mnsButton.addEventListener("click", function() {
                        s6p += 1

                        if (s6p % 2 == 1) {
                            mnsButton.style.backgroundColor = "white"
                            mnsButton.children[0].style.right = "10%"
                            mnsButton.children[0].style.backgroundColor = "#404040"
                            window.Min = setInterval(MinesClick, slider2.value)
                            console.log(`[Mines] Delay set as ${slider2.value} , Press [Numpad5] to toggle`)
                            console.log("[Mines] Started")
                        }

                        if (s6p % 2 == 0) {
                            mnsButton.style.backgroundColor = "#8080803b"
                            mnsButton.children[0].style.right = "63%"
                            mnsButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.Min)
                            console.log("[Mines] Stopped")
                        }

                    })

                    document.addEventListener("keydown", (e)=>{
                        if (e.keyCode == 101 && commons.getChatState() == null) {
                            s6p += 1

                            if (s6p % 2 == 1) {
                                mnsButton.style.backgroundColor = "white"
                                mnsButton.children[0].style.right = "10%"
                                mnsButton.children[0].style.backgroundColor = "#404040"
                                window.Min = setInterval(MinesClick, slider2.value)
                                console.log(`[Mines] Delay set as ${slider2.value} , Press [Numpad5] to toggle`)
                                console.log("[Mines] Started")
                            }

                            if (s6p % 2 == 0) {
                                mnsButton.style.backgroundColor = "#8080803b"
                                mnsButton.children[0].style.right = "63%"
                                mnsButton.children[0].style.backgroundColor = "white"
                                clearInterval(window.Min)
                                console.log("[Mines] Stopped")

                            }

                        }
                    })


                    rapidUpdateButton.addEventListener('click', (e)=>{
                        s7p++
                        if (s7p % 2 == 1) {
                            rapidUpdateButton.style.backgroundColor = "white"
                            rapidUpdateButton.children[0].style.right = "10%"
                            rapidUpdateButton.children[0].style.backgroundColor = "#404040"
                            window.A = setInterval(join.joinTeamA, 1)
                            window.refA = setInterval(join.ref, 500)
                            console.log("[Click A] Clicking")

                        }

                        if (s7p % 2 == 0) {
                            rapidUpdateButton.style.backgroundColor = "#8080803b"
                            rapidUpdateButton.children[0].style.right = "63%"
                            rapidUpdateButton.children[0].style.backgroundColor = "white"
                            clearInterval(window.A)
                            clearInterval(window.refA)
                            console.log("[Click A] Stopped")

                        }

                    })


                    root.removeChild(hackWindow)


                    whiteIcon = document.createElement("div")

                    whiteIcon.style.width = "100%"
                    whiteIcon.style.height = "100%"
                    whiteIcon.style.background = "white"
                    whiteIcon.style.borderRadius = "20px"

                    page1.appendChild(whiteIcon)

                    page1.addEventListener("click", page1func)
                    page2.addEventListener("click", page2func)
                    page3.addEventListener("click", page3func)
                    page4.addEventListener("click", page4func)
                    page5.addEventListener("click", page5func)

                    function page1func() {
                        hackWindow.innerHTML = ""
                        hackWindow.appendChild(title)
                        hackWindow.appendChild(creds)
                        hackWindow.appendChild(suppButton)
                        hackWindow.appendChild(autoHealButton)
                        hackWindow.appendChild(ricButton)
                        hackWindow.appendChild(unlmtButton)
                        hackWindow.appendChild(rapidUpdateButton)
                        hackWindow.appendChild(mnsButton)
                        hackWindow.appendChild(safeModeButton)
                        hackWindow.appendChild(rpsButton)

                        suppButton.appendChild(innerCircle1)
                        rpsButton.appendChild(innerCircle2)
                        autoHealButton.appendChild(innerCircle3)
                        ricButton.appendChild(innerCircle4)
                        unlmtButton.appendChild(innerCircle5)
                        safeModeButton.appendChild(innerCircle6)
                        rapidUpdateButton.appendChild(innerCircle7)
                        mnsButton.appendChild(innerCircle8)

                        hackWindow.appendChild(Supp)
                        hackWindow.appendChild(Autoheal)
                        hackWindow.appendChild(Ric)
                        hackWindow.appendChild(Mns)
                        hackWindow.appendChild(safeM)
                        hackWindow.appendChild(rapidUpdate)
                        hackWindow.appendChild(Unlimit)
                        hackWindow.appendChild(Rps)

                        page1.appendChild(whiteIcon)

                        hackWindow.appendChild(page1)
                        hackWindow.appendChild(page2)
                        hackWindow.appendChild(page3)
                        hackWindow.appendChild(page4)
                        hackWindow.appendChild(page5)

                    }

                    function page2func() {
                        hackWindow.innerHTML = ""
                        hackWindow.appendChild(title)
                        hackWindow.appendChild(creds)

                        hackWindow.appendChild(slider1)
                        hackWindow.appendChild(slider2)
                        hackWindow.appendChild(slider3)
                        hackWindow.appendChild(slider4)

                        hackWindow.appendChild(SuppsTxt)
                        hackWindow.appendChild(RepsTxt)
                        hackWindow.appendChild(AutoTxt)
                        hackWindow.appendChild(MinesTxt)

                        page2.appendChild(whiteIcon)

                        hackWindow.appendChild(page1)
                        hackWindow.appendChild(page2)
                        hackWindow.appendChild(page3)
                        hackWindow.appendChild(page4)
                        hackWindow.appendChild(page5)

                    }


                    function page5func() {

                        hackWindow.innerHTML = ""
                        hackWindow.appendChild(title)
                        hackWindow.appendChild(creds)

                        page5.appendChild(whiteIcon)

                        hackWindow.appendChild(page1)
                        hackWindow.appendChild(page2)
                        hackWindow.appendChild(page3)
                        hackWindow.appendChild(page4)
                        hackWindow.appendChild(page5)

                    }



                    function page3func() {
                        hackWindow.innerHTML = ""
                        hackWindow.appendChild(title)
                        hackWindow.appendChild(creds)

                        page3.appendChild(whiteIcon)

                        hackWindow.appendChild(page1)
                        hackWindow.appendChild(page2)
                        hackWindow.appendChild(page3)
                        hackWindow.appendChild(page4)
                        hackWindow.appendChild(page5)

                    }

                    function page4func() {
                        hackWindow.innerHTML = ""
                        hackWindow.appendChild(title)
                        hackWindow.appendChild(creds)
                        page4.appendChild(whiteIcon)

                        hackWindow.appendChild(page1)
                        hackWindow.appendChild(page2)
                        hackWindow.appendChild(page3)
                        hackWindow.appendChild(page4)
                        hackWindow.appendChild(page5)

                    }


                    sliderStyle = `
.slider {
    user-select: none;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    font-family: Open-Sans;
    font-size: 1em;
    -webkit-appearance: none;
    border-radius: 10px;
    height: 17px;
    outline: 1px solid white;
    background:rgb(12 12 12 / 28%);
    width: 80px;
    left: 15%;
}
.slider::-webkit-slider-thumb{
cursor:pointer;
appearance:none;
height:17px;
width:17px;
outline:none;
border-radius:50%;
position:revert;
background: black;
border:1px solid white;
}
`

                    addStyle = function(styleString) {
                        var style = document.createElement('style')

                        style.innerHTML = styleString

                        document.head.appendChild(style)

                        return style

                    }
                    addStyle(sliderStyle)
                    slider1.className = 'slider'
                    slider2.className = 'slider'
                    slider3.className = 'slider'
                    slider4.className = 'slider'


                    function checkFps() {
                        for(let i = 0;i<document.querySelectorAll("#root > div > div > div.BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(1) > span.BattleHudFpsComponentStyle-value").length;i++){
                            if(document.querySelectorAll("#root > div > div > div.BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(1) > span.BattleHudFpsComponentStyle-value")[i].innerText < 20 && slider2.value < 75 && slider3.value < 75 && slider4.value < 75) {
                                clearInterval(window.Min)
                                clearInterval(window.Reps)
                                clearInterval(window.Auto)
                                clearInterval(window.Sups)

                                var a = slider1.value = 200
                                var b = slider2.value = 75
                                var c = slider3.value = 75
                                var d = slider4.value = 75

                                if(s6p == 1 && document.querySelectorAll("#root > div > div > div.BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(1) > span.BattleHudFpsComponentStyle-value")[i].innerText < 20){ window.Reps = setInterval(RepairsClick, slider4.value) } if(s6p == 0) { clearInterval(window.Reps) }
                                if(s2p == 1 && document.querySelectorAll("#root > div > div > div.BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(1) > span.BattleHudFpsComponentStyle-value")[i].innerText < 20){ window.Sups = setInterval(SuppliesClick, slider1.value) } if(s2p == 0) { clearInterval(window.Sups) }
                                if(s3p == 1 && document.querySelectorAll("#root > div > div > div.BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(1) > span.BattleHudFpsComponentStyle-value")[i].innerText < 20){ window.Auto = setInterval(AutoHeal, slider3.value) } if(s3p == 0) { clearInterval(window.Auto) }
                                if(s4p == 1 && document.querySelectorAll("#root > div > div > div.BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(1) > span.BattleHudFpsComponentStyle-value")[i].innerText < 20){ window.Min = setInterval(MinesClick, slider2.value) } if(s4p == 0) { clearInterval(window.Min) }
                            }
                        }
                    }

                    _z = setInterval(checkFps, 1000)

                    if (window.location.href == 'https://tankionline.com/play/') {
                        console.log('You are in Tanki Online real servers. Safe Mode enabled')
                        safeModeButton.style.backgroundColor = "white"
                        safeModeButton.children[0].style.right = "10%"
                        safeModeButton.children[0].style.backgroundColor = "#404040"
                        safeMode = true
                    } else {
                        safeModeButton.style.backgroundColor = "#8080803b"
                        safeModeButton.children[0].style.right = "63%"
                        safeModeButton.children[0].style.backgroundColor = "white"
                        safeMode = false;
                    }

                    XpressCount = 0
                    document.addEventListener('keydown', (e) => {
                        if (e.keyCode === 96 || e.keyCode == 45 && commons.getChatState() == null || e.keyCode == 35 && commons.getChatState() == null){
                            XpressCount ++
                            if(XpressCount%2==1){

                                root.appendChild(hackWindow)

                            }

                            if(XpressCount%2==0){

                                root.removeChild(hackWindow)

                            }


                        }})
