const CNQuestions = [

    // Network Fundamentals
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is a network?",
        "options": [
            "A collection of interconnected computers and devices",
            "A type of computer hardware",
            "A software application",
            "A single computer system"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A collection of interconnected computers and devices",
        "difficulty": "easy",
        "explanation": "A network is a group of computers, servers, and networking devices connected to share resources and communicate.",
        "hint": "Think about devices that can communicate and exchange information."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which network topology connects each device to a central hub or switch?",
        "options": [
            "Bus Topology",
            "Ring Topology",
            "Star Topology",
            "Mesh Topology"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Star Topology",
        "difficulty": "easy",
        "explanation": "In a star topology, all devices are connected to a central node, which acts as a hub for communication.",
        "hint": "Imagine devices radiating out from a central point like the rays of a star."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What does LAN stand for?",
        "options": [
            "Long Area Network",
            "Local Area Network",
            "Lightweight Application Network",
            "Linked Access Node"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Local Area Network",
        "difficulty": "easy",
        "explanation": "LAN is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus, or office building.",
        "hint": "This network type covers a small geographical area."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which of the following is NOT a type of network based on geographical area?",
        "options": [
            "WAN",
            "MAN",
            "LAN",
            "PAN"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "PAN",
        "difficulty": "medium",
        "explanation": "While LAN, WAN, and MAN are network types based on geographical area, PAN (Personal Area Network) is typically based on device proximity.",
        "hint": "Consider the range of communication for each network type."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is the primary purpose of a router in a network?",
        "options": [
            "To create network connections",
            "To connect devices within the same network",
            "To connect different networks and route data between them",
            "To amplify network signals"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To connect different networks and route data between them",
        "difficulty": "medium",
        "explanation": "Routers operate at the network layer and are responsible for forwarding data packets between different networks, determining the best path for data transmission.",
        "hint": "Think about how data travels between different network segments."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which network type covers a city or large campus?",
        "options": [
            "LAN",
            "PAN",
            "WAN",
            "MAN"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "MAN",
        "difficulty": "medium",
        "explanation": "Metropolitan Area Network (MAN) typically covers a larger area than a LAN but smaller than a WAN, such as a city or large campus.",
        "hint": "Consider the geographical size between a LAN and WAN."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What does the term 'bandwidth' represent in networking?",
        "options": [
            "The physical width of a network cable",
            "The maximum rate of data transfer across a network",
            "The number of devices connected to a network",
            "The speed of a single computer"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The maximum rate of data transfer across a network",
        "difficulty": "medium",
        "explanation": "Bandwidth measures the maximum amount of data that can be transmitted over an internet connection in a given amount of time, typically measured in bits per second.",
        "hint": "Think about how much data can flow through a network connection."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is network protocol?",
        "options": [
            "A physical network cable",
            "A type of network hardware",
            "A set of rules governing communication between devices",
            "A network security measure"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A set of rules governing communication between devices",
        "difficulty": "easy",
        "explanation": "Network protocols define a common language and set of rules that enable different devices and software to communicate effectively in a network.",
        "hint": "Protocols are like communication guidelines for network devices."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "In a mesh network topology, how are devices connected?",
        "options": [
            "To a central hub",
            "In a linear sequence",
            "Each device is connected to every other device",
            "In a circular arrangement"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Each device is connected to every other device",
        "difficulty": "hard",
        "explanation": "In a full mesh topology, every node is directly connected to every other node in the network, providing multiple redundant paths for data transmission.",
        "hint": "Consider maximum interconnectivity between all network nodes."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is the primary advantage of a peer-to-peer (P2P) network?",
        "options": [
            "Centralized control",
            "High security",
            "No need for a dedicated server",
            "Unlimited bandwidth"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "No need for a dedicated server",
        "difficulty": "medium",
        "explanation": "In a P2P network, each computer can act as both a client and a server, eliminating the need for a centralized server.",
        "hint": "Think about resource sharing without a central control point."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which network transmission mode allows communication in both directions simultaneously?",
        "options": [
            "Simplex",
            "Half-duplex",
            "Full-duplex",
            "Quarter-duplex"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Full-duplex",
        "difficulty": "hard",
        "explanation": "Full-duplex communication allows simultaneous two-way communication, where data can be transmitted in both directions at the same time.",
        "hint": "Consider the most unrestricted form of communication."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What does SSID stand for in wireless networking?",
        "options": [
            "Secure System Identification",
            "Service Set Identifier",
            "Signal Strength Indicator",
            "Synchronized System Identification"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Service Set Identifier",
        "difficulty": "medium",
        "explanation": "SSID is the name of a wireless network, which identifies a specific Wi-Fi network and allows devices to connect to it.",
        "hint": "This is the name you see when searching for Wi-Fi networks."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which of these is an example of a network interface device?",
        "options": [
            "Ethernet cable",
            "Network switch",
            "Network interface card (NIC)",
            "Coaxial cable"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Network interface card (NIC)",
        "difficulty": "easy",
        "explanation": "A Network Interface Card (NIC) is a hardware component that connects a computer to a network, allowing communication between devices.",
        "hint": "This is a physical component inside or connected to a computer."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is the purpose of a network switch?",
        "options": [
            "To connect different networks",
            "To filter and forward data packets within a network",
            "To provide wireless connectivity",
            "To amplify network signals"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To filter and forward data packets within a network",
        "difficulty": "medium",
        "explanation": "A network switch operates at the data link layer and intelligently forwards data packets between network segments based on MAC addresses.",
        "hint": "Consider how data is directed within a local network."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is network segmentation?",
        "options": [
            "Dividing a network into smaller, more manageable parts",
            "Breaking network cables into segments",
            "Reducing network speed",
            "Connecting multiple networks"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Dividing a network into smaller, more manageable parts",
        "difficulty": "hard",
        "explanation": "Network segmentation involves dividing a computer network into smaller, isolated subnetworks to improve performance, security, and management.",
        "hint": "Think about organizing a large network into more controlled sections."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What does the term 'latency' refer to in networking?",
        "options": [
            "Network cable length",
            "Data transfer speed",
            "The time delay in data transmission",
            "Number of devices on a network"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The time delay in data transmission",
        "difficulty": "medium",
        "explanation": "Latency is the time it takes for data to travel from its source to its destination across a network, often measured in milliseconds.",
        "hint": "Consider the delay between sending and receiving data."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which topology is most resistant to network failures?",
        "options": [
            "Bus Topology",
            "Star Topology",
            "Ring Topology",
            "Mesh Topology"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Mesh Topology",
        "difficulty": "hard",
        "explanation": "In a mesh topology, multiple paths exist between nodes, so if one connection fails, data can be routed through alternative paths.",
        "hint": "Consider which topology provides the most redundant connections."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is the primary function of a network bridge?",
        "options": [
            "To connect different network types",
            "To segment a network",
            "To filter and forward frames between network segments",
            "To provide wireless connectivity"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To filter and forward frames between network segments",
        "difficulty": "hard",
        "explanation": "A network bridge operates at the data link layer and connects and filters traffic between different network segments based on MAC addresses.",
        "hint": "Consider how data is managed between similar network segments."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What does NAT stand for in networking?",
        "options": [
            "Network Address Translation",
            "Network Adjustment Technique",
            "Network Authentication Token",
            "Network Allocation Table"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Network Address Translation",
        "difficulty": "medium",
        "explanation": "NAT is a method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit.",
        "hint": "This technique helps conserve public IP addresses."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which communication mode allows transmission in only one direction?",
        "options": [
            "Half-duplex",
            "Full-duplex",
            "Simplex",
            "Duplex"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Simplex",
        "difficulty": "hard",
        "explanation": "In simplex communication, data can be transmitted in only one direction, like a television broadcast.",
        "hint": "Think about one-way communication channels."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is a broadcast domain?",
        "options": [
            "A network that supports broadcasting",
            "A set of network devices that can receive each other's broadcast messages",
            "A type of network topology",
            "A method of network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A set of network devices that can receive each other's broadcast messages",
        "difficulty": "hard",
        "explanation": "A broadcast domain is a logical division of a computer network in which all nodes can reach each other by broadcast at the data link layer.",
        "hint": "Consider how broadcast messages are distributed within a network."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is the purpose of a default gateway?",
        "options": [
            "To provide network security",
            "To connect devices within a local network",
            "To route traffic between different networks",
            "To manage network bandwidth"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To route traffic between different networks",
        "difficulty": "medium",
        "explanation": "A default gateway is a network node that serves as an access point to another network, typically used to route traffic from a local network to the internet.",
        "hint": "Think about how data travels between different network segments."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which network type covers the smallest geographical area?",
        "options": [
            "WAN",
            "MAN",
            "LAN",
            "PAN"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "PAN",
        "difficulty": "easy",
        "explanation": "Personal Area Network (PAN) covers the smallest area, typically encompassing devices within a few meters of each other, like Bluetooth connections.",
        "hint": "Consider the most localized network type."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is packet switching?",
        "options": [
            "A method of connecting network devices",
            "A way to filter network traffic",
            "A data transmission method where data is broken into packets",
            "A network security technique"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A data transmission method where data is broken into packets",
        "difficulty": "medium",
        "explanation": "Packet switching is a method of transmitting data by breaking it into smaller units called packets, which are routed independently across a network.",
        "hint": "Think about how data is divided and transmitted efficiently."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is network convergence?",
        "options": [
            "Connecting multiple networks",
            "The integration of voice, video, and data on a single network",
            "Reducing network complexity",
            "Increasing network bandwidth"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The integration of voice, video, and data on a single network",
        "difficulty": "hard",
        "explanation": "Network convergence refers to the ability to carry voice, video, and data communications on a single network infrastructure.",
        "hint": "Consider how different communication types can be unified."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which device operates at the lowest layer of the OSI model?",
        "options": [
            "Router",
            "Switch",
            "Hub",
            "Bridge"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Hub",
        "difficulty": "hard",
        "explanation": "A hub operates at the physical layer (Layer 1) of the OSI model, simply repeating electrical signals without any intelligent routing.",
        "hint": "Think about the most basic network device."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is the primary benefit of a client-server network?",
        "options": [
            "Lower cost",
            "Decentralized control",
            "Centralized resource management",
            "Unlimited scalability"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Centralized resource management",
        "difficulty": "medium",
        "explanation": "In a client-server network, resources are centrally managed on dedicated servers, allowing for better control, security, and resource allocation.",
        "hint": "Consider how resources are organized and controlled."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What does QoS stand for in networking?",
        "options": [
            "Quantum of Service",
            "Quality of Service",
            "Quantified Operational Standards",
            "Quick Operating System"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Quality of Service",
        "difficulty": "medium",
        "explanation": "Quality of Service (QoS) is a set of technologies that manage network resources, ensuring performance for specific types of network traffic.",
        "hint": "Think about prioritizing different types of network traffic."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "What is network virtualization?",
        "options": [
            "Creating virtual network cables",
            "Simulating network devices",
            "Abstracting network resources from hardware",
            "Running multiple network simulations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Abstracting network resources from hardware",
        "difficulty": "hard",
        "explanation": "Network virtualization involves combining hardware and software network resources into a single, software-based administrative entity.",
        "hint": "Consider how network resources can be logically separated from physical infrastructure."
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Network Fundamentals",
        "questionText": "Which network topology is most cost-effective for small networks?",
        "options": [
            "Mesh Topology",
            "Star Topology",
            "Bus Topology",
            "Ring Topology"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Bus Topology",
        "difficulty": "medium",
        "explanation": "Bus topology is the most cost-effective for small networks, as it requires less cabling and is simple to implement.",
        "hint": "Think about the simplest and least expensive network design."
    },

    // OSI & TCP/IP Models
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "How many layers are there in the OSI Reference Model?",
        "options": ["5", "6", "7", "8"],
        "correctOptionIndex": 2,
        "correctOptionText": "7",
        "difficulty": "easy",
        "explanation": "The OSI (Open Systems Interconnection) Reference Model consists of 7 layers from Physical to Application layer.",
        "hint": "Count the layers from bottom to top: Physical, Data Link, Network, Transport, Session, Presentation, Application"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which layer in the OSI model is responsible for routing and logical addressing?",
        "options": ["Data Link Layer", "Physical Layer", "Network Layer", "Transport Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Network Layer",
        "difficulty": "easy",
        "explanation": "The Network Layer handles routing, logical addressing (like IP addresses), and determines the best path for data transmission.",
        "hint": "This layer works with IP addresses and routers"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which layer of the OSI model ensures reliable communication between hosts?",
        "options": ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Transport Layer",
        "difficulty": "medium",
        "explanation": "The Transport Layer (Layer 4) provides end-to-end communication, handles segmentation, flow control, and ensures reliable data delivery.",
        "hint": "This layer uses protocols like TCP and UDP"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is the primary function of the Physical Layer in the OSI model?",
        "options": [
            "Data encryption", 
            "Routing of packets", 
            "Transmission of raw bits over a physical medium", 
            "Managing network sessions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Transmission of raw bits over a physical medium",
        "difficulty": "medium",
        "explanation": "The Physical Layer deals with the actual transmission of raw bit streams over a physical medium like cables, wireless signals, etc.",
        "hint": "This is the lowest layer in the OSI model"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "In the TCP/IP model, which layer is equivalent to the OSI model's Network and Data Link layers?",
        "options": ["Application Layer", "Internet Layer", "Transport Layer", "Network Access Layer"],
        "correctOptionIndex": 3,
        "correctOptionText": "Network Access Layer",
        "difficulty": "hard",
        "explanation": "The TCP/IP Network Access Layer combines the functionalities of OSI's Physical and Data Link layers, handling network interface and physical transmission.",
        "hint": "This layer is responsible for network interface and hardware addressing"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which OSI layer is responsible for data representation and encryption?",
        "options": ["Presentation Layer", "Session Layer", "Application Layer", "Transport Layer"],
        "correctOptionIndex": 0,
        "correctOptionText": "Presentation Layer",
        "difficulty": "medium",
        "explanation": "The Presentation Layer handles data formatting, encryption, compression, and translation between different data formats.",
        "hint": "This layer prepares data for the application layer"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is the key difference between TCP and UDP at the Transport Layer?",
        "options": [
            "Packet size", 
            "Connection type (connection-oriented vs connectionless)", 
            "IP address management", 
            "Routing mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Connection type (connection-oriented vs connectionless)",
        "difficulty": "hard",
        "explanation": "TCP is connection-oriented and provides reliable, ordered delivery, while UDP is connectionless and provides faster, best-effort transmission.",
        "hint": "Consider reliability vs speed in data transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which layer in the OSI model manages establishing, maintaining, and terminating sessions between applications?",
        "options": ["Presentation Layer", "Session Layer", "Application Layer", "Transport Layer"],
        "correctOptionIndex": 1,
        "correctOptionText": "Session Layer",
        "difficulty": "medium",
        "explanation": "The Session Layer controls dialogues between communicating devices, manages session and connection establishment, maintenance, and termination.",
        "hint": "Think about managing communication conversations"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "How many layers are in the TCP/IP model?",
        "options": ["5", "4", "6", "7"],
        "correctOptionIndex": 1,
        "correctOptionText": "4",
        "difficulty": "easy",
        "explanation": "The TCP/IP model consists of 4 layers: Network Access, Internet, Transport, and Application layers.",
        "hint": "Fewer layers compared to the OSI model"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which protocol operates at the Application Layer in both OSI and TCP/IP models?",
        "options": ["IP", "TCP", "HTTP", "ICMP"],
        "correctOptionIndex": 2,
        "correctOptionText": "HTTP",
        "difficulty": "medium",
        "explanation": "HTTP (Hypertext Transfer Protocol) is an Application Layer protocol used for web communication.",
        "hint": "This protocol is used for web browsing"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What type of addressing is used at the Data Link Layer?",
        "options": ["Logical Addressing", "Physical Addressing", "Network Addressing", "Broadcast Addressing"],
        "correctOptionIndex": 1,
        "correctOptionText": "Physical Addressing",
        "difficulty": "medium",
        "explanation": "The Data Link Layer uses MAC (Media Access Control) addresses for physical addressing of network interfaces.",
        "hint": "Think about hardware-level addressing"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "In the OSI model, which layer provides end-to-end connections and data flow control?",
        "options": ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Transport Layer",
        "difficulty": "hard",
        "explanation": "The Transport Layer manages end-to-end connections, provides reliable data transfer, and implements flow control mechanisms.",
        "hint": "Responsible for segmentation and reassembly of data"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is encapsulation in networking context?",
        "options": [
            "Hiding network details", 
            "Adding protocol information as data moves down the OSI layers", 
            "Encrypting network traffic", 
            "Compressing data packets"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Adding protocol information as data moves down the OSI layers",
        "difficulty": "hard",
        "explanation": "Encapsulation is the process of adding protocol-specific information at each OSI layer as data travels from the Application Layer to the Physical Layer.",
        "hint": "Think about how data gets wrapped with additional information"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which OSI layer is responsible for converting data between different formats?",
        "options": ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
        "correctOptionIndex": 1,
        "correctOptionText": "Presentation Layer",
        "difficulty": "medium",
        "explanation": "The Presentation Layer handles data translation, encryption, and compression, ensuring data can be understood by different systems.",
        "hint": "Focuses on data representation and formatting"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "In the TCP/IP model, which layer is equivalent to the OSI's Application, Presentation, and Session layers?",
        "options": ["Transport Layer", "Internet Layer", "Application Layer", "Network Access Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Application Layer",
        "difficulty": "hard",
        "explanation": "The TCP/IP Application Layer combines the functionalities of OSI's top three layers, handling high-level protocols and application services.",
        "hint": "Simplifies the layered approach compared to OSI"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What function does the Session Layer perform in the OSI model?",
        "options": [
            "Routing packets", 
            "Managing application sessions and dialogues", 
            "Encrypting data", 
            "Handling physical transmission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Managing application sessions and dialogues",
        "difficulty": "medium",
        "explanation": "The Session Layer establishes, manages, and terminates sessions between applications, controlling the communication dialogue.",
        "hint": "Manages communication conversations between applications"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which layer is responsible for logical addressing in the OSI model?",
        "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Network Layer",
        "difficulty": "easy",
        "explanation": "The Network Layer handles logical addressing (like IP addresses) and determines the best path for data transmission.",
        "hint": "This layer works with IP routing"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What does the Internet Layer in TCP/IP primarily do?",
        "options": [
            "Manage physical connections", 
            "Handle end-to-end communications", 
            "Provide logical addressing and routing", 
            "Encrypt network traffic"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Provide logical addressing and routing",
        "difficulty": "medium",
        "explanation": "The Internet Layer is responsible for logical addressing, routing, and moving packets between networks.",
        "hint": "Equivalent to the Network Layer in OSI model"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which protocol operates at the Internet Layer of the TCP/IP model?",
        "options": ["TCP", "UDP", "IP", "HTTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "IP",
        "difficulty": "easy",
        "explanation": "IP (Internet Protocol) operates at the Internet Layer, handling logical addressing and routing of packets.",
        "hint": "This protocol manages packet routing"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is the primary purpose of the Data Link Layer in the OSI model?",
        "options": [
            "Routing packets", 
            "Managing network sessions", 
            "Providing node-to-node data transfer", 
            "Encrypting data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Providing node-to-node data transfer",
        "difficulty": "medium",
        "explanation": "The Data Link Layer is responsible for node-to-node data transfer, error detection, and managing physical addressing (MAC addresses).",
        "hint": "Handles communication between directly connected devices"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which OSI layer is closest to the end-user application?",
        "options": ["Presentation Layer", "Session Layer", "Transport Layer", "Application Layer"],
        "correctOptionIndex": 3,
        "correctOptionText": "Application Layer",
        "difficulty": "easy",
        "explanation": "The Application Layer is the topmost layer in the OSI model, directly interacting with end-user applications and providing network services.",
        "hint": "Highest layer in the OSI model"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is the main difference between the OSI and TCP/IP models?",
        "options": [
            "Number of layers", 
            "Protocols used", 
            "Networking approach", 
            "Physical transmission methods"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Number of layers",
        "difficulty": "hard",
        "explanation": "The primary difference is the number of layers: OSI has 7 layers, while TCP/IP has 4 layers, with TCP/IP being more practical and widely implemented.",
        "hint": "Compare the layer structures of both models"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which layer handles data segmentation in the OSI model?",
        "options": ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Transport Layer",
        "difficulty": "medium",
        "explanation": "The Transport Layer breaks large data into smaller segments for transmission and handles reassembly at the destination.",
        "hint": "Responsible for breaking down and rebuilding data"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What protocol operates at the Transport Layer in both OSI and TCP/IP models?",
        "options": ["IP", "HTTP", "TCP", "ICMP"],
        "correctOptionIndex": 2,
        "correctOptionText": "TCP",
        "difficulty": "easy",
        "explanation": "TCP (Transmission Control Protocol) operates at the Transport Layer, providing reliable, connection-oriented communication.",
        "hint": "Used for reliable data transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What function does the Physical Layer perform in the OSI model?",
        "options": [
            "Routing packets", 
            "Managing network sessions", 
            "Transmitting raw bits over physical media", 
            "Encrypting data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Transmitting raw bits over physical media",
        "difficulty": "medium",
        "explanation": "The Physical Layer deals with the actual transmission of raw bit streams over physical media like cables, wireless signals, etc.",
        "hint": "Lowest layer in the OSI model"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "In the TCP/IP model, which layer is responsible for end-to-end communication?",
        "options": ["Network Access Layer", "Internet Layer", "Transport Layer", "Application Layer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Transport Layer",
        "difficulty": "hard",
        "explanation": "The Transport Layer in TCP/IP manages end-to-end communication, providing reliable data transfer and flow control.",
        "hint": "Handles data segmentation and reassembly"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is the primary role of the Session Layer in network communication?",
        "options": [
            "Data encryption", 
            "Establishing and managing communication sessions", 
            "Routing packets", 
            "Physical data transmission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Establishing and managing communication sessions",
        "difficulty": "medium",
        "explanation": "The Session Layer establishes, manages, and terminates sessions between applications, controlling the communication dialogue.",
        "hint": "Manages communication conversations"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "Which layer is responsible for frame synchronization in the OSI model?",
        "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
        "correctOptionIndex": 1,
        "correctOptionText": "Data Link Layer",
        "difficulty": "hard",
        "explanation": "The Data Link Layer handles frame synchronization, ensuring data is properly packaged and synchronized between adjacent network nodes.",
        "hint": "Manages data packaging and synchronization"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "OSI & TCP/IP Models",
        "questionText": "What is the key characteristic of the Application Layer in networking?",
        "options": [
            "Routing packets", 
            "Providing network services to end-user applications", 
            "Managing physical connections", 
            "Encrypting data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Providing network services to end-user applications",
        "difficulty": "medium",
        "explanation": "The Application Layer provides network services directly to end-user applications, defining protocols like HTTP, FTP, and SMTP.",
        "hint": "Closest layer to user interaction"
    },

    // Physical Layer

    // Data Link Layer

    // Network Layer & IP Addressing

    // Routing Protocols

    // Transport Layer

    // Application Layer

    // Network Security

    // Wireless Networks

    // Wide Area Networks

    // Network Management

    // IPv6

    // Software-Defined Networking

    // Cloud Networking

    // Emerging Network Technologies

]

export default CNQuestions;