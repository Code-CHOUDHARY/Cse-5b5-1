console.log("Hello world this is join class");
      function getClassNo() {
        let time = new Date();
        let hr = time.getHours();
        let min = time.getMinutes();
        let timeFrom12 = (hr*60)+min;

        if (timeFrom12>=990) {
          return 8;
        }
        if (timeFrom12>=930) {
          return 5;
        }
        if (timeFrom12>=870) {
          return 4;
        }
        if (timeFrom12>=855) {
          return 9;
        }
        if (timeFrom12>=795) {
          return 3;
        }
        if (timeFrom12>=735) {
          return 2;
        }
        if (timeFrom12>=690) {
          return 9; //break time
        }
        if (timeFrom12>=630) {
          return 1;
        }
        if (timeFrom12>=570) {
          return 0;
        }
        return 8;
      }
      function getDay() {
        let day = new Date();
        return day.getDay() - 1;
      }
      let teacherLink = {
PR: "https://meet.google.com/zwb-mzzv-pec" ,
YP: "https://meet.google.com/zdo-fygc-hzq" ,
SBP:"https://meet.google.com/xrt-uohs-two" ,
VGB:  "https://meet.google.com/kjh-mjps-app" ,
SR: "https://meet.google.com/ppe-wwhr-txa" ,
ASS: "https://meet.google.com/bxy-bgnc-opk" ,
ART: "https://meet.google.com/eat-aaha-xxc" , 
PP: "https://meet.google.com/gyt-jqai-qmr" ,
PD: "https://meet.google.com/zus-cmmn-fwo" ,
SV: "https://meet.google.com/ihn-zbfw-irw" , 
LIB: "",
WT: "", 
 };
      let lectur = [
//  Monday
        { 
          0: [teacherLink.LIB, "LIB", ""],
          1: [teacherLink.LIB, "LIB", ""],
          2: [teacherLink.YP, "SE", "Yoothika Patel"],
          3: [teacherLink.YP, "SE", "Yoothika Patel"],
          4: [teacherLink.SBP, "FLAT", "Shyambabu Pandey"],
          5: [teacherLink.ART, "DPP", "ALKA TOMAR"],
        },
        // Tuesday
        {
          0: [teacherLink.WT, "WT", ""],
          1: [teacherLink.SBP, "FLAT", "Shyambabu Pandey"],
          2: [teacherLink.SR, "OOPJ(Lecture)", "S.Raghupathi"],
          3: [teacherLink.PR, "DAA", "Pushpak Raval"],
          4: [teacherLink.PR, "DAA", "Pushpak Raval"],
          5: [teacherLink.PR, "DAA", "Pushpak Raval"],
        },
        // Wednesday
        {
          0: [teacherLink.PD, "PSPE", "PRIYANKA DESAI"],
          1: [teacherLink.PR, "DAA", "Pushpak Raval"],
          2: [teacherLink.VGB, "IOE(LAB)","Vimal Bhatt" ],
          3: [teacherLink.VGB, "IOE(LAB)","Vimal Bhatt" ],
          4: [teacherLink.SR, "OOPJ", "S.Raghupati"],
          5: [teacherLink.YP, "SE", "Yoothika Patel"],
        },
        // Thursday
        {
          0: [teacherLink.YP, "SE", "Yoothika Patel" ],
          1: [teacherLink.PR, "DAA", "Pushpak Raval" ],
          2: [teacherLink.SV, "PSPE", "SHIVANEE"],
          3: [teacherLink.SV, "PSPE", "SHIVANEE"],
          4: [teacherLink.LIB, "LIB", ""],
          5: [teacherLink.LIB, "LIB", ""],
        },
        // Friday
        {
          0: [teacherLink.SR, "OOPJ", "S.Raghupathi"],
          1: [teacherLink.SR, "OOPJ", "S.Raghupathi"],
          2: [teacherLink.LIB, "LIB", ""],
          3: [teacherLink.YP, "SE", "Yoothika Patel"],
          4: [teacherLink.VGB, "IOE(LAB)","Vimal Bhatt"],
          5: [teacherLink.VGB, "IOE(LAB)","Vimal Bhatt"],
        },
        // Satuarday
        {
          0: [teacherLink.SBP, "FLAT", "Shyambabu Pandey"],
          1: [teacherLink.ART, "DPP", "ALKA TOMAR"],
          2: [teacherLink.SR, "OOPJ", "S.Raghupathi"],
          3: [teacherLink.LIB, "LIB",""],
          4: [teacherLink.SR, "OOPJ", "S.Raghupathi"],
          5: [teacherLink.SR, "OOPJ", "S.Raghupathi"],
        },
      ];



      function updateTable() {
          let lectureNo = getClassNo();
          let day = getDay();

          const lecName = document.getElementById("lecName");
          const teacherName = document.getElementById("teacherName");
          const next = document.getElementById("next");
          const off = document.getElementById("off");
          const data = document.getElementById("data");
          if (lectureNo!=9 && lectureNo!=8 && day>=0&& lectur[day][lectureNo][1] != "LIB" && lectur[day][lectureNo][1] != "WT" ) 
          {
              lecName.innerText = lectur[day][lectureNo][1];
              teacherName.innerText = lectur[day][lectureNo][2];
              if (lectureNo+1<=5) {
                  
                  next.innerText = lectur[day][lectureNo+1][1];
              }else{
                next.innerText = "No Class";
              }
            }else{
            joinBtn.style.display = "none";
            table.style.display = "none";
            off.style.display = "block";
            if (day < 0) {
                data.innerText = "Chill! It's Sunday."
                return;
            }
            if (lectureNo == 9) {
                data.innerText = "Have a kitkat break";
                return;
            }
            if (lectureNo == 8) {
                data.innerText = "NO CLASS...Yay"
                return;
            }
            if (lectur[day][lectureNo][1] == "LIB") {
                data.innerText = "Its Library next class will be of " + lectur[day][lectureNo+1][1];
                return;
            } else {
                data.innerText = "You have a test now. \nThe next class will be of " + lectur[day][lectureNo+1][1];
                return;
            }
        }

    }
    
    function getLink() {
        let lectureNo = getClassNo();
        let day = getDay();
        location.replace(lectur[day][lectureNo][0]);
    }
    const joinBtn = document.getElementById("joinBtn");
    const table = document.getElementById("table");
    joinBtn.addEventListener("click", getLink);
    onload = updateTable();
