document.addEventListener("DOMContentLoaded", function() {
    // Dummy data to simulate dynamic content
    const opdQueueStatus = "Current Queue: 5 Patients Waiting";
    const bedStatus = "Available Beds: 10 ICU, 20 General Ward, 5 Pediatrics";
    const cityBedStatus = "City-Wide Availability: 15 Beds Available";

    document.getElementById("queue-status").textContent = opdQueueStatus;
    document.getElementById("bed-status").textContent = bedStatus;
    document.getElementById("city-bed-status").textContent = cityBedStatus;

    // Form submission handlers
    document.getElementById("appointment-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Appointment Booked!");
    });

    document.getElementById("admission-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Admission Request Submitted!");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        this.reset();  // Reset form after submission
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("patient-form");
    const patientInfo = document.getElementById("patient-info");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;

        // Simple validation
        if (name.trim() === "" || phone.trim() === "" || dob.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Display patient info
        document.getElementById("display-name").textContent = name;
        document.getElementById("display-phone").textContent = phone;
        document.getElementById("display-dob").textContent = dob;

        // Simulated patient data
        const checkups = [
            "General Checkup - 2024-01-15",
            "Blood Test - 2024-03-10",
            "X-ray - 2024-06-05"
        ];

        const receipts = [
            "Receipt #12345 - $200",
            "Receipt #67890 - $150"
        ];

        // Display checkups
        const checkupsList = document.getElementById("checkups-list");
        checkupsList.innerHTML = ""; // Clear previous data
        checkups.forEach(checkup => {
            const li = document.createElement("li");
            li.textContent = checkup;
            checkupsList.appendChild(li);
        });

        // Display receipts
        const receiptsList = document.getElementById("receipts-list");
        receiptsList.innerHTML = ""; // Clear previous data
        receipts.forEach(receipt => {
            const li = document.createElement("li");
            li.textContent = receipt;
            receiptsList.appendChild(li);
        });

        // Show the patient info section
        patientInfo.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hospitals = {
        1: {
            name: "City Hospital",
            opdStatus: "10 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics"]
        },
        2: {
            name: "Metro Medical Center",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "8 beds", icu: "3 beds", pediatric: "1 bed" },
            specializations: ["Internal Medicine", "Surgery", "Ophthalmology", "ENT", "Obstetrics"]
        },
        3: {
            name: "General Hospital",
            opdStatus: "15 patients in queue",
            bedAvailability: { general: "2 beds", icu: "0 beds", pediatric: "5 beds" },
            specializations: ["Cardiology", "Endocrinology", "Gastroenterology", "Oncology", "Radiology"]
        },
        4: {
            name: "Sunrise Health Care",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Dermatology", "Neurology", "Psychiatry", "Physical Medicine", "Urology"]
        },
        5: {
            name: "Central Clinic",
            opdStatus: "20 patients in queue",
            bedAvailability: { general: "6 beds", icu: "2 beds", pediatric: "0 beds" },
            specializations: ["Orthopedics", "Anesthesiology", "Hematology", "Nephrology", "Pulmonology"]
        },
        6: {
            name: "Northside Hospital",
            opdStatus: "8 patients in queue",
            bedAvailability: { general: "7 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Oncology"]
        },
        7: {
            name: "Westfield Medical",
            opdStatus: "3 patients in queue",
            bedAvailability: { general: "10 beds", icu: "4 beds", pediatric: "5 beds" },
            specializations: ["Internal Medicine", "Surgery", "Neurology", "Orthopedics", "Pediatrics"]
        },
        8: {
            name: "Eastview Hospital",
            opdStatus: "6 patients in queue",
            bedAvailability: { general: "5 beds", icu: "3 beds", pediatric: "3 beds" },
            specializations: ["Cardiology", "Nephrology", "Radiology", "Ophthalmology", "Psychiatry"]
        },
        9: {
            name: "Starlight Clinic",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Dermatology", "Gastroenterology", "Endocrinology", "Pulmonology", "ENT"]
        },
        10: {
            name: "Riverbend Medical Center",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "3 beds", icu: "1 bed", pediatric: "4 beds" },
            specializations: ["Orthopedics", "Cardiology", "Neurology", "Oncology", "Hematology"]
        },
        11: {
            name: "Green Valley Hospital",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Cardiology", "Urology", "Radiology", "Neurology"]
        },
        12: {
            name: "Pioneer Health Care",
            opdStatus: "7 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "2 beds" },
            specializations: ["Internal Medicine", "Ophthalmology", "ENT", "Dermatology", "Psychiatry"]
        },
        13: {
            name: "Hopewell Hospital",
            opdStatus: "13 patients in queue",
            bedAvailability: { general: "4 beds", icu: "3 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Nephrology", "Pulmonology", "Oncology"]
        },
        14: {
            name: "Unity Medical Center",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "6 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Neurology", "Orthopedics", "Surgery", "Cardiology", "Dermatology"]
        },
        15: {
            name: "Harborview Hospital",
            opdStatus: "14 patients in queue",
            bedAvailability: { general: "3 beds", icu: "1 bed", pediatric: "0 beds" },
            specializations: ["Psychiatry", "Radiology", "Gastroenterology", "Ophthalmology", "Urology"]
        },
        16: {
            name: "New Hope Clinic",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Cardiology", "Neurology", "Oncology", "Orthopedics", "ENT"]
        },
        17: {
            name: "Cedar Hill Medical",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "7 beds", icu: "3 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Urology", "Pulmonology", "Nephrology"]
        },
        18: {
            name: "Maplewood Hospital",
            opdStatus: "6 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "5 beds" },
            specializations: ["Endocrinology", "Orthopedics", "Cardiology", "Radiology", "Hematology"]
        },
        19: {
            name: "Bright Horizons Hospital",
            opdStatus: "10 patients in queue",
            bedAvailability: { general: "5 beds", icu: "3 beds", pediatric: "2 beds" },
            specializations: ["Neurology", "Ophthalmology", "Surgery", "Dermatology", "Psychiatry"]
        },
        20: {
            name: "Evergreen Health Center",
            opdStatus: "7 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "3 beds" },
            specializations: ["Cardiology", "Oncology", "Nephrology", "Pulmonology", "ENT"]
        },
        21: {
            name: "Golden Valley Hospital",
            opdStatus: "8 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Neurology", "Gastroenterology", "Radiology", "Orthopedics", "Cardiology"]
        },
        22: {
            name: "Lakeside Medical Center",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "7 beds", icu: "3 beds", pediatric: "2 beds" },
            specializations: ["Dermatology", "Surgery", "Endocrinology", "Nephrology", "Oncology"]
        },
        23: {
            name: "Valley View Hospital",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "6 beds", icu: "1 bed", pediatric: "3 beds" },
            specializations: ["Internal Medicine", "Neurology", "Orthopedics", "Cardiology", "Urology"]
        },
        24: {
            name: "Springfield Clinic",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Oncology", "Gastroenterology", "ENT"]
        },
        25: {
            name: "North Ridge Medical",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "3 beds", icu: "2 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Pulmonology", "Orthopedics", "Neurology"]
        },
        26: {
            name: "Mountain View Hospital",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        },
        27: {
            name: "Desert Sands Medical",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Oncology", "Gastroenterology", "ENT"]
        },
        28: {
            name: "Blue Sky Hospital",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "3 beds", icu: "2 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Pulmonology", "Orthopedics", "Neurology"]
        },
        29: {
            name: "Sunset Valley Clinic",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        },
        30: {
            name: "Coastal Medical Center",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        }
    };

    const hospitalList = document.getElementById("hospital-list");
    const hospitalDetails = document.getElementById("hospital-details");
    const hospitalName = document.getElementById("hospital-name");
    const referrals = document.getElementById("referrals");
    const bedAvailability = document.getElementById("bed-availability");
    const opdQueue = document.getElementById("opd-queue");

    hospitalList.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "LI") {
            const hospitalId = e.target.getAttribute("data-hospital");
            const hospitalData = hospitals[hospitalId];

            hospitalName.textContent = hospitalData.name;
            referrals.textContent = hospitalData.referrals;
            bedAvailability.textContent = hospitalData.bedAvailability;
            opdQueue.textContent = hospitalData.opdQueue;

            hospitalDetails.classList.remove("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hospitals = [
        { id: 1, name: "City Hospital", opdQueue: "20 patients, 5 waiting", beds: { general: "10", icu: "3", pediatrics: "5" }, specializations: ["Cardiology", "Dermatology", "Neurology", "Oncology", "Pediatrics"] },
        { id: 2, name: "Metro Medical Center", opdQueue: "15 patients, 3 waiting", beds: { general: "5", icu: "1", pediatrics: "2" }, specializations: ["Orthopedics", "Gastroenterology", "Endocrinology", "Urology", "Pulmonology"] },
        // Add more hospitals here
    ];

    const searchInput = document.getElementById("hospital-search");
    const hospitalList = document.getElementById("hospital-list");
    const hospitalDetails = document.getElementById("hospital-details");
    const hospitalName = document.getElementById("hospital-name");
    const opdQueue = document.getElementById("opd-queue");
    const generalWard = document.getElementById("general-ward");
    const icu = document.getElementById("icu");
    const pediatrics = document.getElementById("pediatrics");
    const specializations = document.getElementById("specializations");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        hospitalList.innerHTML = "";

        if (query) {
            const filteredHospitals = hospitals.filter(hospital => hospital.name.toLowerCase().includes(query));
            
            filteredHospitals.forEach(hospital => {
                const li = document.createElement("li");
                li.textContent = hospital.name;
                li.setAttribute("data-id", hospital.id);
                hospitalList.appendChild(li);
            });

            hospitalList.classList.remove("hidden");
        } else {
            hospitalList.classList.add("hidden");
        }
    });

    hospitalList.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "LI") {
            const hospitalId = e.target.getAttribute("data-id");
            const selectedHospital = hospitals.find(hospital => hospital.id === parseInt(hospitalId));

            if (selectedHospital) {
                hospitalName.textContent = selectedHospital.name;
                opdQueue.textContent = selectedHospital.opdQueue;
                generalWard.textContent = selectedHospital.beds.general;
                icu.textContent = selectedHospital.beds.icu;
                pediatrics.textContent = selectedHospital.beds.pediatrics;
                specializations.textContent = selectedHospital.specializations.join(", ");

                hospitalDetails.classList.remove("hidden");
                hospitalList.classList.add("hidden");
            }
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowDown") {
            const active = document.querySelector("#hospital-list li.active");
            if (active) {
                const next = active.nextElementSibling;
                if (next) {
                    active.classList.remove("active");
                    next.classList.add("active");
                    searchInput.value = next.textContent;
                }
            } else {
                const first = document.querySelector("#hospital-list li");
                if (first) {
                    first.classList.add("active");
                    searchInput.value = first.textContent;
                }
            }
        } else if (e.key === "ArrowUp") {
            const active = document.querySelector("#hospital-list li.active");
            if (active) {
                const prev = active.previousElementSibling;
                if (prev) {
                    active.classList.remove("active");
                    prev.classList.add("active");
                    searchInput.value = prev.textContent;
                }
            }
        } else if (e.key === "Enter") {
            const active = document.querySelector("#hospital-list li.active");
            if (active) {
                active.click();
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hospitals = {
        1: {
            name: "City Hospital",
            opdStatus: "10 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics"]
        },
        2: {
            name: "Metro Medical Center",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "8 beds", icu: "3 beds", pediatric: "1 bed" },
            specializations: ["Internal Medicine", "Surgery", "Ophthalmology", "ENT", "Obstetrics"]
        },
        3: {
            name: "General Hospital",
            opdStatus: "15 patients in queue",
            bedAvailability: { general: "2 beds", icu: "0 beds", pediatric: "5 beds" },
            specializations: ["Cardiology", "Endocrinology", "Gastroenterology", "Oncology", "Radiology"]
        },
        4: {
            name: "Sunrise Health Care",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Dermatology", "Neurology", "Psychiatry", "Physical Medicine", "Urology"]
        },
        5: {
            name: "Central Clinic",
            opdStatus: "20 patients in queue",
            bedAvailability: { general: "6 beds", icu: "2 beds", pediatric: "0 beds" },
            specializations: ["Orthopedics", "Anesthesiology", "Hematology", "Nephrology", "Pulmonology"]
        },
        6: {
            name: "Northside Hospital",
            opdStatus: "8 patients in queue",
            bedAvailability: { general: "7 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Oncology"]
        },
        7: {
            name: "Westfield Medical",
            opdStatus: "3 patients in queue",
            bedAvailability: { general: "10 beds", icu: "4 beds", pediatric: "5 beds" },
            specializations: ["Internal Medicine", "Surgery", "Neurology", "Orthopedics", "Pediatrics"]
        },
        8: {
            name: "Eastview Hospital",
            opdStatus: "6 patients in queue",
            bedAvailability: { general: "5 beds", icu: "3 beds", pediatric: "3 beds" },
            specializations: ["Cardiology", "Nephrology", "Radiology", "Ophthalmology", "Psychiatry"]
        },
        9: {
            name: "Starlight Clinic",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Dermatology", "Gastroenterology", "Endocrinology", "Pulmonology", "ENT"]
        },
        10: {
            name: "Riverbend Medical Center",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "3 beds", icu: "1 bed", pediatric: "4 beds" },
            specializations: ["Orthopedics", "Cardiology", "Neurology", "Oncology", "Hematology"]
        },
        11: {
            name: "Green Valley Hospital",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Cardiology", "Urology", "Radiology", "Neurology"]
        },
        12: {
            name: "Pioneer Health Care",
            opdStatus: "7 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "2 beds" },
            specializations: ["Internal Medicine", "Ophthalmology", "ENT", "Dermatology", "Psychiatry"]
        },
        13: {
            name: "Hopewell Hospital",
            opdStatus: "13 patients in queue",
            bedAvailability: { general: "4 beds", icu: "3 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Nephrology", "Pulmonology", "Oncology"]
        },
        14: {
            name: "Unity Medical Center",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "6 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Neurology", "Orthopedics", "Surgery", "Cardiology", "Dermatology"]
        },
        15: {
            name: "Harborview Hospital",
            opdStatus: "14 patients in queue",
            bedAvailability: { general: "3 beds", icu: "1 bed", pediatric: "0 beds" },
            specializations: ["Psychiatry", "Radiology", "Gastroenterology", "Ophthalmology", "Urology"]
        },
        16: {
            name: "New Hope Clinic",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Cardiology", "Neurology", "Oncology", "Orthopedics", "ENT"]
        },
        17: {
            name: "Cedar Hill Medical",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "7 beds", icu: "3 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Urology", "Pulmonology", "Nephrology"]
        },
        18: {
            name: "Maplewood Hospital",
            opdStatus: "6 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "5 beds" },
            specializations: ["Endocrinology", "Orthopedics", "Cardiology", "Radiology", "Hematology"]
        },
        19: {
            name: "Bright Horizons Hospital",
            opdStatus: "10 patients in queue",
            bedAvailability: { general: "5 beds", icu: "3 beds", pediatric: "2 beds" },
            specializations: ["Neurology", "Ophthalmology", "Surgery", "Dermatology", "Psychiatry"]
        },
        20: {
            name: "Evergreen Health Center",
            opdStatus: "7 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "3 beds" },
            specializations: ["Cardiology", "Oncology", "Nephrology", "Pulmonology", "ENT"]
        },
        21: {
            name: "Golden Valley Hospital",
            opdStatus: "8 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Neurology", "Gastroenterology", "Radiology", "Orthopedics", "Cardiology"]
        },
        22: {
            name: "Lakeside Medical Center",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "7 beds", icu: "3 beds", pediatric: "2 beds" },
            specializations: ["Dermatology", "Surgery", "Endocrinology", "Nephrology", "Oncology"]
        },
        23: {
            name: "Valley View Hospital",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "6 beds", icu: "1 bed", pediatric: "3 beds" },
            specializations: ["Internal Medicine", "Neurology", "Orthopedics", "Cardiology", "Urology"]
        },
        24: {
            name: "Springfield Clinic",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Oncology", "Gastroenterology", "ENT"]
        },
        25: {
            name: "North Ridge Medical",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "3 beds", icu: "2 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Pulmonology", "Orthopedics", "Neurology"]
        },
        26: {
            name: "Mountain View Hospital",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        },
        27: {
            name: "Desert Sands Medical",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Oncology", "Gastroenterology", "ENT"]
        },
        28: {
            name: "Blue Sky Hospital",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "3 beds", icu: "2 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Pulmonology", "Orthopedics", "Neurology"]
        },
        29: {
            name: "Sunset Valley Clinic",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        },
        30: {
            name: "Coastal Medical Center",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        }
    };

    const hospitalList = document.getElementById("hospital-list");
    const hospitalDetails = document.getElementById("hospital-details");
    const hospitalName = document.getElementById("hospital-name");
    const opdStatus = document.getElementById("opd-status");
    const generalBed = document.getElementById("general-bed");
    const icuBed = document.getElementById("icu-bed");
    const pediatricBed = document.getElementById("pediatric-bed");
    const specializations = document.getElementById("specializations");

    hospitalList.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "LI") {
            const hospitalId = e.target.getAttribute("data-hospital");
            const hospitalData = hospitals[hospitalId];

            hospitalName.textContent = hospitalData.name;
            opdStatus.textContent = hospitalData.opdStatus;
            generalBed.textContent = hospitalData.bedAvailability.general;
            icuBed.textContent = hospitalData.bedAvailability.icu;
            pediatricBed.textContent = hospitalData.bedAvailability.pediatric;
            specializations.textContent = hospitalData.specializations.join(", ");

            hospitalDetails.classList.remove("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hospitals = {
        1: {
            name: "City Hospital",
            opdStatus: "10 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics"]
        },
        2: {
            name: "Metro Medical Center",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "8 beds", icu: "3 beds", pediatric: "1 bed" },
            specializations: ["Internal Medicine", "Surgery", "Ophthalmology", "ENT", "Obstetrics"]
        },
        3: {
            name: "General Hospital",
            opdStatus: "15 patients in queue",
            bedAvailability: { general: "2 beds", icu: "0 beds", pediatric: "5 beds" },
            specializations: ["Cardiology", "Endocrinology", "Gastroenterology", "Oncology", "Radiology"]
        },
        4: {
            name: "Sunrise Health Care",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Dermatology", "Neurology", "Psychiatry", "Physical Medicine", "Urology"]
        },
        5: {
            name: "Central Clinic",
            opdStatus: "20 patients in queue",
            bedAvailability: { general: "6 beds", icu: "2 beds", pediatric: "0 beds" },
            specializations: ["Orthopedics", "Anesthesiology", "Hematology", "Nephrology", "Pulmonology"]
        },
        6: {
            name: "Northside Hospital",
            opdStatus: "8 patients in queue",
            bedAvailability: { general: "7 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Oncology"]
        },
        7: {
            name: "Westfield Medical",
            opdStatus: "3 patients in queue",
            bedAvailability: { general: "10 beds", icu: "4 beds", pediatric: "5 beds" },
            specializations: ["Internal Medicine", "Surgery", "Neurology", "Orthopedics", "Pediatrics"]
        },
        8: {
            name: "Eastview Hospital",
            opdStatus: "6 patients in queue",
            bedAvailability: { general: "5 beds", icu: "3 beds", pediatric: "3 beds" },
            specializations: ["Cardiology", "Nephrology", "Radiology", "Ophthalmology", "Psychiatry"]
        },
        9: {
            name: "Starlight Clinic",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Dermatology", "Gastroenterology", "Endocrinology", "Pulmonology", "ENT"]
        },
        10: {
            name: "Riverbend Medical Center",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "3 beds", icu: "1 bed", pediatric: "4 beds" },
            specializations: ["Orthopedics", "Cardiology", "Neurology", "Oncology", "Hematology"]
        },
        11: {
            name: "Green Valley Hospital",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Cardiology", "Urology", "Radiology", "Neurology"]
        },
        12: {
            name: "Pioneer Health Care",
            opdStatus: "7 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "2 beds" },
            specializations: ["Internal Medicine", "Ophthalmology", "ENT", "Dermatology", "Psychiatry"]
        },
        13: {
            name: "Hopewell Hospital",
            opdStatus: "13 patients in queue",
            bedAvailability: { general: "4 beds", icu: "3 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Nephrology", "Pulmonology", "Oncology"]
        },
        14: {
            name: "Unity Medical Center",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "6 beds", icu: "2 beds", pediatric: "3 beds" },
            specializations: ["Neurology", "Orthopedics", "Surgery", "Cardiology", "Dermatology"]
        },
        15: {
            name: "Harborview Hospital",
            opdStatus: "14 patients in queue",
            bedAvailability: { general: "3 beds", icu: "1 bed", pediatric: "0 beds" },
            specializations: ["Psychiatry", "Radiology", "Gastroenterology", "Ophthalmology", "Urology"]
        },
        16: {
            name: "New Hope Clinic",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "2 beds" },
            specializations: ["Cardiology", "Neurology", "Oncology", "Orthopedics", "ENT"]
        },
        17: {
            name: "Cedar Hill Medical",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "7 beds", icu: "3 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Urology", "Pulmonology", "Nephrology"]
        },
        18: {
            name: "Maplewood Hospital",
            opdStatus: "6 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "5 beds" },
            specializations: ["Endocrinology", "Orthopedics", "Cardiology", "Radiology", "Hematology"]
        },
        19: {
            name: "Bright Horizons Hospital",
            opdStatus: "10 patients in queue",
            bedAvailability: { general: "5 beds", icu: "3 beds", pediatric: "2 beds" },
            specializations: ["Neurology", "Ophthalmology", "Surgery", "Dermatology", "Psychiatry"]
        },
        20: {
            name: "Evergreen Health Center",
            opdStatus: "7 patients in queue",
            bedAvailability: { general: "4 beds", icu: "1 bed", pediatric: "3 beds" },
            specializations: ["Cardiology", "Oncology", "Nephrology", "Pulmonology", "ENT"]
        },
        21: {
            name: "Golden Valley Hospital",
            opdStatus: "8 patients in queue",
            bedAvailability: { general: "5 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Neurology", "Gastroenterology", "Radiology", "Orthopedics", "Cardiology"]
        },
        22: {
            name: "Lakeside Medical Center",
            opdStatus: "12 patients in queue",
            bedAvailability: { general: "7 beds", icu: "3 beds", pediatric: "2 beds" },
            specializations: ["Dermatology", "Surgery", "Endocrinology", "Nephrology", "Oncology"]
        },
        23: {
            name: "Valley View Hospital",
            opdStatus: "5 patients in queue",
            bedAvailability: { general: "6 beds", icu: "1 bed", pediatric: "3 beds" },
            specializations: ["Internal Medicine", "Neurology", "Orthopedics", "Cardiology", "Urology"]
        },
        24: {
            name: "Springfield Clinic",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Oncology", "Gastroenterology", "ENT"]
        },
        25: {
            name: "North Ridge Medical",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "3 beds", icu: "2 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Pulmonology", "Orthopedics", "Neurology"]
        },
        26: {
            name: "Mountain View Hospital",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        },
        27: {
            name: "Desert Sands Medical",
            opdStatus: "9 patients in queue",
            bedAvailability: { general: "8 beds", icu: "2 beds", pediatric: "4 beds" },
            specializations: ["Surgery", "Dermatology", "Oncology", "Gastroenterology", "ENT"]
        },
        28: {
            name: "Blue Sky Hospital",
            opdStatus: "11 patients in queue",
            bedAvailability: { general: "3 beds", icu: "2 beds", pediatric: "1 bed" },
            specializations: ["Cardiology", "Endocrinology", "Pulmonology", "Orthopedics", "Neurology"]
        },
        29: {
            name: "Sunset Valley Clinic",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        },
        30: {
            name: "Coastal Medical Center",
            opdStatus: "4 patients in queue",
            bedAvailability: { general: "9 beds", icu: "4 beds", pediatric: "3 beds" },
            specializations: ["Surgery", "Gastroenterology", "Ophthalmology", "Dermatology", "Radiology"]
        }
    };

    const hospitalList = document.getElementById("hospital-list");
    const hospitalDetails = document.getElementById("hospital-details");
    const hospitalName = document.getElementById("hospital-name");
    const opdStatus = document.getElementById("opd-status");
    const generalBed = document.getElementById("general-bed");
    const icuBed = document.getElementById("icu-bed");
    const pediatricBed = document.getElementById("pediatric-bed");
    const specializations = document.getElementById("specializations");

    // Populate hospital list
    for (const id in hospitals) {
        const li = document.createElement("li");
        li.textContent = hospitals[id].name;
        li.dataset.hospital = id;
        li.addEventListener("click", function() {
            showHospitalDetails(id);
        });
        hospitalList.appendChild(li);
    }

    // Show details of the selected hospital
    function showHospitalDetails(id) {
        const hospital = hospitals[id];
        hospitalName.textContent = hospital.name;
        opdStatus.textContent = hospital.opdStatus;
        generalBed.textContent = hospital.bedAvailability.general;
        icuBed.textContent = hospital.bedAvailability.icu;
        pediatricBed.textContent = hospital.bedAvailability.pediatric;
        specializations.textContent = hospital.specializations.join(", ");
        hospitalDetails.classList.remove("hidden");
    }

    // Search functionality
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keyup", function() {
        const filter = searchBar.value.toLowerCase();
        const lis = hospitalList.getElementsByTagName("li");

        for (let i = 0; i < lis.length; i++) {
            const hospitalName = lis[i].textContent.toLowerCase();
            if (hospitalName.indexOf(filter) > -1) {
                lis[i].style.display = "";
            } else {
                lis[i].style.display = "none";
            }
        }
    });

    // Quick Appointment Button
    document.getElementById("quick-appointment").addEventListener("click", function() {
        alert("Quick Appointment button clicked!");
    });

    // Emergency Appointment Button
    document.getElementById("emergency-appointment").addEventListener("click", function() {
        alert("Emergency Appointment button clicked!");
    });

    // Quick Appointment Button in Banner
    document.getElementById("quick-appointment-banner").addEventListener("click", function() {
        alert("Quick Appointment button in banner clicked!");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalName = urlParams.get('hospital');
    document.getElementById('hospital-name').textContent = hospitalName;

    // Load stored data
    document.getElementById('opd-status').textContent = localStorage.getItem(`${hospitalName}_opd`) || 0;
    document.getElementById('general-ward').value = localStorage.getItem(`${hospitalName}_generalWard`) || 0;
    document.getElementById('icu').value = localStorage.getItem(`${hospitalName}_icu`) || 0;
    document.getElementById('pediatrics').value = localStorage.getItem(`${hospitalName}_pediatrics`) || 0;
    
    const specializations = JSON.parse(localStorage.getItem(`${hospitalName}_specializations`) || "[]");
    specializations.forEach(spec => addSpecializationToList(spec));
});

