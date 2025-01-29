// Debugging: Ensure questions.js loads properly
console.log("✅ questions.js loaded successfully!");

// Creating an array of questions with multiple-choice answers
let questions = [
    {
        numb: 1,
        question: "Which components in your computer store data? (Choose three.)",
        answer: ["RAM", "SSD", "BD-ROM"],  // Multi-answer question
        options: [
            "RAM",
            "SSD",
            "PCI",
            "PSU",
            "BD-ROM"
        ]
    },
    {
        numb: 2,
        question: "What type of expansion card allows your computer to talk to other computers without wires?",
        answer: "NIC",  // Single-answer question
        options: [
            "Modem",
            "NIC",
            "PSU",
            "PCIe"
        ]
    },
    {
        numb: 3,
        question: "Which type of expansion slot provides the fastest data transfer speeds?",
        answer: "PCIe x16",
        options: [
            "PCI",
            "PCIe x1",
            "PCIe x16",
            "PCIe x64"
        ]
    },
    {
        numb: 4,
        question: "Which of the following optical discs will store the most data?",
        answer: "BD-ROM",
        options: [
            "CD-ROM",
            "DVD-ROM DL",
            "DVD-ROM DS",
            "BD-ROM"
        ]
    },
    {
        numb: 5,
        question: "Data needs to be stored on a computer, and access speed is the most important factor. What is the best option?",
        answer: "RAM",
        options: [
            "Database",
            "RAM",
            "SSD",
            "HDD"
        ]
    },
    {
        numb: 6,
        question: "Your friend Joe wants to add another hard drive to his computer. What should he check to ensure his system supports it?",
        answer: "PSU",
        options: [
            "PSU",
            "Expansion slots",
            "CPU",
            "RAM"
        ]
    },
    {
        numb: 7,
        question: "If a user wants to play live-action video games, which component should they upgrade first?",
        answer: "GPU",
        options: [
            "CPU",
            "GPU",
            "PSU",
            "NVMe"
        ]
    },
    {
        numb: 8,
        question: "You want to upgrade your computer to improve boot time and file storage. What should you purchase?",
        answer: "SSD",
        options: [
            "RAM",
            "HDD",
            "SSD",
            "CPU"
        ]
    },
    {
        numb: 9,
        question: "If your computer runs low on RAM, what will it use instead?",
        answer: "Virtual memory",
        options: [
            "Cache",
            "SSD",
            "Optical drive",
            "Virtual memory"
        ]
    },
    {
        numb: 10,
        question: "Order the storage unit sizes from largest to smallest.",
        answer: "TB, GB, MB, KB",
        options: [
            "MB, KB, GB, TB",
            "KB, MB, GB, PB",
            "TB, GB, MB, KB",
            "PB, GB, TB, MB"
        ]
    },
    {
        numb: 11,
        question: "When you turn on your computer, it tells you that it does not have the time and date set and asks you to enter setup. What likely needs to be replaced?",
        answer: "CMOS battery",
        options: [
            "CMOS battery",
            "BIOS chip",
            "CPU",
            "Time controller"
        ]
    },
    {
        numb: 12,
        question: "A user named Monika wants to upgrade the memory in her laptop. What type of memory will she need?",
        answer: "SODIMM",
        options: [
            "DIMM",
            "SODIMM",
            "DDR5",
            "DDR4"
        ]
    },
    {
        numb: 13,
        question: "Which device is connected to the motherboard with a 24-pin block connector?",
        answer: "PSU",
        options: [
            "HDD",
            "SSD",
            "RAM",
            "PSU"
        ]
    },
    {
        numb: 14,
        question: "Which of the following are connectors for internal storage devices? (Choose two.)",
        answer: ["SATA", "M.2"],
        options: [
            "SATA",
            "HHD",
            "SSD",
            "M.2",
            "NVMe"
        ]
    },
    {
        numb: 15,
        question: "Which of the following processor types is most likely to be found in a smartphone?",
        answer: "ARM",
        options: [
            "32-bit",
            "GPU",
            "Intel",
            "ARM"
        ]
    },
    {
        numb: 16,
        question: "You just installed more memory in your computer, but it’s not recognized. Your friend suggests that you upgrade your BIOS. What’s the best way to do this?",
        answer: "Flash the BIOS",
        options: [
            "Order a new BIOS chip from the motherboard manufacturer",
            "Order a new BIOS chip from the memory manufacturer",
            "Flash the BIOS",
            "You can’t upgrade a BIOS"
        ]
    },
    {
        numb: 17,
        question: "Which component inside a computer produces the most heat?",
        answer: "CPU",
        options: [
            "PSU",
            "CPU",
            "GPU",
            "RAM"
        ]
    },
    {
        numb: 18,
        question: "Which of the following are non-volatile data storage options for user data? (Choose two.)",
        answer: ["SSD", "HDD"],
        options: [
            "SSD",
            "HDD",
            "RAM",
            "ROM"
        ]
    },
    {
        numb: 19,
        question: "Your boss wants you to justify your suggestion to purchase solid-state hard drives. What are advantages of solid-state drives (Choose three.)",
        answer: ["Faster than HDDs", "Generate less heat than HDDs", "Quieter than HDDs"],
        options: [
            "Faster than HDDs",
            "Generate less heat than HDDs",
            "Quieter than HDDs",
            "Cheaper than HDDs"
        ]
    },
    {
        numb: 20,
        question: "Which of the following are communications devices for computers? (Choose two.)",
        answer: ["NIC", "Modem"],
        options: [
            "NIC",
            "Modem",
            "PCIe",
            "Sound card"
        ]
    }
];
