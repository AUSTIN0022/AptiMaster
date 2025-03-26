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

    // Wireless Networks

    // Wide Area Networks

    // Network Management

    // IPv6

    // Software-Defined Networking

    // Cloud Networking

    // Emerging Network Technologies

]

export default CNQuestions;