var jsonData ={
    "2021":{
        "President": ["Summer Xia"],
        "Depts":{
            "Secretary":{
                "Leaders":["Ziyue Geng"],
                "Members":["Hang Sun"]
            },
           "DoF":{
               "Leaders":["Belinda Pu"],
               "Members":["Jo Tang","Sharon Wu","Wendy Wang"]
            },
            "HR":{
                "Leaders":["Annan Chen","Estella Liu"],
                "Members":["Alvin Meng","Ariel Cao","Baihao Xue","Dairong Wu","Jane Yao","Jiaxuan Li","Siyao Wu","Renee Fang","Vincent Zhang"]
            },
            "IT":{
                "Leaders":["Melo Guan"],
                "Members":["Alex Liang","Jack Ma","Kirsty Gong","Tony Cui","Zhiqing Guo"]
            },
            "BD":{
               "Leaders":["Doris Qin","Ansen Liu"],
                "Members":["Amy Ma","Denis Xu","Eric Zhou","Ian Zhuang","Lyn Qiu","May Lin","Oscar Qian","Sebria Gao","Seraph Zhou"]
            },
            "OP":{
                "Leaders":["Josephine Wang","Ferry Feng"],
                "Members":["Boya Zhang","Christina Li","Derek Deng","Elvin Chung","Flora Jiang","Jessy Chen","Kris Guan","Linda Ban","Rachel Zhang","Rong Kuang","Selina Li","Vera Yao","Wendy Zheng","Yibo Feng"]
            },
            "MK":{
                "Leaders":["Brandi Ruan","Chloe Ji"],
                "Members":["Amy Liu","Anby Zhou","Andy Liu","Angel Wang","Chao Zheng","Chelsea Wang","Cissy Xiang","Coco Du","Francesca Gu","Henry Yu","Jennifer Lu","Kai Chen","Katherine Wang","Nancy Zhong","Nina Peng","Sinry Yu","Yingying Zhong"]
            }

        }
    },
    "2022":{
        "President":["Estella Liu", "Ferry Feng"],
        "Depts":{
            "Secretary":{
                "Leaders":["Ariel Cao"]
            },
            "DoF":{
               "Leaders":["Belinda Pu"],
               "Members":["Jo Tang","Laura Li","Rachel Zhang","Wendy Wang"]
           },
            "HR":{
                "Leaders":["Dairong Wu","Katherine Wu"],
                "Members":["Christina Li","Fiona Qin","Hazel Chen","Irene Jin","Judy Jiang","Kedi Cheng","Kevin Pan","Peter Wang","Renee Fang","Vincent Zhang"]
            },
            "IT":{
                "Leaders":["Kirsty Gong","Alex Liang"],
                "Members":["Chloe Wang","Hongchen Lin","Irena Jia","Nancy Zhong","Tommer Hu","Tony Cui","Tony Shu","William Xiao"]
            },
            "BD":{
               "Leaders":["Ansen Liu","Denis Xu","Ian Zhuang"],
                "Members":["Amy Ma","Christina Liu","Eric Zhou","Faye Liu","Joyce Wang","Kathrin Song","Matthew Chen","May Lin","Seraph Zhou","Wennie Li","William Yan","Yibo Feng"]
            },
            "OP":{
                "Leaders":["Alvin Meng","Chao Zheng"],
                "Members":["Boya Zhang","Burlington Shi","Christina Li","Derek Deng","Elaine Zhang","Flora Jiang","Ivy Lv","Jack Xia","Jessy Chen","Leo Liang","Linda Ban","Lyn Qiu","Makino Wan","Nick Xue","Paul Fan","Skyla Liu","Tank Tan","Wendy Zheng"]
            },
            "MK":{
                "Leaders":["Cissy Xiang","Sinry Yu"],
                "Members":["Alex Liu","Alice Wang","Amber Ge","Amy Liu","Amy Wang","Andy Liu","Ann Zhong","Chloe Yin","Claire Feng","Dawn Mao","Grace Tong","Jerry Chen","Jerry Lin","Jessica Gong","Lan Yang","Luna Luo","Michelle Zhou","Nina Peng","Rachel Zhang","Rika Xiong","Tom Chen","Vivian Chen","Winnie Chen","Yujie Weng"]
            }

        }
    }
    
};


    
    //console.log(jsonData);
    window.generateMemberList=function(array){
        var result = "";
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            result = result + element+"<br>" ;
        }
        return result
    }
    var currentYear = 2022; //The latest year 
    var startYear= 2021;    //The earlist year on record.
    window.loadPage=function(){
        for (let loopYear = startYear;loopYear <= currentYear;loopYear++){
            //console.log("loopyear"+loopYear)
            loadCommittees(loopYear);
        }
    }
    function loadCommittees(year) {
        //President Team
        var presidentTeam = jsonData[year].President;

        var presidentTeamContainer = document.getElementById("PresidentTeam"+year);        
        presidentTeamContainer.innerHTML = generateMemberList(presidentTeam)

        //Secretary Team
        var secDirector = jsonData[year].Depts.Secretary.Leaders;
        if(secDirector != undefined){
            var secDirContainer = document.getElementById("dirSec"+year);
            secDirContainer.innerHTML = generateMemberList(secDirector);
        }
        
        var secMember = jsonData[year].Depts.Secretary.Members;
        if(secMember!= undefined){
            var secMemberContainer = document.getElementById("MemSec"+year);
            secMemberContainer.innerHTML=generateMemberList(secMember);
        }
        
        //DoF Team
        var DoFDirector = jsonData[year].Depts.DoF.Leaders;
        if(DoFDirector!=undefined){
            var DoFDirectorContainer = document.getElementById("dirDoF"+year);
            DoFDirectorContainer.innerHTML=generateMemberList(DoFDirector);    
        }
        
        var DoFMember = jsonData[year].Depts.DoF.Members;
        if(DoFMember!=undefined){
            var DoFMemberContainer = document.getElementById("MemDoF"+year);
            DoFMemberContainer.innerHTML=generateMemberList(DoFMember);
        }
        
        //HR Team
        var HRDirector = jsonData[year].Depts.HR.Leaders;
        if(HRDirector!=undefined){
            var HRDirectorContainer = document.getElementById("dirHR"+year);
            HRDirectorContainer.innerHTML=generateMemberList(HRDirector);    
        }
        
        var HRMember = jsonData[year].Depts.HR.Members;
        if(HRMember!=undefined){
            var HRMemberContainer = document.getElementById("MemHR"+year);
            HRMemberContainer.innerHTML=generateMemberList(HRMember);    
        }
       
        //IT Team
        var ITDirector = jsonData[year].Depts.IT.Leaders;
        if(ITDirector!=undefined){
            var ITDirectorContainer = document.getElementById("dirIT"+year);
            ITDirectorContainer.innerHTML=generateMemberList(ITDirector);
        }
       
        var ITMember = jsonData[year].Depts.IT.Members;
        if(ITMember!=undefined){
            var ITMemberContainer = document.getElementById("MemIT"+year);
            ITMemberContainer.innerHTML=generateMemberList(ITMember);    
        }
        
        //BD Team
        var BDDirector = jsonData[year].Depts.BD.Leaders;
        if(BDDirector!=undefined){
            var BDDirectorContainer = document.getElementById("dirBD"+year);
            BDDirectorContainer.innerHTML=generateMemberList(BDDirector);
        }
        
        var BDMember = jsonData[year].Depts.BD.Members;
        if(BDMember!=undefined){
            var BDMemberContainer = document.getElementById("MemBD"+year);
            BDMemberContainer.innerHTML=generateMemberList(BDMember);    
        }
        //OP Team 
        var OPDirector = jsonData[year].Depts.OP.Leaders;
        if(OPDirector!=undefined){
            var OPDirectorContainer = document.getElementById("dirOP"+year);
            OPDirectorContainer.innerHTML=generateMemberList(OPDirector);    
        }
        
        var OPMember = jsonData[year].Depts.OP.Members;
        if(OPMember!=undefined){
            var OPMemberContainer = document.getElementById("MemOP"+year);
            OPMemberContainer.innerHTML=generateMemberList(OPMember);    
        }
        
        //MK Team
        var MKDirector = jsonData[year].Depts.MK.Leaders;
        if(MKDirector!=undefined){
            var MKDirectorContainer = document.getElementById("dirMK"+year);
            MKDirectorContainer.innerHTML=generateMemberList(MKDirector);    
        }
       
        var MKMember = jsonData[year].Depts.MK.Members;
        if(MKMember!=undefined){
            var MKMemberContainer = document.getElementById("MemMK"+year);
            MKMemberContainer.innerHTML=generateMemberList(MKMember);    
        }
        
    }