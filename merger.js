var fs = require("fs");
var doc1 = JSON.parse(fs.readFileSync("./erfan_result.json"));
var doc2 = JSON.parse(fs.readFileSync("./faqeh_result.json"));
var doc3 = JSON.parse(fs.readFileSync("./webteb_result.json"));
var alldoc = doc1.concat(doc2);
for (var index = 0; index < alldoc.length; index++) {
    if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "General Surgery") {
        alldoc[index].speciality = "جراحة العامة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Pain Service") {
        alldoc[index].speciality = "خدمة الألم المتزامن";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Physical Medicine & Rehabilitation") {
        alldoc[index].speciality = "الطب الفيزيائي وإعادة التأهيل";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Urology") {
        alldoc[index].speciality = "مسالك بولية";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Andrology") {
        alldoc[index].speciality = "طب أمراض الذكورة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Audiology") {
        alldoc[index].speciality = "السمعيات";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Breastfeeding Clinic") {
        alldoc[index].speciality = "عيادة الرضاعة الطبيعية";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Cardio Surgery") {
        alldoc[index].speciality = "جراحة القلب";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Cardiology") {
        alldoc[index].speciality = "طب القلب";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Chest Surgery") {
        alldoc[index].speciality = "جراحة الصدر";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Chest and Respiratory Diseases") {
        alldoc[index].speciality = "أمراض الصدر والجهاز التنفسي";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Chiropractic Medicine") {
        alldoc[index].speciality = "تقويم العمود الفقري";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Dental and Maxillofacial") {
        alldoc[index].speciality = "اسنان";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Dermatology") {
        alldoc[index].speciality = "جلدية";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Dietary") {
        alldoc[index].speciality = "تغذية";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "E.N.T.") {
        alldoc[index].speciality = "أذن وأنف وحنجرة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Endocrinology") {
        alldoc[index].speciality = "طبيب الغدد الصماء";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Family Medicine") {
        alldoc[index].speciality = "طبيب اسرة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Gastroenterology") {
        alldoc[index].speciality = "طبيب الجهاز الهضمي";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "General Surgery") {
        alldoc[index].speciality = "جراح عام";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Hematology") {
        alldoc[index].speciality = "تحاليل الدم";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Hyperbaric Oxygen Service") {
        alldoc[index].speciality = "معالجة بالأكسجين عالي الضغط";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Infectious Diseases") {
        alldoc[index].speciality = "طبيب امراض معدية";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Internal Medicine") {
        alldoc[index].speciality = "طب باطني";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Interventional Radiology") {
        alldoc[index].speciality = "طبيب اشعة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Nephrology") {
        alldoc[index].speciality = "طبيب كلى";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Neurology") {
        alldoc[index].speciality = "طبيب اعصاب";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Neurosurgery") {
        alldoc[index].speciality = "جراح اعصاب";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Obstetrics & Gynecology") {
        alldoc[index].speciality = "طبيب نساء وولادة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Oncology") {
        alldoc[index].speciality = "طبيب اورام";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Ophthalmology") {
        alldoc[index].speciality = "طبيب عيون";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Orthopedics") {
        alldoc[index].speciality = "طبيب عظام";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Pediatric") {
        alldoc[index].speciality = "طبيب اطفال";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Pediatric Surgery") {
        alldoc[index].speciality = "جراح اطفال";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Plastic Surgery") {
        alldoc[index].speciality = "جراحة تجميلية";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Psychiatry") {
        alldoc[index].speciality = "طبيب نفسي";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Rheumatology") {
        alldoc[index].speciality = "روماتيزم";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Speech Theraphy") {
        alldoc[index].speciality = "طبيب أمراض النطق واللغة";
    } else if (alldoc[index].speciality.split(",")[alldoc[index].speciality.split(",").length - 1] == "Vascular Surgery") {
        alldoc[index].speciality = "جراحة الأوعية الدموية";
    }
}

console.log("writing " + alldoc.length + " results")
fs.writeFileSync("./merged_result.json", JSON.stringify(alldoc), 'utf8');