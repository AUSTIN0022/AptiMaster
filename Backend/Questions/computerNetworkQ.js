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
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary function of the Physical Layer in the network communication model?",
        "options": [
            "Data encryption", 
            "Routing packets", 
            "Transmitting raw bits over a physical medium", 
            "Managing network sessions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Transmitting raw bits over a physical medium",
        "difficulty": "easy",
        "explanation": "The Physical Layer is responsible for the actual transmission of raw bit streams over physical transmission media like cables, wireless signals, etc.",
        "hint": "Lowest layer in the network communication model"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary purpose of a repeater in network communication?",
        "options": [
            "Filtering network traffic", 
            "Regenerating and retransmitting signals", 
            "Connecting different network types", 
            "Encrypting data transmission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Regenerating and retransmitting signals",
        "difficulty": "medium",
        "explanation": "Repeaters regenerate and retransmit signals to extend the transmission distance by combating signal degradation over long distances.",
        "hint": "Helps maintain signal strength across network segments"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What does bandwidth represent in physical layer communication?",
        "options": [
            "Network security level", 
            "Data transmission capacity", 
            "Number of connected devices", 
            "Signal processing speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data transmission capacity",
        "difficulty": "easy",
        "explanation": "Bandwidth represents the maximum data transmission capacity of a communication channel, typically measured in bits per second (bps).",
        "hint": "Think about how much data can be sent through a network connection"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "Which transmission medium offers the highest bandwidth?",
        "options": [
            "Coaxial Cable", 
            "Twisted Pair Cable", 
            "Fiber Optic Cable", 
            "Wireless"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Fiber Optic Cable",
        "difficulty": "medium",
        "explanation": "Fiber optic cables provide the highest bandwidth and lowest signal loss, using light pulses to transmit data over long distances.",
        "hint": "Uses light for data transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is multiplexing in physical layer communication?",
        "options": [
            "Data encryption method", 
            "Combining multiple signals on a single transmission medium", 
            "Network routing technique", 
            "Signal compression method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Combining multiple signals on a single transmission medium",
        "difficulty": "hard",
        "explanation": "Multiplexing allows multiple signals to be transmitted simultaneously over a single communication channel, increasing transmission efficiency.",
        "hint": "Enables multiple data streams to use the same physical medium"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary difference between analog and digital transmission?",
        "options": [
            "Transmission speed", 
            "Signal representation", 
            "Network security", 
            "Bandwidth usage"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Signal representation",
        "difficulty": "medium",
        "explanation": "Analog transmission uses continuous signals, while digital transmission uses discrete binary signals (0s and 1s).",
        "hint": "Consider how information is represented in the transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is a key characteristic of twisted pair cables?",
        "options": [
            "Highest bandwidth", 
            "Electromagnetic interference resistance", 
            "Wireless transmission", 
            "Optical signal transmission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Electromagnetic interference resistance",
        "difficulty": "medium",
        "explanation": "Twisted pair cables have pairs of insulated copper wires twisted together to reduce electromagnetic interference.",
        "hint": "Used in Ethernet and telephone networks"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What does modulation do in physical layer communication?",
        "options": [
            "Data encryption", 
            "Varying signal characteristics to encode data", 
            "Routing packets", 
            "Compressing data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Varying signal characteristics to encode data",
        "difficulty": "hard",
        "explanation": "Modulation involves varying a carrier signal's characteristics (amplitude, frequency, or phase) to encode digital or analog data.",
        "hint": "Transforms data into a format suitable for transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary function of a transceiver?",
        "options": [
            "Data routing", 
            "Signal conversion between transmission and reception", 
            "Network security", 
            "Data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Signal conversion between transmission and reception",
        "difficulty": "medium",
        "explanation": "A transceiver is a device that can both transmit and receive signals, converting between transmission and reception modes.",
        "hint": "Combines transmitter and receiver functions"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is attenuation in physical layer communication?",
        "options": [
            "Signal encryption", 
            "Signal strength reduction over distance", 
            "Signal amplification", 
            "Data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Signal strength reduction over distance",
        "difficulty": "medium",
        "explanation": "Attenuation is the gradual loss of signal strength as it travels through a transmission medium.",
        "hint": "Explains why signals weaken over long distances"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary advantage of coaxial cables?",
        "options": [
            "Wireless transmission", 
            "High bandwidth and noise resistance", 
            "Optical signal transmission", 
            "Lowest cost"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "High bandwidth and noise resistance",
        "difficulty": "medium",
        "explanation": "Coaxial cables offer high bandwidth and good resistance to electromagnetic interference due to their shielded design.",
        "hint": "Used in cable television and some network installations"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is synchronous transmission?",
        "options": [
            "Wireless data transmission", 
            "Data transmission with predefined timing signals", 
            "Encryption method", 
            "Data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data transmission with predefined timing signals",
        "difficulty": "hard",
        "explanation": "Synchronous transmission uses predefined timing signals to synchronize data transmission between sender and receiver.",
        "hint": "Ensures precise timing of data bits"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What does baseband transmission mean?",
        "options": [
            "Multiple signal transmission", 
            "Digital signal transmission on full channel bandwidth", 
            "Wireless transmission", 
            "Analog signal transmission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Digital signal transmission on full channel bandwidth",
        "difficulty": "hard",
        "explanation": "Baseband transmission involves sending digital signals using the entire channel bandwidth without frequency division.",
        "hint": "Uses the full capacity of the transmission medium"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary function of line coding in physical layer?",
        "options": [
            "Data encryption", 
            "Converting digital data for transmission", 
            "Network routing", 
            "Signal compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Converting digital data for transmission",
        "difficulty": "medium",
        "explanation": "Line coding converts digital data into a format suitable for transmission over a physical medium, ensuring reliable signal transmission.",
        "hint": "Prepares digital signals for physical transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary characteristic of fiber optic cables?",
        "options": [
            "Lowest cost", 
            "Transmission using light signals", 
            "Wireless transmission", 
            "Highest electromagnetic interference"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transmission using light signals",
        "difficulty": "easy",
        "explanation": "Fiber optic cables transmit data using light pulses through glass or plastic fibers, offering high bandwidth and low signal loss.",
        "hint": "Uses light instead of electrical signals"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What does the term 'bit rate' represent?",
        "options": [
            "Network security level", 
            "Number of bits transmitted per second", 
            "Number of connected devices", 
            "Signal processing speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Number of bits transmitted per second",
        "difficulty": "easy",
        "explanation": "Bit rate is the number of bits transmitted per second, typically measured in bits per second (bps).",
        "hint": "Measures data transmission speed"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the purpose of a hub in physical layer communication?",
        "options": [
            "Routing packets", 
            "Broadcasting signals to all connected devices", 
            "Encrypting data", 
            "Compressing data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Broadcasting signals to all connected devices",
        "difficulty": "medium",
        "explanation": "A hub is a basic networking device that broadcasts incoming signals to all connected devices, operating at the physical layer.",
        "hint": "Operates as a simple signal distributor"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is frequency division multiplexing (FDM)?",
        "options": [
            "Data encryption method", 
            "Dividing bandwidth into separate frequency channels", 
            "Network routing technique", 
            "Signal compression method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Dividing bandwidth into separate frequency channels",
        "difficulty": "hard",
        "explanation": "Frequency Division Multiplexing (FDM) divides the total bandwidth of a communication channel into multiple non-overlapping frequency channels.",
        "hint": "Allows multiple signals to use different frequencies"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary difference between simplex, half-duplex, and full-duplex transmission?",
        "options": [
            "Signal strength", 
            "Data transmission direction", 
            "Bandwidth usage", 
            "Network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data transmission direction",
        "difficulty": "hard",
        "explanation": "Simplex allows transmission in one direction, half-duplex allows alternating transmission, and full-duplex allows simultaneous transmission in both directions.",
        "hint": "Consider communication flow between sender and receiver"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary challenge with wireless transmission?",
        "options": [
            "High cost", 
            "Signal interference and attenuation", 
            "Limited encryption", 
            "Slow transmission speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Signal interference and attenuation",
        "difficulty": "medium",
        "explanation": "Wireless transmission faces challenges like signal interference from other devices, obstacles, and signal strength reduction over distance.",
        "hint": "External factors affect signal quality"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is time division multiplexing (TDM)?",
        "options": [
            "Data encryption method", 
            "Dividing transmission time into fixed-length slots", 
            "Network routing technique", 
            "Signal compression method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Dividing transmission time into fixed-length slots",
        "difficulty": "hard",
        "explanation": "Time Division Multiplexing (TDM) divides the transmission time into fixed-length slots, allowing multiple signals to share the same transmission medium.",
        "hint": "Allocates specific time slots for different signals"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary function of encoding in physical layer?",
        "options": [
            "Data routing", 
            "Converting data for reliable transmission", 
            "Network security", 
            "Data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Converting data for reliable transmission",
        "difficulty": "medium",
        "explanation": "Encoding converts digital data into a format that ensures reliable transmission, including error detection and synchronization.",
        "hint": "Prepares data for physical transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the maximum theoretical bandwidth of standard Category 6 (Cat 6) Ethernet cable?",
        "options": ["100 Mbps", "1 Gbps", "10 Gbps", "40 Gbps"],
        "correctOptionIndex": 2,
        "correctOptionText": "10 Gbps",
        "difficulty": "hard",
        "explanation": "Category 6 (Cat 6) Ethernet cables can support up to 10 Gbps transmission speeds over distances up to 55 meters.",
        "hint": "Considers both speed and distance limitations"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What does Manchester encoding do in digital transmission?",
        "options": [
            "Data encryption", 
            "Ensuring signal transitions for clock synchronization", 
            "Data compression", 
            "Network routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ensuring signal transitions for clock synchronization",
        "difficulty": "hard",
        "explanation": "Manchester encoding ensures a signal transition for every bit, providing inherent clock synchronization and easier signal detection.",
        "hint": "Combines data and clock signal in one transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary advantage of wireless transmission?",
        "options": [
            "Highest bandwidth", 
            "Mobility and flexibility", 
            "Lowest cost", 
            "Highest security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Mobility and flexibility",
        "difficulty": "easy",
        "explanation": "Wireless transmission offers mobility and flexibility, allowing devices to connect without physical cable constraints.",
        "hint": "Consider freedom of movement and device placement"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is noise in physical layer communication?",
        "options": [
            "Network security threat", 
            "Unwanted signals that distort data transmission", 
            "Data compression technique", 
            "Routing method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Unwanted signals that distort data transmission",
        "difficulty": "medium",
        "explanation": "Noise refers to unwanted electrical or electromagnetic signals that interfere with and distort data transmission.",
        "hint": "External factors that affect signal quality"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary purpose of a modem in physical layer communication?",
        "options": [
            "Network routing", 
            "Modulating and demodulating signals", 
            "Data encryption", 
            "Signal compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Modulating and demodulating signals",
        "difficulty": "easy",
        "explanation": "A modem (modulator-demodulator) converts digital signals from computers to analog signals for transmission and vice versa.",
        "hint": "Bridges digital and analog communication"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is wavelength division multiplexing (WDM)?",
        "options": [
            "Data encryption method", 
            "Transmitting multiple signals using different light wavelengths", 
            "Network routing technique", 
            "Signal compression method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transmitting multiple signals using different light wavelengths",
        "difficulty": "hard",
        "explanation": "Wavelength Division Multiplexing (WDM) allows multiple optical signals to be transmitted simultaneously using different light wavelengths on a single fiber optic cable.",
        "hint": "Increases data transmission capacity in fiber optics"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Physical Layer",
        "questionText": "What is the primary function of a transducer in physical layer?",
        "options": [
            "Data routing", 
            "Converting one form of energy to another", 
            "Network security", 
            "Data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Converting one form of energy to another",
        "difficulty": "medium",
        "explanation": "A transducer converts one form of energy to another, such as converting electrical signals to sound or light for transmission.",
        "hint": "Enables energy transformation in communication"
    },

    // Data Link Layer
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the primary function of the Data Link Layer in the OSI model?",
        "options": [
            "Routing packets between networks",
            "Providing node-to-node data transfer",
            "Establishing end-to-end connections",
            "Managing IP addressing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Providing node-to-node data transfer",
        "difficulty": "easy",
        "explanation": "The Data Link Layer is responsible for reliable transmission of data between two directly connected nodes in a network.",
        "hint": "Focus on communication between adjacent network devices"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What does MAC stand for in networking?",
        "options": [
            "Multiple Access Control",
            "Media Access Control",
            "Maximum Access Channel",
            "Managed Access Connectivity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Media Access Control",
        "difficulty": "easy",
        "explanation": "MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications on the physical network segment.",
        "hint": "Think about device-specific addressing at the lowest network level"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which sublayer of the Data Link Layer is responsible for addressing and frame synchronization?",
        "options": [
            "Physical Layer",
            "Logical Link Control (LLC)",
            "Media Access Control (MAC)",
            "Network Layer"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Logical Link Control (LLC)",
        "difficulty": "medium",
        "explanation": "The LLC sublayer provides addressing and control mechanisms for network communications, handling frame synchronization and error control.",
        "hint": "Consider the layer responsible for communication between network layers"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the purpose of CRC (Cyclic Redundancy Check) in the Data Link Layer?",
        "options": [
            "Data compression",
            "Encryption",
            "Error detection",
            "Network routing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Error detection",
        "difficulty": "medium",
        "explanation": "CRC is an error-detecting code used to detect accidental changes or errors in raw data at the Data Link Layer.",
        "hint": "Think about ensuring data integrity during transmission"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which Ethernet standard uses CSMA/CD access method?",
        "options": [
            "10BASE-T",
            "100BASE-TX",
            "1000BASE-T",
            "10GBASE-T"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "10BASE-T",
        "difficulty": "medium",
        "explanation": "10BASE-T is an Ethernet standard that uses Carrier Sense Multiple Access with Collision Detection (CSMA/CD).",
        "hint": "Look for the older Ethernet standard"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the maximum length of an Ethernet frame?",
        "options": [
            "1518 bytes",
            "512 bytes",
            "2048 bytes",
            "4096 bytes"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "1518 bytes",
        "difficulty": "medium",
        "explanation": "A standard Ethernet frame has a maximum length of 1518 bytes, including header and trailer information.",
        "hint": "Consider the standard maximum frame size in traditional Ethernet"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the primary purpose of framing in the Data Link Layer?",
        "options": [
            "Data encryption",
            "Routing data",
            "Packaging data for transmission",
            "Compressing data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Packaging data for transmission",
        "difficulty": "easy",
        "explanation": "Framing is the process of dividing data into manageable units called frames, adding header and trailer information for reliable transmission.",
        "hint": "Think about organizing data for network transmission"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which type of addressing is used in the Data Link Layer?",
        "options": [
            "IP addressing",
            "Logical addressing",
            "Physical (MAC) addressing",
            "Port addressing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Physical (MAC) addressing",
        "difficulty": "easy",
        "explanation": "The Data Link Layer uses physical or MAC addressing to identify specific network interfaces.",
        "hint": "Consider the hardware-specific address used for network communication"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the function of the preamble in an Ethernet frame?",
        "options": [
            "Data encryption",
            "Frame synchronization",
            "Error correction",
            "Address resolution"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Frame synchronization",
        "difficulty": "hard",
        "explanation": "The preamble is a sequence of alternating 1s and 0s that helps receivers synchronize with the incoming frame and prepare for data reception.",
        "hint": "Think about how devices prepare to receive network data"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which error detection method is most commonly used in the Data Link Layer?",
        "options": [
            "Parity check",
            "Cyclic Redundancy Check (CRC)",
            "Hamming code",
            "Checksum"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Cyclic Redundancy Check (CRC)",
        "difficulty": "medium",
        "explanation": "CRC is the most widely used error detection method in the Data Link Layer due to its effectiveness in detecting transmission errors.",
        "hint": "Consider the most robust error detection technique"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the purpose of the LLC sublayer?",
        "options": [
            "Physical transmission of bits",
            "Providing an interface to the network layer",
            "Managing physical network connections",
            "Handling MAC addressing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Providing an interface to the network layer",
        "difficulty": "hard",
        "explanation": "The Logical Link Control (LLC) sublayer provides a uniform interface to the network layer and handles frame synchronization, flow control, and error control.",
        "hint": "Think about the communication bridge between different network layers"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What does VLAN stand for?",
        "options": [
            "Virtual Local Area Network",
            "Virtual Link Access Network",
            "Verified Local Area Network",
            "Virtual Logical Access Network"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Virtual Local Area Network",
        "difficulty": "easy",
        "explanation": "VLAN is a method of creating multiple logical networks within a single physical network infrastructure.",
        "hint": "Consider network segmentation at the Data Link Layer"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which of the following is NOT a type of framing method?",
        "options": [
            "Character-oriented framing",
            "Bit-oriented framing",
            "Length-oriented framing",
            "Protocol-oriented framing"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Protocol-oriented framing",
        "difficulty": "hard",
        "explanation": "The three main framing methods are character-oriented, bit-oriented, and length-oriented. Protocol-oriented framing is not a standard framing technique.",
        "hint": "Identify the non-standard framing method"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the purpose of a switch at the Data Link Layer?",
        "options": [
            "Routing between networks",
            "Filtering and forwarding frames based on MAC addresses",
            "Translating IP addresses",
            "Compressing network traffic"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Filtering and forwarding frames based on MAC addresses",
        "difficulty": "medium",
        "explanation": "A switch operates at the Data Link Layer and uses MAC addresses to intelligently forward frames to the correct destination port.",
        "hint": "Think about device-level network communication"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is ARQ in data link protocols?",
        "options": [
            "Automatic Request Queuing",
            "Adaptive Routing Qualifier",
            "Automatic Repeat reQuest",
            "Advanced Routing Queue"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Automatic Repeat reQuest",
        "difficulty": "hard",
        "explanation": "ARQ is an error control method where the receiver sends acknowledgments for received frames and requests retransmission of lost or corrupted frames.",
        "hint": "Consider error recovery mechanisms in network communication"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which addressing is used in Ethernet frames?",
        "options": [
            "IP addressing",
            "Subnet addressing",
            "MAC addressing",
            "Logical addressing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "MAC addressing",
        "difficulty": "easy",
        "explanation": "Ethernet frames use MAC (Media Access Control) addresses to identify source and destination network interfaces.",
        "hint": "Think about hardware-level addressing in Ethernet"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the function of the trailer in a data link frame?",
        "options": [
            "Adding network layer information",
            "Providing frame synchronization",
            "Error detection and correction",
            "Compressing data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Error detection and correction",
        "difficulty": "medium",
        "explanation": "The trailer typically contains error-checking information like CRC to detect and potentially correct transmission errors.",
        "hint": "Consider the end-of-frame error-checking mechanism"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the primary difference between half-duplex and full-duplex communication?",
        "options": [
            "Transmission speed",
            "Network topology",
            "Simultaneous data transmission",
            "Packet size"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Simultaneous data transmission",
        "difficulty": "medium",
        "explanation": "Half-duplex allows transmission in only one direction at a time, while full-duplex enables simultaneous bidirectional communication.",
        "hint": "Think about data flow in communication channels"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What protocol is used in PPP (Point-to-Point Protocol)?",
        "options": [
            "UDP",
            "TCP",
            "HDLC",
            "ICMP"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "HDLC",
        "difficulty": "hard",
        "explanation": "PPP is based on the High-Level Data Link Control (HDLC) protocol, used for point-to-point connections.",
        "hint": "Consider the data link protocol for direct connections"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the purpose of a bridge in the Data Link Layer?",
        "options": [
            "Connecting different network types",
            "Routing between networks",
            "Filtering network traffic",
            "Translating network protocols"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Connecting different network types",
        "difficulty": "medium",
        "explanation": "A bridge operates at the Data Link Layer and connects network segments with different characteristics, filtering and forwarding frames.",
        "hint": "Think about network segment interconnection"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What does the term 'collision domain' refer to?",
        "options": [
            "A network with multiple switches",
            "An area where network devices can cause data collisions",
            "A router's coverage area",
            "A security perimeter"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An area where network devices can cause data collisions",
        "difficulty": "hard",
        "explanation": "A collision domain is a network segment where devices can potentially interfere with each other's transmissions, causing data collisions.",
        "hint": "Consider network communication interference"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which Ethernet standard supports 10 Gbps transmission?",
        "options": [
            "10BASE-T",
            "100BASE-TX",
            "1000BASE-T",
            "10GBASE-T"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "10GBASE-T",
        "difficulty": "medium",
        "explanation": "10GBASE-T is the Ethernet standard that supports 10 Gigabit per second transmission over twisted pair cables.",
        "hint": "Look for the standard with the highest transmission speed"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the primary function of MAC sublayer?",
        "options": [
            "Providing network layer interfaces",
            "Managing physical transmission",
            "Handling device addressing and channel access",
            "Encrypting network data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Handling device addressing and channel access",
        "difficulty": "hard",
        "explanation": "The MAC sublayer is responsible for device-specific addressing and managing access to the shared communication channel.",
        "hint": "Think about low-level network communication management"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the purpose of flow control in the Data Link Layer?",
        "options": [
            "Encrypting data",
            "Routing packets",
            "Preventing sender from overwhelming receiver",
            "Increasing network speed"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Preventing sender from overwhelming receiver",
        "difficulty": "medium",
        "explanation": "Flow control manages the rate of data transmission to ensure the receiver can process incoming frames without being overwhelmed.",
        "hint": "Consider data transmission synchronization"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which addressing is used in ARP (Address Resolution Protocol)?",
        "options": [
            "Only MAC addressing",
            "Only IP addressing",
            "Both MAC and IP addressing",
            "Network layer addressing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Both MAC and IP addressing",
        "difficulty": "hard",
        "explanation": "ARP maps IP addresses to MAC addresses, bridging the Network and Data Link Layers.",
        "hint": "Think about address translation between layers"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the maximum MAC address length?",
        "options": [
            "32 bits",
            "48 bits",
            "64 bits",
            "128 bits"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "48 bits",
        "difficulty": "easy",
        "explanation": "Standard MAC addresses are 48 bits (6 bytes) long, providing a unique identifier for network interfaces.",
        "hint": "Consider the standard MAC address length"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What does CSMA/CA stand for?",
        "options": [
            "Carrier Sense Multiple Access with Collision Avoidance",
            "Channel Sensing Multiple Access",
            "Carrier Signal Multiple Allocation",
            "Collision Synchronization Multiple Access"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Carrier Sense Multiple Access with Collision Avoidance",
        "difficulty": "hard",
        "explanation": "CSMA/CA is a network protocol that helps prevent data collisions by requiring devices to check the channel before transmitting.",
        "hint": "Think about preventing network communication conflicts"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "Which device operates primarily at the Data Link Layer?",
        "options": [
            "Router",
            "Switch",
            "Firewall",
            "Gateway"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Switch",
        "difficulty": "easy",
        "explanation": "A switch operates primarily at the Data Link Layer, using MAC addresses to forward frames between network segments.",
        "hint": "Consider the device that works with MAC addresses"
    },
    {
        "topicId": "67d6b45a953bd3a26da2ad89",
        "module": "Data Link Layer",
        "questionText": "What is the purpose of bit stuffing?",
        "options": [
            "Data encryption",
            "Error detection",
            "Preventing frame synchronization issues",
            "Increasing transmission speed"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Preventing frame synchronization issues",
        "difficulty": "hard",
        "explanation": "Bit stuffing is a technique used in bit-oriented framing to ensure proper frame synchronization by inserting additional bits.",
        "hint": "Think about maintaining frame boundaries during transmission"
    },

    // Network Layer & IP Addressing
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the default subnet mask for a Class B IP address?",
        "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        "correctOptionIndex": 1,
        "correctOptionText": "255.255.0.0",
        "difficulty": "easy",
        "explanation": "Class B IP addresses have a default subnet mask of 255.255.0.0, which means the first two octets represent the network portion.",
        "hint": "Think about the network bits in a Class B address."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the total number of usable host addresses in the subnet 192.168.1.0/24?",
        "options": ["254", "256", "252", "258"],
        "correctOptionIndex": 0,
        "correctOptionText": "254",
        "difficulty": "easy",
        "explanation": "In a /24 subnet, two IP addresses are reserved for network and broadcast addresses, leaving 254 usable host addresses.",
        "hint": "Subtract 2 from the total possible addresses in a /24 network."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which address class does 172.16.0.0 belong to?",
        "options": ["Class A", "Class B", "Class C", "Class D"],
        "correctOptionIndex": 1,
        "correctOptionText": "Class B",
        "difficulty": "easy",
        "explanation": "IP addresses starting with 172 are in the Class B range, with the first two octets representing the network portion.",
        "hint": "Look at the first octet to determine the address class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is CIDR notation for a subnet mask of 255.255.255.192?",
        "options": ["/24", "/25", "/26", "/27"],
        "correctOptionIndex": 2,
        "correctOptionText": "/26",
        "difficulty": "medium",
        "explanation": "255.255.255.192 represents a /26 CIDR notation, which means 26 bits are used for the network portion.",
        "hint": "Count the consecutive 1's in the binary representation of the subnet mask."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the network address for 192.168.10.45/28?",
        "options": ["192.168.10.32", "192.168.10.40", "192.168.10.48", "192.168.10.0"],
        "correctOptionIndex": 0,
        "correctOptionText": "192.168.10.32",
        "difficulty": "medium",
        "explanation": "For a /28 subnet, the network address is the lowest address in the subnet range that is divisible by the subnet size.",
        "hint": "Round down to the nearest multiple of the subnet size."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which of the following is a private IP address range?",
        "options": [
            "10.0.0.0 - 10.255.255.255", 
            "172.32.0.0 - 172.63.255.255", 
            "192.168.0.0 - 192.168.255.255", 
            "All of the above"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "10.0.0.0 - 10.255.255.255",
        "difficulty": "easy",
        "explanation": "10.0.0.0/8 is a private IP address range defined by RFC 1918 for internal network use.",
        "hint": "Private IP addresses are used in local networks and are not routable on the public internet."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "How many subnets are created by borrowing 3 bits from a Class C network?",
        "options": ["4", "6", "8", "16"],
        "correctOptionIndex": 2,
        "correctOptionText": "8",
        "difficulty": "medium",
        "explanation": "Borrowing 3 bits creates 2^3 = 8 subnets. The formula is 2^(borrowed bits).",
        "hint": "Use the formula 2^(number of borrowed bits)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the purpose of the default gateway in IP networking?",
        "options": [
            "To assign IP addresses", 
            "To route traffic between different networks", 
            "To create subnets", 
            "To perform DNS resolution"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To route traffic between different networks",
        "difficulty": "easy",
        "explanation": "The default gateway is a router interface that connects local network to other networks, forwarding traffic between different network segments.",
        "hint": "Think about how packets move between networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Calculate the total number of usable hosts in a /26 subnet",
        "options": ["62", "64", "126", "128"],
        "correctOptionIndex": 0,
        "correctOptionText": "62",
        "difficulty": "medium",
        "explanation": "A /26 subnet has 64 total addresses, but 2 are reserved for network and broadcast addresses, leaving 62 usable hosts.",
        "hint": "Subtract 2 from the total possible addresses."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the broadcast address for 192.168.1.128/25?",
        "options": ["192.168.1.255", "192.168.1.254", "192.168.1.129", "192.168.1.0"],
        "correctOptionIndex": 0,
        "correctOptionText": "192.168.1.255",
        "difficulty": "hard",
        "explanation": "In a /25 subnet, the broadcast address is the highest address in the subnet range, which is all host bits set to 1.",
        "hint": "The highest address in the subnet range is the broadcast address."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which technique allows splitting a large network into smaller, more efficient segments?",
        "options": ["Routing", "NAT", "Subnetting", "Encapsulation"],
        "correctOptionIndex": 2,
        "correctOptionText": "Subnetting",
        "difficulty": "easy",
        "explanation": "Subnetting allows network administrators to divide a larger network into smaller, more manageable and efficient subnetworks.",
        "hint": "This technique helps in network organization and efficient IP address utilization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What does VLSM stand for?",
        "options": [
            "Very Large Subnet Management", 
            "Variable Length Subnet Masking", 
            "Virtual Layer Switching Method", 
            "Vertical Link State Management"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Variable Length Subnet Masking",
        "difficulty": "medium",
        "explanation": "VLSM allows network administrators to use different subnet masks for the same network class, providing more flexible IP address allocation.",
        "hint": "Think about the ability to create subnets of different sizes within the same network."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the network prefix for the IP address 10.20.30.40/29?",
        "options": ["10.20.30.32", "10.20.30.40", "10.20.30.0", "10.20.30.255"],
        "correctOptionIndex": 0,
        "correctOptionText": "10.20.30.32",
        "difficulty": "hard",
        "explanation": "In a /29 subnet, the network prefix is the lowest address in the range that is divisible by the subnet size.",
        "hint": "Round down to the nearest multiple that fits the subnet mask."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which IP address is used for loopback testing?",
        "options": ["127.0.0.1", "192.168.1.1", "10.0.0.1", "172.16.0.1"],
        "correctOptionIndex": 0,
        "correctOptionText": "127.0.0.1",
        "difficulty": "easy",
        "explanation": "127.0.0.1 is the standard loopback address used for testing network interfaces on the local machine.",
        "hint": "This address always refers to the local host."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the maximum number of hosts in a Class A network by default?",
        "options": ["65,534", "126", "16,777,214", "254"],
        "correctOptionIndex": 2,
        "correctOptionText": "16,777,214",
        "difficulty": "medium",
        "explanation": "A default Class A network uses 8 bits for the network portion and 24 bits for hosts, allowing 2^24 - 2 = 16,777,214 usable hosts.",
        "hint": "Calculate 2^(host bits) - 2"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What does NAT primarily do?",
        "options": [
            "Create new IP addresses", 
            "Translate private IP addresses to public IP addresses", 
            "Encrypt network traffic", 
            "Load balance network connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Translate private IP addresses to public IP addresses",
        "difficulty": "easy",
        "explanation": "Network Address Translation (NAT) allows private IP addresses to communicate on the public internet by translating them to a public IP address.",
        "hint": "Think about how devices with private IPs access the internet."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "In CIDR notation, what does /16 represent?",
        "options": [
            "16 total IP addresses", 
            "16 bits used for the network portion", 
            "16 subnets", 
            "16 network interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "16 bits used for the network portion",
        "difficulty": "medium",
        "explanation": "In CIDR notation, /16 means 16 bits are used for the network portion of the IP address, leaving 16 bits for host addressing.",
        "hint": "CIDR notation indicates how many bits are used for the network prefix."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which routing method uses a single route to reach multiple destinations?",
        "options": ["Static Routing", "Dynamic Routing", "Default Routing", "Broadcast Routing"],
        "correctOptionIndex": 2,
        "correctOptionText": "Default Routing",
        "difficulty": "medium",
        "explanation": "Default routing uses a single route to forward packets to destinations not explicitly defined in the routing table.",
        "hint": "This method is like a 'catch-all' for unknown network destinations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the purpose of an IP routing table?",
        "options": [
            "To assign IP addresses", 
            "To store network interface information", 
            "To determine the best path for network packets", 
            "To create network subnets"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To determine the best path for network packets",
        "difficulty": "easy",
        "explanation": "A routing table contains information about network destinations and the best path to reach them, guiding packet forwarding.",
        "hint": "Think about how routers decide where to send network traffic."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Calculate the number of subnets when borrowing 4 bits from a Class C network",
        "options": ["8", "12", "16", "32"],
        "correctOptionIndex": 3,
        "correctOptionText": "32",
        "difficulty": "hard",
        "explanation": "Borrowing 4 bits creates 2^4 = 16 subnets. However, the first and last subnets are reserved, leaving 14 usable subnets.",
        "hint": "Use the formula 2^(borrowed bits), then subtract the reserved subnets."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is a supernet?",
        "options": [
            "A network larger than a Class A network", 
            "A method of combining multiple smaller networks", 
            "A type of routing protocol", 
            "A network security mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A method of combining multiple smaller networks",
        "difficulty": "hard",
        "explanation": "Supernetting (or CIDR) allows combining multiple contiguous network prefixes into a single, larger network prefix to reduce routing table complexity.",
        "hint": "Think about aggregating multiple smaller networks into a single, more efficient routing entry."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which IP address range is used for multicast addresses?",
        "options": [
            "10.0.0.0 - 10.255.255.255", 
            "172.16.0.0 - 172.31.255.255", 
            "224.0.0.0 - 239.255.255.255", 
            "192.168.0.0 - 192.168.255.255"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "224.0.0.0 - 239.255.255.255",
        "difficulty": "medium",
        "explanation": "The IP address range 224.0.0.0 to 239.255.255.255 is reserved for multicast group addresses, used for one-to-many communication.",
        "hint": "Multicast addresses allow sending a single packet to multiple recipients simultaneously."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the significance of the subnet mask 255.255.255.240?",
        "options": ["/24", "/25", "/26", "/28"],
        "correctOptionIndex": 3,
        "correctOptionText": "/28",
        "difficulty": "hard",
        "explanation": "A subnet mask of 255.255.255.240 corresponds to a /28 CIDR notation, providing 16 total addresses with 14 usable host addresses.",
        "hint": "Count the consecutive 1's in the binary representation of the subnet mask."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What technique allows a single public IP address to be shared by multiple devices?",
        "options": ["Subnetting", "DHCP", "PAT (Port Address Translation)", "VLAN"],
        "correctOptionIndex": 2,
        "correctOptionText": "PAT (Port Address Translation)",
        "difficulty": "medium",
        "explanation": "Port Address Translation (PAT) allows multiple devices with private IP addresses to share a single public IP address by using unique port numbers.",
        "hint": "This is a method of overloading a single public IP address."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is a classless interdomain routing (CIDR) block?",
        "options": [
            "A method of assigning IP addresses", 
            "A routing protocol", 
            "A way to represent network prefixes with variable-length subnet masks", 
            "A type of network security"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A way to represent network prefixes with variable-length subnet masks",
        "difficulty": "hard",
        "explanation": "CIDR allows more flexible IP address allocation by using a variable-length subnet mask notation, represented by the '/' followed by the number of network bits.",
        "hint": "Think about how CIDR notation provides more precise network addressing compared to traditional class-based addressing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the primary function of an IP address?",
        "options": [
            "To encrypt network traffic", 
            "To uniquely identify a device on a network", 
            "To perform DNS resolution", 
            "To compress network data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To uniquely identify a device on a network",
        "difficulty": "easy",
        "explanation": "An IP address serves as a unique identifier for a device or network interface, enabling communication and routing across networks.",
        "hint": "Think about how devices recognize and communicate with each other on a network."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "Which command can be used to view the routing table on a Windows system?",
        "options": ["netstat", "ping", "tracert", "route print"],
        "correctOptionIndex": 3,
        "correctOptionText": "route print",
        "difficulty": "medium",
        "explanation": "The 'route print' command displays the current routing table configuration on a Windows system.",
        "hint": "Think about a command that shows routing information on Windows."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Layer & IP Addressing",
        "questionText": "What is the network address for 172.16.50.129/25?",
        "options": ["172.16.50.128", "172.16.50.0", "172.16.50.64", "172.16.50.255"],
        "correctOptionIndex": 0,
        "correctOptionText": "172.16.50.128",
        "difficulty": "hard",
        "explanation": "In a /25 subnet, the network address is the lowest address in the subnet range, which is 172.16.50.128.",
        "hint": "Round down to the nearest multiple that fits the subnet mask."
    },

    // Routing Protocols
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is the primary purpose of a routing protocol?",
        "options": [
            "To encrypt network traffic", 
            "To determine the best path for data transmission", 
            "To assign IP addresses", 
            "To create network subnets"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To determine the best path for data transmission",
        "difficulty": "easy",
        "explanation": "Routing protocols dynamically exchange information between routers to select the most efficient path for network packets.",
        "hint": "Think about how routers decide the optimal route for data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol uses link-state algorithm?",
        "options": ["RIP", "EIGRP", "OSPF", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "OSPF",
        "difficulty": "medium",
        "explanation": "Open Shortest Path First (OSPF) is a link-state routing protocol that creates a complete topology map of the network.",
        "hint": "This protocol builds a comprehensive network topology map."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What does the administrative distance represent in routing?",
        "options": [
            "Network speed", 
            "Physical distance between routers", 
            "Trustworthiness of a routing source", 
            "Number of hops"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Trustworthiness of a routing source",
        "difficulty": "medium",
        "explanation": "Administrative distance is a value that indicates the reliability of a routing source, with lower numbers being more trusted.",
        "hint": "Lower values mean more preferred routing sources."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol is classless?",
        "options": ["RIPv1", "IGRP", "OSPF", "EIGRP"],
        "correctOptionIndex": 3,
        "correctOptionText": "EIGRP",
        "difficulty": "hard",
        "explanation": "Enhanced Interior Gateway Routing Protocol (EIGRP) is a classless routing protocol that supports Variable Length Subnet Masking (VLSM).",
        "hint": "Classless protocols support more flexible subnet designs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What type of routing protocol is BGP?",
        "options": ["Interior Gateway Protocol", "Exterior Gateway Protocol", "Link-State Protocol", "Distance Vector Protocol"],
        "correctOptionIndex": 1,
        "correctOptionText": "Exterior Gateway Protocol",
        "difficulty": "medium",
        "explanation": "Border Gateway Protocol (BGP) is an Exterior Gateway Protocol used for routing between autonomous systems on the internet.",
        "hint": "This protocol connects different networks or service providers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What metric does RIP use for path selection?",
        "options": ["Bandwidth", "Hop Count", "Delay", "Load"],
        "correctOptionIndex": 1,
        "correctOptionText": "Hop Count",
        "difficulty": "easy",
        "explanation": "Routing Information Protocol (RIP) uses hop count as its primary metric, selecting routes with the least number of routers between source and destination.",
        "hint": "Fewer routers means a shorter path."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol uses the DUAL algorithm?",
        "options": ["OSPF", "RIP", "EIGRP", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "EIGRP",
        "difficulty": "hard",
        "explanation": "Enhanced Interior Gateway Routing Protocol (EIGRP) uses the Diffusing Update Algorithm (DUAL) for route calculation and loop prevention.",
        "hint": "This algorithm provides fast convergence and loop-free routing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is the maximum hop count for RIPv2?",
        "options": ["15", "16", "32", "64"],
        "correctOptionIndex": 0,
        "correctOptionText": "15",
        "difficulty": "medium",
        "explanation": "RIPv2 has a maximum hop count of 15. Routes with 16 or more hops are considered unreachable.",
        "hint": "Beyond this limit, the route is considered invalid."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol is primarily used in large enterprise networks?",
        "options": ["RIP", "EIGRP", "OSPF", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "OSPF",
        "difficulty": "easy",
        "explanation": "Open Shortest Path First (OSPF) is widely used in large enterprise networks due to its scalability and efficiency.",
        "hint": "This protocol works well in complex network architectures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What does OSPF use to exchange routing information?",
        "options": ["Distance Vector", "Link-State", "Path Vector", "Bellman-Ford"],
        "correctOptionIndex": 1,
        "correctOptionText": "Link-State",
        "difficulty": "medium",
        "explanation": "OSPF uses Link-State advertisements to share detailed network topology information between routers.",
        "hint": "Routers share complete network map information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol uses path vector mechanism?",
        "options": ["OSPF", "RIP", "EIGRP", "BGP"],
        "correctOptionIndex": 3,
        "correctOptionText": "BGP",
        "difficulty": "hard",
        "explanation": "Border Gateway Protocol (BGP) uses a path vector mechanism to prevent routing loops and provide path information.",
        "hint": "This mechanism helps track the entire route path."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is route redistribution?",
        "options": [
            "Blocking routes between networks", 
            "Sharing routing information between different routing protocols", 
            "Encrypting routing data", 
            "Limiting network access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Sharing routing information between different routing protocols",
        "difficulty": "medium",
        "explanation": "Route redistribution allows routing information to be shared between different routing protocols in a network.",
        "hint": "This helps connect networks using different routing protocols."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol supports IPv6 natively?",
        "options": ["RIPv2", "EIGRP", "OSPF", "RIP"],
        "correctOptionIndex": 2,
        "correctOptionText": "OSPF",
        "difficulty": "easy",
        "explanation": "OSPF version 3 (OSPFv3) provides native support for IPv6 routing.",
        "hint": "Look for the protocol with built-in IPv6 support."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is a routing domain?",
        "options": [
            "A physical network segment", 
            "A group of routers under a single administrative control", 
            "A network security zone", 
            "A routing table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A group of routers under a single administrative control",
        "difficulty": "medium",
        "explanation": "A routing domain is a collection of routers and networks under a single administrative control, typically running the same routing protocol.",
        "hint": "Think about a network area managed by a single authority."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What does the term 'convergence' mean in routing?",
        "options": [
            "Combining multiple networks", 
            "The time routers take to agree on optimal routes", 
            "Encrypting routing data", 
            "Reducing network complexity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The time routers take to agree on optimal routes",
        "difficulty": "easy",
        "explanation": "Convergence is the time it takes for all routers in a network to agree on the optimal routes after a network change.",
        "hint": "Consider how quickly routers adapt to network changes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol can summarize routes at any interface?",
        "options": ["RIP", "OSPF", "EIGRP", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "EIGRP",
        "difficulty": "hard",
        "explanation": "Enhanced Interior Gateway Routing Protocol (EIGRP) allows route summarization at any interface, reducing routing table size.",
        "hint": "Look for the protocol with flexible route aggregation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is the primary difference between distance vector and link-state routing protocols?",
        "options": [
            "Speed of routing", 
            "How they share network topology information", 
            "Number of supported networks", 
            "Encryption methods"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "How they share network topology information",
        "difficulty": "medium",
        "explanation": "Distance vector protocols share routing information with neighbors, while link-state protocols create a complete network topology map.",
        "hint": "Consider how routers exchange and understand network information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What protocol is used for routing between Internet Service Providers?",
        "options": ["OSPF", "EIGRP", "BGP", "RIP"],
        "correctOptionIndex": 2,
        "correctOptionText": "BGP",
        "difficulty": "easy",
        "explanation": "Border Gateway Protocol (BGP) is the standard exterior routing protocol used for routing between different autonomous systems on the internet.",
        "hint": "Think about routing between large network providers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is an autonomous system (AS) in routing?",
        "options": [
            "A single router", 
            "A network under single administrative control", 
            "A routing protocol", 
            "A network security zone"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A network under single administrative control",
        "difficulty": "medium",
        "explanation": "An autonomous system is a collection of networks and routers under a single administrative control, typically identified by a unique AS number.",
        "hint": "Consider a network managed by a single organization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol is Cisco proprietary?",
        "options": ["OSPF", "RIP", "EIGRP", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "EIGRP",
        "difficulty": "easy",
        "explanation": "Enhanced Interior Gateway Routing Protocol (EIGRP) was originally a Cisco proprietary protocol, though it has since been made open standard.",
        "hint": "Look for the protocol developed by a major networking company."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is route poisoning?",
        "options": [
            "Blocking all routes", 
            "Marking a route as unreachable to prevent routing loops", 
            "Encrypting routing information", 
            "Reducing network complexity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Marking a route as unreachable to prevent routing loops",
        "difficulty": "hard",
        "explanation": "Route poisoning is a technique used in distance vector protocols to prevent routing loops by advertising an unreachable route with a maximum metric.",
        "hint": "This is a method to prevent incorrect route propagation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What routing protocol uses multicast address 224.0.0.10?",
        "options": ["RIP", "EIGRP", "OSPF", "BGP"],
        "correctOptionIndex": 1,
        "correctOptionText": "EIGRP",
        "difficulty": "hard",
        "explanation": "Enhanced Interior Gateway Routing Protocol (EIGRP) uses the multicast address 224.0.0.10 for routing updates.",
        "hint": "Look for the protocol with a specific multicast address for communications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is the purpose of route summarization?",
        "options": [
            "To increase network security", 
            "To reduce routing table size and complexity", 
            "To encrypt routing data", 
            "To limit network access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To reduce routing table size and complexity",
        "difficulty": "medium",
        "explanation": "Route summarization (or route aggregation) combines multiple specific routes into a single, broader route to simplify routing tables and reduce routing overhead.",
        "hint": "Think about simplifying network routing information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol uses triggered updates?",
        "options": ["RIP", "OSPF", "EIGRP", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "EIGRP",
        "difficulty": "hard",
        "explanation": "Enhanced Interior Gateway Routing Protocol (EIGRP) uses triggered updates, sending routing information immediately when a network change occurs.",
        "hint": "Look for the protocol that quickly propagates network changes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is the primary metric used by OSPF?",
        "options": ["Hop Count", "Bandwidth", "Delay", "Load"],
        "correctOptionIndex": 1,
        "correctOptionText": "Bandwidth",
        "difficulty": "medium",
        "explanation": "OSPF primarily uses bandwidth as its metric for route selection, choosing the fastest path between routers.",
        "hint": "Consider the data transmission speed between network segments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What does the term 'administrative distance' represent?",
        "options": [
            "Physical distance between routers", 
            "Network speed", 
            "Trustworthiness of a routing source", 
            "Number of network segments"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Trustworthiness of a routing source",
        "difficulty": "easy",
        "explanation": "Administrative distance is a value that indicates the reliability of a routing source, with lower numbers being more preferred.",
        "hint": "Lower values mean more trusted routing sources."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "Which routing protocol is best for small networks?",
        "options": ["OSPF", "EIGRP", "RIP", "BGP"],
        "correctOptionIndex": 2,
        "correctOptionText": "RIP",
        "difficulty": "easy",
        "explanation": "Routing Information Protocol (RIP) is simple and best suited for smaller networks with limited complexity.",
        "hint": "Look for the most straightforward routing protocol."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Routing Protocols",
        "questionText": "What is a stub area in OSPF?",
        "options": [
            "A dead-end network segment", 
            "A network area with no external routes", 
            "A network security zone", 
            "A routing loop prevention mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A network area with no external routes",
        "difficulty": "hard",
        "explanation": "In OSPF, a stub area is a network area that does not allow external routes, simplifying routing and reducing routing table size.",
        "hint": "Consider a network segment with limited routing complexity."
    },

    // Transport Layer
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which transport layer protocol provides reliable, connection-oriented communication?",
        "options": ["UDP", "TCP", "SCTP", "DCCP"],
        "correctOptionIndex": 1,
        "correctOptionText": "TCP",
        "difficulty": "easy",
        "explanation": "TCP (Transmission Control Protocol) ensures reliable, ordered, and error-checked delivery of data between applications.",
        "hint": "Think about the protocol that guarantees packet delivery."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What does the 'sequence number' field in a TCP header help accomplish?",
        "options": [
            "Determine packet priority",
            "Identify source IP address",
            "Maintain order of data segments",
            "Encrypt communication"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Maintain order of data segments",
        "difficulty": "medium",
        "explanation": "The sequence number helps TCP reassemble data segments in the correct order at the receiving end, ensuring data integrity.",
        "hint": "Consider how data can be reconstructed after transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which TCP mechanism prevents network congestion?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Three-way Handshake",
            "Checksum Verification"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Slow Start",
        "difficulty": "hard",
        "explanation": "Slow Start is an algorithm that gradually increases the transmission rate to avoid overwhelming the network and prevent congestion collapse.",
        "hint": "This mechanism helps TCP adapt to network capacity dynamically."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the default port number for HTTP?",
        "options": ["21", "22", "80", "443"],
        "correctOptionIndex": 2,
        "correctOptionText": "80",
        "difficulty": "easy",
        "explanation": "Port 80 is the standard port for unencrypted HTTP (Hypertext Transfer Protocol) web traffic.",
        "hint": "This is the most common port for web browsing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which protocol is connectionless and does not guarantee packet delivery?",
        "options": ["TCP", "SCTP", "UDP", "RTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "UDP",
        "difficulty": "medium",
        "explanation": "UDP (User Datagram Protocol) sends packets without establishing a connection and does not ensure their arrival or order.",
        "hint": "Think of a protocol used for fast, lightweight communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What does the 'window size' field in a TCP header represent?",
        "options": [
            "Maximum packet size",
            "Number of retransmissions",
            "Amount of data receiver can accept",
            "Transmission speed"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Amount of data receiver can accept",
        "difficulty": "hard",
        "explanation": "The window size indicates how many bytes the receiver can accept without sending an acknowledgment, crucial for flow control.",
        "hint": "This field helps prevent the sender from overwhelming the receiver."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the purpose of the TCP three-way handshake?",
        "options": [
            "Data encryption",
            "Establishing a connection",
            "Error correction",
            "Routing packets"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Establishing a connection",
        "difficulty": "medium",
        "explanation": "The three-way handshake (SYN, SYN-ACK, ACK) establishes a reliable connection between sender and receiver before data transmission.",
        "hint": "This process synchronizes sequence numbers between hosts."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which port is typically used for SSH?",
        "options": ["21", "22", "23", "80"],
        "correctOptionIndex": 1,
        "correctOptionText": "22",
        "difficulty": "easy",
        "explanation": "Port 22 is the standard port for SSH (Secure Shell), used for secure remote administration.",
        "hint": "This port is used for encrypted terminal access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What mechanism does TCP use to handle out-of-order packets?",
        "options": [
            "Packet dropping",
            "Buffering",
            "Immediate retransmission",
            "Connection reset"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Buffering",
        "difficulty": "hard",
        "explanation": "TCP uses a buffer to temporarily store out-of-order segments and reassemble them in the correct sequence before delivering to the application.",
        "hint": "Consider how packets can be reordered without losing data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What does the acronym 'MSS' stand for in TCP?",
        "options": [
            "Maximum Segment Size",
            "Maximum Signal Strength",
            "Minimum Segment Speed",
            "Message Transmission System"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Maximum Segment Size",
        "difficulty": "medium",
        "explanation": "MSS defines the largest amount of data that can be sent in a single TCP segment, excluding headers.",
        "hint": "This relates to the size of data packets in TCP transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which transport layer protocol is best suited for real-time multimedia streaming?",
        "options": ["TCP", "UDP", "SCTP", "DCCP"],
        "correctOptionIndex": 1,
        "correctOptionText": "UDP",
        "difficulty": "medium",
        "explanation": "UDP is preferred for streaming because it has lower latency and can tolerate some packet loss, which is acceptable in multimedia transmission.",
        "hint": "Consider a protocol that prioritizes speed over perfect delivery."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the primary function of TCP's acknowledgment mechanism?",
        "options": [
            "Data encryption",
            "Verifying packet delivery",
            "Routing packets",
            "Compressing data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Verifying packet delivery",
        "difficulty": "easy",
        "explanation": "TCP's acknowledgment mechanism ensures that sent packets are successfully received by the destination, requesting retransmission if needed.",
        "hint": "This helps maintain reliable communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What does the 'URG' flag in a TCP header indicate?",
        "options": [
            "Urgent data present",
            "Unrecognized request",
            "Urgent connection",
            "Unreliable transmission"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Urgent data present",
        "difficulty": "hard",
        "explanation": "The URG (Urgent) flag signals that the incoming data contains urgent information that should be processed immediately.",
        "hint": "This flag helps prioritize certain data segments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which port is typically used for HTTPS?",
        "options": ["80", "443", "22", "25"],
        "correctOptionIndex": 1,
        "correctOptionText": "443",
        "difficulty": "easy",
        "explanation": "Port 443 is the standard port for HTTPS (HTTP Secure), which provides encrypted web communication.",
        "hint": "This port is used for secure web browsing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is TCP's 'Fast Retransmit' mechanism?",
        "options": [
            "Immediate packet resending",
            "Rapid connection establishment",
            "Quick error detection",
            "Accelerated data transmission"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Immediate packet resending",
        "difficulty": "hard",
        "explanation": "Fast Retransmit allows TCP to resend a lost packet quickly without waiting for a retransmission timeout, improving network efficiency.",
        "hint": "This mechanism speeds up loss recovery."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What protocol is used for email transmission?",
        "options": ["SMTP", "FTP", "HTTP", "DHCP"],
        "correctOptionIndex": 0,
        "correctOptionText": "SMTP",
        "difficulty": "easy",
        "explanation": "SMTP (Simple Mail Transfer Protocol) is used for sending and routing email between servers.",
        "hint": "This protocol handles email communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the primary difference between TCP and UDP?",
        "options": [
            "Network speed",
            "Packet routing",
            "Reliability and connection-orientation",
            "Data encryption"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Reliability and connection-orientation",
        "difficulty": "medium",
        "explanation": "TCP provides reliable, ordered, and error-checked delivery, while UDP offers faster, connectionless transmission without guaranteed delivery.",
        "hint": "Consider the trade-offs between guaranteed and quick transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the purpose of the TCP 'checksum' field?",
        "options": [
            "Data encryption",
            "Error detection",
            "Packet routing",
            "Connection establishment"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Error detection",
        "difficulty": "medium",
        "explanation": "The TCP checksum helps detect errors in transmitted data by performing a mathematical calculation to verify data integrity.",
        "hint": "This field helps ensure data was not corrupted during transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which transport layer protocol supports multi-streaming?",
        "options": ["TCP", "UDP", "SCTP", "DCCP"],
        "correctOptionIndex": 2,
        "correctOptionText": "SCTP",
        "difficulty": "hard",
        "explanation": "SCTP (Stream Control Transmission Protocol) supports multiple streams within a single connection, allowing independent message delivery.",
        "hint": "This protocol offers advanced features beyond TCP and UDP."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What mechanism prevents TCP connection starvation?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Congestion Avoidance",
            "Three-way Handshake"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Congestion Avoidance",
        "difficulty": "hard",
        "explanation": "Congestion Avoidance works with Slow Start to dynamically adjust transmission rates and prevent network overload.",
        "hint": "This algorithm helps maintain network stability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What port is typically used for FTP?",
        "options": ["20", "21", "22", "23"],
        "correctOptionIndex": 1,
        "correctOptionText": "21",
        "difficulty": "easy",
        "explanation": "Port 21 is used for FTP (File Transfer Protocol) control connection, while port 20 is used for data transfer.",
        "hint": "This is the standard port for file transfer commands."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What does TCP's 'Nagle's Algorithm' aim to reduce?",
        "options": [
            "Network latency",
            "Packet fragmentation",
            "Small packet overhead",
            "Connection establishment time"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Small packet overhead",
        "difficulty": "hard",
        "explanation": "Nagle's Algorithm reduces network congestion by buffering small packets and sending them together, minimizing transmission overhead.",
        "hint": "This algorithm improves network efficiency for small data transmissions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which transport layer protocol is designed for network games and streaming?",
        "options": ["TCP", "UDP", "SCTP", "DCCP"],
        "correctOptionIndex": 3,
        "correctOptionText": "DCCP",
        "difficulty": "hard",
        "explanation": "DCCP (Datagram Congestion Control Protocol) provides congestion control for unreliable flows like games and media streaming.",
        "hint": "Consider a protocol optimized for real-time applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the standard port for SMTP over TLS/SSL?",
        "options": ["25", "465", "587", "993"],
        "correctOptionIndex": 1,
        "correctOptionText": "465",
        "difficulty": "medium",
        "explanation": "Port 465 is the standard port for SMTP with SSL/TLS encryption, providing secure email transmission.",
        "hint": "This port ensures encrypted email communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What does the 'RST' flag in a TCP header signify?",
        "options": [
            "Reset connection",
            "Request synchronization",
            "Reduce speed",
            "Request transmission"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Reset connection",
        "difficulty": "medium",
        "explanation": "The RST (Reset) flag abruptly terminates a TCP connection, typically used to reject an invalid connection request.",
        "hint": "This flag immediately stops a connection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What protocol is used for DNS queries?",
        "options": ["TCP", "UDP", "SCTP", "DCCP"],
        "correctOptionIndex": 1,
        "correctOptionText": "UDP",
        "difficulty": "easy",
        "explanation": "DNS typically uses UDP for quick, lightweight name resolution, switching to TCP for large responses.",
        "hint": "Consider a protocol suitable for small, fast queries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What is the primary purpose of TCP's flow control?",
        "options": [
            "Encrypt data",
            "Prevent buffer overflow",
            "Route packets",
            "Compress transmission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Prevent buffer overflow",
        "difficulty": "medium",
        "explanation": "Flow control prevents the sender from overwhelming the receiver by managing the rate of data transmission based on the receiver's buffer capacity.",
        "hint": "This mechanism protects the receiver from being flooded with data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "Which port is used for Telnet?",
        "options": ["22", "23", "80", "443"],
        "correctOptionIndex": 1,
        "correctOptionText": "23",
        "difficulty": "easy",
        "explanation": "Port 23 is the standard port for Telnet, an unencrypted protocol for remote terminal access.",
        "hint": "This is the traditional port for remote login."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Transport Layer",
        "questionText": "What mechanism helps TCP adapt to changing network conditions?",
        "options": [
            "Three-way Handshake",
            "Slow Start",
            "Fast Retransmit",
            "Window Scaling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Slow Start",
        "difficulty": "hard",
        "explanation": "Slow Start dynamically increases transmission rate, helping TCP adapt to network capacity and prevent congestion.",
        "hint": "This algorithm helps manage network resources efficiently."
    },

    // Application Layer
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol is used for secure file transfer?",
        "options": ["HTTP", "FTP", "SFTP", "SMTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "SFTP",
        "difficulty": "easy",
        "explanation": "SFTP (Secure File Transfer Protocol) provides secure file transfer over SSH, encrypting both commands and data.",
        "hint": "Look for the protocol that adds security to traditional file transfer."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does DNS primarily do?",
        "options": [
            "Encrypt network traffic",
            "Translate domain names to IP addresses",
            "Manage email servers",
            "Control network routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Translate domain names to IP addresses",
        "difficulty": "easy",
        "explanation": "DNS (Domain Name System) translates human-readable domain names into IP addresses that computers use to identify each other.",
        "hint": "Consider how websites are located on the internet."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol is used for sending emails?",
        "options": ["POP3", "IMAP", "SMTP", "HTTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "SMTP",
        "difficulty": "easy",
        "explanation": "SMTP (Simple Mail Transfer Protocol) is used for sending and routing email between servers.",
        "hint": "This protocol handles email transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What is the primary purpose of HTTP?",
        "options": [
            "File transfer",
            "Email communication",
            "Web page transfer",
            "Remote login"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Web page transfer",
        "difficulty": "easy",
        "explanation": "HTTP (Hypertext Transfer Protocol) is used for transferring web pages and other resources between web servers and clients.",
        "hint": "This protocol is fundamental to web browsing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol retrieves emails from a mail server?",
        "options": ["SMTP", "IMAP", "POP3", "DHCP"],
        "correctOptionIndex": 2,
        "correctOptionText": "POP3",
        "difficulty": "medium",
        "explanation": "POP3 (Post Office Protocol version 3) downloads emails from a mail server to a local device, typically removing them from the server.",
        "hint": "This protocol downloads emails to your local device."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What is the primary function of DHCP?",
        "options": [
            "Domain name resolution",
            "Automatic IP address assignment",
            "Email routing",
            "Secure file transfer"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Automatic IP address assignment",
        "difficulty": "medium",
        "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices on a network.",
        "hint": "Consider how devices get their network settings automatically."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol provides secure remote administration?",
        "options": ["Telnet", "SSH", "FTP", "HTTP"],
        "correctOptionIndex": 1,
        "correctOptionText": "SSH",
        "difficulty": "easy",
        "explanation": "SSH (Secure Shell) provides a secure, encrypted method for remotely accessing and managing network devices.",
        "hint": "Look for the protocol that adds encryption to remote access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does IMAP offer that POP3 does not?",
        "options": [
            "Email encryption",
            "Server-side email storage",
            "Faster download",
            "More compact storage"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Server-side email storage",
        "difficulty": "hard",
        "explanation": "IMAP (Internet Message Access Protocol) allows emails to remain on the server, enabling access from multiple devices and preserving folder structures.",
        "hint": "Consider how email synchronization across devices works."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol is used for file transfer?",
        "options": ["HTTP", "SMTP", "FTP", "DNS"],
        "correctOptionIndex": 2,
        "correctOptionText": "FTP",
        "difficulty": "easy",
        "explanation": "FTP (File Transfer Protocol) is used for transferring files between a client and a server on a computer network.",
        "hint": "This protocol specializes in file transfer."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does HTTPS provide over HTTP?",
        "options": [
            "Faster browsing",
            "More websites",
            "Encryption and security",
            "Better compression"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Encryption and security",
        "difficulty": "medium",
        "explanation": "HTTPS (HTTP Secure) adds a layer of encryption (SSL/TLS) to protect data transmitted between web browsers and servers.",
        "hint": "Consider how data can be protected during web communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol is used for real-time messaging?",
        "options": ["SMTP", "HTTP", "XMPP", "FTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "XMPP",
        "difficulty": "hard",
        "explanation": "XMPP (Extensible Messaging and Presence Protocol) is used for real-time communication, instant messaging, and presence information.",
        "hint": "Look for a protocol designed for instant communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol manages network printer communication?",
        "options": ["SNMP", "SMTP", "HTTP", "DNS"],
        "correctOptionIndex": 0,
        "correctOptionText": "SNMP",
        "difficulty": "medium",
        "explanation": "SNMP (Simple Network Management Protocol) is used for collecting and organizing information about managed devices on IP networks, including printers.",
        "hint": "This protocol helps manage network devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What is the purpose of a proxy server protocol like HTTP Proxy?",
        "options": [
            "Increase internet speed",
            "Provide network security",
            "Encrypt all traffic",
            "Manage email servers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Provide network security",
        "difficulty": "hard",
        "explanation": "HTTP Proxy serves multiple purposes including filtering content, improving security, caching, and providing anonymity.",
        "hint": "Consider how intermediary servers can protect networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol is used for network time synchronization?",
        "options": ["DNS", "DHCP", "NTP", "SNMP"],
        "correctOptionIndex": 2,
        "correctOptionText": "NTP",
        "difficulty": "medium",
        "explanation": "NTP (Network Time Protocol) synchronizes computer clock times in a network with high precision.",
        "hint": "This protocol ensures accurate timekeeping across devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does LDAP primarily do?",
        "options": [
            "Manage email servers",
            "Directory services and authentication",
            "Transfer files",
            "Encrypt network traffic"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Directory services and authentication",
        "difficulty": "hard",
        "explanation": "LDAP (Lightweight Directory Access Protocol) is used for accessing and maintaining distributed directory information services over an IP network.",
        "hint": "Consider a protocol for managing user and resource information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol is used for secure email transfer?",
        "options": ["SMTP", "POP3", "IMAP", "SMTPS"],
        "correctOptionIndex": 3,
        "correctOptionText": "SMTPS",
        "difficulty": "medium",
        "explanation": "SMTPS (SMTP Secure) provides an encrypted and secure method for sending emails.",
        "hint": "Look for the secure version of the email sending protocol."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol enables voice communication over IP?",
        "options": ["HTTP", "FTP", "SIP", "SMTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "SIP",
        "difficulty": "hard",
        "explanation": "SIP (Session Initiation Protocol) is used for initiating, maintaining, and terminating real-time sessions that involve video, voice, messaging, and other communications.",
        "hint": "This protocol is crucial for internet telephony."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does WebSocket protocol enable?",
        "options": [
            "Email transfer",
            "File download",
            "Real-time, two-way communication",
            "DNS resolution"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Real-time, two-way communication",
        "difficulty": "hard",
        "explanation": "WebSocket provides full-duplex communication channels over a single TCP connection, enabling real-time interaction between client and server.",
        "hint": "Consider a protocol for live, interactive web applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol manages email retrieval with folder synchronization?",
        "options": ["POP3", "SMTP", "IMAP", "HTTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "IMAP",
        "difficulty": "medium",
        "explanation": "IMAP allows users to access and manage email folders on the server, maintaining synchronization across multiple devices.",
        "hint": "This protocol keeps email organization consistent."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol is used for network printer discovery?",
        "options": ["SNMP", "HTTP", "FTP", "DHCP"],
        "correctOptionIndex": 0,
        "correctOptionText": "SNMP",
        "difficulty": "hard",
        "explanation": "SNMP enables network devices, including printers, to share management and configuration information.",
        "hint": "Consider a protocol for device management and discovery."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol manages email routing between servers?",
        "options": ["POP3", "IMAP", "SMTP", "HTTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "SMTP",
        "difficulty": "easy",
        "explanation": "SMTP handles the routing and transmission of email between mail servers.",
        "hint": "This is the primary protocol for email transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does a CDN protocol like HTTP/2 provide?",
        "options": [
            "Email encryption",
            "Improved web performance",
            "File transfer",
            "DNS resolution"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved web performance",
        "difficulty": "hard",
        "explanation": "HTTP/2 provides features like multiplexing, header compression, and server push to improve web page loading speed and efficiency.",
        "hint": "Consider protocols that optimize web content delivery."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol is used for network device configuration?",
        "options": ["HTTP", "SNMP", "FTP", "DNS"],
        "correctOptionIndex": 1,
        "correctOptionText": "SNMP",
        "difficulty": "medium",
        "explanation": "SNMP allows network administrators to manage network performance, find and solve network problems, and plan for network growth.",
        "hint": "This protocol helps manage network infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol enables secure remote desktop access?",
        "options": ["Telnet", "SSH", "FTP", "HTTP"],
        "correctOptionIndex": 1,
        "correctOptionText": "SSH",
        "difficulty": "easy",
        "explanation": "SSH provides a secure method for remotely accessing and managing computer systems.",
        "hint": "Look for the protocol that provides encrypted remote access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does SFTP provide over traditional FTP?",
        "options": [
            "Faster file transfer",
            "More file types",
            "Encryption and security",
            "Larger file sizes"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Encryption and security",
        "difficulty": "medium",
        "explanation": "SFTP (SSH File Transfer Protocol) adds a layer of security by encrypting file transfers and authentication.",
        "hint": "Consider how file transfers can be made more secure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol enables video streaming?",
        "options": ["HTTP", "FTP", "RTSP", "SMTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "RTSP",
        "difficulty": "hard",
        "explanation": "RTSP (Real Time Streaming Protocol) controls media sessions between end points, enabling video streaming.",
        "hint": "Look for a protocol designed for multimedia streaming."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What does RADIUS protocol primarily do?",
        "options": [
            "Email routing",
            "Network authentication",
            "File transfer",
            "Web browsing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Network authentication",
        "difficulty": "hard",
        "explanation": "RADIUS (Remote Authentication Dial-In User Service) provides centralized authentication, authorization, and accounting management for network users.",
        "hint": "Consider a protocol for managing user access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "Which protocol manages email folders across devices?",
        "options": ["POP3", "SMTP", "IMAP", "HTTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "IMAP",
        "difficulty": "easy",
        "explanation": "IMAP allows users to access and organize email folders on the server, maintaining consistency across multiple devices.",
        "hint": "This protocol keeps your email organization synced."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Application Layer",
        "questionText": "What protocol enables secure web browsing?",
        "options": ["HTTP", "FTP", "HTTPS", "SMTP"],
        "correctOptionIndex": 2,
        "correctOptionText": "HTTPS",
        "difficulty": "easy",
        "explanation": "HTTPS provides encryption and secure communication between web browsers and websites.",
        "hint": "Look for the secure version of the web transfer protocol."
    },

    // Network Security
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does CIA stand for in information security?",
        "options": [
            "Confidentiality, Integrity, Availability",
            "Cryptography, Identification, Authentication",
            "Compliance, Investigation, Assurance",
            "Control, Inspection, Access"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Confidentiality, Integrity, Availability",
        "difficulty": "easy",
        "explanation": "CIA triad represents the three fundamental principles of information security: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data remains unaltered), and Availability (ensuring data is accessible when needed).",
        "hint": "Think about the core principles that protect information systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "Which type of attack involves flooding a network with traffic to overwhelm its resources?",
        "options": [
            "Phishing Attack",
            "Man-in-the-Middle Attack",
            "Denial of Service (DoS) Attack",
            "Social Engineering Attack"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Denial of Service (DoS) Attack",
        "difficulty": "medium",
        "explanation": "A Denial of Service (DoS) attack aims to make a network, service, or resource unavailable by overwhelming it with a flood of internet traffic, causing system resources to be exhausted.",
        "hint": "This attack type tries to make a service or network inaccessible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is the primary purpose of a firewall?",
        "options": [
            "To encrypt network traffic",
            "To monitor and control network traffic",
            "To detect malware",
            "To backup network data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To monitor and control network traffic",
        "difficulty": "easy",
        "explanation": "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.",
        "hint": "Think of a firewall like a security checkpoint for network traffic."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does SSL/TLS primarily provide?",
        "options": [
            "Data storage encryption",
            "Network address translation",
            "Secure communication over a network",
            "User authentication"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Secure communication over a network",
        "difficulty": "medium",
        "explanation": "SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) provide encrypted communication between client and server, ensuring data privacy and integrity during transmission.",
        "hint": "This protocol ensures secure data transfer between devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "Which authentication factor involves something you know?",
        "options": [
            "Biometrics",
            "Smart Card",
            "Password",
            "Security Token"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Password",
        "difficulty": "easy",
        "explanation": "Something you know (knowledge factor) typically refers to passwords, PINs, or security questions that only the authorized user should know.",
        "hint": "Think about authentication methods based on memorized information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a digital certificate used for?",
        "options": [
            "Storing passwords",
            "Encrypting hard drives",
            "Verifying the identity of a website or entity",
            "Creating network backups"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Verifying the identity of a website or entity",
        "difficulty": "medium",
        "explanation": "A digital certificate is an electronic document that verifies the identity of a website or entity and enables secure, encrypted communication using public key infrastructure (PKI).",
        "hint": "This helps prevent impersonation in online communications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does VPN stand for?",
        "options": [
            "Virtual Private Network",
            "Virtual Public Network",
            "Verified Private Network",
            "Virtual Protocol Network"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Virtual Private Network",
        "difficulty": "easy",
        "explanation": "A Virtual Private Network (VPN) creates a secure, encrypted connection over a less secure network, typically the internet, providing privacy and anonymity.",
        "hint": "This technology creates a secure 'tunnel' for network communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "Which type of malware can replicate itself and spread to other computers?",
        "options": [
            "Trojan Horse",
            "Spyware",
            "Virus",
            "Worm"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Worm",
        "difficulty": "medium",
        "explanation": "A worm is a type of malware that can replicate itself and spread to other computers without human interaction, often exploiting network vulnerabilities.",
        "hint": "This malware type spreads autonomously across networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a 'salt' in password hashing?",
        "options": [
            "A special encryption algorithm",
            "A random value added to password before hashing",
            "A password recovery method",
            "A network security protocol"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A random value added to password before hashing",
        "difficulty": "hard",
        "explanation": "A salt is a random value added to the input of a hash function to ensure unique hash outputs, making it more difficult for attackers to use precomputed hash tables.",
        "hint": "This technique adds randomness to password storage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does IDS stand for?",
        "options": [
            "Internet Defense System",
            "Intrusion Detection System",
            "Internal Data Security",
            "Internet Data Sync"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Intrusion Detection System",
        "difficulty": "easy",
        "explanation": "An Intrusion Detection System (IDS) monitors network traffic for suspicious activities and generates alerts when potential security breaches are detected.",
        "hint": "This system watches for potential security threats."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a 'man-in-the-middle' attack?",
        "options": [
            "An attack that targets system administrators",
            "A technique where an attacker intercepts communication between two parties",
            "A physical security breach",
            "A method of password cracking"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A technique where an attacker intercepts communication between two parties",
        "difficulty": "medium",
        "explanation": "In a man-in-the-middle attack, an attacker secretly intercepts and potentially alters the communication between two parties who believe they are directly communicating with each other.",
        "hint": "This attack involves secretly eavesdropping on network communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is the primary purpose of a DMZ in network security?",
        "options": [
            "To encrypt network traffic",
            "To create a subnetwork that exposes external-facing services",
            "To block all incoming traffic",
            "To manage wireless networks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a subnetwork that exposes external-facing services",
        "difficulty": "hard",
        "explanation": "A Demilitarized Zone (DMZ) is a physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network, typically the internet, while keeping the internal network protected.",
        "hint": "This network area provides controlled access to public services."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a zero-day vulnerability?",
        "options": [
            "A vulnerability unknown to the software vendor",
            "A security flaw that is immediately patched",
            "A vulnerability that affects only zero systems",
            "A type of network encryption"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A vulnerability unknown to the software vendor",
        "difficulty": "hard",
        "explanation": "A zero-day vulnerability is a software security flaw that is unknown to the vendor and has not yet been patched, making it potentially very dangerous as attackers can exploit it before a fix is available.",
        "hint": "This type of vulnerability is discovered before the vendor knows about it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "Which encryption standard is considered secure for symmetric key encryption?",
        "options": [
            "MD5",
            "SHA-1",
            "AES",
            "RC4"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "AES",
        "difficulty": "medium",
        "explanation": "Advanced Encryption Standard (AES) is a widely used symmetric encryption algorithm considered secure and approved by the U.S. National Security Agency (NSA) for top-secret information.",
        "hint": "This encryption method is widely used in government and commercial applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is social engineering primarily focused on?",
        "options": [
            "Technical network vulnerabilities",
            "Exploiting human psychology",
            "Hardware system weaknesses",
            "Network protocol manipulation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Exploiting human psychology",
        "difficulty": "easy",
        "explanation": "Social engineering is a technique that manipulates people into divulging confidential information or performing actions that compromise security by exploiting psychological vulnerabilities.",
        "hint": "This method targets human behavior rather than technical systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does HTTPS indicate about a website?",
        "options": [
            "High-speed internet connection",
            "Secure, encrypted web connection",
            "Hypertext transfer protocol",
            "Host transfer protocol"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Secure, encrypted web connection",
        "difficulty": "easy",
        "explanation": "HTTPS (Hypertext Transfer Protocol Secure) indicates that the website uses SSL/TLS protocol to encrypt communication between the web browser and the website, providing a secure connection.",
        "hint": "The 'S' stands for secure communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a brute-force attack?",
        "options": [
            "An attack that uses sophisticated algorithms",
            "A method of guessing login credentials by trying multiple combinations",
            "A physical security breach",
            "A network scanning technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A method of guessing login credentials by trying multiple combinations",
        "difficulty": "medium",
        "explanation": "A brute-force attack involves systematically trying all possible password combinations until the correct one is found, typically using automated tools to attempt rapid password guessing.",
        "hint": "This method relies on trying many password combinations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does 'defense in depth' mean in network security?",
        "options": [
            "Using multiple layers of security controls",
            "Focusing on a single strong security measure",
            "Protecting only the network perimeter",
            "Implementing security only at the application layer"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using multiple layers of security controls",
        "difficulty": "hard",
        "explanation": "Defense in depth is a comprehensive security strategy that employs multiple layers of security controls throughout an information system to provide redundant protection mechanisms.",
        "hint": "This approach creates multiple barriers against potential security threats."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a honeypot in network security?",
        "options": [
            "A type of encryption method",
            "A decoy system designed to attract cyber attacks",
            "A network monitoring tool",
            "A password recovery system"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A decoy system designed to attract cyber attacks",
        "difficulty": "medium",
        "explanation": "A honeypot is a computer system or network segment intentionally designed to appear vulnerable, used to attract and study cyber attacks while keeping actual production systems safe.",
        "hint": "This is a trap set to detect and analyze potential attackers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does the principle of least privilege mean?",
        "options": [
            "Giving maximum access to all users",
            "Restricting user access to only essential resources",
            "Allowing unlimited network access",
            "Sharing administrative credentials"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Restricting user access to only essential resources",
        "difficulty": "hard",
        "explanation": "The principle of least privilege ensures that users are given minimum levels of access or permissions needed to perform their job functions, reducing potential security risks.",
        "hint": "This principle minimizes potential damage from accidental or intentional misuse."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a packet sniffer?",
        "options": [
            "A network security device",
            "A tool for capturing and analyzing network traffic",
            "A type of firewall",
            "A malware detection system"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A tool for capturing and analyzing network traffic",
        "difficulty": "medium",
        "explanation": "A packet sniffer is a software or hardware tool that can intercept and log network traffic, allowing analysis of data packets traveling across a network.",
        "hint": "This tool allows monitoring of network communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is phishing?",
        "options": [
            "A network scanning technique",
            "A method of stealing network hardware",
            "A social engineering attack to obtain sensitive information",
            "A type of encryption method"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A social engineering attack to obtain sensitive information",
        "difficulty": "easy",
        "explanation": "Phishing is a type of social engineering attack where attackers trick individuals into revealing sensitive information like passwords or credit card details by impersonating trustworthy entities.",
        "hint": "This attack often involves deceptive emails or websites."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a security policy?",
        "options": [
            "A technical configuration for firewalls",
            "A document defining an organization's security approach and requirements",
            "A type of network encryption",
            "A password creation guideline"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A document defining an organization's security approach and requirements",
        "difficulty": "easy",
        "explanation": "A security policy is a comprehensive document that outlines an organization's approach to information security, defining guidelines, responsibilities, and procedures for protecting assets.",
        "hint": "This document provides a framework for security practices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does two-factor authentication (2FA) provide?",
        "options": [
            "Double encryption",
            "Two different types of passwords",
            "An additional layer of security beyond passwords",
            "Two separate network connections"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An additional layer of security beyond passwords",
        "difficulty": "medium",
        "explanation": "Two-factor authentication requires users to provide two different authentication factors, typically a password and a second verification method like a code sent to a mobile device, enhancing security.",
        "hint": "This method adds an extra verification step beyond passwords."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is the primary purpose of an intrusion prevention system (IPS)?",
        "options": [
            "To detect network intrusions",
            "To block and prevent potential security threats",
            "To encrypt network traffic",
            "To manage user permissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To block and prevent potential security threats",
        "difficulty": "hard",
        "explanation": "An Intrusion Prevention System (IPS) actively monitors network traffic, identifies potential security threats, and takes immediate action to block or prevent those threats in real-time.",
        "hint": "This system actively stops potential security breaches."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a security token?",
        "options": [
            "A type of password",
            "A physical or digital device generating temporary access codes",
            "A network encryption method",
            "A firewall configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A physical or digital device generating temporary access codes",
        "difficulty": "medium",
        "explanation": "A security token is a physical device or software that generates temporary authentication codes, providing an additional layer of security beyond traditional passwords.",
        "hint": "This device creates unique, time-limited access codes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does end-to-end encryption ensure?",
        "options": [
            "Encryption only at network endpoints",
            "Data is encrypted throughout its entire transmission",
            "Encryption of network infrastructure",
            "Protection against all types of attacks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data is encrypted throughout its entire transmission",
        "difficulty": "hard",
        "explanation": "End-to-end encryption ensures that data remains encrypted from the point of origin to its final destination, preventing intermediaries from accessing the unencrypted content.",
        "hint": "This method protects data during its entire communication journey."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What is a security audit?",
        "options": [
            "A software update",
            "A comprehensive evaluation of an organization's security posture",
            "A type of network scanning",
            "A password reset procedure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A comprehensive evaluation of an organization's security posture",
        "difficulty": "hard",
        "explanation": "A security audit is a systematic evaluation of an organization's information systems, policies, and procedures to assess their effectiveness in maintaining security and identifying potential vulnerabilities.",
        "hint": "This process thoroughly examines an organization's security practices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Security",
        "questionText": "What does a security baseline define?",
        "options": [
            "The minimum security requirements for a system",
            "A network encryption standard",
            "A password complexity rule",
            "A firewall configuration"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The minimum security requirements for a system",
        "difficulty": "medium",
        "explanation": "A security baseline establishes the minimum acceptable security configuration and requirements for systems, networks, and applications to ensure a consistent level of protection.",
        "hint": "This sets the foundational security standards for an organization."
    },

    // Wireless Networks
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does WiFi stand for?",
        "options": [
            "Wireless Fidelity",
            "Wireless Framework",
            "Wireless Frequency",
            "Wireless Function"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Wireless Fidelity",
        "difficulty": "easy",
        "explanation": "Contrary to popular belief, WiFi doesn't actually stand for anything specific. The term was created by the Wi-Fi Alliance as a play on 'Hi-Fi' (High Fidelity), but it's not an acronym.",
        "hint": "Think about audio terminology and wireless technology."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What frequency bands do most modern WiFi networks operate on?",
        "options": [
            "1 GHz and 2 GHz",
            "2.4 GHz and 5 GHz",
            "3 GHz and 6 GHz",
            "4 GHz and 7 GHz"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "2.4 GHz and 5 GHz",
        "difficulty": "medium",
        "explanation": "Most modern WiFi networks operate on two primary frequency bands: 2.4 GHz (longer range, more interference) and 5 GHz (shorter range, less interference).",
        "hint": "Consider the common frequency bands used in wireless networking."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does SSID stand for?",
        "options": [
            "Secure System Identification",
            "Service Set Identifier",
            "Signal Strength Indicator",
            "Synchronized System Interface Device"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Service Set Identifier",
        "difficulty": "easy",
        "explanation": "SSID (Service Set Identifier) is the name of a wireless network that identifies it to devices in the area. It's essentially the name you see when searching for WiFi networks.",
        "hint": "This is the name of a wireless network."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does WPA3 provide that its predecessor WPA2 did not?",
"options": [
            "Faster internet speeds",
            "Improved encryption and protection against brute-force attacks",
            "Longer WiFi range",
            "More simultaneous connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved encryption and protection against brute-force attacks",
        "difficulty": "medium",
        "explanation": "WPA3 (Wi-Fi Protected Access 3) offers stronger encryption, individualized data encryption, and more robust protection against password guessing attacks compared to WPA2.",
        "hint": "Focus on security improvements in wireless encryption."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary purpose of a wireless access point (WAP)?",
        "options": [
            "To create a wired network",
            "To extend cellular network coverage",
            "To connect wireless devices to a wired network",
            "To block wireless signals"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To connect wireless devices to a wired network",
        "difficulty": "easy",
        "explanation": "A wireless access point (WAP) acts as a central transmitter and receiver of wireless radio signals, allowing wireless devices to connect to a wired network infrastructure.",
        "hint": "Think about bridging wireless and wired networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does MIMO stand for in wireless networking?",
        "options": [
            "Mobile Integrated Management Operation",
            "Multiple Input Multiple Output",
            "Mobile Internet Management Option",
            "Modular Integrated Multipath Operation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Multiple Input Multiple Output",
        "difficulty": "medium",
        "explanation": "MIMO is a wireless technology that uses multiple antennas at both the transmitter and receiver to improve communication performance and increase data throughput.",
        "hint": "This technology involves multiple antennas for better signal transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary difference between 802.11ac and 802.11ax (WiFi 6) standards?",
        "options": [
            "Frequency bands used",
            "Maximum theoretical speed",
            "Improved efficiency in crowded environments",
            "Encryption methods"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Improved efficiency in crowded environments",
        "difficulty": "hard",
        "explanation": "WiFi 6 (802.11ax) improves upon 802.11ac by introducing technologies like OFDMA and MU-MIMO that significantly enhance network efficiency in dense environments with many connected devices.",
        "hint": "Consider how modern WiFi standards handle multiple device connections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is a rogue access point?",
        "options": [
            "A government-controlled WiFi network",
            "An unauthorized wireless access point installed without network administrator's permission",
            "A high-speed wireless router",
            "A specialized network security device"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An unauthorized wireless access point installed without network administrator's permission",
        "difficulty": "medium",
        "explanation": "A rogue access point is a wireless access point installed on a network without the knowledge or permission of the network administrator, potentially creating a significant security vulnerability.",
        "hint": "Think about unauthorized network access points."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What technology allows wireless devices to communicate directly without a central access point?",
        "options": [
            "Bluetooth",
            "WiFi Direct",
            "NFC",
            "Infrared"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "WiFi Direct",
        "difficulty": "easy",
        "explanation": "WiFi Direct allows devices to connect directly to each other without needing a wireless router or internet connection, creating a peer-to-peer network.",
        "hint": "This technology enables direct device-to-device communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does LTE stand for in cellular networks?",
        "options": [
            "Long-Term Evolution",
            "Local Telecommunications Exchange",
            "Lightweight Technical Encryption",
            "Limited Transmission Efficiency"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Long-Term Evolution",
        "difficulty": "easy",
        "explanation": "LTE (Long-Term Evolution) is a standard for wireless broadband communication for mobile devices, offering high-speed data for mobile phones and data terminals.",
        "hint": "This refers to a cellular network technology."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is a major advantage of 5G networks over 4G?",
        "options": [
            "Longer battery life",
            "Significantly lower latency and higher data speeds",
            "Reduced network coverage",
            "Lower initial infrastructure costs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Significantly lower latency and higher data speeds",
        "difficulty": "medium",
        "explanation": "5G networks offer dramatically reduced latency (response time) and much higher data transmission speeds compared to 4G, enabling new technologies like real-time remote surgery and autonomous vehicles.",
        "hint": "Consider the performance improvements in cellular networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is a WiFi 'channel'?",
        "options": [
            "A physical cable connection",
            "A specific frequency range within a WiFi band",
            "A network security protocol",
            "A type of wireless encryption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A specific frequency range within a WiFi band",
        "difficulty": "medium",
        "explanation": "A WiFi channel is a specific frequency range within a WiFi band (2.4 GHz or 5 GHz) that wireless routers use to transmit data. Choosing the right channel can help reduce interference.",
        "hint": "Think about how wireless signals are organized."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is beamforming in wireless networking?",
        "options": [
            "A method of blocking wireless signals",
            "A technique to focus a wireless signal toward a specific device",
            "A way to increase network security",
            "A method of creating mesh networks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A technique to focus a wireless signal toward a specific device",
        "difficulty": "hard",
        "explanation": "Beamforming is a signal processing technique used in wireless networks that focuses a wireless signal towards a specific receiving device, improving signal strength and network performance.",
        "hint": "This technology helps target wireless signals more precisely."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary purpose of IoT in wireless networks?",
        "options": [
            "To replace traditional networking",
            "To connect and communicate between various smart devices",
            "To increase internet speed",
            "To reduce network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To connect and communicate between various smart devices",
        "difficulty": "easy",
        "explanation": "The Internet of Things (IoT) enables devices to communicate and exchange data over wireless networks, creating smart, interconnected ecosystems in homes, industries, and cities.",
        "hint": "Think about how different devices can communicate wirelessly."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is a mesh network?",
        "options": [
            "A network with a single central access point",
            "A network where devices can relay data for each other",
            "A wired network configuration",
            "A cellular network topology"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A network where devices can relay data for each other",
        "difficulty": "medium",
        "explanation": "A mesh network is a network topology where each device can act as a relay, extending the network's range and providing multiple paths for data transmission, improving reliability.",
        "hint": "Consider how devices can help extend network coverage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does NFC stand for?",
        "options": [
            "Network Frequency Control",
            "Near Field Communication",
            "Network Fiber Connection",
            "Network Forwarding Channel"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Near Field Communication",
        "difficulty": "easy",
        "explanation": "NFC (Near Field Communication) is a short-range wireless technology that enables communication between devices when they are brought very close together, typically within 4 cm.",
        "hint": "This technology is used for short-range wireless interactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary security risk of using public WiFi?",
        "options": [
            "Slower internet speeds",
            "Potential unauthorized access to your data",
            "Limited device compatibility",
            "Increased battery consumption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Potential unauthorized access to your data",
        "difficulty": "medium",
        "explanation": "Public WiFi networks often lack robust security, making it easier for attackers to intercept data, perform man-in-the-middle attacks, or gain unauthorized access to users' devices and information.",
        "hint": "Consider the security vulnerabilities of shared networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the purpose of a WiFi repeater?",
        "options": [
            "To create a new WiFi network",
            "To extend the range of an existing WiFi network",
            "To increase internet speed",
            "To provide network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To extend the range of an existing WiFi network",
        "difficulty": "easy",
        "explanation": "A WiFi repeater receives an existing WiFi signal, amplifies it, and retransmits it, helping to extend the wireless network's coverage area.",
        "hint": "Think about expanding wireless network reach."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary difference between WiFi and Bluetooth?",
        "options": [
            "They are exactly the same technology",
            "Range and data transfer capabilities",
            "Encryption methods",
            "Frequency bands used"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Range and data transfer capabilities",
        "difficulty": "medium",
        "explanation": "WiFi is designed for longer-range, high-bandwidth network connections, while Bluetooth is optimized for short-range, low-power device communication.",
        "hint": "Consider the typical use cases for each technology."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does MU-MIMO stand for?",
        "options": [
            "Multi-User Multiple Input Multiple Output",
            "Mobile Unified Mobile Input Management Operation",
            "Managed Unified Multipath Input Model",
            "Mobile Unified Modular Internet Management"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Multi-User Multiple Input Multiple Output",
        "difficulty": "hard",
        "explanation": "MU-MIMO is a wireless technology that allows a router to communicate with multiple devices simultaneously, improving network efficiency and performance in crowded environments.",
        "hint": "This technology enhances multi-device communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is a potential security vulnerability in WiFi networks?",
        "options": [
            "Too many devices connected",
            "Physical distance between devices",
            "Weak or default passwords",
            "High internet speeds"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Weak or default passwords",
        "difficulty": "easy",
        "explanation": "Weak or default passwords are a significant security risk in WiFi networks, as they can be easily guessed or brute-forced by attackers, potentially allowing unauthorized access.",
        "hint": "Consider how passwords can compromise network security."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What technology enables wireless charging?",
        "options": [
            "Bluetooth",
            "NFC",
            "Qi Wireless Charging",
            "WiFi"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Qi Wireless Charging",
        "difficulty": "easy",
        "explanation": "Qi is the international standard for wireless charging, using electromagnetic induction to transfer energy between a charging pad and a compatible device.",
        "hint": "This is a standard for charging without physical connections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary advantage of millimeter-wave technology in 5G?",
        "options": [
            "Lower power consumption",
            "Ability to transmit extremely high-bandwidth data",
            "Increased network security",
            "Longer transmission range"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ability to transmit extremely high-bandwidth data",
        "difficulty": "hard",
        "explanation": "Millimeter-wave technology in 5G allows for extremely high-frequency signals that can transmit massive amounts of data, enabling technologies like ultra-high-definition video streaming and real-time industrial applications.",
        "hint": "Consider the data transmission capabilities of advanced wireless technologies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the purpose of a VPN in wireless networks?",
        "options": [
            "To increase WiFi speed",
            "To provide a secure, encrypted connection",
            "To extend WiFi range",
            "To create a new wireless network"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide a secure, encrypted connection",
        "difficulty": "medium",
        "explanation": "A Virtual Private Network (VPN) creates an encrypted tunnel for network communications, protecting data from interception and providing privacy, especially on public or unsecured wireless networks.",
        "hint": "Think about securing network communications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does LoRaWAN stand for?",
        "options": [
            "Long Range Wide Area Network",
            "Local Rapid Wireless Access Network",
            "Low-Range Wireless Analog Network",
            "Lightweight Radio Wide Area Network"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Long Range Wide Area Network",
        "difficulty": "hard",
        "explanation": "LoRaWAN is a low-power, wide-area networking protocol designed for long-range communication in Internet of Things (IoT) devices, particularly in smart city and industrial applications.",
        "hint": "Consider wireless technologies for long-range IoT communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary function of a WiFi bridge?",
        "options": [
            "To increase WiFi security",
            "To connect two separate network segments",
            "To create a new WiFi network",
            "To boost WiFi speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To connect two separate network segments",
        "difficulty": "medium",
        "explanation": "A WiFi bridge connects two network segments that are physically separated, allowing them to communicate as if they were part of the same local network.",
        "hint": "Think about connecting distant network areas."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What does 'roaming' mean in wireless networks?",
        "options": [
            "Moving physical locations",
            "Switching between different wireless access points while maintaining connection",
            "Increasing WiFi range",
            "Creating a new wireless network"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Switching between different wireless access points while maintaining connection",
        "difficulty": "easy",
        "explanation": "In wireless networking, roaming allows a device to automatically switch between different access points or cellular towers while maintaining a continuous network connection.",
        "hint": "Consider how devices maintain connectivity while moving."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What technology enables wireless sensor networks?",
        "options": [
            "Bluetooth",
            "WiFi",
            "Zigbee",
            "NFC"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Zigbee",
        "difficulty": "hard",
        "explanation": "Zigbee is a low-power, low-data-rate wireless networking standard designed for battery-powered devices, making it ideal for wireless sensor networks in home automation, industrial monitoring, and IoT applications.",
        "hint": "Consider wireless technologies for low-power sensor networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wireless Networks",
        "questionText": "What is the primary purpose of WiFi calling?",
        "options": [
            "To replace cellular networks",
            "To make phone calls over WiFi instead of cellular networks",
            "To increase internet speed",
            "To provide network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To make phone calls over WiFi instead of cellular networks",
        "difficulty": "easy",
        "explanation": "WiFi calling allows users to make and receive phone calls and text messages over a WiFi network when cellular signal is weak or unavailable, using Voice over IP (VoIP) technology.",
        "hint": "Think about alternative ways to make phone calls."
    },

    // Wide Area Networks
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does WAN stand for?",
        "options": [
            "World Area Network",
            "Wide Area Network", 
            "Wireless Access Network",
            "Wide Aggregate Network"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Wide Area Network",
        "difficulty": "easy",
        "explanation": "A Wide Area Network (WAN) is a telecommunications network that extends over a large geographical area, typically connecting multiple local area networks (LANs).",
        "hint": "Think about networks that span cities, countries, or even continents."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "Which technology is commonly used for connecting remote branch offices in WANs?",
        "options": [
            "Bluetooth",
            "MPLS",
            "WiFi",
            "NFC"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MPLS",
        "difficulty": "medium",
        "explanation": "Multiprotocol Label Switching (MPLS) is a routing technique that directs data from one network node to the next based on short path labels rather than long network addresses.",
        "hint": "This protocol is efficient for creating private wide area networks with multiple locations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the primary purpose of a leased line in WAN connectivity?",
        "options": [
            "Wireless communication",
            "Dedicated point-to-point connection",
            "Network security",
            "Load balancing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Dedicated point-to-point connection",
        "difficulty": "medium",
        "explanation": "A leased line provides a dedicated, symmetric, and permanent communication link between two locations, offering consistent bandwidth and reliability.",
        "hint": "Consider a private communication channel that is always available between two specific points."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "Which WAN technology allows dynamic path selection for improved network performance?",
        "options": [
            "MPLS",
            "SD-WAN",
            "Frame Relay",
            "X.25"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "SD-WAN",
        "difficulty": "hard",
        "explanation": "Software-Defined Wide Area Network (SD-WAN) enables intelligent path selection, allowing traffic to be routed over the most efficient network path in real-time.",
        "hint": "This technology uses software to control and optimize WAN connectivity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the typical bandwidth range for a T1 leased line?",
        "options": [
            "1.544 Mbps",
            "10 Mbps",
            "100 Mbps",
            "1 Gbps"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "1.544 Mbps",
        "difficulty": "medium",
        "explanation": "A T1 line provides 1.544 Mbps of symmetric bandwidth, traditionally used for enterprise connectivity before higher-speed alternatives.",
        "hint": "This is a standard telecommunications transmission rate in North America."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does the term 'last mile' refer to in WAN connectivity?",
        "options": [
            "The final network segment connecting the customer to the internet service provider",
            "The longest cable run in a network",
            "The final 100 meters of a network cable",
            "The maximum distance of a network connection"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The final network segment connecting the customer to the internet service provider",
        "difficulty": "medium",
        "explanation": "'Last mile' describes the final leg of telecommunications networks that deliver services to customers, often representing the most costly and technically challenging part of network infrastructure.",
        "hint": "This is the connection between the ISP's infrastructure and the end-user's location."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "Which protocol is used for tunneling and creating VPN connections in WANs?",
        "options": [
            "HTTP",
            "SMTP",
            "IPsec",
            "FTP"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "IPsec",
        "difficulty": "hard",
        "explanation": "Internet Protocol Security (IPsec) is a protocol suite for securing internet communications by authenticating and encrypting data packets.",
        "hint": "This protocol operates at the network layer and is crucial for creating secure network tunnels."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is Frame Relay primarily used for in WAN architectures?",
"options": [
    "Wireless communication",
    "Data link layer packet switching",
    "Network address translation",
    "Physical layer encoding"
],
"correctOptionIndex": 1,
"correctOptionText": "Data link layer packet switching",
"difficulty": "hard",
"explanation": "Frame Relay is a packet-switching protocol for connecting devices on a wide area network, operating at the data link layer to efficiently transmit data between network points.",
"hint": "This technology was popular before the widespread adoption of MPLS and IP-based networks."
},
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does the abbreviation 'ATM' stand for in WAN technologies?",
        "options": [
            "Asynchronous Transfer Mode",
            "Advanced Transmission Management",
            "Automated Traffic Monitoring",
            "Advanced Telecommunications Mechanism"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Asynchronous Transfer Mode",
        "difficulty": "medium",
        "explanation": "Asynchronous Transfer Mode (ATM) is a high-speed networking technology that uses fixed-size packets called cells for transmitting various types of network traffic.",
        "hint": "This was a popular WAN technology in the 1990s and early 2000s before being largely replaced by IP-based technologies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the primary advantage of using MPLS in a WAN?",
        "options": [
            "Increased wireless range",
            "Reduced network latency and improved traffic management",
            "Automatic IP address assignment",
            "Enhanced physical security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reduced network latency and improved traffic management",
        "difficulty": "medium",
        "explanation": "MPLS provides efficient routing by using label switching, which reduces network congestion and allows for better traffic prioritization and quality of service (QoS).",
        "hint": "This technology helps in creating more predictable and performance-optimized network paths."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the purpose of a Point of Presence (PoP) in WAN infrastructure?",
"options": [
    "Physical network endpoint",
    "Network access point for internet service providers",
    "Personal computer connection",
    "Packet routing mechanism"
],
"correctOptionIndex": 1,
"correctOptionText": "Network access point for internet service providers",
"difficulty": "hard",
"explanation": "A Point of Presence (PoP) is a physical location where telecommunications equipment is installed, allowing internet service providers to connect their customers to the broader internet infrastructure.",
"hint": "Think of this as a local access point that connects regional networks to the global internet backbone."
},
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "Which WAN technology is designed to provide virtual circuit connectivity?",
        "options": [
            "MPLS",
            "X.25",
            "Ethernet",
            "WiFi"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "X.25",
        "difficulty": "hard",
        "explanation": "X.25 is a packet-switching network protocol that provides virtual circuit connectivity between devices, popular in the 1980s and early 1990s before being largely replaced by more modern technologies.",
        "hint": "This was an early standardized protocol for wide area network communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does 'bandwidth on demand' typically mean in WAN contexts?",
        "options": [
            "Unlimited internet access",
            "Ability to dynamically adjust network capacity",
            "Free network upgrades",
            "Constant maximum bandwidth"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ability to dynamically adjust network capacity",
        "difficulty": "medium",
        "explanation": "Bandwidth on demand allows organizations to quickly scale their network capacity up or down based on current needs, typically in cloud or software-defined networking environments.",
        "hint": "This feature provides flexibility in managing network resources in real-time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the primary difference between a dedicated leased line and a VPN?",
        "options": [
            "Transmission speed",
            "Geographic coverage",
            "Physical vs. virtual connectivity",
            "Protocol used"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Physical vs. virtual connectivity",
        "difficulty": "hard",
        "explanation": "A dedicated leased line is a physical, fixed-bandwidth connection between two points, while a VPN creates a secure, virtual tunnel over existing network infrastructure.",
        "hint": "One provides a guaranteed physical connection, the other a secure logical connection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What technology enables the extension of a private network across public networks?",
        "options": [
            "Firewall",
            "Load Balancer",
            "VPN",
            "Proxy Server"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "VPN",
        "difficulty": "easy",
        "explanation": "A Virtual Private Network (VPN) creates an encrypted tunnel that allows secure communication over public networks, effectively extending a private network's reach.",
        "hint": "This technology provides privacy and security for remote network connections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does SD-WAN primarily aim to optimize?",
        "options": [
            "Hardware costs",
            "Network performance and connectivity",
            "Physical network infrastructure",
            "Server deployment"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Network performance and connectivity",
        "difficulty": "medium",
        "explanation": "Software-Defined Wide Area Network (SD-WAN) focuses on dynamically managing network resources to optimize performance, reliability, and cost-effectiveness across multiple connection types.",
        "hint": "This technology uses software intelligence to route network traffic more efficiently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "Which protocol is crucial for managing remote network devices in WANs?",
        "options": [
            "HTTP",
            "SNMP",
            "FTP",
            "SMTP"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "SNMP",
        "difficulty": "hard",
        "explanation": "Simple Network Management Protocol (SNMP) allows network administrators to collect and organize information about managed devices on IP networks, facilitating remote monitoring and configuration.",
        "hint": "This protocol enables centralized management of network infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the primary function of a WAN optimizer?",
        "options": [
            "Increase network security",
            "Reduce network latency and improve performance",
            "Assign IP addresses",
            "Create wireless networks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reduce network latency and improve performance",
        "difficulty": "medium",
        "explanation": "WAN optimizers use various techniques like data compression, caching, and protocol optimization to improve network performance and reduce bandwidth consumption.",
        "hint": "These devices help accelerate application performance across wide area networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What technology enables connecting multiple branch offices with centralized network management?",
        "options": [
            "Bluetooth",
            "MPLS",
            "NFC",
            "WiFi"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MPLS",
        "difficulty": "easy",
        "explanation": "Multiprotocol Label Switching (MPLS) allows organizations to create reliable, secure, and scalable wide area networks that connect multiple branch locations with efficient routing and management.",
        "hint": "This is a preferred enterprise networking solution for multi-location businesses."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does 'tunneling' mean in WAN technologies?",
        "options": [
            "Physical cable installation",
            "Creating encrypted network paths",
            "Underground network deployment",
            "Network cable management"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating encrypted network paths",
        "difficulty": "medium",
        "explanation": "Network tunneling involves encapsulating one network protocol within another, creating a secure, logical pathway for data transmission across different network infrastructures.",
        "hint": "This technique allows secure communication over potentially untrusted networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is a primary advantage of using fiber optic connections in WANs?",
        "options": [
            "Lower cost",
            "Shorter transmission distances",
            "High bandwidth and low signal degradation",
            "Easier installation"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "High bandwidth and low signal degradation",
        "difficulty": "hard",
        "explanation": "Fiber optic connections offer significantly higher bandwidth, lower latency, and less signal loss compared to traditional copper-based network media, making them ideal for long-distance WAN connections.",
        "hint": "These cables use light signals instead of electrical signals for data transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What technology enables secure remote access to corporate networks?",
        "options": [
            "Firewall",
            "VPN",
            "Load Balancer",
            "Proxy Server"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "VPN",
        "difficulty": "easy",
        "explanation": "Virtual Private Networks (VPNs) create encrypted tunnels that allow remote workers to securely access corporate networks from external locations.",
        "hint": "This technology provides a secure, private connection over public networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What problem does SD-WAN specifically address in enterprise networking?",
        "options": [
            "Physical server management",
            "Network performance and connectivity challenges",
            "Email routing",
            "Wireless signal strength"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Network performance and connectivity challenges",
        "difficulty": "medium",
        "explanation": "SD-WAN addresses network complexity by dynamically routing traffic across multiple connection types to optimize performance, reliability, and cost-effectiveness.",
        "hint": "This technology provides intelligent path selection and management."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the primary purpose of a carrier-neutral data center in WAN infrastructure?",
        "options": [
            "Single carrier connectivity",
            "Multiple internet service provider interconnection",
            "Local network management",
            "Server cooling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Multiple internet service provider interconnection",
        "difficulty": "hard",
        "explanation": "A carrier-neutral data center allows multiple telecommunications carriers to interconnect, providing organizations with greater network flexibility, redundancy, and potentially lower connectivity costs.",
        "hint": "This facility enables businesses to choose from multiple network providers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What technology provides quality of service (QoS) in wide area networks?",
        "options": [
            "DHCP",
            "MPLS",
            "NAT",
            "DNS"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MPLS",
        "difficulty": "medium",
        "explanation": "Multiprotocol Label Switching (MPLS) enables traffic prioritization and guaranteed service levels by using label-switched paths, ensuring critical applications receive appropriate bandwidth and low latency.",
        "hint": "This protocol can differentiate and prioritize various types of network traffic."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What does 'redundancy' mean in WAN network design?",
        "options": [
            "Duplicate network equipment",
            "Unnecessary network components",
            "Single point of failure",
            "Limited network capacity"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Duplicate network equipment",
        "difficulty": "easy",
        "explanation": "Network redundancy involves deploying backup systems and multiple communication paths to ensure continuous network operation in case of component failure.",
        "hint": "This strategy prevents total network shutdown if one component fails."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "What is the primary benefit of using private line services in WANs?",
        "options": [
            "Lower cost",
            "Guaranteed bandwidth and reliability",
            "Unlimited data transfer",
            "Wireless connectivity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Guaranteed bandwidth and reliability",
        "difficulty": "medium",
        "explanation": "Private line services provide dedicated, symmetric bandwidth with guaranteed performance levels, making them ideal for mission-critical business communications.",
        "hint": "These services offer consistent network performance without sharing resources with other customers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Wide Area Networks",
        "questionText": "Which emerging technology is transforming WAN connectivity?",
        "options": [
            "Dial-up networking",
            "5G networks",
            "Token Ring",
            "AppleTalk"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "5G networks",
        "difficulty": "easy",
        "explanation": "5G networks promise significantly higher bandwidth, lower latency, and greater network flexibility, potentially revolutionizing wide area network connectivity and enabling new communication paradigms.",
        "hint": "This wireless technology offers substantial improvements over previous cellular network generations."
    },

    // Network Management
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does SNMP stand for in network management?",
        "options": [
            "Simple Network Monitoring Protocol",
            "Systematic Network Management Platform",
            "Simple Network Management Protocol",
            "Structured Network Monitoring Process"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Simple Network Management Protocol",
        "difficulty": "easy",
        "explanation": "SNMP is a standard protocol used for collecting and organizing information about managed devices on IP networks, enabling network monitoring and management.",
        "hint": "This is the most widely used protocol for network device communication and monitoring."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is the primary purpose of a Network Management System (NMS)?",
        "options": [
            "Generating network traffic",
            "Monitoring, configuring, and maintaining network infrastructure",
            "Creating network security policies",
            "Designing network topologies"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Monitoring, configuring, and maintaining network infrastructure",
        "difficulty": "medium",
        "explanation": "A Network Management System provides centralized tools for monitoring network performance, managing network devices, detecting and resolving issues, and ensuring optimal network operation.",
        "hint": "Think of this as the control center for an organization's network infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does the term 'MIB' refer to in network management?",
        "options": [
            "Mobile Internet Browser",
            "Management Information Base",
            "Multiple Interface Bridge",
            "Network Monitoring Database"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Management Information Base",
        "difficulty": "hard",
        "explanation": "A Management Information Base (MIB) is a hierarchical database that defines the structure of management data for a device subsystem using SNMP, allowing standardized device information collection.",
        "hint": "This is a key component in defining what information can be accessed about a network device."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "Which tool is commonly used for network performance monitoring and fault detection?",
        "options": [
            "Microsoft Excel",
            "Wireshark",
            "Notepad",
            "Adobe Photoshop"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Wireshark",
        "difficulty": "medium",
        "explanation": "Wireshark is a popular network protocol analyzer that allows administrators to capture and interactively browse network traffic in real-time, helping diagnose network issues and performance problems.",
        "hint": "This is an open-source network protocol analyzer used for network troubleshooting."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'fault management' involve in network administration?",
        "options": [
            "Creating network faults",
            "Detecting, logging, and resolving network problems",
            "Generating network errors",
            "Preventing network upgrades"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Detecting, logging, and resolving network problems",
        "difficulty": "medium",
        "explanation": "Fault management is a critical network management process that involves identifying, documenting, and resolving network issues to minimize downtime and maintain network reliability.",
        "hint": "This is about proactively addressing and fixing network-related problems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is a 'trap' in SNMP terminology?",
        "options": [
            "A physical network device",
            "An unsolicited notification from a network device",
            "A network security mechanism",
            "A type of network cable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An unsolicited notification from a network device",
        "difficulty": "hard",
        "explanation": "In SNMP, a trap is an autonomous message sent by a network device to the management station to report an event or condition, such as a critical error or significant status change.",
        "hint": "This is how network devices can proactively alert administrators to important events."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is the primary goal of 'configuration management' in network administration?",
        "options": [
            "Creating network configurations",
            "Maintaining consistent device configurations",
            "Blocking network changes",
            "Generating network documentation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Maintaining consistent device configurations",
        "difficulty": "medium",
        "explanation": "Configuration management involves tracking and controlling network device configurations to ensure consistency, compliance, and ease of management across the network infrastructure.",
        "hint": "This process helps maintain uniform settings and reduce configuration-related errors."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'performance management' primarily focus on in network administration?",
        "options": [
            "Hiring network administrators",
            "Monitoring and optimizing network performance",
            "Creating network performance reports",
            "Designing network architecture"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Monitoring and optimizing network performance",
        "difficulty": "easy",
        "explanation": "Performance management involves continuously monitoring network metrics, identifying bottlenecks, and implementing optimizations to ensure efficient network operation and resource utilization.",
        "hint": "This is about ensuring the network meets performance requirements and user expectations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is a Network Management Protocol (NMP)?",
        "options": [
            "A physical network device",
            "A set of rules for managing network devices",
            "A type of network cable",
            "A network security mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A set of rules for managing network devices",
        "difficulty": "medium",
        "explanation": "A Network Management Protocol defines a standard set of rules and procedures for communicating with, monitoring, and managing network devices across different platforms and manufacturers.",
        "hint": "SNMP is a prime example of such a protocol."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'capacity management' involve in network administration?",
        "options": [
            "Limiting network users",
            "Planning and managing network resources and growth",
            "Reducing network bandwidth",
            "Blocking network expansion"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Planning and managing network resources and growth",
        "difficulty": "medium",
        "explanation": "Capacity management focuses on ensuring the network has sufficient resources to meet current and future operational requirements, involving bandwidth, storage, and processing capabilities.",
        "hint": "This is about anticipating and preparing for network resource needs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What tool is commonly used for network mapping and topology visualization?",
        "options": [
            "Microsoft Paint",
            "Wireshark",
            "Nmap",
            "Adobe Illustrator"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Nmap",
        "difficulty": "hard",
        "explanation": "Nmap (Network Mapper) is a powerful open-source tool used for network discovery, security auditing, and creating comprehensive network maps and topologies.",
        "hint": "This tool can scan and map network devices and their interconnections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is the purpose of a 'Network Management Dashboard'?",
        "options": [
            "Displaying network advertisements",
            "Providing a centralized view of network status and performance",
            "Creating network designs",
            "Generating network invoices"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Providing a centralized view of network status and performance",
        "difficulty": "easy",
        "explanation": "A Network Management Dashboard provides a comprehensive, real-time visual representation of network health, performance metrics, and potential issues, enabling quick decision-making.",
        "hint": "Think of this as a control center for monitoring network operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'security management' primarily focus on in network administration?",
        "options": [
            "Hiring security personnel",
            "Implementing and maintaining network security measures",
            "Creating security reports",
            "Designing security uniforms"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Implementing and maintaining network security measures",
        "difficulty": "medium",
        "explanation": "Security management involves developing, implementing, and continuously monitoring security policies, access controls, and protective measures to safeguard network resources from potential threats.",
        "hint": "This is about protecting the network from unauthorized access and potential security breaches."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is a 'Network Management Agent'?",
        "options": [
            "A human network administrator",
            "Software running on a network device that collects and reports management information",
            "A physical network security guard",
            "A network consulting service"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Software running on a network device that collects and reports management information",
        "difficulty": "hard",
        "explanation": "A Network Management Agent is a software component embedded in network devices that collects performance data, monitors device status, and communicates with network management systems.",
        "hint": "This is the 'eyes and ears' of network management software on individual devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is 'log management' in network administration?",
        "options": [
            "Cutting down trees",
            "Collecting, storing, and analyzing network device logs",
            "Managing physical log books",
            "Creating network documentation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Collecting, storing, and analyzing network device logs",
        "difficulty": "medium",
        "explanation": "Log management involves systematically collecting, storing, and analyzing log files from network devices to track events, troubleshoot issues, and maintain security compliance.",
        "hint": "This helps in understanding network activities and investigating potential problems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'availability management' ensure in network operations?",
        "options": [
            "Network device availability for purchase",
            "Maximizing network uptime and reliability",
            "Creating network schedules",
            "Limiting network access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Maximizing network uptime and reliability",
        "difficulty": "easy",
        "explanation": "Availability management focuses on maintaining high network reliability, minimizing downtime, and ensuring that network resources are consistently accessible to users.",
        "hint": "This is about keeping the network operational and accessible as much as possible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What tool is used for network bandwidth monitoring?",
        "options": [
            "Microsoft Word",
            "Iperf",
            "Adobe Photoshop",
            "Microsoft PowerPoint"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Iperf",
        "difficulty": "hard",
        "explanation": "Iperf is a network testing tool used to measure maximum TCP and UDP bandwidth performance, helping administrators understand network throughput and potential bottlenecks.",
        "hint": "This tool can help diagnose network speed and performance issues."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is a 'Network Management Information Base (MIB)'?",
        "options": [
            "A physical network storage device",
            "A database defining manageable objects in a network device",
            "A network security mechanism",
            "A type of network cable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A database defining manageable objects in a network device",
        "difficulty": "hard",
        "explanation": "A Network Management Information Base is a hierarchical database that defines the properties and attributes of managed network devices, allowing standardized information retrieval and management.",
        "hint": "This provides a structured way to access and manage network device information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is the primary purpose of 'network monitoring'?",
        "options": [
            "Creating network traffic",
            "Tracking network performance and detecting potential issues",
            "Blocking network access",
            "Designing network architecture"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Tracking network performance and detecting potential issues",
        "difficulty": "easy",
        "explanation": "Network monitoring involves continuously observing network performance, tracking resource utilization, and identifying potential problems before they impact users.",
        "hint": "This is about maintaining a proactive approach to network health."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'root cause analysis' involve in network troubleshooting?",
        "options": [
            "Identifying the fundamental source of a network problem",
            "Planting trees near network infrastructure",
            "Creating network root directories",
            "Generating network root passwords"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Identifying the fundamental source of a network problem",
        "difficulty": "medium",
        "explanation": "Root cause analysis is a systematic approach to identifying the underlying origin of network issues, helping administrators develop long-term solutions rather than just addressing symptoms.",
        "hint": "This approach focuses on understanding why a problem occurred, not just treating its immediate effects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is a 'network baseline' in performance management?",
        "options": [
            "A minimum network speed requirement",
            "A standard performance measurement for normal network operations",
            "A network security threshold",
            "A network design template"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A standard performance measurement for normal network operations",
        "difficulty": "medium",
        "explanation": "A network baseline represents the typical performance metrics of a network under normal conditions, serving as a reference point for identifying anomalies and performance deviations.",
        "hint": "This helps in understanding what 'normal' network performance looks like."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What tool is commonly used for network configuration management?",
        "options": [
            "Microsoft Excel",
            "Ansible",
            "Adobe Illustrator",
            "Microsoft PowerPoint"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ansible",
        "difficulty": "hard",
        "explanation": "Ansible is an open-source automation tool used for network configuration management, allowing administrators to automate device configuration, deployment, and management across multiple platforms.",
        "hint": "This tool helps standardize and automate network device configurations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is the purpose of a 'Network Management Protocol'?",
        "options": [
            "Creating network traffic",
            "Providing a standard method for managing network devices",
            "Blocking network access",
            "Designing network architecture"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Providing a standard method for managing network devices",
        "difficulty": "easy",
        "explanation": "A Network Management Protocol establishes a standardized set of rules and procedures for communicating with, monitoring, and managing network devices across different manufacturers and platforms.",
        "hint": "SNMP is a prime example of such a protocol."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'incident management' focus on in network administration?",
        "options": [
            "Creating network incidents",
            "Responding to and resolving network problems quickly",
            "Preventing network upgrades",
            "Generating network reports"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Responding to and resolving network problems quickly",
        "difficulty": "medium",
        "explanation": "Incident management involves developing processes and procedures to quickly detect, respond to, and resolve network issues to minimize their impact on business operations.",
        "hint": "This is about having a structured approach to handling network emergencies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What is a 'network inventory' in network management?",
        "options": [
            "A list of network devices and their configurations",
            "A physical storage of network equipment",
            "A network security checklist",
            "A network design document"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A list of network devices and their configurations",
        "difficulty": "easy",
        "explanation": "A network inventory is a comprehensive record of all network devices, their configurations, locations, and characteristics, helping administrators track and manage network resources.",
        "hint": "This is essentially a detailed catalog of network infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What does 'change management' involve in network administration?",
        "options": [
            "Generating network changes",
            "Controlling and documenting network modifications",
            "Preventing network updates",
            "Creating network change reports"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Controlling and documenting network modifications",
        "difficulty": "medium",
        "explanation": "Change management in network administration involves systematically planning, implementing, and documenting network modifications to minimize disruption and maintain network stability.",
        "hint": "This ensures that network changes are carefully planned and tracked."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Network Management",
        "questionText": "What tool is used for network device configuration backup?",
        "options": [
            "Microsoft Paint",
            "RANCID",
            "Adobe Photoshop",
            "Microsoft Word"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "RANCID",
        "difficulty": "hard",
        "explanation": "RANCID (Really Awesome New Cisco confIg Differ) is a tool used to maintain an archive of network device configurations, helping administrators track and restore device settings.",
        "hint": "This tool helps in preserving and managing network device configurations."
    },

    // IPv6
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the total bit length of an IPv6 address?",
        "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
        "correctOptionIndex": 2,
        "correctOptionText": "128 bits",
        "difficulty": "easy",
        "explanation": "IPv6 addresses are 128 bits long, which provides a significantly larger address space compared to IPv4's 32-bit addresses.",
        "hint": "How many bits represent an IPv6 address?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which of the following is a valid way to compress consecutive zero segments in an IPv6 address?",
        "options": ["*", "...", "::", "//"],
        "correctOptionIndex": 2,
        "correctOptionText": "::",
        "difficulty": "medium",
        "explanation": "The '::' notation allows compressing one or more groups of consecutive zero segments in an IPv6 address.",
        "hint": "Look for the symbol used to compress zero segments"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What does the prefix '/64' typically represent in an IPv6 network?",
        "options": ["Network mask", "Subnet prefix", "Host identifier", "Interface identifier"],
        "correctOptionIndex": 1,
        "correctOptionText": "Subnet prefix",
        "difficulty": "medium",
        "explanation": "In IPv6, a /64 prefix is commonly used to represent the network portion of an address, leaving 64 bits for host identification.",
        "hint": "Consider how network and host portions are divided"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the primary motivation behind the development of IPv6?",
        "options": ["Faster internet", "Enhanced security", "Larger address space", "Reduced routing complexity"],
        "correctOptionIndex": 2,
        "correctOptionText": "Larger address space",
        "difficulty": "easy",
        "explanation": "IPv6 was developed primarily to solve the address exhaustion problem of IPv4 by providing a vastly larger address space.",
        "hint": "Think about the limitations of IPv4 addresses"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is a global unicast IPv6 address typically characterized by?",
        "options": ["Starts with fe80::", "Starts with 2000::/3", "Starts with ff00::/8", "Starts with fc00::/7"],
        "correctOptionIndex": 1,
        "correctOptionText": "Starts with 2000::/3",
        "difficulty": "hard",
        "explanation": "Global unicast addresses in IPv6 start with the prefix 2000::/3, which represents addresses used for global routing on the internet.",
        "hint": "Identify the prefix range for globally routable addresses"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What does SLAAC stand for in IPv6 context?",
        "options": ["Stateless Address Autoconfiguration", "Static Link Allocation Algorithm", "Secure Local Area Authentication", "Synchronized Link Address Assignment"],
        "correctOptionIndex": 0,
        "correctOptionText": "Stateless Address Autoconfiguration",
        "difficulty": "medium",
        "explanation": "SLAAC allows hosts to automatically configure their own IPv6 addresses without the need for a stateful DHCPv6 server.",
        "hint": "This mechanism helps devices configure network addresses automatically"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is an IPv6 solicited-node multicast address used for?",


        "options": ["Network discovery", "Routing updates", "Security authentication", "Load balancing"],
        "correctOptionIndex": 0,
        "correctOptionText": "Network discovery",
        "difficulty": "hard",
        "explanation": "Solicited-node multicast addresses are used in the Neighbor Discovery Protocol (NDP) to efficiently resolve link-layer addresses.",
        "hint": "Think about how devices discover and communicate with each other on a local network"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which transition mechanism allows IPv6 packets to be encapsulated within IPv4 packets?",
        "options": ["NAT64", "6to4", "6rd", "SIIT"],
        "correctOptionIndex": 1,
        "correctOptionText": "6to4",
        "difficulty": "hard",
        "explanation": "6to4 is a transition mechanism that allows IPv6 networks to communicate over IPv4 networks by encapsulating IPv6 packets within IPv4 packets.",
        "hint": "Consider methods for interconnecting IPv6 and IPv4 networks"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What type of IPv6 address is fe80::1/10?",
        "options": ["Global unicast", "Multicast", "Link-local", "Loopback"],
        "correctOptionIndex": 2,
        "correctOptionText": "Link-local",
        "difficulty": "medium",
        "explanation": "Addresses starting with fe80:: are link-local addresses, used for communication within a single network segment.",
        "hint": "Recognize the prefix for addresses with local network scope"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "In an IPv6 address 2001:0db8:85a3:0000:0000:8a2e:0370:7334, which part represents the interface identifier?",
        "options": ["2001:0db8", "85a3:0000", "8a2e:0370:7334", "0000:0000"],
        "correctOptionIndex": 2,
        "correctOptionText": "8a2e:0370:7334",
        "difficulty": "hard",
        "explanation": "In a 128-bit IPv6 address, the last 64 bits typically represent the interface identifier, derived from MAC address or generated randomly.",
        "hint": "Consider the 64-bit division of the address"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What does the IPv6 address ::1 represent?",
        "options": ["Default gateway", "Broadcast address", "Loopback address", "All-hosts multicast"],
        "correctOptionIndex": 2,
        "correctOptionText": "Loopback address",
        "difficulty": "easy",
        "explanation": "::1 is the IPv6 equivalent of the IPv4 127.0.0.1 loopback address, used to test network stack and refer to the local machine.",
        "hint": "Similar to localhost in IPv4"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which DHCPv6 mode allows clients to obtain both IP address and additional network configuration?",
        "options": ["Stateless", "Stateful", "Hybrid", "Dynamic"],
        "correctOptionIndex": 1,
        "correctOptionText": "Stateful",
        "difficulty": "medium",
        "explanation": "In stateful DHCPv6, clients receive both IPv6 addresses and additional network configuration parameters from the DHCPv6 server.",
        "hint": "Consider the level of configuration provided by the server"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the purpose of the IPv6 flow label field?",
        "options": ["Routing", "Address classification", "Traffic differentiation", "Header checksum"],
        "correctOptionIndex": 2,
        "correctOptionText": "Traffic differentiation",
        "difficulty": "hard",
        "explanation": "The flow label field in IPv6 allows for identifying and differentiating traffic flows, enabling Quality of Service (QoS) and special handling.",
        "hint": "Think about packet prioritization and traffic management"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which IPv6 address type is used for communicating within the same network segment?",
        "options": ["Global unicast", "Unique local", "Link-local", "Multicast"],
        "correctOptionIndex": 2,
        "correctOptionText": "Link-local",
        "difficulty": "easy",
        "explanation": "Link-local addresses (starting with fe80::) are used for communication within a single network segment or broadcast domain.",
        "hint": "Addresses with limited network scope"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What mechanism allows IPv6 to verify neighbor reachability?",
        "options": ["ARP", "ICMP", "BGP", "DNS"],
        "correctOptionIndex": 1,
        "correctOptionText": "ICMP",
        "difficulty": "medium",
        "explanation": "ICMPv6 Neighbor Solicitation and Advertisement messages are used to verify the reachability of neighbors on the local network.",
        "hint": "Consider the protocol used for network discovery and confirmation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which IPv6 address notation eliminates leading zeros?",
        "options": ["2001:0db8:0000:0000:0000:ff00:0042:8329", "2001:db8::ff00:42:8329", "2001:0db8::ff00:0042:8329", "2001:db8:0:0:0:ff00:42:8329"],
        "correctOptionIndex": 1,
        "correctOptionText": "2001:db8::ff00:42:8329",
        "difficulty": "medium",
        "explanation": "IPv6 allows compression of consecutive zero segments using the '::' notation, reducing address length and improving readability.",
        "hint": "Look for the most concise address representation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What transition mechanism enables running IPv6 over existing IPv4 infrastructure?",
        "options": ["6to4", "NAT64", "ISATAP", "Teredo"],
        "correctOptionIndex": 3,
        "correctOptionText": "Teredo",
        "difficulty": "hard",
        "explanation": "Teredo is a transition technology that allows IPv6 connectivity for hosts behind NAT by encapsulating IPv6 packets within UDP packets.",
        "hint": "Consider tunneling mechanisms for IPv6 deployment"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What does RFC 4291 define in the context of IPv6?",
        "options": ["Address architecture", "Header format", "Security protocols", "Routing mechanisms"],
        "correctOptionIndex": 0,
        "correctOptionText": "Address architecture",
        "difficulty": "hard",
        "explanation": "RFC 4291 defines the IPv6 addressing architecture, specifying address types, formats, and allocation strategies.",
        "hint": "Think about the foundational specification for IPv6 addresses"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which multicast address represents all IPv6 nodes on the local network?",
        "options": ["ff02::1", "ff01::1", "ff03::1", "ff00::1"],
        "correctOptionIndex": 0,
        "correctOptionText": "ff02::1",
        "difficulty": "medium",
        "explanation": "The multicast address ff02::1 represents all IPv6 nodes on the local network segment.",
        "hint": "Identify the multicast group for local network communication"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the primary difference between stateless and stateful DHCPv6?",
        "options": ["IP address assignment", "Security", "Network size", "Protocol compatibility"],
        "correctOptionIndex": 0,
        "correctOptionText": "IP address assignment",
        "difficulty": "hard",
        "explanation": "In stateless DHCPv6, clients use SLAAC for address configuration, while stateful DHCPv6 involves the server directly assigning IP addresses.",
        "hint": "Consider how IP addresses are obtained by clients"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which IPv6 address type is used for communication within an organization?",
        "options": ["Global unicast", "Link-local", "Unique local", "Multicast"],
        "correctOptionIndex": 2,
        "correctOptionText": "Unique local",
        "difficulty": "medium",
        "explanation": "Unique local addresses (fc00::/7) are similar to private IPv4 addresses and are used for communication within an organization.",
        "hint": "Think about addresses with limited external routing"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the maximum number of addresses possible with IPv6?",
        "options": ["2^32", "2^64", "2^128", "2^256"],
        "correctOptionIndex": 2,
        "correctOptionText": "2^128",
        "difficulty": "easy",
        "explanation": "IPv6's 128-bit address space allows for 2^128 (approximately 340 undecillion) unique addresses.",
        "hint": "Calculate the total possible addresses based on bit length"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What does the IPv6 header eliminate compared to IPv4?",
        "options": ["Flow label", "Source address", "Header checksum", "Version field"],
        "correctOptionIndex": 2,
        "correctOptionText": "Header checksum",
        "difficulty": "medium",
        "explanation": "IPv6 removes the header checksum field to reduce processing overhead, as checksum is handled by upper-layer protocols.",
        "hint": "Consider header simplification in the new protocol version"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which extension headers in IPv6 allow for additional packet processing instructions?",
        "options": ["Routing", "Hop-by-hop", "Destination", "All of the above"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "hard",
        "explanation": "Routing, hop-by-hop, and destination extension headers provide additional processing instructions for IPv6 packets.",
        "hint": "Consider the various ways packets can be processed in IPv6"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What does a dual-stack configuration mean in IPv6 implementation?",
        "options": ["Two network interfaces", "Running IPv4 and IPv6 simultaneously", "Redundant routing", "Load balancing"],
        "correctOptionIndex": 1,
        "correctOptionText": "Running IPv4 and IPv6 simultaneously",
        "difficulty": "easy",
        "explanation": "A dual-stack configuration allows a device to run both IPv4 and IPv6 protocols simultaneously, facilitating smooth transition.",
        "hint": "Think about supporting both protocol versions"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the purpose of the IPv6 Neighbor Discovery Protocol (NDP)?",
        "options": ["Routing", "Address resolution", "Encryption", "Port scanning"],
        "correctOptionIndex": 1,
        "correctOptionText": "Address resolution",
        "difficulty": "medium",
        "explanation": "NDP is responsible for address resolution, router discovery, neighbor unreachability detection, and duplicate address detection.",
        "hint": "Consider network device communication and configuration"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "Which IPv6 transition mechanism uses 6to4 relay routers?",
        "options": ["NAT64", "ISATAP", "6rd", "Teredo"],
        "correctOptionIndex": 2,
        "correctOptionText": "6rd",
        "difficulty": "hard",
        "explanation": "6rd (IPv6 Rapid Deployment) builds upon 6to4 and uses relay routers to provide IPv6 connectivity over IPv4 infrastructure.",
        "hint": "Consider advanced transition technologies"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "IPv6",
        "questionText": "What is the recommended minimum MTU size for IPv6?",
        "options": ["576 bytes", "1280 bytes", "1500 bytes", "2048 bytes"],
        "correctOptionIndex": 1,
        "correctOptionText": "1280 bytes",
        "difficulty": "hard",
        "explanation": "RFC 2460 mandates that all IPv6 implementations must support a minimum MTU of 1280 bytes to ensure compatibility.",
        "hint": "Consider the standard minimum transmission unit size"
    },

    // Software-Defined Networking
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary concept behind Software-Defined Networking (SDN)?",
        "options": ["Hardware acceleration", "Centralized network control", "Network virtualization", "Packet encryption"],
        "correctOptionIndex": 1,
        "correctOptionText": "Centralized network control",
        "difficulty": "easy",
        "explanation": "SDN separates the network's control logic from the underlying hardware, enabling centralized network management and programmability.",
        "hint": "Think about how network intelligence is managed"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary component responsible for network intelligence in SDN architecture?",
        "options": ["Forwarding plane", "Data plane", "Control plane", "Management plane"],
        "correctOptionIndex": 2,
        "correctOptionText": "Control plane",
        "difficulty": "medium",
        "explanation": "The control plane in SDN is responsible for making decisions about how to forward packets and managing network logic.",
        "hint": "Which plane makes routing and forwarding decisions?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What protocol is commonly used for communication between the control and data planes in SDN?",
        "options": ["SNMP", "HTTP", "OpenFlow", "OSPF"],
        "correctOptionIndex": 2,
        "correctOptionText": "OpenFlow",
        "difficulty": "medium",
        "explanation": "OpenFlow is the most widely used protocol for communication between the SDN controller and network devices.",
        "hint": "Consider the standard protocol for SDN communication"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary benefit of using a SDN controller?",
        "options": ["Increased hardware cost", "Network complexity", "Centralized network programmability", "Reduced network visibility"],
        "correctOptionIndex": 2,
        "correctOptionText": "Centralized network programmability",
        "difficulty": "easy",
        "explanation": "SDN controllers provide a centralized interface for programmatically controlling and managing network resources.",
        "hint": "Think about how network management becomes more flexible"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which of the following is NOT a typical characteristic of SDN?",
        "options": ["Programmability", "Centralized control", "Static routing", "Abstraction of network resources"],
        "correctOptionIndex": 2,
        "correctOptionText": "Static routing",
        "difficulty": "medium",
        "explanation": "SDN emphasizes dynamic, programmable routing, contrary to traditional static routing approaches.",
        "hint": "Consider the dynamic nature of SDN"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is network virtualization in the context of SDN?",
        "options": ["Physical network segmentation", "Creating virtual network overlays", "Reducing network bandwidth", "Increasing network latency"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating virtual network overlays",
        "difficulty": "hard",
        "explanation": "Network virtualization allows creating multiple logical networks on top of a single physical network infrastructure.",
        "hint": "Think about separating logical networks from physical infrastructure"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary role of the data plane in SDN?",
        "options": ["Decision making", "Packet forwarding", "Network management", "Policy creation"],
        "correctOptionIndex": 1,
        "correctOptionText": "Packet forwarding",
        "difficulty": "easy",
        "explanation": "The data plane is responsible for actual packet forwarding based on instructions from the control plane.",
        "hint": "Consider the plane that handles actual data transmission"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which SDN architecture component provides the northbound interface?",
        "options": ["Switch", "Router", "Controller", "Network application"],
        "correctOptionIndex": 3,
        "correctOptionText": "Network application",
        "difficulty": "hard",
        "explanation": "The northbound interface connects network applications to the SDN controller, allowing high-level network services and policies.",
        "hint": "Think about the interface for network applications"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is a key advantage of using REST APIs in SDN?",
        "options": ["Increased network latency", "Simplified network programmability", "Reduced network security", "Hardware limitation"],
        "correctOptionIndex": 1,
        "correctOptionText": "Simplified network programmability",
        "difficulty": "medium",
        "explanation": "REST APIs in SDN provide a standardized, easy-to-use interface for programmatically managing network resources.",
        "hint": "Consider how APIs facilitate network configuration"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What does NFV stand for in the context of network technologies?",
        "options": ["Network Function Virtualization", "Network Forwarding Validation", "Network Flow Verification", "Network Frequency Variation"],
        "correctOptionIndex": 0,
        "correctOptionText": "Network Function Virtualization",
        "difficulty": "medium",
        "explanation": "NFV allows network functions like firewalls, load balancers, and routers to be virtualized and run as software.",
        "hint": "Think about virtualizing network services"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which open-source SDN controller is developed by the Linux Foundation?",
        "options": ["Cisco ACI", "OpenDaylight", "VMware NSX", "Juniper Contrail"],
        "correctOptionIndex": 1,
        "correctOptionText": "OpenDaylight",
        "difficulty": "hard",
        "explanation": "OpenDaylight is an open-source SDN controller project hosted by the Linux Foundation, aimed at creating a standard SDN platform.",
        "hint": "Consider the Linux Foundation's SDN project"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the purpose of the southbound interface in SDN?",
        "options": ["Connecting to network applications", "Communication with network devices", "User authentication", "Network monitoring"],
        "correctOptionIndex": 1,
        "correctOptionText": "Communication with network devices",
        "difficulty": "medium",
        "explanation": "The southbound interface enables communication between the SDN controller and network devices like switches and routers.",
        "hint": "Think about the interface connecting the controller to network hardware"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which company developed the Application Centric Infrastructure (ACI) SDN solution?",
        "options": ["Juniper", "Cisco", "VMware", "Arista"],
        "correctOptionIndex": 1,
        "correctOptionText": "Cisco",
        "difficulty": "hard",
        "explanation": "Cisco ACI is an SDN solution that provides policy-based automation and application-driven policy enforcement.",
        "hint": "Consider the major networking vendor known for comprehensive SDN solutions"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary goal of Intent-Based Networking (IBN) in SDN?",
        "options": ["Increasing network complexity", "Translating business intent into network configurations", "Reducing network bandwidth", "Limiting network access"],
        "correctOptionIndex": 1,
        "correctOptionText": "Translating business intent into network configurations",
        "difficulty": "hard",
        "explanation": "Intent-Based Networking aims to automatically translate high-level business requirements into specific network configurations.",
        "hint": "Think about simplifying network management"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What type of network environment is SDN most beneficial for?",
        "options": ["Small, static networks", "Large, dynamic cloud environments", "Isolated networks", "Legacy network infrastructures"],
        "correctOptionIndex": 1,
        "correctOptionText": "Large, dynamic cloud environments",
        "difficulty": "medium",
        "explanation": "SDN provides significant advantages in large, dynamic cloud environments by enabling rapid, programmatic network configuration.",
        "hint": "Consider network environments with frequent changes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is a white-box switch in the context of SDN?",
        "options": ["A switch with white coloration", "A generic hardware switch that can run custom network operating systems", "A switch with enhanced security", "A switch with limited functionality"],
        "correctOptionIndex": 1,
        "correctOptionText": "A generic hardware switch that can run custom network operating systems",
        "difficulty": "hard",
        "explanation": "White-box switches are generic, low-cost hardware switches that can run different network operating systems, promoting vendor-neutral networking.",
        "hint": "Think about flexible, customizable network hardware"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What protocol is commonly used for network automation in SDN?",
        "options": ["SNMP", "NETCONF", "SMTP", "FTP"],
        "correctOptionIndex": 1,
        "correctOptionText": "NETCONF",
        "difficulty": "medium",
        "explanation": "NETCONF is a network configuration protocol used for managing network devices, supporting SDN automation efforts.",
        "hint": "Consider the standard protocol for network device configuration"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What does the term 'service chaining' refer to in SDN?",
        "options": ["Physical cable connection", "Sequential application of network services", "Network monitoring", "Bandwidth allocation"],
        "correctOptionIndex": 1,
        "correctOptionText": "Sequential application of network services",
        "difficulty": "hard",
        "explanation": "Service chaining allows network services to be dynamically linked and applied to network traffic in a specific sequence.",
        "hint": "Think about how network services can be orchestrated"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which programming language is commonly used for SDN controller development?",
        "options": ["C++", "Python", "Assembly", "Fortran"],
        "correctOptionIndex": 1,
        "correctOptionText": "Python",
        "difficulty": "medium",
        "explanation": "Python is widely used in SDN for its simplicity, readability, and extensive networking libraries.",
        "hint": "Consider the most popular programming language for network automation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary benefit of network programmability in SDN?",
        "options": ["Increased hardware costs", "Reduced network flexibility", "Automated network configuration", "Limited scalability"],
        "correctOptionIndex": 2,
        "correctOptionText": "Automated network configuration",
        "difficulty": "easy",
        "explanation": "Network programmability allows for automated, dynamic network configuration, reducing manual intervention and human error.",
        "hint": "Think about how networks can be more adaptable"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the role of overlay networks in SDN?",
        "options": ["Increasing network complexity", "Creating logical networks on top of physical infrastructure", "Reducing network performance", "Limiting network access"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating logical networks on top of physical infrastructure",
        "difficulty": "hard",
        "explanation": "Overlay networks in SDN allow creation of multiple logical networks that operate independently on the same physical network infrastructure.",
        "hint": "Consider network abstraction and virtualization"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which VMware product is a notable SDN solution?",
        "options": ["VMware ESXi", "VMware vSphere", "VMware NSX", "VMware vCenter"],
        "correctOptionIndex": 2,
        "correctOptionText": "VMware NSX",
        "difficulty": "medium",
        "explanation": "VMware NSX is a network virtualization and security platform that provides SDN capabilities for software-defined data centers.",
        "hint": "Think about VMware's network virtualization solution"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary challenge in SDN implementation?",
        "options": ["Cost reduction", "Legacy system integration", "Increased network speed", "Reduced complexity"],
        "correctOptionIndex": 1,
        "correctOptionText": "Legacy system integration",
        "difficulty": "hard",
        "explanation": "Integrating SDN with existing legacy network infrastructure and ensuring compatibility is a significant implementation challenge.",
        "hint": "Consider the difficulties of modernizing network architectures"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What does the term 'network slicing' refer to in SDN and 5G networks?",
        "options": ["Physical network segmentation", "Creating virtual network segments with specific characteristics", "Reducing network bandwidth", "Increasing network latency"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating virtual network segments with specific characteristics",
        "difficulty": "hard",
        "explanation": "Network slicing allows creating multiple virtual networks with distinct performance characteristics on a single physical infrastructure.",
        "hint": "Think about customized network segments"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which protocol is crucial for network telemetry in SDN?",
        "options": ["SNMP", "gRPC", "SMTP", "FTP"],
        "correctOptionIndex": 1,
        "correctOptionText": "gRPC",
        "difficulty": "medium",
        "explanation": "gRPC is a high-performance RPC framework used for network telemetry and streaming network statistics in SDN.",
        "hint": "Consider modern protocols for network monitoring"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What is the primary purpose of network orchestration in SDN?",
        "options": ["Increasing network complexity", "Automating network service deployment", "Reducing network bandwidth", "Limiting network access"],
        "correctOptionIndex": 1,
        "correctOptionText": "Automating network service deployment",
        "difficulty": "easy",
        "explanation": "Network orchestration automates the deployment, management, and coordination of network services and resources.",
        "hint": "Think about simplifying network management processes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "What does the term 'controller clustering' mean in SDN?",
        "options": ["Physical network connection", "Grouping multiple SDN controllers for high availability", "Network monitoring", "Bandwidth allocation"],
        "correctOptionIndex": 1,
        "correctOptionText": "Grouping multiple SDN controllers for high availability",
        "difficulty": "medium",
        "explanation": "Controller clustering involves deploying multiple SDN controllers to ensure redundancy, load balancing, and high availability.",
        "hint": "Consider strategies for improving controller reliability"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Software-Defined Networking",
        "questionText": "Which security advantage does SDN provide?",
        "options": ["Increased vulnerability", "Centralized security policy enforcement", "Reduced network visibility", "Limited access control"],
        "correctOptionIndex": 1,
        "correctOptionText": "Centralized security policy enforcement",
        "difficulty": "easy",
        "explanation": "SDN enables centralized, consistent security policy enforcement across the entire network infrastructure.",
        "hint": "Think about network-wide security management"
    },

    // Cloud Networking
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is a key characteristic of cloud networking?",
        "options": [
            "Fixed physical infrastructure",
            "Dynamic and scalable resource allocation",
            "Exclusively on-premises networking",
            "Single vendor dependency"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Dynamic and scalable resource allocation",
        "difficulty": "easy",
        "explanation": "Cloud networking allows dynamic scaling of network resources based on demand, providing flexibility and efficiency.",
        "hint": "Think about how cloud resources can be quickly provisioned or deprovisioned."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which cloud networking model provides direct network connections between on-premises infrastructure and cloud providers?",
        "options": [
            "Virtual Private Cloud (VPC)",
            "Direct Connect/ExpressRoute",
            "Public Cloud Peering",
            "Software-Defined Networking (SDN)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Direct Connect/ExpressRoute",
        "difficulty": "medium",
        "explanation": "Direct Connect (AWS) and ExpressRoute (Azure) provide dedicated, private network connections between on-premises networks and cloud providers.",
        "hint": "This option bypasses public internet for more secure and consistent network performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What does 'multi-cloud networking' primarily refer to?",
        "options": [
            "Using multiple internet service providers",
            "Connecting networks across different cloud providers",
            "Implementing multiple network protocols",
            "Redundant network infrastructure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Connecting networks across different cloud providers",
        "difficulty": "medium",
        "explanation": "Multi-cloud networking involves creating interconnected networks that span multiple cloud service providers like AWS, Azure, and Google Cloud.",
        "hint": "Consider scenarios where organizations want to avoid vendor lock-in and leverage different cloud services."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which protocol is crucial for secure communication in cloud networking?",
        "options": [
            "HTTP",
            "FTP",
            "IPSec",
            "SMTP"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "IPSec",
        "difficulty": "easy",
        "explanation": "IPSec (Internet Protocol Security) provides encryption and authentication for secure network communications, especially in VPN and cloud environments.",
        "hint": "This protocol operates at the network layer and ensures data confidentiality and integrity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is a Virtual Network Interface (VNI) primarily used for in cloud networking?",
        "options": [
            "Physical server management",
            "Wireless network configuration",
            "Creating software-defined network connections",
            "Monitoring network traffic"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creating software-defined network connections",
        "difficulty": "hard",
        "explanation": "VNIs are logical network interfaces that enable software-defined networking, allowing flexible and programmable network configurations in cloud environments.",
        "hint": "Think about how virtualization enables more dynamic network setups."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which cloud networking concept allows network segmentation and isolation?",
        "options": [
            "Load Balancing",
            "Network Address Translation (NAT)",
            "Virtual Private Cloud (VPC)",
            "Domain Name System (DNS)"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Virtual Private Cloud (VPC)",
        "difficulty": "medium",
        "explanation": "VPC provides a logically isolated section of a cloud where you can launch resources in a virtual network that you define, enabling network segmentation.",
        "hint": "This concept is similar to creating a private network within a public cloud infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What does SD-WAN primarily aim to improve in cloud networking?",
        "options": [
            "Server processing speed",
            "Network performance and management",
            "Data storage efficiency",
            "Cloud migration processes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Network performance and management",
        "difficulty": "medium",
        "explanation": "Software-Defined Wide Area Network (SD-WAN) enhances network performance by intelligently routing traffic across multiple network paths.",
        "hint": "Consider how intelligent routing can optimize network connections dynamically."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which security mechanism is commonly used to control network access in cloud environments?",
        "options": [
            "SSL Certificates",
            "Network Access Control List (ACL)",
            "Proxy Servers",
            "MAC Address Filtering"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Network Access Control List (ACL)",
        "difficulty": "easy",
        "explanation": "Network ACLs provide a layer of security by filtering traffic based on predefined rules at the subnet level in cloud networks.",
        "hint": "This mechanism acts like a firewall, controlling inbound and outbound traffic."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is the primary purpose of a cloud network load balancer?",
        "options": [
            "Data encryption",
            "Distributing network traffic across multiple servers",
            "Network monitoring",
            "Creating virtual networks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Distributing network traffic across multiple servers",
        "difficulty": "easy",
        "explanation": "Load balancers in cloud networking distribute incoming network traffic across multiple servers to ensure high availability and reliability.",
        "hint": "Think about how this prevents any single server from becoming a bottleneck."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which cloud networking strategy helps minimize latency and improve performance?",
        "options": [
            "Data compression",
            "Content Delivery Network (CDN)",
            "Packet filtering",
            "Network tokenization"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Content Delivery Network (CDN)",
        "difficulty": "medium",
        "explanation": "CDNs distribute content across multiple geographically dispersed servers, reducing latency by serving content from locations closer to end-users.",
        "hint": "Consider how proximity to data can speed up network interactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What does 'network peering' enable in cloud environments?",
        "options": [
            "Wireless network connections",
            "Direct network connections between VPCs",
            "Physical server interconnections",
            "Inter-continent network routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Direct network connections between VPCs",
        "difficulty": "medium",
        "explanation": "Network peering allows direct network connectivity between Virtual Private Clouds (VPCs), enabling resources in different networks to communicate privately.",
        "hint": "Think of this as creating a private highway between two separate network infrastructures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which cloud networking technology enables network function virtualization?",
        "options": [
            "MPLS",
            "Software-Defined Networking (SDN)",
            "VLAN",
            "DHCP"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Software-Defined Networking (SDN)",
        "difficulty": "hard",
        "explanation": "SDN decouples network control functions from hardware, allowing network services to be virtualized and programmatically initialized.",
        "hint": "This technology separates the control plane from the data plane in networking."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is a key benefit of using overlay networks in cloud computing?",
        "options": [
            "Increased hardware costs",
            "Simplified network management",
            "Reduced security",
            "Limited scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Simplified network management",
        "difficulty": "hard",
        "explanation": "Overlay networks create a virtual network layer on top of physical infrastructure, enabling more flexible and easier network configuration and management.",
        "hint": "Consider how abstraction can simplify complex network setups."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which authentication mechanism is crucial for secure cloud networking?",
        "options": [
            "Basic password authentication",
            "Multi-Factor Authentication (MFA)",
            "Single sign-on (SSO)",
            "IP whitelisting"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Multi-Factor Authentication (MFA)",
        "difficulty": "easy",
        "explanation": "MFA adds an extra layer of security by requiring multiple verification methods before granting network access.",
        "hint": "Think beyond just passwords for network authentication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What does 'network slicing' refer to in cloud and 5G contexts?",
        "options": [
            "Physical network segmentation",
            "Virtual network customization",
            "Data compression techniques",
            "Load balancing strategies"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Virtual network customization",
        "difficulty": "hard",
        "explanation": "Network slicing allows creating multiple virtual networks on a single physical infrastructure, each tailored to specific performance and service requirements.",
        "hint": "Consider how this enables more efficient and flexible network resource allocation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which protocol is fundamental for secure remote access in cloud networking?",
        "options": [
            "ICMP",
            "OpenVPN",
            "Telnet",
            "SSH"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "SSH",
        "difficulty": "easy",
        "explanation": "SSH (Secure Shell) provides encrypted, secure remote access and file transfer capabilities in cloud and network environments.",
        "hint": "This protocol ensures secure communication over an unsecured network."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is a potential challenge in hybrid cloud networking?",
        "options": [
            "Limited bandwidth",
            "Ensuring consistent network policy across environments",
            "Reduced security",
            "Increased operational costs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ensuring consistent network policy across environments",
        "difficulty": "medium",
        "explanation": "Maintaining uniform network policies, security measures, and performance across on-premises and cloud infrastructures can be complex in hybrid cloud setups.",
        "hint": "Consider the complexities of managing networks across different infrastructure types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which technology helps manage IP address allocation in cloud networks?",
        "options": [
            "OSPF",
            "DHCP",
            "NAT",
            "BGP"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "DHCP",
        "difficulty": "easy",
        "explanation": "Dynamic Host Configuration Protocol (DHCP) automatically assigns and manages IP addresses in cloud and network environments.",
        "hint": "This protocol simplifies IP address management by dynamically allocating addresses."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is the primary function of a cloud network firewall?",
        "options": [
            "Accelerating network speed",
            "Filtering and controlling network traffic",
            "Storing network logs",
            "Managing DNS records"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Filtering and controlling network traffic",
        "difficulty": "easy",
        "explanation": "Cloud network firewalls monitor, filter, and control incoming and outgoing network traffic based on predetermined security rules.",
        "hint": "Think of this as a security checkpoint for network communications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which network security model focuses on trust verification for every access attempt?",
        "options": [
            "Perimeter security",
            "Zero Trust Network",
            "Whitelisting",
            "VPN-based security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Zero Trust Network",
        "difficulty": "hard",
        "explanation": "Zero Trust Network assumes no implicit trust and requires verification for every user, device, and application attempting to access network resources.",
        "hint": "Consider a security model that never automatically trusts any network entity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What role do microservices play in cloud networking architecture?",
        "options": [
            "Physical server management",
            "Creating modular, independently deployable services",
            "Network encryption",
            "Bandwidth management"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating modular, independently deployable services",
        "difficulty": "medium",
        "explanation": "Microservices architecture breaks applications into smaller, independent services that can be developed, deployed, and scaled separately.",
        "hint": "Think about how breaking down complex systems can improve flexibility."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which cloud networking concept enables network resource elasticity?",
        "options": [
            "Network virtualization",
            "Static routing",
            "Physical server clustering",
            "Manual IP configuration"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Network virtualization",
        "difficulty": "hard",
        "explanation": "Network virtualization allows dynamic creation, modification, and deletion of network resources without physical infrastructure changes.",
        "hint": "Consider how software can make networks more flexible and adaptable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What does a cloud network's NAT gateway primarily do?",
        "options": [
            "Generate network certificates",
            "Translate private IP addresses to public ones",
            "Encrypt network traffic",
            "Load balance network requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Translate private IP addresses to public ones",
        "difficulty": "medium",
        "explanation": "NAT (Network Address Translation) gateways allow private network resources to access the internet using a public IP address.",
        "hint": "This helps maintain network security by hiding internal network structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which emerging technology is transforming cloud network automation?",
        "options": [
            "Blockchain",
            "Artificial Intelligence",
            "Quantum Computing",
            "Augmented Reality"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Artificial Intelligence",
        "difficulty": "hard",
        "explanation": "AI is increasingly used for predictive network management, automated traffic routing, and intelligent security responses in cloud networking.",
        "hint": "Consider how machine learning can optimize complex network operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is a primary advantage of using container networking?",
        "options": [
            "Increased hardware costs",
            "Improved application portability",
            "Reduced network security",
            "Limited scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved application portability",
        "difficulty": "medium",
        "explanation": "Container networking allows applications to be packaged with their dependencies, enabling consistent deployment across different cloud environments.",
        "hint": "Think about how containers can make applications more independent of specific infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which protocol is crucial for secure cloud communication?",
        "options": [
            "HTTP",
            "HTTPS",
            "FTP",
            "SMTP"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "HTTPS",
        "difficulty": "easy",
        "explanation": "HTTPS (HTTP Secure) provides encrypted communication between web clients and servers, essential for secure cloud interactions.",
        "hint": "The 'S' stands for secure, indicating encryption and data integrity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What does 'network function virtualization' enable in cloud environments?",
        "options": [
            "Physical network expansion",
            "Virtualizing network services like firewalls and load balancers",
            "Increasing hardware complexity",
            "Reducing network flexibility"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Virtualizing network services like firewalls and load balancers",
        "difficulty": "hard",
        "explanation": "Network Function Virtualization (NFV) allows traditional network functions to be run as software, increasing flexibility and reducing hardware dependency.",
        "hint": "Consider how software can replace dedicated hardware devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which cloud networking approach minimizes data transfer costs?",
        "options": [
            "Continuous data replication",
            "Data locality and edge computing",
            "Unlimited bandwidth provisioning",
            "Manual data migration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data locality and edge computing",
        "difficulty": "medium",
        "explanation": "By processing data closer to its source and minimizing long-distance data transfers, edge computing reduces network transmission costs.",
        "hint": "Think about reducing the distance data needs to travel."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "What is a key consideration in cloud network design?",
        "options": [
            "Maximizing hardware complexity",
            "Balancing performance, security, and cost",
            "Limiting network scalability",
            "Reducing automation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Balancing performance, security, and cost",
        "difficulty": "hard",
        "explanation": "Effective cloud network design requires carefully balancing network performance, robust security measures, and overall infrastructure costs.",
        "hint": "Consider the multiple, sometimes competing priorities in network architecture."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Cloud Networking",
        "questionText": "Which networking concept supports application communication in cloud environments?",
        "options": [
            "Physical routing",
            "Service mesh",
            "Manual packet switching",
            "Static IP allocation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Service mesh",
        "difficulty": "hard",
        "explanation": "Service mesh provides a dedicated infrastructure layer for managing service-to-service communication, offering features like load balancing and encryption.",
        "hint": "Consider a sophisticated approach to managing complex microservices interactions."
    },

    // Emerging Network Technologies
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary technological advancement of 5G networks?",
        "options": [
            "Increased download speeds",
            "Ultra-low latency and massive device connectivity",
            "Reduced network complexity",
            "Elimination of wireless interference"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ultra-low latency and massive device connectivity",
        "difficulty": "medium",
        "explanation": "5G networks are designed to provide extremely low latency and support a massive number of connected devices simultaneously.",
        "hint": "Consider how 5G goes beyond just speed improvements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology enables networks to dynamically adapt to changing conditions?",
        "options": [
            "Network Automation",
            "Static Routing",
            "Manual Configuration",
            "Physical Rewiring"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Network Automation",
        "difficulty": "easy",
        "explanation": "Network automation allows networks to automatically configure, manage, and optimize themselves without manual intervention.",
        "hint": "Think about how software can make networks more intelligent and responsive."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary goal of Intent-Based Networking (IBN)?",
        "options": [
            "Increasing hardware complexity",
            "Translating business intent into network configurations",
            "Reducing network security",
            "Limiting network scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Translating business intent into network configurations",
        "difficulty": "hard",
        "explanation": "Intent-Based Networking automatically translates high-level business requirements into specific network configurations and policies.",
        "hint": "Consider a system that understands and implements business objectives directly."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "Which technology is crucial for supporting Internet of Things (IoT) connectivity?",
        "options": [
            "5G",
            "Bluetooth",
            "Infrared",
            "AM Radio"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "5G",
        "difficulty": "medium",
        "explanation": "5G networks provide the necessary bandwidth, low latency, and device density to support massive IoT device ecosystems.",
        "hint": "Think about the network requirements for connecting numerous small devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What does network virtualization primarily enable?",
        "options": [
            "Physical network expansion",
            "Creating multiple virtual networks on shared hardware",
            "Increasing hardware costs",
            "Reducing network flexibility"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating multiple virtual networks on shared hardware",
        "difficulty": "medium",
        "explanation": "Network virtualization allows creating multiple logical networks that operate independently on the same physical infrastructure.",
        "hint": "Consider how software can create flexible network environments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What role does Artificial Intelligence play in emerging network technologies?",
        "options": [
            "Replacing human network administrators",
            "Predictive network management and optimization",
            "Increasing network complexity",
            "Reducing network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Predictive network management and optimization",
        "difficulty": "hard",
        "explanation": "AI enables predictive maintenance, intelligent traffic routing, anomaly detection, and automated network optimization.",
        "hint": "Think about how machine learning can make networks more intelligent."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary advantage of Software-Defined Wide Area Network (SD-WAN)?",
        "options": [
            "Increased hardware complexity",
            "Improved network performance and management",
            "Reduced network security",
            "Limited scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved network performance and management",
        "difficulty": "medium",
        "explanation": "SD-WAN intelligently routes traffic across multiple network paths to optimize performance, reliability, and cost.",
        "hint": "Consider how software can make network routing more dynamic."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "Which technology is critical for quantum network communication?",
        "options": [
            "Quantum Encryption",
            "Quantum Entanglement",
            "Quantum Routing",
            "Quantum Switching"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Quantum Entanglement",
        "difficulty": "hard",
        "explanation": "Quantum entanglement enables secure communication by creating interconnected quantum states that are instantly correlated.",
        "hint": "Think about communication methods that go beyond classical physics."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What does Network Function Virtualization (NFV) primarily achieve?",
        "options": [
            "Increasing physical network infrastructure",
            "Virtualizing network services like firewalls and load balancers",
            "Reducing network flexibility",
            "Increasing operational costs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Virtualizing network services like firewalls and load balancers",
        "difficulty": "medium",
        "explanation": "NFV allows traditional network functions to be implemented as software, reducing dependency on specialized hardware.",
        "hint": "Consider how software can replace dedicated network devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is a key characteristic of edge computing?",
        "options": [
            "Centralized data processing",
            "Processing data closer to its source",
            "Increasing network latency",
            "Reducing network flexibility"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Processing data closer to its source",
        "difficulty": "easy",
        "explanation": "Edge computing moves computational processes closer to data sources, reducing latency and bandwidth usage.",
        "hint": "Think about minimizing data travel distance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology enables more efficient network resource allocation?",
        "options": [
            "Network Slicing",
            "Static Resource Allocation",
            "Manual Configuration",
            "Physical Expansion"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Network Slicing",
        "difficulty": "hard",
        "explanation": "Network slicing allows creating multiple virtual networks on a single physical infrastructure, each tailored to specific performance requirements.",
        "hint": "Consider how networks can be customized for different use cases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary focus of zero-trust networking?",
        "options": [
            "Eliminating all network security",
            "Verifying every access attempt",
            "Removing network boundaries",
            "Reducing authentication complexity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Verifying every access attempt",
        "difficulty": "medium",
        "explanation": "Zero-trust networking assumes no implicit trust and requires verification for every user, device, and application attempting to access network resources.",
        "hint": "Think about a security model that never automatically trusts any network entity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "Which technology is crucial for next-generation network security?",
        "options": [
            "Firewall Expansion",
            "Artificial Intelligence-driven Security",
            "Manual Security Audits",
            "Physical Barrier Installation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Artificial Intelligence-driven Security",
        "difficulty": "hard",
        "explanation": "AI-driven security uses machine learning to detect anomalies, predict threats, and respond to security incidents in real-time.",
        "hint": "Consider how intelligent systems can enhance network defense."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What does 6G technology aim to improve over 5G?",
        "options": [
            "Reducing network complexity",
            "Extreme data rates and ultra-low latency",
            "Limiting device connectivity",
            "Increasing network costs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Extreme data rates and ultra-low latency",
        "difficulty": "hard",
        "explanation": "6G is expected to provide even faster data rates, lower latency, and support for more advanced technologies like holographic communications.",
        "hint": "Think beyond the capabilities of current 5G networks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is a key benefit of container networking?",
        "options": [
            "Increased hardware complexity",
            "Improved application portability",
            "Reduced network security",
            "Limited scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved application portability",
        "difficulty": "medium",
        "explanation": "Container networking allows applications to be packaged with their dependencies, enabling consistent deployment across different environments.",
        "hint": "Consider how containers make applications more independent of specific infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology supports dynamic network resource allocation?",
        "options": [
            "Static Routing",
            "Network Virtualization",
            "Manual Configuration",
            "Physical Rewiring"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Network Virtualization",
        "difficulty": "easy",
        "explanation": "Network virtualization enables dynamic creation, modification, and deletion of network resources without physical infrastructure changes.",
        "hint": "Think about how software can make networks more flexible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary challenge in implementing Internet of Things (IoT) networks?",
        "options": [
            "Limited device connectivity",
            "Managing massive device scale and security",
            "Reducing network speed",
            "Increasing network complexity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Managing massive device scale and security",
        "difficulty": "medium",
        "explanation": "IoT networks must handle millions of diverse devices while maintaining robust security and efficient communication.",
        "hint": "Consider the challenges of connecting numerous small, often unsecured devices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology enables more intelligent network routing?",
        "options": [
            "Manual Routing",
            "Artificial Intelligence",
            "Static Path Selection",
            "Physical Rewiring"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Artificial Intelligence",
        "difficulty": "hard",
        "explanation": "AI can analyze network conditions in real-time and dynamically optimize routing paths for better performance and reliability.",
        "hint": "Think about how machine learning can make network routing more adaptive."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary goal of service mesh in modern network architectures?",
        "options": [
            "Increasing network complexity",
            "Managing service-to-service communication",
            "Reducing network security",
            "Limiting application scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Managing service-to-service communication",
        "difficulty": "hard",
        "explanation": "Service mesh provides a dedicated infrastructure layer for handling service interactions, offering features like load balancing, encryption, and observability.",
        "hint": "Consider a sophisticated approach to managing microservices communications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "Which technology supports more efficient data center networking?",
        "options": [
            "Traditional Switching",
            "Software-Defined Networking (SDN)",
            "Manual Configuration",
            "Physical Expansion"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Software-Defined Networking (SDN)",
        "difficulty": "medium",
        "explanation": "SDN centralizes network control, allowing more flexible and programmable data center network management.",
        "hint": "Think about how software can make network infrastructure more adaptable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is a key advantage of network automation?",
        "options": [
            "Increasing manual configuration",
            "Reducing human error and operational costs",
            "Limiting network flexibility",
            "Increasing network complexity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reducing human error and operational costs",
        "difficulty": "easy",
        "explanation": "Network automation minimizes manual interventions, reducing configuration errors and operational expenses.",
        "hint": "Consider how software can make network management more efficient."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology supports more secure network communications?",
        "options": [
            "Quantum Encryption",
            "Traditional Encryption",
            "Manual Security Checks",
            "Physical Isolation"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Quantum Encryption",
        "difficulty": "hard",
        "explanation": "Quantum encryption uses quantum mechanics principles to create theoretically unbreakable communication channels.",
        "hint": "Think about encryption methods that go beyond classical cryptography."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary benefit of network function virtualization?",
        "options": [
            "Increasing hardware dependency",
            "Implementing network functions as software",
            "Reducing network flexibility",
            "Increasing operational costs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Implementing network functions as software",
        "difficulty": "medium",
        "explanation": "NFV allows network services like firewalls and load balancers to be implemented as flexible software solutions.",
        "hint": "Consider how software can replace dedicated network hardware."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology supports more responsive IoT networks?",
        "options": [
            "Edge Computing",
            "Centralized Processing",
            "Manual Data Routing",
            "Physical Network Expansion"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Edge Computing",
        "difficulty": "easy",
        "explanation": "Edge computing moves data processing closer to IoT devices, reducing latency and improving network responsiveness.",
        "hint": "Think about minimizing data travel distance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is a key characteristic of intent-based networking?",
        "options": [
            "Manual Configuration",
            "Translating business intent into network configurations",
            "Increasing network complexity",
            "Reducing network flexibility"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Translating business intent into network configurations",
        "difficulty": "hard",
        "explanation": "Intent-based networking automatically transforms high-level business objectives into specific network configurations and policies.",
        "hint": "Consider a system that understands and directly implements business requirements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "Which technology supports more adaptive network security?",
        "options": [
            "Static Security Rules",
            "AI-driven Security",
            "Manual Security Audits",
            "Physical Firewalls"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "AI-driven Security",
        "difficulty": "medium",
        "explanation": "AI-driven security can dynamically detect threats, predict potential breaches, and respond in real-time.",
        "hint": "Think about how intelligent systems can enhance network defense."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is the primary goal of network slicing?",
        "options": [
            "Reducing network performance",
            "Creating customized virtual networks",
            "Increasing hardware complexity",
            "Limiting network scalability"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating customized virtual networks",
        "difficulty": "hard",
        "explanation": "Network slicing allows creating multiple virtual networks on a single physical infrastructure, each optimized for specific performance requirements.",
        "hint": "Consider how networks can be tailored for different use cases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What technology supports more efficient cloud networking?",
        "options": [
            "Manual Configuration",
            "Software-Defined Networking",
            "Physical Network Expansion",
            "Static Routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Software-Defined Networking",
        "difficulty": "easy",
        "explanation": "Software-Defined Networking enables more flexible, programmable, and efficient network management in cloud environments.",
        "hint": "Think about how software can make network infrastructure more adaptable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad89",
        "module": "Emerging Network Technologies",
        "questionText": "What is a key challenge in implementing 5G networks?",
        "options": [
            "Reducing network speed",
            "Managing network density and security",
            "Limiting device connectivity",
            "Increasing network complexity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Managing network density and security",
        "difficulty": "medium",
        "explanation": "5G networks must handle massive numbers of connected devices while maintaining robust security and performance.",
        "hint": "Consider the challenges of supporting numerous diverse network connections."
    },
    

]

export default CNQuestions;