function updateOPD() {
    const hospitalName = document.getElementById('hospital-name').textContent;
    const opdQueue = document.getElementById('opd-input').value;
    localStorage.setItem(`${hospitalName}_opd`, opdQueue);
    document.getElementById('opd-status').textContent = opdQueue;
}

function updateBeds() {
    const hospitalName = document.getElementById('hospital-name').textContent;
    const generalWard = document.getElementById('general-ward').value;
    const icu = document.getElementById('icu').value;
    const pediatrics = document.getElementById('pediatrics').value;

    localStorage.setItem(`${hospitalName}_generalWard`, generalWard);
    localStorage.setItem(`${hospitalName}_icu`, icu);
    localStorage.setItem(`${hospitalName}_pediatrics`, pediatrics);
}

function addSpecialization() {
    const hospitalName = document.getElementById('hospital-name').textContent;
    const specialization = document.getElementById('specialization').value;
    let specializations = JSON.parse(localStorage.getItem(`${hospitalName}_specializations`) || "[]");
    specializations.push(specialization);
    localStorage.setItem(`${hospitalName}_specializations`, JSON.stringify(specializations));

    addSpecializationToList(specialization);
    document.getElementById('specialization').value = '';
}

function addSpecializationToList(specialization) {
    const list = document.getElementById('specialization-list');
    const listItem = document.createElement('li');
    listItem.textContent = specialization;
    list.appendChild(listItem);
}
document.getElementById("admission-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    fetch("https://script.google.com/macros/s/AKfycbzIUMybh3ZlKvN-0oq_M84zV0o2waqyaX2Yo6QnGYKx8vW5xFc6IyBauTWd-P3t-OpB/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formObject).toString()
    }).then(response => {
        alert("Data submitted successfully!");
    }).catch(error => {
        alert("There was an error submitting your data.");
        console.error("Error:", error);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("admission-form").addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent form from submitting the traditional way

        const formData = new FormData(this);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        fetch("https://script.google.com/macros/s/AKfycbz9AmieTuekLPFPhkIs2fztiZggke2bde3z_V9ngEPSzWIb18GoGuhWq9R9XLS0sSo0/exec", {  // Replace with your Web App URL
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formObject)
        }).then(response => {
            alert("Data submitted successfully!");
            document.getElementById("admission-form").reset(); // Clear the form after submission
        }).catch(error => {
            alert("There was an error submitting your data.");
            console.error("Error:", error);
        });
    });
});
