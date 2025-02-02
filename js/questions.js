// Debugging: Ensure questions.js loads properly
console.log("✅ questions.js loaded successfully!");

// Creating an array of questions with multiple-choice answers
let questions = [
    {
        numb: 1,
        question: "Which components in your computer store data? (Choose three.)",
        answer: ["RAM", "SSD", "BD-ROM"],
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
        answer: "NIC",
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
        question: "Data needs to be stored on a computer and access speed is the most important thing. The data does not need to be persistent. What is the best option for storing this data?",
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
        question: "Your friend Joe wants to add another hard drive to his computer. What should he check to make sure that his system will support it?",
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
        question: "If a user wants to play live-action video games, which component will they want to upgrade first in their computer?",
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
        question: "You want to upgrade your computer to give it a faster boot time and more space for your files. What should you purchase?",
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
        answer: "Flash the BIOS.",
        options: [
            "Order a new BIOS chip from the motherboard manufacturer.",
            "Order a new BIOS chip from the memory manufacturer.",
            "Flash the BIOS.",
            "You can’t upgrade a BIOS."
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
        question: "Which of the following are nonvolatile data storage options for user data? (Choose two.)",
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
        question: "Your boss wants you to justify your suggestion to purchase solid-state hard drives. What are advantages of solid-state drives? (Choose three.)",
        answer: ["Faster than HDDs", "Generate less heat than HDDs", "Quieter than HDDs"],
        options: [
            "Faster than HDDs",
            "Generate less heat than HDDs",
            "Quieter than HDDs",
            "Cheaper than HDDs" // This is incorrect, so it's not in the answer array
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
    },
    {
        numb: 21,
        question: "Which of the following ports was developed by Apple and is found on MacBooks?",
        answer: "Thunderbolt",
        options: [
            "eSATA",
            "USB",
            "Thunderbolt",
            "Mac Video"
        ]
    },
    {
        numb: 22,
        question: "If you want to plug in a keyboard, which types of connectors might you use? (Choose two.)",
        answer: ["USB", "PS/2"],
        options: [
            "Parallel",
            "Serial",
            "USB",
            "PS/2"
        ]
    },
    {
        numb: 23,
        question: "What is the name of the connector that you are likely to find at the end of a twisted-pair network cable?",
        answer: "RJ45",
        options: [
            "RJ11",
            "RJ45",
            "HDMI",
            "TPI"
        ]
    },
    {
        numb: 24,
        question: "You want to use the video connector with the best resolution. Which one should you pick?",
        answer: "HDMI",
        options: [
            "HDMI",
            "HEMI",
            "DVI",
            "VGA"
        ]
    },
    {
        numb: 25,
        question: "Which of the following connectors provides support for dual 4k displays?",
        answer: "Thunderbolt",
        options: [
            "DVI",
            "USB",
            "RJ45",
            "Thunderbolt"
        ]
    },
    {
        numb: 26,
        question: "Which type of printer uses a powdery substance to create images on paper?",
        answer: "Laser",
        options: [
            "Powder",
            "Thermal",
            "Inkjet",
            "Laser"
        ]
    },
    {
        numb: 27,
        question: "Rebecca points at a flat square below her keyboard on her laptop and asks what that is. What is it?",
        answer: "Touchpad",
        options: [
            "Trackpad",
            "Touchpad",
            "Touchstick",
            "Webcam"
        ]
    },
    {
        numb: 28,
        question: "Which of the following are wireless networking technologies? (Choose two.)",
        answer: ["NFC", "Bluetooth"],
        options: [
            "NFC",
            "DVI",
            "RJ45",
            "Bluetooth"
        ]
    },
    {
        numb: 29,
        question: "If you are installing a peripheral device and plug-and-play works as expected, which of the following is true?",
        answer: "The peripheral should function normally.",
        options: [
            "You will need to install the device driver to make the peripheral work.",
            "The peripheral should function normally.",
            "You will need to complete web-based configuration steps for the peripheral to work.",
            "You will need to configure IP-based options for the peripheral to work."
        ]
    },
    {
        numb: 30,
        question: "You want to install a device in your office that allows for extra storage and has built-in fault tolerance. Which device do you need?",
        answer: "NAS",
        options: [
            "NAS",
            "RAS",
            "SAS",
            "External hard drive"
        ]
    },
    {
        numb: 31,
        question: "One of your friends asks you if you have any SuperSpeed devices. What type of device is she talking about?",
        answer: "USB",
        options: [
            "SSD",
            "OLED",
            "USB",
            "eSATA"
        ]
    },
    {
        numb: 32,
        question: "You have a color inkjet printer. What type of ink cartridge does it most likely use?",
        answer: "CMYK",
        options: [
            "CMYB",
            "CMYK",
            "RGB",
            "ROYGBIV"
        ]
    },
    {
        numb: 33,
        question: "In your office, you need to set up your computer for a video teleconference with another office. What peripheral do you need to make this work?",
        answer: "Webcam",
        options: [
            "Scanner",
            "CRT",
            "Projector",
            "Webcam"
        ]
    },
    {
        numb: 34,
        question: "Which of the following devices can provide power to a computer in the event of a power outage?",
        answer: "UPS",
        options: [
            "UPS",
            "PSU",
            "USB",
            "RF"
        ]
    },
    {
        numb: 35,
        question: "Which of the following connectors does not provide digital video output?",
        answer: "VGA",
        options: [
            "HDMI",
            "DVI",
            "VGA",
            "Thunderbolt"
        ]
    },
    {
        numb: 36,
        question: "List the units of throughput from fastest to slowest.",
        answer: "Tbps, Gbps, Mbps, Kbps",
        options: [
            "Tbps, Gbps, Mbps, Kbps",
            "Tbps, Mbps, Gbps, Kbps",
            "Kbps, Mbps, Gbps, Tbps",
            "Kbps, Gbps, Mbps, Tbps"
        ]
    },
    {
        numb: 37,
        question: "You are asked to create a working twisted-pair cable from a bulk roll and some extra connectors. Which device would you use?",
        answer: "Crimper",
        options: [
            "Cable tester",
            "Crimper",
            "Splicer",
            "Multimeter"
        ]
    },
    {
        numb: 38,
        question: "Which of the following statements is true about DVI connectors?",
        answer: "They are digital and analog.",
        options: [
            "They are digital only.",
            "They are analog only.",
            "They are digital and analog.",
            "They support hybrid video technology."
        ]
    },
    {
        numb: 39,
        question: "You just installed a printer and want to share it on the network. Where do you perform this task in Windows?",
        answer: "Printer properties",
        options: [
            "Printing preferences",
            "Printer properties",
            "Print queue",
            "IP printing configuration"
        ]
    },
    {
        numb: 40,
        question: "Robert complains that the cursor on his laptop screen often jumps around unexpectedly when he’s typing. What can he do to solve the problem?",
        answer: "Disable the touchpad.",
        options: [
            "Reinstall the mouse driver.",
            "Reinstall the video driver.",
            "Reboot the computer.",
            "Disable the touchpad."
        ]
    }, {
        numb: 41,
        question: "Using an Android phone, you want to scroll down. What do you do to accomplish this?",
        answer: "Swipe up",
        options: [
            "Swipe up",
            "Swipe down",
            "Pinch fingers together",
            "Start with pinched fingers and separate them"
        ]
    },
    {
        numb: 42,
        question: "For which of the following tasks are gaming consoles not used? (Choose two.)",
        answer: ["Editing Word documents", "Creating a spreadsheet"],
        options: [
            "Playing video games",
            "Editing Word documents",
            "Watching a DVD",
            "Creating a spreadsheet"
        ]
    },
    {
        numb: 43,
        question: "Which motion while using an iPhone allows you to zoom in on a map?",
        answer: "Reverse pinch",
        options: [
            "Tap",
            "Double tap",
            "Pinch",
            "Reverse pinch"
        ]
    },
    {
        numb: 44,
        question: "You want a device to hold files for several users to access on a network. What type of device do you need?",
        answer: "Server",
        options: [
            "File console",
            "Tablet",
            "Server",
            "Workstation"
        ]
    },
    {
        numb: 45,
        question: "Rachel is using her iPad to view pictures. She turns the iPad 90 degrees and the image turns as well. Which sensor allowed this to happen?",
        answer: "Gyroscope",
        options: [
            "Accelerometer",
            "Magnetometer",
            "Turnometer",
            "Gyroscope"
        ]
    },
    {
        numb: 46,
        question: "Which type of IoT device is used to control the temperature in a home?",
        answer: "Thermostat",
        options: [
            "Thermostat",
            "Security system",
            "Home appliance",
            "Command center"
        ]
    },
    {
        numb: 47,
        question: "Francis is trying to change the settings on his iPhone. He opens the Settings app. In order to see them better, he turns his phone 90 degrees but nothing happens. What is the most likely cause?",
        answer: "The Settings app does not support rotation.",
        options: [
            "The gyroscope is broken.",
            "The Settings app does not support rotation.",
            "He needs to enable app rotation in Settings first.",
            "He needs to turn off the device and turn it back on to reset the rotation feature."
        ]
    },
    {
        numb: 48,
        question: "What is the term used that refers to connecting two Bluetooth devices together for communications?",
        answer: "Pairing",
        options: [
            "Synching",
            "Netting",
            "Pairing",
            "Partnering"
        ]
    },
    {
        numb: 49,
        question: "Agi has an iPhone with a biometric scanner enabled. What methods can she use to unlock her phone?",
        answer: "Fingerprint or passcode",
        options: [
            "Fingerprint only",
            "Passcode only",
            "Fingerprint or passcode",
            "Fingerprint, passcode, or iris scan"
        ]
    },
    {
        numb: 50,
        question: "Which of the following is a required hardware device to use augmented reality?",
        answer: "Display",
        options: [
            "AR headset",
            "Earbuds/headphones",
            "Smartphone",
            "Display"
        ]
    },
    {
        numb: 51,
        question: "Your friend recently got a new Android phone and comes over to your house. What app does your friend use to set up a Wi-Fi connection with your wireless router?",
        answer: "Settings",
        options: [
            "Wi-Fi",
            "Settings",
            "Networking",
            "Connections"
        ]
    },
    {
        numb: 52,
        question: "Which one of the following devices is likely to have the least amount of storage space?",
        answer: "Smartphone",
        options: [
            "Smartphone",
            "Laptop",
            "Workstation",
            "Server"
        ]
    },
    {
        numb: 53,
        question: "You are setting up a new Wi-Fi connection on your Android phone. What step do you take after turning on Wi-Fi?",
        answer: "Locate SSID.",
        options: [
            "Verify wireless capabilities.",
            "Enter the wireless password.",
            "Verify the Internet connection.",
            "Locate SSID."
        ]
    },
    {
        numb: 54,
        question: "You want to enable backups of your new iPhone. Which two options do you have? (Choose two.)",
        answer: ["iCloud", "iTunes"],
        options: [
            "iDrive",
            "iCloud",
            "iTunes",
            "iBackup"
        ]
    },
    {
        numb: 55,
        question: "A pacemaker is an example of what type of IoT device?",
        answer: "Medical device",
        options: [
            "Medical device",
            "Home appliance",
            "Security system",
            "IP camera"
        ]
    },
    {
        numb: 56,
        question: "Which of the following accurately describes what Airplane mode does on an iPhone?",
        answer: "Turns off the cellular connection",
        options: [
            "Turns off the Wi-Fi connection",
            "Turns off the Bluetooth connection",
            "Turns off the cellular connection",
            "Turns off all wireless connections"
        ]
    },
    {
        numb: 57,
        question: "Which IoT device is typically paired with security systems?",
        answer: "IP camera",
        options: [
            "Home appliance",
            "IP camera",
            "Vehicle",
            "Thermostat"
        ]
    },
    {
        numb: 58,
        question: "You need to find a new productivity app for your Android-based tablet. Where should you look?",
        answer: "Google Play",
        options: [
            "iTunes",
            "Google Drive",
            "Google Apps",
            "Google Play"
        ]
    },
    {
        numb: 59,
        question: "An Xbox Series X is an example of which type of device?",
        answer: "Gaming console",
        options: [
            "Laptop",
            "Tablet",
            "Gaming console",
            "Server"
        ]
    },
    {
        numb: 60,
        question: "Rebecca wants to get a copy of the newest game she heard about for her iPad. Where should she go to find and download it?",
        answer: "iTunes",
        options: [
            "iTunes",
            "iApps",
            "iPlay",
            "Google Play"
        ]
    },
    {
        numb: 61,
        question: "Which of the following is not a function of an operating system?",
        answer: "Coordinate software applications",
        options: [
            "Interface between the user and the machine",
            "Coordinate software applications",
            "Coordinate hardware components",
            "Monitor system health"
        ]
    },
    {
        numb: 62,
        question: "Which of the following desktop operating systems can you freely modify if you choose?",
        answer: "Linux",
        options: [
            "macOS",
            "iOS",
            "Android",
            "Linux"
        ]
    },
    {
        numb: 63,
        question: "Peter, a friend of yours, has a piece of software that was written for macOS. Which of the following OSs will that software run on?",
        answer: "macOS only",
        options: [
            "macOS only",
            "macOS and Linux",
            "macOS and ChromeOS",
            "macOS, Linux, and ChromeOS"
        ]
    },
    {
        numb: 64,
        question: "Your friend Michael just purchased a Chromebook and wants to know where his files are stored. What do you tell him?",
        answer: "In the cloud.",
        options: [
            "On the hard drive.",
            "In the system RAM.",
            "In the cloud.",
            "Chromebooks do not store files."
        ]
    },
    {
        numb: 65,
        question: "You just deleted a shortcut to an important work presentation. What happened to the data in the presentation?",
        answer: "Nothing.",
        options: [
            "Nothing.",
            "It’s in the Recycle Bin/Trash.",
            "It’s deleted.",
            "It’s in the recovery partition."
        ]
    },
    {
        numb: 66,
        question: "With which of the following file systems can you not rename a file when it’s open?",
        answer: "NTFS",
        options: [
            "ext3",
            "ext4",
            "APFS",
            "NTFS"
        ]
    },
    {
        numb: 67,
        question: "You are going to purchase a new iPhone. Which operating system will be installed on it?",
        answer: "iOS",
        options: [
            "iOS",
            "OS X",
            "iPhone OS",
            "Android",
            "iDontKnow"
        ]
    },
    {
        numb: 68,
        question: "Which of the following is an example of an embedded OS?",
        answer: "Firmware",
        options: [
            "Windows",
            "Firmware",
            "iOS",
            "Linux"
        ]
    },
    {
        numb: 69,
        question: "Fred, a friend of yours, wants to host a website for his new company. Which type of OS should be on the computer hosting the website?",
        answer: "Server",
        options: [
            "Embedded",
            "Mobile",
            "Server",
            "Workstation"
        ]
    },
    {
        numb: 70,
        question: "Which of the following is not a feature of a file system?",
        answer: "Access control",
        options: [
            "Permissions",
            "Encryption",
            "Journaling",
            "Access control"
        ]
    },
    {
        numb: 71,
        question: "Linux is defined as a ___________________, which is also the core of an operating system.",
        answer: "Kernel",
        options: [
            "Distribution",
            "Version",
            "Kernel",
            "Shell"
        ]
    },
    {
        numb: 72,
        question: "You need to kill a process in Windows. Which utility should you use?",
        answer: "Task Manager",
        options: [
            "Task Manager",
            "Process Manager",
            "File Explorer",
            "Programs and Features"
        ]
    },
    {
        numb: 73,
        question: "You just copied a file from the Work directory to the Projects directory on your Windows PC. What happened to the file on the hard drive?",
        answer: "The file was copied to a new location on the hard drive and was associated with the Projects directory.",
        options: [
            "Nothing.",
            "The file was removed from the Work directory and placed in the Projects directory.",
            "The file was not moved, but a new pointer record was created associating the file with the Projects directory.",
            "The file was copied to a new location on the hard drive and was associated with the Projects directory."
        ]
    },
    {
        numb: 74,
        question: "Your hard drive is running low on space. Which of the following could help alleviate that situation?",
        answer: "Compression",
        options: [
            "Compression",
            "Encryption",
            "Attribution",
            "Journaling"
        ]
    },
    {
        numb: 75,
        question: "The combination of Linux-based files that gets released as a product is called what?",
        answer: "Distribution",
        options: [
            "Distribution",
            "Version",
            "Kernel",
            "Source"
        ]
    },
    {
        numb: 76,
        question: "Which of the following items does Windows Task Manager allow you to manage? (Choose two.)",
        answer: ["Processes", "Services"],
        options: [
            "Drivers",
            "Interfaces",
            "Processes",
            "Services"
        ]
    },
    {
        numb: 77,
        question: "You need to prepare a brand-new replacement hard drive for storage. What is the first step needed to get it ready?",
        answer: "Create a partition.",
        options: [
            "Format the drive.",
            "Install an OS.",
            "Install a file system.",
            "Create a partition."
        ]
    },
    {
        numb: 78,
        question: "You need to update a Windows driver for a sound card. Which utility should you use?",
        answer: "Device Manager",
        options: [
            "Device Manager",
            "Sound Card Manager",
            "Drivers app",
            "Control Panel"
        ]
    },
    {
        numb: 79,
        question: "Which of the following would not be considered metadata for a spreadsheet file?",
        answer: "Calculations inside the file",
        options: [
            "Read-only attribute",
            "Calculations inside the file",
            "Name of the file",
            "File size"
        ]
    },
    {
        numb: 80,
        question: "You want to keep a co-worker, Jerry, from accessing a file. What should you use to do this?",
        answer: "Permissions",
        options: [
            "Permissions",
            "Read-only",
            "Archive",
            "Compression"
        ]
    },
    {
        numb: 81,
        question: "A user calls to tell you that every time he browses the Internet, multiple browser windows keep appearing on his screen even though he has not opened them. In this scenario, what should you do to fix the problem?",
        answer: "Configure a pop-up blocker.",
        options: [
            "Deactivate client-side scripting.",
            "Clear the cache.",
            "Disable browser extensions.",
            "Configure a pop-up blocker."
        ]
    },
    {
        numb: 82,
        question: "Rose opens her software application and gets a message stating that she has only 16 more uses of the product available. Given this scenario, what is her best course of action to use it more than 16 additional times?",
        answer: "Activate the software.",
        options: [
            "Activate the software.",
            "Register the software.",
            "Uninstall and reinstall the software.",
            "No longer close the application."
        ]
    },
    {
        numb: 83,
        question: "You are visiting a website to order a product, but you keep seeing old information that you know is outdated. Which of the following will most likely fix the problem?",
        answer: "Clear the cache.",
        options: [
            "Deactivate client-side scripting.",
            "Disable browser exensions.",
            "Clear the cache.",
            "Configure proxy settings."
        ]
    },
    {
        numb: 84,
        question: "You have just purchased licensed software and want to install it. Which of the following are you required to enter to install this software?",
        answer: "The product key",
        options: [
            "Your name and contact information",
            "The product key",
            "The serial number of your processor",
            "None of the above"
        ]
    },
    {
        numb: 85,
        question: "You are setting up a technical support help desk for a new app. What type of software should you get to help the technicians fix problems more effectively?",
        answer: "Remote support",
        options: [
            "Remote support",
            "Instant messaging",
            "Document sharing",
            "Visual diagramming"
        ]
    },
    {
        numb: 86,
        question: "John wants to download a PC-based software package made by Company X. He sees that he can get the software for free from a dozen different websites on the Internet. What advice would you give John?",
        answer: "Download the software only from the Company X website.",
        options: [
            "Download the software from any of the sites because it should all be the same.",
            "Download the software only from the Company X website.",
            "Disable his pop-up blocker and download the software from the site promising the fastest download speed.",
            "Look on the Apple Store to find the package and download it."
        ]
    },
    {
        numb: 87,
        question: "A user wants to have the same browser color scheme, security settings, and favorite website list available from any computer they log in to. What should be enabled?",
        answer: "Profile synchronization",
        options: [
            "Profile synchronization",
            "Bookmarks",
            "Accessibility",
            "Compatible browser for applications"
        ]
    },
    {
        numb: 88,
        question: "Word processing, spreadsheets, and presentation software are examples of what?",
        answer: "Productivity software",
        options: [
            "Productivity software",
            "Collaboration software",
            "Utility software",
            "Operating system add-ins"
        ]
    },
    {
        numb: 89,
        question: "Which of the following types of software licenses requires the user to pay yearly?",
        answer: "Subscription",
        options: [
            "Proprietary",
            "Perpetual",
            "Subscription",
            "Recurring"
        ]
    },
    {
        numb: 90,
        question: "What software is designed to let the OS talk to hardware?",
        answer: "Driver",
        options: [
            "Driver",
            "Application",
            "Patch",
            "Virtual"
        ]
    },
    {
        numb: 91,
        question: "You need to set up software for five users on a network. They all need to have access to and edit the same Excel files. Which is the best type of software for them to use?",
        answer: "Online workspace",
        options: [
            "Project management software",
            "Online workspace",
            "Conferencing software",
            "Document sharing"
        ]
    },
    {
        numb: 92,
        question: "When thinking of software compatibility, which two factors matter most? (Choose two.)",
        answer: ["If the software will work with the operating system", "If the minimum hardware requirements are met"],
        options: [
            "If the software will work with other software on the computer",
            "If the software will work with the operating system",
            "If the minimum hardware requirements are met",
            "If the software comes with automatic updates"
        ]
    },
    {
        numb: 93,
        question: "You have just plugged in a new HP printer to your Mac. You can’t find a printer driver. What should you do given the circumstances?",
        answer: "Visit HP’s website to download the printer driver.",
        options: [
            "Use the default HP printer driver for macOS.",
            "Visit Apple’s website to download the printer driver.",
            "Visit HP’s website to download the printer driver.",
            "Run Software Update to install the printer driver automatically."
        ]
    },
    {
        numb: 94,
        question: "A company employee has limited eyesight and needs the web browser to be set up with high-contrast colors to make it easier to read. What type of feature is this?",
        answer: "Accessibility",
        options: [
            "Accessibility",
            "Profile synchronization",
            "Compatibility",
            "Scripting"
        ]
    },
    {
        numb: 95,
        question: "Which of the following is not a configurable web browser feature?",
        answer: "Browser kernel",
        options: [
            "Private browsing",
            "Profile synchronization",
            "Pop-up blocker",
            "Browser kernel"
        ]
    },
    {
        numb: 96,
        question: "You just installed an antivirus program on your laptop computer. Given a scenario in which you want to maintain proper levels of security, how often should you update the software?",
        answer: "At least once a week",
        options: [
            "At least once a week",
            "At least once a month",
            "At least once a year",
            "Only when a new virus is discovered"
        ]
    },
    {
        numb: 97,
        question: "Which of the following does not require users to pay for the software?",
        answer: "Open source software",
        options: [
            "Proprietary software",
            "Open source software",
            "Concurrent license",
            "Single use"
        ]
    },
    {
        numb: 98,
        question: "Your boss calls you on the phone while he is trying to install software. It is telling him that he needs a product key. Where should you tell him to look for it? (Choose two.)",
        answer: ["On the package the installation media came in", "In an email from the manufacturer"],
        options: [
            "On the package the installation media came in",
            "In an email from the manufacturer",
            "On the screen in the Options menu",
            "In Windows Update"
        ]
    },
    {
        numb: 99,
        question: "You want to visit a web page and make sure that the website does not steal any information about your identity. In that scenario, which of the following should you use?",
        answer: "Private browsing",
        options: [
            "Script blocker",
            "Invalid certificate",
            "Disabled extensions",
            "Private browsing"
        ]
    },
    {
        numb: 100,
        question: "You are trying to enter registration information into a website. When you click the Submit button, nothing happens. You try again and still nothing. What is the most likely cause of this problem?",
        answer: "Pop-up blocker",
        options: [
            "Default search engine",
            "Pop-up blocker",
            "Disabled browser extension",
            "Invalid certificate"
        ]
    },
    {
        numb: 101,
        question: "Which of the following numbers is written in hexadecimal format?",
        answer: "18AF",
        options: [
            "100101",
            "3268",
            "18AF",
            "100101.11"
        ]
    },
    {
        numb: 102,
        question: "Which of the following terms describe concepts related to breaking code into smaller, repeatable sections? (Choose two.)",
        answer: ["Functions", "Methods"],
        options: [
            "Functions",
            "Variables",
            "Containers",
            "Methods",
            "Objects"
        ]
    },
    {
        numb: 103,
        question: "Which of the following are examples of object-oriented programming languages? (Choose two.)",
        answer: ["Java", "Python"],
        options: [
            "Java",
            "XML",
            "Python",
            "C",
            "SQL"
        ]
    },
    {
        numb: 104,
        question: "Which of the following statements is true regarding arrays and vectors?",
        answer: "Arrays contain one data type and are fixed in length. Vectors can have multiple data types and dynamic length.",
        options: [
            "Arrays contain one data type and are dynamic in length. Vectors can have multiple data types and are fixed in length.",
            "Arrays can have multiple data types and are fixed in length. Vectors have one data type and are dynamic in length.",
            "Arrays can have multiple data types and are dynamic in length. Vectors have one data type and are fixed in length.",
            "Arrays contain one data type and are fixed in length. Vectors can have multiple data types and dynamic length."
        ]
    },
    {
        numb: 105,
        question: "A developer needs to use a code designation for non-English letters. Which notational system does the developer need to use?",
        answer: "Unicode",
        options: [
            "ASCII",
            "Unicode",
            "International",
            "Strings"
        ]
    },
    {
        numb: 106,
        question: "Which of the following are examples of interpreted languages? (Choose two.)",
        answer: ["Scripted", "Markup"],
        options: [
            "Compiled",
            "Query",
            "Scripted",
            "Markup"
        ]
    },
    {
        numb: 107,
        question: "What type of high-level programming language is translated into machine code once and then executed many times?",
        answer: "Compiled",
        options: [
            "Compiled",
            "Scripted",
            "Scripting",
            "Markup"
        ]
    },
    {
        numb: 108,
        question: "A programmer wants to write code that directly accesses the computer’s hardware. Which is the best type of language for the programmer to use?",
        answer: "Assembly",
        options: [
            "Complied",
            "Query",
            "Interpreted",
            "Assembly"
        ]
    },
    {
        numb: 109,
        question: "Interpret the following logic. For data input on someone who is 20 years old, which category will they fall into? if age < 13, then category \"Child\" else if age < 20, then category \"Teen\" else if age < 65, then category \"Adult\" else category \"Senior\"",
        answer: "Adult",
        options: [
            "Child",
            "Teen",
            "Adult",
            "Senior"
        ]
    },
    {
        numb: 110,
        question: "A programmer is writing a program that needs to accept an input of someone’s name. What type of variable should the programmer create?",
        answer: "String",
        options: [
            "Char",
            "String",
            "Float",
            "Unicode"
        ]
    },
    {
        numb: 111,
        question: "Looping logic makes use of which of the following statements?",
        answer: "while",
        options: [
            "while",
            "when",
            "loop",
            "if"
        ]
    },
    {
        numb: 112,
        question: "In object-oriented programming, which of the following are integral parts of objects? (Choose two.)",
        answer: ["Properties", "Attributes"],
        options: [
            "Arrays",
            "Properties",
            "Attributes",
            "Variables"
        ]
    },
    {
        numb: 113,
        question: "A program shows the number 11010.11. Which data type is this?",
        answer: "Float",
        options: [
            "Binary",
            "Boolean",
            "Integer",
            "Float"
        ]
    },
    {
        numb: 114,
        question: "You have created an array that can hold 15 items, all of the integer data type. You want to add a 16th integer. Which of the following is the best approach to doing this?",
        answer: "Create a vector and replace the array with it.",
        options: [
            "Add it to the existing array.",
            "Create a separate variable for the 16th integer.",
            "Convert the integers to floats and add the 16th integer.",
            "Create a vector and replace the array with it."
        ]
    },
    {
        numb: 115,
        question: "What type of programming language is designed to retrieve data from a database?",
        answer: "Query",
        options: [
            "Query",
            "Assembly",
            "Interpreted",
            "Compiled"
        ]
    },
    {
        numb: 116,
        question: "Interpret the following logic. A law enforcement agency has received data indicating that there are 10 current threats to public safety. What should the threat level be? if threats < 3, then level \"Green\" else if threats < 6, then level \"Yellow\" else if threats < 9, then level \"Orange\" else if threats < 12, then level \"Red\" else level \"Emergency\"",
        answer: "Red",
        options: [
            "Green",
            "Yellow",
            "Orange",
            "Red",
            "Emergency"
        ]
    },
    {
        numb: 117,
        question: "Which of the following is an example of a markup language?",
        answer: "XML",
        options: [
            "SQL",
            "XML",
            "Python",
            "Java"
        ]
    },
    {
        numb: 118,
        question: "You want to understand the sequence of a program, from start to finish. Which of the following is the best to use for this purpose?",
        answer: "Flowchart",
        options: [
            "Pseudocode",
            "Function",
            "Flowchart",
            "Object"
        ]
    },
    {
        numb: 119,
        question: "Which of the following programming language types is the lowest-level language?",
        answer: "Assembly",
        options: [
            "Interpreted",
            "Compiled",
            "Query",
            "Assembly"
        ]
    },
    {
        numb: 120,
        question: "Flowcharts depict which one of the following?",
        answer: "Programs",
        options: [
            "Programs",
            "Objects",
            "Functions",
            "Identifiers"
        ]
    },
    {
        numb: 121,
        question: "You have an address book for a small business with contact information for about 100 clients. The address book is used by two people. Which solution should you use to store the data?",
        answer: "Spreadsheet",
        options: [
            "Spreadsheet",
            "Relational database",
            "Word processing software",
            "Nonrelational database"
        ]
    },
    {
        numb: 122,
        question: "A database developer is working on generating queries. If the developer needs to ensure that the output of the query has data persistence, to where should the data be written?",
        answer: "SSD",
        options: [
            "RAM",
            "Cache",
            "SSD",
            "CPU"
        ]
    },
    {
        numb: 123,
        question: "Which of the following consists of columns and rows of numerical or text data?",
        answer: "Relational database",
        options: [
            "Document database",
            "Key-value database",
            "Database dump",
            "Relational database"
        ]
    },
    {
        numb: 124,
        question: "Joe creates a database. What does he need to do next to make it usable?",
        answer: "Import data",
        options: [
            "Enable permissions",
            "Import data",
            "Run queries",
            "Create forms"
        ]
    },
    {
        numb: 125,
        question: "A user, Ann, is granted permissions to access a database. What is this an example of?",
        answer: "Data definition",
        options: [
            "Data collection",
            "Data manipulation",
            "Direct/manual access",
            "Data definition"
        ]
    },
    {
        numb: 126,
        question: "A medical office needs to create a solution to manage patient records. They have about 10,000 patients and eight staff; they want to include notes from medical professionals, emails to and from patients, and images such as x-rays. What should they create?",
        answer: "Nonrelational database",
        options: [
            "Spreadsheet",
            "Relational database",
            "Nonrelational database",
            "Primary key"
        ]
    },
    {
        numb: 127,
        question: "You have created a relational database. Which of the following elements uniquely identifies a record in the database?",
        answer: "Primary key",
        options: [
            "Primary key",
            "Foreign key",
            "Schema",
            "Field"
        ]
    },
    {
        numb: 128,
        question: "Mary, an administrator, creates a field and designates it to hold integer data. Joe, a user, tries to enter his name in the field, but it doesn’t let him save the data. What is this an example of?",
        answer: "Constraints",
        options: [
            "Schema rules",
            "Primary key",
            "Foreign key",
            "Constraints"
        ]
    },
    {
        numb: 129,
        question: "Rachel, a database administrator, has created a database for her website. It contains pictures of vacations that people have uploaded. In the database, pictures have associated information about who uploaded them and the date. What is this an example of?",
        answer: "Semi-structured data",
        options: [
            "Semi-structured data",
            "Nonstructured data",
            "Structured data",
            "Schema definition"
        ]
    },
    {
        numb: 130,
        question: "Peter is accessing a database using a JDBC connection. Which of the following terms best describes the type of access he is using?",
        answer: "Direct/manual access",
        options: [
            "Direct/manual access",
            "Programmatic access",
            "User interface/utility access",
            "Query/report builder"
        ]
    },
    {
        numb: 131,
        question: "Oscar’s user account has been granted permissions to view a database. Nathan then uses the deny command in an attempt to deny Oscar the ability to view the database and applies it to a group to which Oscar belongs. Which of the following statements is true?",
        answer: "Oscar will no longer be able to view the database because a deny overrides a grant.",
        options: [
            "Oscar will still be able to view the database because a grant overrides a deny.",
            "Oscar will no longer be able to view the database because a deny overrides a grant.",
            "Oscar will no longer be able to view the database, because the deny cancels the grant, giving Oscar no specific permissions.",
            "Oscar will still be able to view the database because granted permissions must be removed with the revoke command."
        ]
    },
    {
        numb: 132,
        question: "A school has a database with four tables, but it needs a fifth table. Which command is used to accomplish this task?",
        answer: "CREATE",
        options: [
            "INSERT",
            "UPDATE",
            "CREATE",
            "ALTER"
        ]
    },
    {
        numb: 133,
        question: "Michael, an administrator, needs to add a column to an existing table. Which command should he use?",
        answer: "ALTER",
        options: [
            "INSERT",
            "UPDATE",
            "CREATE",
            "ALTER"
        ]
    },
    {
        numb: 134,
        question: "Laura, your manager, instructs you to remove a table from a database permanently. Which command should you use?",
        answer: "DROP",
        options: [
            "DELETE",
            "REMOVE",
            "DROP",
            "ALTER"
        ]
    },
    {
        numb: 135,
        question: "Which of the following statements most accurately describes what a primary key refers to?",
        answer: "A field in a table",
        options: [
            "A schema in a database",
            "A table in a schema",
            "A field in a table",
            "A record in a table"
        ]
    },
    {
        numb: 136,
        question: "Kate, a database administrator, needs to add records into a database. Which command should she use?",
        answer: "INSERT",
        options: [
            "CREATE",
            "INSERT",
            "ALTER",
            "UPDATE"
        ]
    },
    {
        numb: 137,
        question: "Henry wants to understand which of his customers has purchased part number BB8. Which command should he use?",
        answer: "SELECT",
        options: [
            "QUERY",
            "FIND",
            "SEARCH",
            "SELECT"
        ]
    },
    {
        numb: 138,
        question: "George needs to remove a customer’s information completely from a table. Which command should he use?",
        answer: "DELETE",
        options: [
            "DELETE",
            "DROP",
            "ALTER",
            "UPDATE"
        ]
    },
    {
        numb: 139,
        question: "Which of the following descriptions best describes the type of structure that stores values as blobs?",
        answer: "Key-value database",
        options: [
            "Relational database",
            "Nonrelational database",
            "Document database",
            "Key-value database"
        ]
    },
    {
        numb: 140,
        question: "An employee at your office just got married and changed their last name. Which command do you use to change their last name in the employee database?",
        answer: "UPDATE",
        options: [
            "EDIT",
            "MODIFY",
            "ALTER",
            "UPDATE"
        ]
    },
    {
        numb: 141,
        question: "You are configuring a computer to participate on a TCP/IP network. Which of the following are mandatory? (Choose two.)",
        answer: ["IP address", "Subnet mask"],
        options: [
            "IP address",
            "Default gateway",
            "DHCP server",
            "Subnet mask"
        ]
    },
    {
        numb: 142,
        question: "Which one of the following types of network connections can give you the highest data transfer rates?",
        answer: "DSL",
        options: [
            "T1",
            "DSL",
            "ISDN",
            "Cellular"
        ]
    },
    {
        numb: 143,
        question: "You are configuring a wireless network with six computers and no dedicated administrator. Which networking model is most appropriate?",
        answer: "Peer-to-peer",
        options: [
            "LAN",
            "WAN",
            "Peer-to-peer",
            "Client-server"
        ]
    },
    {
        numb: 144,
        question: "You have a scenario where you need to disable the guest network on your wireless router. You try to log in, but your password does not work. After several attempts, you realize that you forgot your password. What can you do?",
        answer: "Hold the reset button down for 30 seconds to reset the router.",
        options: [
            "Use the password reset option in your router configuration utility.",
            "Unplug the router and plug it back in.",
            "Use the default password of admin.",
            "Hold the reset button down for 30 seconds to reset the router."
        ]
    },
    {
        numb: 145,
        question: "Your company has a remote office on a cruise ship that sails across the ocean. Which type of Internet service is likely the best choice?",
        answer: "Satellite",
        options: [
            "Fiber-optic",
            "Satellite",
            "Cellular",
            "RF"
        ]
    },
    {
        numb: 147,
        question: "Your friend Maria asks you which router feature helps secure against malicious network traffic. What do you tell her?",
        answer: "Firewall",
        options: [
            "DNS",
            "DHCP",
            "Firewall",
            "DSL"
        ]
    },
    {
        numb: 148,
        question: "Which of the following is true about TCP/IP ports?",
        answer: "It’s based on the protocol being used.",
        options: [
            "It’s based on the protocol being used.",
            "It’s the network address of the host.",
            "It will differ based on the MAC address.",
            "It will differ based on the networking model used."
        ]
    },
    {
        numb: 149,
        question: "Your friend Michael is setting up a wireless network and asks you which security option he should choose to make the network the most secure. What do you suggest?",
        answer: "WPA2",
        options: [
            "WEP",
            "WPA",
            "WPA2",
            "Open"
        ]
    },
    {
        numb: 150,
        question: "Which of the following connectivity options gives you the best mobility?",
        answer: "Cellular",
        options: [
            "Cellular",
            "Wireless",
            "Wired",
            "Broadband"
        ]
    },
    {
        numb: 151,
        question: "You need to set up a wireless network. Which standard will give you the highest speed?",
        answer: "802.11ac",
        options: [
            "802.11a",
            "802.11ac",
            "802.11g",
            "802.11n"
        ]
    },
    {
        numb: 152,
        question: "Which of the following Wi-Fi band options will cover the shortest distance?",
        answer: "6 GHz",
        options: [
            "6 GHz",
            "5 GHz",
            "2.4 GHz",
            "1180 kHz"
        ]
    },
    {
        numb: 153,
        question: "Which one of these connection types has the longest delay?",
        answer: "Cellular",
        options: [
            "Wireless",
            "Infrared",
            "Wired",
            "Cellular"
        ]
    },
    {
        numb: 154,
        question: "Which networking device is designed to connect networks to each other?",
        answer: "Router",
        options: [
            "Switch",
            "Router",
            "Firewall",
            "Access point"
        ]
    },
    {
        numb: 155,
        question: "Which network protocol is designed specifically for uploading and downloading files?",
        answer: "FTP",
        options: [
            "HTTPS",
            "POP3",
            "SMTP",
            "FTP"
        ]
    },
    {
        numb: 156,
        question: "You are connecting to an email server to download email. Which of the following protocols is your computer most likely using? (Choose two.)",
        answer: ["POP3", "IMAP"],
        options: [
            "HTTPS",
            "POP3",
            "SMTP",
            "IMAP"
        ]
    },
    {
        numb: 157,
        question: "What command would you use in macOS to determine your TCP/IP configuration information?",
        answer: "ifconfig",
        options: [
            "ifconfig",
            "ipconfig",
            "ipinfo",
            "tcpipconfig"
        ]
    },
    {
        numb: 158,
        question: "By definition, what is an SSID?",
        answer: "A wireless network name",
        options: [
            "A wireless network name",
            "A wireless network security protocol",
            "A wireless network security password",
            "A wireless network authentication method"
        ]
    },
    {
        numb: 159,
        question: "When configuring a wireless router, which of the following should you always do? (Choose two.)",
        answer: ["Change the SSID", "Change the admin password"],
        options: [
            "Enable DHCP",
            "Change the SSID",
            "Change the admin password",
            "Configure the firewall"
        ]
    },
    {
        numb: 161,
        question: "On your Windows 11 computer, you can run macOS in a smaller window without affecting Windows. What is macOS called in this instance?",
        answer: "Guest OS",
        options: [
            "Hypervisor",
            "On-premises",
            "Virtualization",
            "Guest OS"
        ]
    },
    {
        numb: 162,
        question: "What is the name of the software that allows you to install a second OS on your computer without needing to dual-boot?",
        answer: "Hypervisor",
        options: [
            "Hypervisor",
            "Virtualization",
            "Hybrid",
            "Guest OS"
        ]
    },
    {
        numb: 163,
        question: "What is the difference between a Type 1 and a Type 2 hypervisor?",
        answer: "Type 1 sits directly on the hardware, and Type 2 sits on top of a host OS.",
        options: [
            "Type 1 sits on top of a host OS and Type 2 directly on the hardware.",
            "Type 1 sits directly on the hardware, and Type 2 sits on top of a host OS.",
            "Type 1 sits directly on the hardware, and Type 2 sits on top of a guest OS.",
            "Type 1 sits on top of a guest OS and Type 2 directly on the hardware."
        ]
    },
    {
        numb: 164,
        question: "What is required to run client-side virtualization?",
        answer: "Type 2 hypervisor",
        options: [
            "Type 1 hypervisor",
            "Type 2 hypervisor",
            "Type 1 or Type 2 hypervisor",
            "Virtualization server"
        ]
    },
    {
        numb: 165,
        question: "A guest OS needs to communicate with a server on the network. What does the guest OS use to send the network packets?",
        answer: "vNIC",
        options: [
            "NIC",
            "CPU",
            "vCPU",
            "vNIC"
        ]
    },
    {
        numb: 166,
        question: "Your company uses cloud services provided by Amazon and also has a few cloud-based storage servers in the building. What type of deployment model is this?",
        answer: "Hybrid",
        options: [
            "On-premises",
            "Cloud",
            "Hybrid",
            "Unable to determine"
        ]
    },
    {
        numb: 167,
        question: "Your company buys cloud services and it includes Gmail and other Google apps. What type of service does your company purchase?",
        answer: "SaaS",
        options: [
            "PaaS",
            "IaaS",
            "GaaS",
            "SaaS"
        ]
    },
    {
        numb: 168,
        question: "Which of the following is the highest level of cloud services you can purchase?",
        answer: "SaaS",
        options: [
            "PaaS",
            "IaaS",
            "SaaS",
            "They are all the same level."
        ]
    },
    {
        numb: 169,
        question: "You need to purchase the lowest level of cloud services possible to enable programmers on your team to have development tools. Which level of service should you purchase?",
        answer: "PaaS",
        options: [
            "PaaS",
            "IaaS",
            "SaaS",
            "GaaS"
        ]
    },
    {
        numb: 170,
        question: "The ability to get additional cloud resources without intervention from the cloud provider is called what?",
        answer: "Rapid elasticity",
        options: [
            "Measured service",
            "High availability",
            "Resource pooling",
            "Rapid elasticity"
        ]
    },
    {
        numb: 171,
        question: "Ensuring that cloud clients receive uninterrupted services is known as what?",
        answer: "High availability",
        options: [
            "Measured service",
            "High availability",
            "Broad network access",
            "Virtualization"
        ]
    },
    {
        numb: 172,
        question: "Your company just signed a contract with Amazon to use the Amazon Web Services cloud. What type of deployment model is that?",
        answer: "Public",
        options: [
            "On-premises",
            "Public",
            "Private",
            "Hybrid"
        ]
    },
    {
        numb: 173,
        question: "A virtual router and network infrastructure can be provided as part of which of the following cloud service levels? (Choose all that apply.)",
        answer: ["SaaS", "PaaS", "IaaS"],
        options: [
            "SaaS",
            "PaaS",
            "IaaS",
            "None of the above"
        ]
    },
    {
        numb: 174,
        question: "You visit the website for your bank. A window pops up with text showing a customer service representative asking you if they can help. What is this an example of?",
        answer: "AI chatbot",
        options: [
            "AI assistant",
            "Generative AI",
            "Predictive AI",
            "AI chatbot"
        ]
    },
    {
        numb: 175,
        question: "Amazon’s Alexa and Siri are examples of which type of AI?",
        answer: "AI assistant",
        options: [
            "AI assistant",
            "Generative AI",
            "Predictive AI",
            "AI chatbot"
        ]
    },
    {
        numb: 176,
        question: "Which branch of AI is focused on understanding written or spoken language?",
        answer: "NLP",
        options: [
            "ML",
            "NLP",
            "Neural networks",
            "Expert systems"
        ]
    },
    {
        numb: 177,
        question: "Which of the following is an example of generative AI?",
        answer: "ChatGPT",
        options: [
            "Amazon Alexa",
            "Customer service pop-up window on a website",
            "ChatGPT",
            "Autocorrect on a smartphone"
        ]
    },
    {
        numb: 178,
        question: "If a computer programmer needs sample code from which to write a program, what type of AI can provide it?",
        answer: "Generative AI",
        options: [
            "AI chatbot",
            "AI assistant",
            "Generative AI",
            "Predictive AI"
        ]
    },
    {
        numb: 179,
        question: "You are shopping online and search for a product. As you close the product window, another window pops up showing you a similar item. What type of AI is this an example of?",
        answer: "Predictive AI",
        options: [
            "AI chatbot",
            "AI assistant",
            "Generative AI",
            "Predictive AI"
        ]
    },
    {
        numb: 180,
        question: "A rock band wants to design a new logo to boost their image. What type of AI should they use for this?",
        answer: "Generative AI",
        options: [
            "AI chatbot",
            "AI assistant",
            "Generative AI",
            "Predictive and suggestions AI"
        ]
    },
    {
        numb: 181,
        question: "Which of the following are activities that a hacker might attempt?",
        answer: "All of the above",
        options: [
            "Stealing usernames and passwords",
            "Modifying website content",
            "Disrupting network communications",
            "Analyzing network traffic",
            "All of the above"
        ]
    },
    {
        numb: 182,
        question: "Your company has collected a lot of data on product performance that includes customer reviews, pictures, and schematics. Which term best describes the collection of data?",
        answer: "Big data",
        options: [
            "Data correlation",
            "Data monetization",
            "Big data",
            "Critical data"
        ]
    },
    {
        numb: 183,
        question: "Which of the following are threats to data availability? (Choose two.)",
        answer: ["Service outage", "Destruction"],
        options: [
            "Service outage",
            "Replay attack",
            "Wiretapping",
            "Destruction"
        ]
    },
    {
        numb: 184,
        question: "What is the name of an application that appears to look like a helpful application but instead does harm to your computer?",
        answer: "Trojan horse",
        options: [
            "Virus",
            "Worm",
            "Malware",
            "Trojan horse"
        ]
    },
    {
        numb: 185,
        question: "Someone was recently caught sifting through your company’s trash looking for confidential information. What is this an example of?",
        answer: "Dumpster diving",
        options: [
            "Trash snooping",
            "Dumpster diving",
            "Phishing",
            "Social engineering"
        ]
    },
    {
        numb: 186,
        question: "You are implementing multifactor security on a computer. Which of the following is not a valid factor?",
        answer: "Receipt",
        options: [
            "Receipt",
            "Password",
            "Hardware token",
            "Specific location"
        ]
    },
    {
        numb: 187,
        question: "You have been asked to lead a class on preventing social engineering. What two topics should you be sure to cover? (Choose two.)",
        answer: ["Shoulder surfing", "Phishing"],
        options: [
            "Viruses and worms",
            "Shoulder surfing",
            "Hardware theft",
            "Phishing"
        ]
    },
    {
        numb: 188,
        question: "On a network, a user needs to access three different types of systems. However, they are required to enter their username and password only when they initially log in. Which term best explains this?",
        answer: "Single sign-on",
        options: [
            "Authentication",
            "Single sign-on",
            "Authorization",
            "Nonrepudiation"
        ]
    },
    {
        numb: 189,
        question: "You receive an email from your bank telling you that your account has been compromised and that you need to validate your account details or else your account will be closed. You are supposed to click a link to validate your information. What is this an example of?",
        answer: "Phishing",
        options: [
            "A security breach at your bank that needs to be resolved",
            "Spam",
            "Ransomware",
            "Phishing"
        ]
    },
    {
        numb: 190,
        question: "If you are concerned about confidentiality of client records, which of the following should you be on the lookout for? (Choose two.)",
        answer: ["Eavesdropping", "Social engineering"],
        options: [
            "Eavesdropping",
            "Denial of service",
            "Social engineering",
            "Replay attack"
        ]
    },
    {
        numb: 191,
        question: "What is it called when a co-worker sitting next to you always seems to look your way when you try to enter your user ID and password to log onto the network?",
        answer: "Shoulder surfing",
        options: [
            "Phishing",
            "Social engineering",
            "Shoulder surfing",
            "Coincidence"
        ]
    },
    {
        numb: 192,
        question: "Which of the following security terms best describes the process of determining what a user can do with a resource?",
        answer: "Authorization",
        options: [
            "Authentication",
            "Authorization",
            "Accounting",
            "Nonrepudiation"
        ]
    },
    {
        numb: 193,
        question: "Which of the following operating systems are susceptible to viruses?",
        answer: "Windows, macOS, Linux, and Android",
        options: [
            "Windows",
            "Windows and macOS",
            "Windows, macOS, and Linux",
            "Windows, macOS, Linux, and Android"
        ]
    },
    {
        numb: 194,
        question: "A network administrator wants to enable accounting on her network. Which options should she use? (Choose two.)",
        answer: ["Transaction logs", "Web browser history"],
        options: [
            "Biometrics",
            "Transaction logs",
            "Software tokens",
            "Web browser history"
        ]
    },
    {
        numb: 195,
        question: "Which of the following can be used as an authentication factor and for nonrepudiation?",
        answer: "Biometrics",
        options: [
            "Password",
            "One-time password",
            "Biometrics",
            "Security question"
        ]
    },
    {
        numb: 196,
        question: "Your manager is concerned about potential wiretapping on the wireless network. What type of concern is this?",
        answer: "Confidentiality",
        options: [
            "Availability",
            "Authorization",
            "Integrity",
            "Confidentiality"
        ]
    },
    {
        numb: 197,
        question: "To log into a network, you must use a password and answer a security question. What is this an example of?",
        answer: "Multifactor authentication",
        options: [
            "Multifactor authentication",
            "Single sign-on",
            "Authorization",
            "Nonrepudiation"
        ]
    },
    {
        numb: 198,
        question: "Which of the following threats can directly impact data integrity on a network? (Choose two.)",
        answer: ["On-path", "Impersonation"],
        options: [
            "Snooping",
            "On-path",
            "Impersonation",
            "Denial of service"
        ]
    },
    {
        numb: 199,
        question: "Your network’s security model requires that the administrator configure permissions based on a user’s job within the company. What does this describe?",
        answer: "Role-based access control",
        options: [
            "Rule-based access control",
            "Role-based access control",
            "Discretionary access control",
            "Mandatory access control"
        ]
    },
    {
        numb: 200,
        question: "Which law protects consumer privacy in the European Union?",
        answer: "GDPR",
        options: [
            "Privacy Act",
            "CCPA",
            "PII",
            "GDPR"
        ]
    },
    {
        numb: 201,
        question: "Due to a recent string of thefts in your office, you need to harden your local system. What two actions are most appropriate for your situation? (Choose two.)",
        answer: ["Install a hardware lock", "Enable encryption"],
        options: [
            "Install a hardware lock",
            "Disable unused services",
            "Install antimalware",
            "Enable encryption"
        ]
    },
    {
        numb: 202,
        question: "What option can you configure on your workstation to increase security when you leave your desk?",
        answer: "Screensaver password",
        options: [
            "File encryption",
            "Multifactor authentication",
            "Single sign-on (SSO)",
            "Screensaver password"
        ]
    },
    {
        numb: 203,
        question: "You are visiting a website that starts with https://. Which of the following statements about the website are true? (Choose two.)",
        answer: ["It has an SSL certificate from a CA.", "Traffic to and from this website is in cipher text."],
        options: [
            "It has a CA certificate from an SSL.",
            "It has an SSL certificate from a CA.",
            "HTTPS websites are not required to have a security certificate.",
            "Traffic to and from this website is in cipher text.",
            "Traffic to and from this website is in plain text."
        ]
    },
    {
        numb: 204,
        question: "Claire, a coworker, is browsing the Internet and wants to know if it’s safe to enter her credit card information into a website. What do you tell her to look for?",
        answer: "HTTPS://",
        options: [
            "HTTPS://",
            "HTTP://",
            "SSL://",
            "TLS://"
        ]
    },
    {
        numb: 205,
        question: "You enabled file encryption on your local computer. While you were on vacation, one of your coworkers managed to get onto your computer and share your important files with other users. How did they do this?",
        answer: "They logged on with your username and password.",
        options: [
            "They logged on and disabled encryption.",
            "They used the Disk Recovery tool to access the encrypted files.",
            "All users logging into the system have access to encrypted files.",
            "They logged on with your username and password.",
            "They used an administrator account."
        ]
    },
    {
        numb: 206,
        question: "Which of the following types of data should be considered confidential and handled appropriately? (Choose two.)",
        answer: ["Financial information", "Customer information"],
        options: [
            "Financial information",
            "Social networking site",
            "Customer information",
            "Contact information"
        ]
    },
    {
        numb: 207,
        question: "Which type of software will help protect your computer from malicious network traffic?",
        answer: "Software firewall",
        options: [
            "Software firewall",
            "Password complexity tool",
            "Antispyware",
            "Antivirus"
        ]
    },
    {
        numb: 208,
        question: "You are using Google Chrome and you want to ensure that when you type in your first name to a web page, all of your other information fills in the fields for you. What should you do?",
        answer: "Enable Autofill.",
        options: [
            "Enable cookies.",
            "Enable cache.",
            "Enable Incognito.",
            "Enable Autofill."
        ]
    },
    {
        numb: 209,
        question: "Which of the following methods of securing a laptop works by giving users access only to certain files?",
        answer: "Authentication",
        options: [
            "Authentication",
            "Antimalware",
            "Firewall",
            "Patching"
        ]
    },
    {
        numb: 210,
        question: "Which of the following actions is not considered a web-browsing best practice?",
        answer: "Closing untrusted source warnings",
        options: [
            "Limiting the use of PII",
            "Disabling Autofill",
            "Closing untrusted source warnings",
            "Updating add-ons and extensions"
        ]
    },
    {
        numb: 211,
        question: "The managers at your company have decided to implement stricter security policies on the company’s local network. Which of the following should they do? (Choose two.)",
        answer: ["Enforce password policies.", "Develop written policies and procedures."],
        options: [
            "Enforce password policies.",
            "Develop written policies and procedures.",
            "Disable host firewalls.",
            "Enable HTTPS on the corporate web server."
        ]
    },
    {
        numb: 212,
        question: "Your coworker Rachel has recently discovered that when she starts typing her name into a field in a web browser, her whole name appears as well as her address in the appropriate boxes. What is this due to?",
        answer: "Autofill",
        options: [
            "Adware infection",
            "Single sign-on",
            "Suspicious hyperlinks",
            "Autofill"
        ]
    },
    {
        numb: 213,
        question: "You have been asked to give training on network security. For your section on password management, which options should you recommend to users? (Choose two.)",
        answer: ["Change default passwords on systems.", "Do not reuse the same password after you are required to change it."],
        options: [
            "Do not use complex passwords because they are easy to forget.",
            "Change default passwords on systems.",
            "Use the same password on multiple systems so that they are easy to remember.",
            "Do not reuse the same password after you are required to change it."
        ]
    },
    {
        numb: 214,
        question: "You are in a library that has free computers to use for Internet browsing. Which of the following should you possibly be concerned about?",
        answer: "Shoulder surfing, Keyloggers, & Unsecured wireless network",
        options: [
            "Shoulder surfing",
            "Keyloggers",
            "Unsecured wireless network",
            "Shoulder surfing & Keyloggers",
            "Shoulder surfing, Keyloggers, & Unsecured wireless network"
        ]
    },
    {
        numb: 215,
        question: "You have remotely logged into your corporate network. Which of the following is used to ensure encryption of data in transit between your laptop and corporate servers?",
        answer: "VPN",
        options: [
            "HTTPS",
            "Email encryption",
            "VPN",
            "Host firewall"
        ]
    },
    {
        numb: 216,
        question: "Which of the following are considered characteristics of a strong password? (Choose two.)",
        answer: ["Long", "Uses symbols, numbers, and letters"],
        options: [
            "Long",
            "Uses patterns",
            "Uses symbols, numbers, and letters",
            "Contains PII"
        ]
    },
    {
        numb: 217,
        question: "You just read an article about an Internet worm recently causing problems. What type of software should you install to protect yourself from this worm?",
        answer: "Antivirus",
        options: [
            "Software firewall",
            "Authentication protocol",
            "Antivirus",
            "Security certificate"
        ]
    },
    {
        numb: 218,
        question: "You receive an email in your Inbox from your friend Sara. The title of the email is “This is so cool!” and inside the email is a link to a website. What should you do?",
        answer: "Call Sara to see if she sent you the email.",
        options: [
            "Delete the email.",
            "Click the link to see why she thinks it’s cool.",
            "Run virus scan, then click the link.",
            "Call Sara to see if she sent you the email."
        ]
    },
    {
        numb: 219,
        question: "You recently received a new workstation and need to secure it properly before browsing the Internet. Which actions should you take? (Choose two.)",
        answer: ["Upgrade your browser to the newest version.", "Install an antivirus."],
        options: [
            "Enable Autofill.",
            "Enable acceptance of cookies.",
            "Upgrade your browser to the newest version.",
            "Install an antivirus."
        ]
    },
    {
        numb: 220,
        question: "Which of the following statements is true regarding web browser add-ons and extensions?",
        answer: "They should be updated to the newest versions.",
        options: [
            "They should be updated to the newest versions.",
            "They are dangerous and should be deleted.",
            "They will be detected and removed by antivirus software.",
            "They only function in Microsoft Edge or Internet Explorer."
        ]
    },
    {
        numb: 221,
        question: "When troubleshooting a computer problem, which of the following are steps you can take to identify the problem? (Choose two.)",
        answer: ["Talk to end users.", "Isolate the issue."],
        options: [
            "Use external resources such as the Internet.",
            "Talk to end users.",
            "Isolate the issue.",
            "Attribute it to user error."
        ]
    },
    {
        numb: 222,
        question: "You are troubleshooting a MacBook Pro. When it turns on, you receive a screen with a flashing question mark. What is the likely cause?",
        answer: "Hard drive failure",
        options: [
            "Device driver failure",
            "Video card failure",
            "Memory failure",
            "Hard drive failure"
        ]
    },
    {
        numb: 223,
        question: "When providing computer support and testing solutions, what should you always do first?",
        answer: "Test the simple stuff.",
        options: [
            "Assume user error.",
            "Test the simple stuff.",
            "Check Internet resources for solutions.",
            "Establish a plan of action."
        ]
    },
    {
        numb: 224,
        question: "Your computer has been running backups for a year. Today, you make a change from backing it up to an external hard drive to backing it up to the cloud. What should you do next?",
        answer: "Verify that the cloud backup works.",
        options: [
            "Secure the cloud backup location.",
            "Schedule regular cloud backups.",
            "Destroy the old hard drive.",
            "Verify that the cloud backup works."
        ]
    },
    {
        numb: 225,
        question: "You are troubleshooting a computer problem. After testing the theory to determine the cause, what should you do next?",
        answer: "Establish a plan of action to resolve the problem and implement the solution.",
        options: [
            "Establish a plan of action to resolve the problem and implement the solution.",
            "Verify functionality.",
            "Document the work.",
            "Identify the problem."
        ]
    },
    {
        numb: 226,
        question: "After installing several new software applications, your friend notices that their computer boots very slowly. Which tool can they use to disable programs from running at startup on Windows?",
        answer: "System Configuration",
        options: [
            "Recovery Console",
            "System Configuration",
            "System Restore",
            "Safe Mode"
        ]
    },
    {
        numb: 227,
        question: "Raul has just installed an older application on his Windows 8 computer and it will not run. He asks you for advice. What should you tell him to try to make it run?",
        answer: "Use compatibility mode.",
        options: [
            "Delete and reinstall.",
            "Run it as an administrator.",
            "Use Safe Mode.",
            "Use compatibility mode."
        ]
    },
    {
        numb: 228,
        question: "You are troubleshooting a Windows PC that will not load the operating system. You insert the Windows USB flash drive and reboot. Which utility can you use to repair Windows?",
        answer: "Recovery Environment",
        options: [
            "Recovery Environment",
            "MSCONFIG",
            "System Restore",
            "Safe Mode"
        ]
    },
    {
        numb: 229,
        question: "What is the last step in the process of troubleshooting a computer?",
        answer: "Document the findings.",
        options: [
            "Verify Internet functionality.",
            "Document the findings.",
            "Clean up the mess.",
            "Retest the solution."
        ]
    },
    {
        numb: 230,
        question: "You have been asked to design a backup solution for your manager’s workstation. Which option will be the fastest?",
        answer: "Local storage.",
        options: [
            "Cloud storage.",
            "Network storage.",
            "Local storage.",
            "They are all the same speed."
        ]
    },
    {
        numb: 231,
        question: "What type of computer backup will back up all selected files and then clear the archive bit?",
        answer: "Normal",
        options: [
            "Normal",
            "Differential",
            "Incremental",
            "Copy"
        ]
    },
    {
        numb: 232,
        question: "You have just installed a new printer on your computer, and while it seems to be recognized by the operating system, it will not print. What is the first source to check for information on the problem?",
        answer: "The printer manufacturer’s website",
        options: [
            "The OS manufacturer’s website",
            "The printer manufacturer’s website",
            "Google search",
            "Internet technical community groups"
        ]
    },
    {
        numb: 233,
        question: "You need to run an emergency backup of your computer, and you need it to finish as fast as possible. You just backed up about three weeks ago. Which backup option should you use?",
        answer: "Incremental",
        options: [
            "Normal",
            "Differential",
            "Incremental",
            "Copy"
        ]
    },
    {
        numb: 234,
        question: "While troubleshooting a Windows computer that may have a bad memory module, the computer freezes and displays a blue screen with white text and a STOP error. What generated that error message?",
        answer: "Windows",
        options: [
            "The memory module",
            "Windows",
            "BIOS",
            "MSCONFIG"
        ]
    },
    {
        numb: 235,
        question: "Ron’s computer behaves normally for a time, and then his screen completely freezes up. The mouse and keyboard do not respond. What is the most likely cause of his problem?",
        answer: "Overheating",
        options: [
            "Faulty video driver",
            "Faulty mouse or keyboard driver",
            "Failing hard drive",
            "Overheating"
        ]
    },
    {
        numb: 236,
        question: "You are troubleshooting a PC and see a gray text-based message about the boot disk on a black screen. What is the most likely source of this error message?",
        answer: "BIOS",
        options: [
            "Windows",
            "CHKDSK",
            "BIOS",
            "POST card"
        ]
    },
    {
        numb: 237,
        question: "You are helping a neighbor buy a computer, and based on a recent experience, they insist that their system needs to remain working even if a hard drive fails. What should you suggest they buy?",
        answer: "RAID 1",
        options: [
            "SATA",
            "PATA",
            "RAID 0",
            "RAID 1"
        ]
    },
    {
        numb: 238,
        question: "You are asked to troubleshoot a computer, and your friend recommends you take a POST card with you. What can the POST card help you diagnose?",
        answer: "Startup problems where nothing is displayed on the screen",
        options: [
            "Application problems",
            "Overheating problems",
            "Startup problems resulting in a BIOS error message",
            "Startup problems where nothing is displayed on the screen"
        ]
    },
    {
        numb: 239,
        question: "What type of backup will make a copy of all files on the computer, including user files and operating system files, to use in the event of a complete failure?",
        answer: "System image",
        options: [
            "System image",
            "Full backup",
            "Incremental backup",
            "Complete backup"
        ]
    },
    {
        numb: 240,
        question: "You’re asked to troubleshoot a PC that’s not working properly. You push the power button but don’t see anything on the screen or hear any fans spinning. What is the most likely reason?",
        answer: "Defective power supply",
        options: [
            "Defective monitor",
            "Defective power supply",
            "Broken fan",
            "Defective network adapter driver"
        ]
    }
];
