/* 전체 사이트 공통 문제은행 */
(() => {
  const bank = {
  "id": "network-security-midterm",
  "title": "네트워크보안응용 중간고사",
  "description": "Lecture 1~4: 계층·주소, IP·전송, 라우팅, 장비·VLAN. PDF 복습 60문항, 개념 응용 40문항, 기본개념 132문항(중요 체크·핵심 용어 48문항 포함)으로 총 232문항.",
  "source": "네트워크보안 통합정리(34쪽) 및 Lecture 1~4 원본 강의 PDF",
  "weeks": [
    "Lecture 1 · 통신 규약·OSI·TCP/IP",
    "Lecture 2 · IP 주소·전송 프로토콜",
    "Lecture 3 · 라우팅·라우터 관리",
    "Lecture 4 · 네트워크 장비·스위치·VLAN"
  ],
  "questions": [
    {
      "id": "nsm-001",
      "week": 1,
      "type": "blanks",
      "prompt": "프로토콜의 세 구성요소를 형식, 해석과 동작, 전송 시점과 속도에 대응하는 순서로 쓰세요. 한글 용어로 답하세요.",
      "fields": [
        "형식",
        "해석과 동작",
        "전송 시점과 속도"
      ],
      "answers": [
        "구문",
        "의미",
        "타이밍"
      ],
      "explanation": "구문은 데이터 형식, 의미는 필드 해석과 동작, 타이밍은 전송 시점과 속도를 정합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2, 24, 29쪽"
    },
    {
      "id": "nsm-002",
      "week": 1,
      "type": "blanks",
      "prompt": "DTE와 DCE의 접속 표준과 SNA를 위한 데이터링크 프로토콜의 영문 이름을 쓰세요.",
      "fields": [
        "DTE-DCE 접속 표준",
        "SNA 링크 프로토콜"
      ],
      "answers": [
        "RS-232C",
        "SDLC"
      ],
      "explanation": "RS-232C는 장치 접속 표준, SDLC는 SNA를 위한 링크 프로토콜입니다. V.21은 모뎀 변조 표준입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2, 24, 29쪽"
    },
    {
      "id": "nsm-003",
      "week": 1,
      "type": "short",
      "prompt": "단말 하나의 고장은 국소적이지만 중앙 허브가 고장 나면 전체가 영향을 받는 토폴로지는?",
      "answers": [
        "스타",
        "스타형",
        "스타 토폴로지",
        "Star",
        "star"
      ],
      "explanation": "스타형은 모든 단말이 중앙 장비에 연결되어 중앙 장비에 의존합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2, 24, 29쪽"
    },
    {
      "id": "nsm-004",
      "week": 1,
      "type": "short",
      "prompt": "OSI에서 암호화·복호화·압축과 표현 형식 변환을 담당하는 계층은?",
      "answers": [
        "표현",
        "표현 계층",
        "표현계층",
        "6",
        "6계층"
      ],
      "explanation": "표현 계층은 OSI 6계층이며 데이터 표현 형식과 암호화·압축을 다룹니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 24, 29쪽"
    },
    {
      "id": "nsm-005",
      "week": 1,
      "type": "blanks",
      "prompt": "노드 간 프레임 전달과 서로 다른 네트워크 사이의 경로 지정을 담당하는 OSI 계층 이름을 한글로 쓰세요. “계층”은 빼고 이름만 쓰세요.",
      "fields": [
        "프레임 전달 계층 이름",
        "경로 지정 계층 이름"
      ],
      "answers": [
        "데이터링크",
        "네트워크"
      ],
      "explanation": "데이터링크 계층은 링크 단위 프레임 전달, 네트워크 계층은 경로 지정과 패킷 전달을 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 24, 29쪽"
    },
    {
      "id": "nsm-006",
      "week": 1,
      "type": "short",
      "prompt": "포트를 이용해 프로세스 대 프로세스 통신을 담당하는 OSI 계층은?",
      "answers": [
        "전송",
        "전송 계층",
        "전송계층",
        "4",
        "4계층"
      ],
      "explanation": "전송 계층은 TCP/UDP 포트로 응용 통신 끝점을 구분합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4, 24, 29쪽"
    },
    {
      "id": "nsm-007",
      "week": 1,
      "type": "short",
      "prompt": "TCP/IP 4계층 모델에서 OSI의 물리·데이터링크 계층을 합친 계층은?",
      "answers": [
        "네트워크 인터페이스",
        "네트워크 인터페이스 계층",
        "네트워크인터페이스",
        "링크",
        "링크 계층",
        "네트워크 접근 계층"
      ],
      "explanation": "4계층 모델에서는 물리와 데이터링크를 네트워크 인터페이스(링크) 계층으로 묶습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 24, 29쪽"
    },
    {
      "id": "nsm-008",
      "week": 1,
      "type": "short",
      "prompt": "[O/X] FTP, TCP, UDP는 모두 전송 계층 프로토콜이다.",
      "answers": [
        "X",
        "x"
      ],
      "explanation": "FTP는 응용 계층이며 TCP와 UDP는 전송 계층입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 24, 29쪽"
    },
    {
      "id": "nsm-009",
      "week": 1,
      "type": "short",
      "prompt": "송신 측에서 하위 계층으로 내려가며 헤더·트레일러 같은 제어 정보를 붙이는 과정은?",
      "answers": [
        "캡슐화",
        "encapsulation",
        "Encapsulation"
      ],
      "explanation": "송신 측의 캡슐화와 반대로 수신 측에서는 역캡슐화를 수행합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 24, 29쪽"
    },
    {
      "id": "nsm-010",
      "week": 1,
      "type": "blanks",
      "prompt": "MAC·IP·TCP/UDP 포트가 각각 대표적으로 속하는 OSI 계층 이름을 한글로 쓰세요. “계층”은 빼고 이름만 쓰세요.",
      "fields": [
        "MAC의 계층 이름",
        "IP의 계층 이름",
        "TCP/UDP 포트의 계층 이름"
      ],
      "answers": [
        "데이터링크",
        "네트워크",
        "전송"
      ],
      "explanation": "MAC은 데이터링크 계층에서 링크 수신자, IP는 네트워크 계층에서 송수신 인터페이스, 포트는 전송 계층에서 응용 통신 끝점을 식별합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 24, 29쪽"
    },
    {
      "id": "nsm-011",
      "week": 1,
      "type": "short",
      "prompt": "[O/X] NAT 등 주소 변환이 없는 일반적인 라우터 전달에서는 링크 MAC 주소가 바뀌고 종단 IP 주소는 유지된다.",
      "answers": [
        "O",
        "o"
      ],
      "explanation": "라우터는 다음 링크에 맞는 프레임을 새로 구성합니다. NAT 같은 변환이 있으면 IP 유지 가정의 예외입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 24, 29쪽"
    },
    {
      "id": "nsm-012",
      "week": 1,
      "type": "short",
      "prompt": "수신 데이터를 프로토콜·주소·포트에 따라 올바른 상위 처리기나 응용으로 분배하는 과정은?",
      "answers": [
        "역다중화",
        "demultiplexing",
        "Demultiplexing"
      ],
      "explanation": "다중화는 여러 응용 데이터를 모으는 과정, 역다중화는 수신 데이터를 적절한 응용으로 나누는 과정입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 24, 29쪽"
    },
    {
      "id": "nsm-013",
      "week": 2,
      "type": "blanks",
      "prompt": "IPv4와 IPv6의 주소 길이를 비트 수로 쓰세요.",
      "fields": [
        "IPv4 비트 수",
        "IPv6 비트 수"
      ],
      "answers": [
        "32",
        "128"
      ],
      "explanation": "IPv4는 32비트, IPv6는 128비트입니다. 비트 수가 4배인 것과 주소 개수가 4배인 것은 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 6, 12, 25, 30쪽"
    },
    {
      "id": "nsm-014",
      "week": 2,
      "type": "blanks",
      "prompt": "역사적 B 클래스의 기본 접두사 길이(숫자)와 D 클래스의 용도(한글)를 쓰세요.",
      "fields": [
        "B 클래스 접두사 길이",
        "D 클래스 용도"
      ],
      "answers": [
        "16",
        "멀티캐스트"
      ],
      "explanation": "B 클래스의 역사적 기본값은 /16이며 D 클래스는 멀티캐스트입니다. 현재 라우팅은 CIDR을 기준으로 봅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 6, 25, 30쪽"
    },
    {
      "id": "nsm-015",
      "week": 2,
      "type": "blanks",
      "prompt": "사설 주소 블록의 접두사 길이를 숫자로 쓰세요.",
      "fields": [
        "10.0.0.0의 접두사 길이",
        "172.16.0.0의 접두사 길이",
        "192.168.0.0의 접두사 길이"
      ],
      "answers": [
        "8",
        "12",
        "16"
      ],
      "explanation": "사설 블록은 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16입니다. 모든 172.* 주소가 사설은 아닙니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 6, 25, 30쪽"
    },
    {
      "id": "nsm-016",
      "week": 2,
      "type": "blanks",
      "prompt": "IPv4 제한 브로드캐스트 주소와 대표 루프백 주소를 쓰세요.",
      "fields": [
        "제한 브로드캐스트",
        "대표 루프백"
      ],
      "answers": [
        "255.255.255.255",
        "127.0.0.1"
      ],
      "explanation": "제한 브로드캐스트는 로컬 링크 범위이며, 루프백은 자기 호스트의 네트워크 스택 점검에 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 6, 25, 30쪽"
    },
    {
      "id": "nsm-017",
      "week": 2,
      "type": "blanks",
      "prompt": "192.168.10.77/26의 서브넷 마스크와 전체 주소 수를 쓰세요.",
      "fields": [
        "서브넷 마스크",
        "전체 주소 수"
      ],
      "answers": [
        "255.255.255.192",
        "64"
      ],
      "explanation": "/26의 호스트 비트는 6개이므로 전체 주소는 2^6=64개입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7, 25, 30쪽"
    },
    {
      "id": "nsm-018",
      "week": 2,
      "type": "blanks",
      "prompt": "192.168.10.77/26의 네트워크 주소와 브로드캐스트 주소를 쓰세요.",
      "fields": [
        "네트워크 주소",
        "브로드캐스트 주소"
      ],
      "answers": [
        "192.168.10.64",
        "192.168.10.127"
      ],
      "explanation": "마지막 옥텟의 블록 크기는 64입니다. 77은 64~127 구간에 속합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7, 25, 30쪽"
    },
    {
      "id": "nsm-019",
      "week": 2,
      "type": "blanks",
      "prompt": "192.168.10.77/26에서 일반 호스트에 할당할 수 있는 첫 주소·마지막 주소·주소 개수를 쓰세요.",
      "fields": [
        "첫 호스트 주소",
        "마지막 호스트 주소",
        "사용 가능 호스트 수"
      ],
      "answers": [
        "192.168.10.65",
        "192.168.10.126",
        "62"
      ],
      "explanation": "양 끝의 네트워크 주소 .64와 브로드캐스트 주소 .127을 제외하면 .65~.126, 총 62개입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7, 25, 30쪽"
    },
    {
      "id": "nsm-020",
      "week": 2,
      "type": "blanks",
      "prompt": "/24를 빠짐없이 /27로 분할할 때 서브넷 수와 서브넷당 일반 호스트 수를 쓰세요.",
      "fields": [
        "서브넷 수",
        "서브넷당 일반 호스트 수"
      ],
      "answers": [
        "8",
        "30"
      ],
      "explanation": "네트워크 비트 3개를 더 쓰므로 서브넷은 2^3=8개이며, 각각 2^5-2=30호스트를 수용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7-8, 25, 30쪽"
    },
    {
      "id": "nsm-021",
      "week": 2,
      "type": "blanks",
      "prompt": "VLSM에서 100대·50대·25대를 각각 수용하는 가장 작은 일반 서브넷의 접두사 길이를 숫자로 쓰세요.",
      "fields": [
        "100대용 접두사 길이",
        "50대용 접두사 길이",
        "25대용 접두사 길이"
      ],
      "answers": [
        "25",
        "26",
        "27"
      ],
      "explanation": "/25는 126대, /26은 62대, /27은 30대를 수용합니다. 네트워크·브로드캐스트 주소를 제외한 수입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 8, 25, 30쪽"
    },
    {
      "id": "nsm-022",
      "week": 2,
      "type": "short",
      "prompt": "192.168.0.0/24와 192.168.1.0/24만을 정확히 포함하는 하나의 집약 경로를 CIDR로 쓰세요.",
      "answers": [
        "192.168.0.0/23"
      ],
      "explanation": "연속된 두 /24가 /23 경계에 정렬되므로 192.168.0.0/23으로 집약합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 8, 25, 30쪽"
    },
    {
      "id": "nsm-023",
      "week": 2,
      "type": "blanks",
      "prompt": "IPv4 헤더에서 무한 순환을 제한하는 필드와 단편화를 금지하는 플래그의 영문 약어를 쓰세요.",
      "fields": [
        "순환 제한 필드",
        "단편화 금지 플래그"
      ],
      "answers": [
        "TTL",
        "DF"
      ],
      "explanation": "TTL은 라우터를 지날 때 감소하고 0이면 폐기합니다. DF는 단편화 금지를 의미합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 9, 25, 30쪽"
    },
    {
      "id": "nsm-024",
      "week": 2,
      "type": "blanks",
      "prompt": "IPv4 첫 조각의 데이터가 1,480바이트일 때 두 번째 조각의 Fragment Offset과 마지막 조각의 MF 값을 쓰세요.",
      "fields": [
        "두 번째 조각 Offset",
        "마지막 조각 MF"
      ],
      "answers": [
        "185",
        "0"
      ],
      "explanation": "Offset은 8바이트 단위이므로 1480/8=185입니다. 마지막 조각은 뒤에 더 없으므로 MF=0입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 9, 25, 30쪽"
    },
    {
      "id": "nsm-025",
      "week": 2,
      "type": "blanks",
      "prompt": "ARP가 대응시키는 두 주소 유형과 일반 Ethernet ARP 요청의 전송 방식을 쓰세요. 주소는 IPv4·MAC, 전송 방식은 한글 용어로 답하세요.",
      "fields": [
        "조회할 논리 주소 유형",
        "알아낼 링크 주소 유형",
        "요청 전송 방식"
      ],
      "answers": [
        "IPv4",
        "MAC",
        "브로드캐스트"
      ],
      "explanation": "ARP는 같은 링크에서 다음 홉 IPv4 주소에 대응하는 MAC을 찾습니다. 요청은 브로드캐스트, 응답은 보통 유니캐스트입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10, 26, 31쪽"
    },
    {
      "id": "nsm-026",
      "week": 2,
      "type": "short",
      "prompt": "A=192.168.1.10/24, 기본 게이트웨이=192.168.1.1이다. 별도 구체 경로와 ARP 캐시가 없을 때 원격 10.0.0.5로 보내기 위해 ARP로 조회할 IP는?",
      "answers": [
        "192.168.1.1"
      ],
      "explanation": "원격 목적지로 보낼 프레임은 다음 홉인 기본 게이트웨이의 MAC을 사용합니다. IP 목적지는 10.0.0.5로 유지합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10, 26, 31쪽"
    },
    {
      "id": "nsm-027",
      "week": 2,
      "type": "blanks",
      "prompt": "MAC으로 IP를 찾는 과거 프로토콜과 자신의 IP를 알리는 ARP 유형의 영문 약어를 쓰세요.",
      "fields": [
        "MAC → IP",
        "자신의 IP 알림"
      ],
      "answers": [
        "RARP",
        "GARP"
      ],
      "explanation": "RARP는 과거 주소 설정 방식이며, GARP는 자신의 IP를 알리거나 충돌 탐지 보조·캐시 갱신에 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10, 26, 31쪽"
    },
    {
      "id": "nsm-028",
      "week": 2,
      "type": "short",
      "prompt": "[O/X] ICMP는 손실된 응용 데이터를 직접 재전송하여 신뢰성을 보장한다.",
      "answers": [
        "X",
        "x"
      ],
      "explanation": "ICMP는 오류 보고와 진단을 돕습니다. 재전송을 통한 손실 복구는 TCP 등 다른 기능이 수행합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 11, 26, 31쪽"
    },
    {
      "id": "nsm-029",
      "week": 2,
      "type": "short",
      "prompt": "TTL 소진 시 발생하며 traceroute의 경로 추정에 활용되는 ICMP 오류 메시지는?",
      "answers": [
        "Time Exceeded",
        "time exceeded",
        "시간 경과",
        "시간 초과",
        "시간 초과 메시지"
      ],
      "explanation": "Time Exceeded는 TTL 소진 또는 재조립 시간 초과를 알립니다. ping은 Echo Request/Reply를 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 11, 26, 31쪽"
    },
    {
      "id": "nsm-030",
      "week": 2,
      "type": "short",
      "prompt": "IPv4 호스트가 로컬 라우터에 멀티캐스트 그룹 가입·유지 상태를 알리는 프로토콜의 약어는?",
      "answers": [
        "IGMP",
        "igmp"
      ],
      "explanation": "IGMP는 IPv4 멀티캐스트 그룹 관리에 사용하며, ICMP 오류 보고·진단과 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 11, 26, 31쪽"
    },
    {
      "id": "nsm-031",
      "week": 2,
      "type": "blanks",
      "prompt": "IPv6 주소 유형 중 유니캐스트 외 두 가지를 쓰세요. 가까운 한 노드로 전달하는 유형을 먼저, 그룹 전달 유형을 나중에 한글로 쓰세요.",
      "fields": [
        "가까운 한 노드",
        "특정 그룹"
      ],
      "answers": [
        "애니캐스트",
        "멀티캐스트"
      ],
      "explanation": "IPv6는 유니캐스트·애니캐스트·멀티캐스트를 사용하며 IPv4와 같은 브로드캐스트 주소 유형은 없습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 12, 26, 31쪽"
    },
    {
      "id": "nsm-032",
      "week": 2,
      "type": "short",
      "prompt": "IPv6 패킷을 IPv4 패킷 안에 넣어 IPv4 구간을 통과시키는 전환 방식은?",
      "answers": [
        "터널링",
        "Tunneling",
        "tunneling"
      ],
      "explanation": "터널링은 캡슐화로 구간을 통과합니다. 이중 스택은 병행 실행, 변환은 주소·프로토콜을 바꾸는 방식입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 12, 26, 31쪽"
    },
    {
      "id": "nsm-033",
      "week": 2,
      "type": "short",
      "prompt": "[O/X] UDP 자체는 TCP식 흐름 제어·혼잡 제어·재전송을 제공한다.",
      "answers": [
        "X",
        "x"
      ],
      "explanation": "UDP 자체에는 이 기능들이 없습니다. 필요하면 응용이나 상위 프로토콜이 추가합니다. 자료의 정정 사항을 반영했습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13, 26, 31쪽"
    },
    {
      "id": "nsm-034",
      "week": 2,
      "type": "blanks",
      "prompt": "UDP 헤더 길이와 옵션 없는 TCP 헤더 길이를 바이트 수로 쓰세요.",
      "fields": [
        "UDP 헤더 바이트 수",
        "TCP 기본 헤더 바이트 수"
      ],
      "answers": [
        "8",
        "20"
      ],
      "explanation": "UDP 헤더는 8바이트, TCP 헤더는 기본 20바이트이며 옵션 포함 최대 60바이트입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13-14, 26, 31쪽"
    },
    {
      "id": "nsm-035",
      "week": 2,
      "type": "blanks",
      "prompt": "DNS, Telnet, FTP 제어 연결의 대표 포트 번호를 쓰세요.",
      "fields": [
        "DNS",
        "Telnet",
        "FTP 제어"
      ],
      "answers": [
        "53",
        "23",
        "21"
      ],
      "explanation": "DNS는 UDP/TCP 53, Telnet은 TCP 23, FTP 제어는 TCP 21을 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13, 26, 31쪽"
    },
    {
      "id": "nsm-036",
      "week": 2,
      "type": "blanks",
      "prompt": "수신자 버퍼를 보호하는 제어와 네트워크 과부하를 완화하는 제어를 한글로 쓰세요.",
      "fields": [
        "수신자 버퍼 보호",
        "네트워크 과부하 완화"
      ],
      "answers": [
        "흐름 제어",
        "혼잡 제어"
      ],
      "explanation": "TCP 흐름 제어는 rwnd, 혼잡 제어는 cwnd 등을 활용합니다. 두 제어가 보호하는 대상이 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 14, 26, 31쪽"
    },
    {
      "id": "nsm-037",
      "week": 2,
      "type": "blanks",
      "prompt": "응용 데이터가 없는 TCP 3-way handshake의 플래그 순서를 쓰세요. 복합 플래그는 SYN+ACK처럼 공백 없이 쓰세요.",
      "fields": [
        "첫 메시지",
        "두 번째 메시지",
        "세 번째 메시지"
      ],
      "answers": [
        "SYN",
        "SYN+ACK",
        "ACK"
      ],
      "explanation": "SYN → SYN+ACK → ACK로 양측 초기 순서번호를 교환하고 상대의 수신 가능 상태를 확인합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 15, 27, 32쪽"
    },
    {
      "id": "nsm-038",
      "week": 2,
      "type": "blanks",
      "prompt": "응용 데이터 없이 클라이언트 SYN의 SEQ=1000, 서버 SYN의 SEQ=5000이다. 서버 SYN+ACK와 클라이언트 마지막 ACK의 확인응답 번호를 쓰세요.",
      "fields": [
        "서버 SYN+ACK의 ACK 번호",
        "클라이언트 마지막 ACK의 ACK 번호"
      ],
      "answers": [
        "1001",
        "5001"
      ],
      "explanation": "양측 SYN은 각각 순서번호 1을 소비하므로 상대의 다음 기대 번호는 초기 SEQ+1입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 15, 27, 32쪽"
    },
    {
      "id": "nsm-039",
      "week": 2,
      "type": "short",
      "prompt": "TCP에서 SEQ=1001부터 연속된 200바이트를 빠짐없이 받았다. 다음 누적 ACK 번호는? (SYN·FIN 없음)",
      "answers": [
        "1201"
      ],
      "explanation": "ACK는 다음에 기대하는 바이트 번호입니다. 1001+200=1201이며 데이터 길이만큼 진행합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 15, 27, 32쪽"
    },
    {
      "id": "nsm-040",
      "week": 2,
      "type": "blanks",
      "prompt": "응용 데이터가 없는 순수 ACK·SYN·FIN이 각각 소비하는 TCP 순서번호 개수를 쓰세요.",
      "fields": [
        "순수 ACK",
        "SYN",
        "FIN"
      ],
      "answers": [
        "0",
        "1",
        "1"
      ],
      "explanation": "순수 ACK는 0, SYN과 FIN은 각각 1입니다. ACK에 데이터가 실리면 데이터 바이트 수만큼 별도로 소비합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 14-15, 27, 32쪽"
    },
    {
      "id": "nsm-041",
      "week": 2,
      "type": "short",
      "prompt": "TCP에서 한쪽이 FIN으로 송신만 닫고 반대 방향 데이터 수신은 계속 가능한 상태는?",
      "answers": [
        "Half-close",
        "half-close",
        "Half close",
        "half close",
        "절반 폐쇄",
        "반폐쇄"
      ],
      "explanation": "TCP는 양방향 송신을 독립적으로 종료할 수 있어 FIN 이후에도 반대쪽 데이터를 받을 수 있습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 15, 27, 32쪽"
    },
    {
      "id": "nsm-042",
      "week": 2,
      "type": "short",
      "prompt": "미완료 TCP 연결을 대량 유도하여 서버의 연결 대기 자원을 소모하는 DoS 유형은?",
      "answers": [
        "SYN flooding",
        "SYN Flooding",
        "syn flooding",
        "SYN 플러딩",
        "SYN 플러딩 공격",
        "SYN flood",
        "SYN Flood"
      ],
      "explanation": "SYN flooding은 연결 설정의 미완료 상태와 서버 자원 소모를 악용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 15, 27, 32쪽"
    },
    {
      "id": "nsm-043",
      "week": 3,
      "type": "blanks",
      "prompt": "경로 정보를 구성·갱신하는 과정과 개별 패킷을 다음 홉으로 보내는 과정을 한글로 쓰세요.",
      "fields": [
        "경로 구성·갱신",
        "개별 패킷 전달"
      ],
      "answers": [
        "라우팅",
        "포워딩"
      ],
      "explanation": "라우팅은 경로·테이블 구성, 포워딩은 테이블을 조회하여 개별 패킷을 출력 인터페이스로 보내는 동작입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 5, 16, 27, 32쪽"
    },
    {
      "id": "nsm-044",
      "week": 3,
      "type": "blanks",
      "prompt": "하나의 관리·정책 도메인에 속하는 네트워크 집합과 그 내부 라우팅 프로토콜 범주의 영문 약어를 쓰세요.",
      "fields": [
        "관리 도메인 집합",
        "내부 라우팅 범주"
      ],
      "answers": [
        "AS",
        "IGP"
      ],
      "explanation": "AS는 자율시스템입니다. AS 내부는 IGP 범주이며 AS 간 경로 교환의 대표는 BGP입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16, 27, 32쪽"
    },
    {
      "id": "nsm-045",
      "week": 3,
      "type": "blanks",
      "prompt": "거리 벡터의 대표 계산 원리와 링크 상태의 최단 경로 알고리즘을 쓰세요. 한글 이름 또는 영문 이름 모두 가능합니다.",
      "fields": [
        "거리 벡터 계산 원리",
        "링크 상태 최단 경로"
      ],
      "answers": [
        "Bellman-Ford",
        "Dijkstra"
      ],
      "explanation": "RIP는 거리 벡터·벨만–포드(Bellman-Ford), OSPF는 링크 상태·다익스트라(Dijkstra)에 대응합니다. 한글 이름과 영문 이름 모두 정답으로 인정합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16, 27, 32쪽",
      "answerAliases": [
        [
          "벨만포드",
          "벨만 포드",
          "벨만-포드",
          "벨만–포드",
          "벨먼포드",
          "벨먼 포드",
          "벨먼-포드",
          "Bellman Ford",
          "bellman-ford",
          "bellman ford"
        ],
        [
          "다익스트라",
          "다익스트라 알고리즘",
          "dijkstra"
        ]
      ]
    },
    {
      "id": "nsm-046",
      "week": 3,
      "type": "blanks",
      "prompt": "RIP에서 유효 경로의 최대 홉 수와 도달 불가를 나타내는 비용을 쓰세요.",
      "fields": [
        "유효 최대 홉 수",
        "도달 불가 비용"
      ],
      "answers": [
        "15",
        "16"
      ],
      "explanation": "RIPv1과 RIPv2 모두 유효 최대는 15홉이며 16은 무한대·도달 불가입니다. 16을 유효 최대값으로 외우면 안 됩니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 17, 27, 32쪽"
    },
    {
      "id": "nsm-047",
      "week": 3,
      "type": "blanks",
      "prompt": "RIPv2가 VLSM 지원을 위해 업데이트에 포함하는 정보(한글)와 EIGRP의 핵심 알고리즘(영문 약어)을 쓰세요.",
      "fields": [
        "RIPv2 추가 정보",
        "EIGRP 알고리즘"
      ],
      "answers": [
        "서브넷 마스크",
        "DUAL"
      ],
      "explanation": "RIPv1은 마스크를 싣지 않습니다. EIGRP는 DUAL을 사용하는 고급 거리 벡터 계열입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 17, 27, 32쪽"
    },
    {
      "id": "nsm-048",
      "week": 3,
      "type": "blanks",
      "prompt": "OSPF의 링크 상태 데이터베이스, 백본 영역, 영역 경계 라우터를 각각 LSDB·Area 0·ABR 형식으로 쓰세요.",
      "fields": [
        "링크 상태 데이터베이스 약어",
        "백본 영역 표기",
        "영역 경계 라우터 약어"
      ],
      "answers": [
        "LSDB",
        "Area 0",
        "ABR"
      ],
      "explanation": "OSPF는 LSDB로 토폴로지를 파악하며 Area 0은 백본, ABR은 여러 영역 사이 정보를 교환하는 라우터입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 18, 27, 32쪽"
    },
    {
      "id": "nsm-049",
      "week": 3,
      "type": "blanks",
      "prompt": "BGP의 벡터 분류(한글 한 단어)와 경유 AS 목록을 담는 경로 속성(영문)을 쓰세요.",
      "fields": [
        "벡터 분류",
        "경유 AS 속성"
      ],
      "answers": [
        "경로",
        "AS_PATH"
      ],
      "explanation": "BGP는 경로 벡터이며 AS_PATH 등 속성과 정책으로 경로를 선택합니다. L2 루프 방지 STP와 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16, 18, 28, 33쪽"
    },
    {
      "id": "nsm-050",
      "week": 3,
      "type": "blanks",
      "prompt": "Cisco IOS 계열에서 Router>에서 특권 EXEC로 이동하는 명령과 현재 설정을 시작 설정으로 저장하는 명령을 쓰세요. 축약하지 마세요.",
      "fields": [
        "특권 EXEC 진입",
        "현재 설정 저장"
      ],
      "answers": [
        "enable",
        "copy running-config startup-config"
      ],
      "explanation": "enable로 Router#에 진입하고 copy running-config startup-config로 재부팅에 대비해 설정을 저장합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 19, 28, 33쪽"
    },
    {
      "id": "nsm-051",
      "week": 4,
      "type": "blanks",
      "prompt": "L1에서 신호를 반복하는 다중 포트 장비와 L2에서 MAC으로 전달하는 다중 포트 장비의 한글 이름을 쓰세요.",
      "fields": [
        "L1 다중 포트 장비",
        "L2 다중 포트 장비"
      ],
      "answers": [
        "허브",
        "스위치"
      ],
      "explanation": "허브는 주소를 보고 선택 전달하지 않으며, L2 스위치는 MAC 테이블을 사용하는 다중 포트 브리지입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20, 28, 33쪽"
    },
    {
      "id": "nsm-052",
      "week": 4,
      "type": "blanks",
      "prompt": "스위치가 학습에 사용하는 MAC과 전달 포트 조회에 사용하는 MAC을 출발지·목적지 중에서 쓰세요.",
      "fields": [
        "학습에 사용하는 MAC",
        "조회에 사용하는 MAC"
      ],
      "answers": [
        "출발지",
        "목적지"
      ],
      "explanation": "들어온 프레임의 출발지 MAC과 수신 포트를 학습한 뒤 목적지 MAC으로 전달 포트를 찾습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21, 28, 33쪽"
    },
    {
      "id": "nsm-053",
      "week": 4,
      "type": "blanks",
      "prompt": "전체 프레임 수신 후 FCS를 검사하는 방식과 앞 64바이트를 기다린 뒤 전달하는 방식을 영문으로 쓰세요. 각 단어는 하이픈(-)으로 연결하세요.",
      "fields": [
        "전체 프레임 수신",
        "앞 64바이트 수신"
      ],
      "answers": [
        "Store-and-Forward",
        "Fragment-Free"
      ],
      "explanation": "Store-and-Forward는 전체 프레임을 검사하고, Fragment-Free는 앞 64바이트만 기다립니다. 후자는 전체 FCS 검사를 보장하지 않습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21, 28, 33쪽"
    },
    {
      "id": "nsm-054",
      "week": 4,
      "type": "blanks",
      "prompt": "한 VLAN만 있는 L2 스위치에서 충돌 도메인의 분리 기준(한글 한 단어)과 브로드캐스트 도메인 수를 쓰세요.",
      "fields": [
        "충돌 도메인 분리 기준",
        "브로드캐스트 도메인 수"
      ],
      "answers": [
        "포트",
        "1"
      ],
      "explanation": "일반적인 학습 모델에서는 충돌 범위를 포트별로 나누고 한 VLAN은 한 브로드캐스트 도메인입니다. 전이중 링크에서는 정상 충돌이 발생하지 않습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20, 28, 33쪽"
    },
    {
      "id": "nsm-055",
      "week": 4,
      "type": "short",
      "prompt": "스위치의 중복 링크에서 일부 논리 경로를 차단하여 L2 루프를 막는 대표 프로토콜은?",
      "answers": [
        "STP",
        "stp",
        "Spanning Tree Protocol",
        "스패닝 트리 프로토콜"
      ],
      "explanation": "STP는 루프 없는 논리 구조로 브로드캐스트 폭주와 MAC 테이블 불안정을 방지합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21, 28, 33쪽"
    },
    {
      "id": "nsm-056",
      "week": 4,
      "type": "blanks",
      "prompt": "VLAN 태깅 표준 번호와 여러 VLAN을 한 링크로 운반하는 포트 유형을 쓰세요. 포트 유형은 소문자 영문으로 답하세요.",
      "fields": [
        "IEEE 표준 번호",
        "포트 유형"
      ],
      "answers": [
        "802.1Q",
        "trunk"
      ],
      "explanation": "IEEE 802.1Q는 VLAN 태깅 표준이며 trunk는 여러 VLAN을 운반합니다. access는 통상 한 VLAN의 단말을 연결합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22, 28, 33쪽"
    },
    {
      "id": "nsm-057",
      "week": 4,
      "type": "short",
      "prompt": "[O/X] 같은 물리 스위치에 연결되면 서로 다른 VLAN 단말도 L3 처리 없이 직접 프레임을 교환할 수 있다.",
      "answers": [
        "X",
        "x"
      ],
      "explanation": "다른 VLAN은 별개의 L2 영역입니다. VLAN 간 통신에는 라우터나 L3 스위치의 라우팅이 필요합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22, 28, 33쪽"
    },
    {
      "id": "nsm-058",
      "week": 4,
      "type": "blanks",
      "prompt": "IP와 TCP/UDP 포트로 부하 분산하는 스위치와 HTTP 같은 응용 내용을 분석하는 스위치가 각각 어느 계층의 정보까지 활용하는지 한글 계층 이름을 쓰세요. “계층”은 빼세요.",
      "fields": [
        "IP·TCP/UDP 포트 활용 계층",
        "응용 내용 분석 계층"
      ],
      "answers": [
        "전송",
        "응용"
      ],
      "explanation": "L4 스위치는 전송 계층 정보까지, L7 스위치는 응용 계층의 내용까지 활용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20, 28, 33쪽"
    },
    {
      "id": "nsm-059",
      "week": 3,
      "type": "short",
      "prompt": "Cisco IOS 계열에서 특권 모드 암호를 해시로 보호하는 대표 설정 enable _____의 빈칸은?",
      "answers": [
        "secret"
      ],
      "explanation": "enable secret은 특권 모드 접근 보호에 쓰입니다. 단방향 해시와 복호화 가능한 암호화를 구별하며 형식·강도는 버전과 설정에 따라 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 19, 28, 33쪽"
    },
    {
      "id": "nsm-060",
      "week": 4,
      "type": "short",
      "prompt": "[O/X] VLAN을 분리하면 모든 트래픽이 자동 암호화되고 VLAN 간 접근 정책도 불필요하다.",
      "answers": [
        "X",
        "x"
      ],
      "explanation": "VLAN은 L2 논리 분리입니다. 암호화와 ACL·방화벽 정책은 별도로 적용해야 합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22, 28, 33쪽"
    },
    {
      "id": "nsm-061",
      "week": 1,
      "type": "choice",
      "prompt": "프로토콜의 타이밍(Timing)에 해당하는 항목은?",
      "options": [
        {
          "id": "a",
          "text": "전송 시점과 속도",
          "explanation": "타이밍은 언제, 얼마나 빠르게 전송할지 정합니다. 비트 배치는 구문, 필드 해석은 의미에 해당합니다."
        },
        {
          "id": "b",
          "text": "필드의 비트 배치",
          "explanation": "필드의 비트 배치는 데이터 형식을 정하는 구문(Syntax)에 해당합니다. 타이밍은 전송 시점과 속도입니다."
        },
        {
          "id": "c",
          "text": "주소 필드의 의미",
          "explanation": "주소 필드가 무엇을 뜻하는지는 의미(Semantics)에 해당합니다. 전송 시점을 묻는 타이밍과 다릅니다."
        },
        {
          "id": "d",
          "text": "오류 코드의 해석",
          "explanation": "오류 코드를 어떻게 해석하고 처리할지는 의미(Semantics)에 해당합니다. 타이밍은 언제 얼마나 빠르게 전송하는가입니다."
        }
      ],
      "answer": "a",
      "explanation": "타이밍은 언제, 얼마나 빠르게 전송할지 정합니다. 비트 배치는 구문, 필드 해석은 의미에 해당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2쪽"
    },
    {
      "id": "nsm-062",
      "week": 1,
      "type": "choice",
      "prompt": "OSI 세션 계층의 대표 책임으로 가장 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "논리 주소를 사용한 IP 패킷의 경로 선택과 전달",
          "explanation": "IP 경로 선택은 OSI 3계층인 네트워크 계층의 기능입니다. 세션 계층은 5계층으로 대화를 관리합니다."
        },
        {
          "id": "b",
          "text": "종단 사이 대화의 설정·유지·종료와 동기화 관리",
          "explanation": "세션 계층은 대화 관리와 동기화·복구 지점을 다룹니다."
        },
        {
          "id": "c",
          "text": "MAC 주소를 사용한 링크의 프레임 전달과 필터링",
          "explanation": "MAC 기반 프레임 전달은 OSI 2계층인 데이터링크 계층의 기능입니다."
        },
        {
          "id": "d",
          "text": "전기·광 신호를 사용한 인접 노드 사이의 비트 전달",
          "explanation": "전기·광 신호 전달은 OSI 1계층인 물리 계층의 기능입니다."
        }
      ],
      "answer": "b",
      "explanation": "세션 계층은 대화 관리와 동기화·복구 지점을 다룹니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3쪽"
    },
    {
      "id": "nsm-063",
      "week": 1,
      "type": "choice",
      "prompt": "응용 데이터의 송신 캡슐화 순서로 맞는 것은?",
      "options": [
        {
          "id": "a",
          "text": "링크 → IP → TCP/UDP",
          "explanation": "송신할 때는 전송 계층의 TCP/UDP 헤더를 붙인 뒤 IP, 링크 순으로 내려갑니다. 링크부터 시작하는 순서는 거꾸로입니다."
        },
        {
          "id": "b",
          "text": "IP → 링크 → TCP/UDP",
          "explanation": "IP 헤더보다 먼저 TCP/UDP 헤더를 붙여야 하며 링크 정보는 그 바깥에 붙입니다."
        },
        {
          "id": "c",
          "text": "TCP/UDP → IP → 링크",
          "explanation": "전송 계층 헤더, IP 헤더, 링크 헤더·트레일러 순으로 붙인 뒤 매체의 신호로 보냅니다."
        },
        {
          "id": "d",
          "text": "TCP/UDP → 링크 → IP",
          "explanation": "TCP/UDP 다음은 IP, 그다음은 링크입니다. 링크를 IP보다 먼저 붙이는 순서가 틀렸습니다."
        }
      ],
      "answer": "c",
      "explanation": "전송 계층 헤더, IP 헤더, 링크 헤더·트레일러 순으로 붙인 뒤 매체의 신호로 보냅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4쪽"
    },
    {
      "id": "nsm-064",
      "week": 1,
      "type": "choice",
      "prompt": "NAT가 없는 일반적인 라우터 패킷 전달을 가장 잘 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "수신 프레임의 주소를 유지한 채 모든 포트로 반복 전송한다.",
          "explanation": "주소를 보지 않고 다른 포트로 신호를 반복하는 것은 허브의 동작에 가깝습니다. 라우터는 IP와 경로 정보를 처리합니다."
        },
        {
          "id": "b",
          "text": "수신 프레임의 MAC만 조회하고 IP 계층 처리는 생략한다.",
          "explanation": "MAC 테이블로 전달하는 것은 L2 스위치의 동작입니다. 라우터는 네트워크 계층의 IP 패킷을 처리합니다."
        },
        {
          "id": "c",
          "text": "수신 패킷의 TCP 연결을 종료하고 다음 홉과 새 연결을 맺는다.",
          "explanation": "일반적인 라우터 전달은 TCP 연결을 종단시키거나 새로 설정하지 않습니다. 링크 프레임을 바꾸어 IP 패킷을 전달합니다."
        },
        {
          "id": "d",
          "text": "수신 프레임을 해제하고 IP 처리 후 다음 링크 프레임을 만든다.",
          "explanation": "라우터는 링크마다 새 프레임을 구성해 다음 홉으로 보냅니다. 허브·L2 스위치와 처리 기준이 다릅니다."
        }
      ],
      "answer": "d",
      "explanation": "라우터는 링크마다 새 프레임을 구성해 다음 홉으로 보냅니다. 허브·L2 스위치와 처리 기준이 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 20쪽"
    },
    {
      "id": "nsm-065",
      "week": 2,
      "type": "choice",
      "prompt": "다음 중 자료에 제시된 IPv4 사설 주소 블록에 속하는 것은?",
      "options": [
        {
          "id": "a",
          "text": "172.32.0.1",
          "explanation": "172.16.0.0/12 사설 범위의 끝은 172.31.255.255입니다. 172.32.0.1은 그 범위 밖입니다."
        },
        {
          "id": "b",
          "text": "172.31.255.254",
          "explanation": "172.16.0.0/12는 172.16.0.0~172.31.255.255입니다. 172.32.*는 이 사설 블록 밖입니다."
        },
        {
          "id": "c",
          "text": "192.169.1.1",
          "explanation": "사설 블록은 192.168.0.0/16입니다. 192.169.1.1은 둘째 옥텟이 달라 포함되지 않습니다."
        },
        {
          "id": "d",
          "text": "11.0.0.1",
          "explanation": "사설 블록은 10.0.0.0/8이며 11.0.0.1은 여기에 포함되지 않습니다."
        }
      ],
      "answer": "b",
      "explanation": "172.16.0.0/12는 172.16.0.0~172.31.255.255입니다. 172.32.*는 이 사설 블록 밖입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 6쪽"
    },
    {
      "id": "nsm-066",
      "week": 2,
      "type": "choice",
      "prompt": "192.168.5.130/27의 네트워크 주소와 브로드캐스트 주소 조합은?",
      "options": [
        {
          "id": "a",
          "text": "192.168.5.128 / 192.168.5.159",
          "explanation": "/27의 블록 크기는 32입니다. 130은 128~159 구간에 있으며 일반 호스트 범위는 .129~.158입니다."
        },
        {
          "id": "b",
          "text": "192.168.5.128 / 192.168.5.255",
          "explanation": "/27은 32개 주소씩 나누므로 .128 구간의 마지막은 .159입니다. .255까지 포함하면 구간 크기가 맞지 않습니다."
        },
        {
          "id": "c",
          "text": "192.168.5.96 / 192.168.5.127",
          "explanation": ".96~.127은 바로 앞 /27 구간입니다. 주어진 .130은 이 구간에 포함되지 않습니다."
        },
        {
          "id": "d",
          "text": "192.168.5.130 / 192.168.5.161",
          "explanation": "네트워크 주소는 32의 배수 경계에 있어야 합니다. .130은 호스트 주소이며 구간 시작은 .128입니다."
        }
      ],
      "answer": "a",
      "explanation": "/27의 블록 크기는 32입니다. 130은 128~159 구간에 있으며 일반 호스트 범위는 .129~.158입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7-8 · 계산 응용쪽"
    },
    {
      "id": "nsm-067",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 /31·/32에 대한 자료의 설명으로 옳은 것은?",
      "options": [
        {
          "id": "a",
          "text": "/31은 주소 두 개를 제외하므로 호스트 주소가 하나도 없다.",
          "explanation": "네트워크·브로드캐스트 두 주소를 빼는 계산은 일반 서브넷에 적용합니다. /31 점대점 링크와 /32는 별도로 해석합니다."
        },
        {
          "id": "b",
          "text": "/31은 링크 종류와 관계없이 호스트 주소를 할당할 수 없다.",
          "explanation": "/31은 점대점 링크에서 두 주소를 모두 사용할 수 있습니다. 항상 할당 불가인 것은 아닙니다."
        },
        {
          "id": "c",
          "text": "/31 점대점 링크는 두 주소를 쓰며 /32는 단일 주소를 나타낸다.",
          "explanation": "2^h-2는 일반적인 /30 이하 서브넷의 계산입니다. /31 점대점 링크와 /32는 별도로 해석합니다."
        },
        {
          "id": "d",
          "text": "/32는 접두사 뒤 숫자와 같은 개수인 32개의 주소를 나타낸다.",
          "explanation": "/32의 호스트 비트는 0개이므로 2^0=1개 주소를 나타냅니다. 32개가 아닙니다."
        }
      ],
      "answer": "c",
      "explanation": "2^h-2는 일반적인 /30 이하 서브넷의 계산입니다. /31 점대점 링크와 /32는 별도로 해석합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7쪽"
    },
    {
      "id": "nsm-068",
      "week": 2,
      "type": "choice",
      "prompt": "MTU=1500, IPv4 헤더=20바이트, 원본 IP 데이터=4000바이트이다. 단편화 시 마지막 조각의 전체 길이·Offset·MF는?",
      "options": [
        {
          "id": "a",
          "text": "1040바이트 · 370 · 1",
          "explanation": "1040바이트는 마지막 조각의 데이터 길이입니다. 헤더 20바이트를 더해 전체 길이는 1060이며 마지막이므로 MF=0입니다."
        },
        {
          "id": "b",
          "text": "1060바이트 · 2960 · 0",
          "explanation": "2960은 앞 조각들의 데이터 바이트 합입니다. Offset은 8바이트 단위이므로 2960/8=370입니다."
        },
        {
          "id": "c",
          "text": "1500바이트 · 185 · 0",
          "explanation": "전체 1500바이트와 Offset 185는 두 번째 조각의 값입니다. 마지막 조각은 전체 1060바이트, Offset 370입니다."
        },
        {
          "id": "d",
          "text": "1060바이트 · 370 · 0",
          "explanation": "앞 두 조각이 각각 데이터 1480바이트를 싣습니다. 잔여 데이터는 1040, 헤더 포함 1060바이트, Offset=2960/8=370, MF=0입니다."
        }
      ],
      "answer": "d",
      "explanation": "앞 두 조각이 각각 데이터 1480바이트를 싣습니다. 잔여 데이터는 1040, 헤더 포함 1060바이트, Offset=2960/8=370, MF=0입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 9쪽"
    },
    {
      "id": "nsm-069",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 Header Checksum이 직접 검사하는 범위는?",
      "options": [
        {
          "id": "a",
          "text": "응용 데이터만",
          "explanation": "IPv4 Header Checksum은 응용 데이터가 아니라 IPv4 헤더만 검사합니다."
        },
        {
          "id": "b",
          "text": "IPv4 헤더만",
          "explanation": "IPv4 검사합은 IPv4 헤더만 검사합니다. TTL이 바뀌면 헤더 검사합도 갱신해야 합니다."
        },
        {
          "id": "c",
          "text": "Ethernet 프레임 전체",
          "explanation": "Ethernet 프레임의 오류 검출은 링크 계층의 FCS가 담당합니다. IPv4 헤더 검사합과 범위가 다릅니다."
        },
        {
          "id": "d",
          "text": "TCP 헤더와 데이터만",
          "explanation": "TCP 헤더·데이터는 TCP 검사합의 검사 범위에 해당합니다. IPv4 Header Checksum은 IP 헤더만 검사합니다."
        }
      ],
      "answer": "b",
      "explanation": "IPv4 검사합은 IPv4 헤더만 검사합니다. TTL이 바뀌면 헤더 검사합도 갱신해야 합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 9쪽"
    },
    {
      "id": "nsm-070",
      "week": 2,
      "type": "choice",
      "prompt": "ICMP와 IGMP를 올바르게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "ICMP: IP 오류 보고와 상태 진단 / IGMP: IPv4 멀티캐스트 그룹 관리",
          "explanation": "ICMP는 IP 오류 보고와 진단, IGMP는 IPv4 멀티캐스트 그룹 가입·유지에 관여합니다."
        },
        {
          "id": "b",
          "text": "ICMP: TCP 손실 데이터의 재전송 / IGMP: 도메인 이름의 주소 질의",
          "explanation": "TCP 재전송은 TCP의 손실 복구 기능이고 DNS 질의는 DNS의 기능입니다. ICMP·IGMP의 역할이 아닙니다."
        },
        {
          "id": "c",
          "text": "ICMP: 호스트에 새로운 주소 할당 / IGMP: 송신 데이터의 암호화",
          "explanation": "ICMP는 오류 보고·진단, IGMP는 IPv4 멀티캐스트 그룹 관리입니다. 주소 할당이나 암호화를 담당하지 않습니다."
        },
        {
          "id": "d",
          "text": "ICMP: Ethernet 프레임의 VLAN 태깅 / IGMP: 수신 프레임의 MAC 학습",
          "explanation": "VLAN 태깅은 802.1Q, MAC 학습은 스위칭 동작입니다. ICMP·IGMP의 역할과 다릅니다."
        }
      ],
      "answer": "a",
      "explanation": "ICMP는 IP 오류 보고와 진단, IGMP는 IPv4 멀티캐스트 그룹 가입·유지에 관여합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 11쪽"
    },
    {
      "id": "nsm-071",
      "week": 2,
      "type": "choice",
      "prompt": "IPv6에 대한 설명으로 옳은 것은?",
      "options": [
        {
          "id": "a",
          "text": "IPv6의 기본 헤더는 IPv4와 마찬가지로 20바이트로 고정된다.",
          "explanation": "IPv6 기본 헤더는 40바이트입니다. 20바이트는 옵션 없는 IPv4 헤더의 길이입니다."
        },
        {
          "id": "b",
          "text": "IPv6의 중간 라우터는 필요할 때 직접 패킷을 단편화한다.",
          "explanation": "IPv6 중간 라우터는 패킷을 단편화하지 않습니다. IPv4 라우터의 단편화 동작과 구분해야 합니다."
        },
        {
          "id": "c",
          "text": "IPv6는 IPv4처럼 브로드캐스트를 주소 유형으로 사용한다.",
          "explanation": "IPv6에는 IPv4와 같은 브로드캐스트 주소 유형이 없습니다. 유니캐스트·애니캐스트·멀티캐스트를 사용합니다."
        },
        {
          "id": "d",
          "text": "IPv6의 주소 해석은 ICMPv6 기반 이웃 탐색(ND)을 사용한다.",
          "explanation": "IPv6 기본 헤더는 40바이트이며 중간 라우터가 단편화하지 않습니다. 주소 해석은 ARP 대신 Neighbor Discovery를 사용합니다."
        }
      ],
      "answer": "d",
      "explanation": "IPv6 기본 헤더는 40바이트이며 중간 라우터가 단편화하지 않습니다. 주소 해석은 ARP 대신 Neighbor Discovery를 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 12쪽"
    },
    {
      "id": "nsm-072",
      "week": 2,
      "type": "choice",
      "prompt": "TCP와 UDP의 데이터 단위 차이로 옳은 것은?",
      "options": [
        {
          "id": "a",
          "text": "TCP는 바이트를 전달하면서 응용이 나눈 메시지 경계도 보존한다.",
          "explanation": "TCP는 바이트 스트림으로 응용 메시지 경계를 그대로 보존하지 않습니다. 응용이 길이나 구분자를 정해야 합니다."
        },
        {
          "id": "b",
          "text": "UDP는 데이터 손실을 복구하면서 연속된 바이트 스트림을 전달한다.",
          "explanation": "UDP는 데이터그램 전송이며 손실 없는 스트림을 보장하지 않습니다."
        },
        {
          "id": "c",
          "text": "TCP는 바이트 스트림을 제공하고 UDP는 데이터그램 단위를 유지한다.",
          "explanation": "TCP 응용은 길이나 구분자로 메시지 경계를 정해야 합니다. UDP는 데이터그램 단위를 보존하지만 전달·순서를 보장하지 않습니다."
        },
        {
          "id": "d",
          "text": "TCP와 UDP는 모두 응용 메시지 경계를 없앤 바이트 스트림을 제공한다.",
          "explanation": "UDP는 데이터그램 단위를 유지합니다. 둘 다 바이트 스트림이라는 설명은 틀렸습니다."
        }
      ],
      "answer": "c",
      "explanation": "TCP 응용은 길이나 구분자로 메시지 경계를 정해야 합니다. UDP는 데이터그램 단위를 보존하지만 전달·순서를 보장하지 않습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13쪽"
    },
    {
      "id": "nsm-073",
      "week": 2,
      "type": "choice",
      "prompt": "TCP 플래그의 역할을 올바르게 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "ACK는 확인응답 번호가 유효함을 나타낸다.",
          "explanation": "ACK는 확인응답 번호의 유효성을 표시합니다. PSH는 수신 응용으로 신속한 전달을 요청하고 FIN은 한 방향 송신 종료를 알립니다. 리셋은 RST입니다."
        },
        {
          "id": "b",
          "text": "PSH는 클라이언트만 사용할 수 있다.",
          "explanation": "PSH는 클라이언트 전용이 아닙니다. 수신 응용으로 신속한 전달을 요청하는 플래그입니다."
        },
        {
          "id": "c",
          "text": "FIN은 양방향 통신을 무조건 동시에 닫는다.",
          "explanation": "FIN은 송신자의 한 방향 송신 종료를 알립니다. 반대 방향 수신은 계속 가능한 절반 폐쇄가 있습니다."
        },
        {
          "id": "d",
          "text": "URG는 항상 전체 연결을 즉시 리셋한다.",
          "explanation": "즉시 연결 리셋은 RST의 역할입니다. URG는 긴급 포인터가 유효함을 나타냅니다."
        }
      ],
      "answer": "a",
      "explanation": "ACK는 확인응답 번호의 유효성을 표시합니다. PSH는 수신 응용으로 신속한 전달을 요청하고 FIN은 한 방향 송신 종료를 알립니다. 리셋은 RST입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 14-15쪽"
    },
    {
      "id": "nsm-074",
      "week": 3,
      "type": "choice",
      "prompt": "목적지 192.168.10.77에 /0, 192.168.0.0/16, 192.168.10.0/24 경로가 모두 일치할 때 전달 테이블에서 우선하는 경로는?",
      "options": [
        {
          "id": "a",
          "text": "항상 /0",
          "explanation": "/0은 모든 목적지에 맞는 기본 경로입니다. 더 구체적으로 일치하는 /24가 있으므로 우선하지 않습니다."
        },
        {
          "id": "b",
          "text": "192.168.10.0/24",
          "explanation": "최장 접두사 일치에 따라 가장 구체적인 /24를 우선합니다."
        },
        {
          "id": "c",
          "text": "192.168.0.0/16",
          "explanation": "/16도 목적지에 맞지만 /24보다 덜 구체적입니다. 최장 접두사 일치에서는 /24가 우선합니다."
        },
        {
          "id": "d",
          "text": "가장 먼저 등록된 경로만",
          "explanation": "전달 경로는 단순 등록 순서로 고르지 않습니다. 일치하는 경로 중 접두사가 가장 긴 경로를 우선합니다."
        }
      ],
      "answer": "b",
      "explanation": "최장 접두사 일치에 따라 가장 구체적인 /24를 우선합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16쪽"
    },
    {
      "id": "nsm-075",
      "week": 3,
      "type": "choice",
      "prompt": "EIGRP의 분류와 핵심 알고리즘 조합은?",
      "options": [
        {
          "id": "a",
          "text": "링크 상태 · Dijkstra",
          "explanation": "링크 상태와 Dijkstra는 OSPF의 조합입니다. EIGRP는 고급 거리 벡터이며 DUAL을 사용합니다."
        },
        {
          "id": "b",
          "text": "경로 벡터 · AS_PATH",
          "explanation": "경로 벡터와 AS_PATH는 BGP에 해당합니다. EIGRP의 분류와 알고리즘이 아닙니다."
        },
        {
          "id": "c",
          "text": "고급 거리 벡터 · DUAL",
          "explanation": "자료는 EIGRP를 고급 거리 벡터 계열로 구분하고 DUAL을 핵심 알고리즘으로 설명합니다."
        },
        {
          "id": "d",
          "text": "L2 루프 방지 · STP",
          "explanation": "STP는 스위치의 L2 루프를 막는 프로토콜입니다. EIGRP의 라우팅 알고리즘은 DUAL입니다."
        }
      ],
      "answer": "c",
      "explanation": "자료는 EIGRP를 고급 거리 벡터 계열로 구분하고 DUAL을 핵심 알고리즘으로 설명합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16-17쪽"
    },
    {
      "id": "nsm-076",
      "week": 3,
      "type": "choice",
      "prompt": "RIPv2에 대한 설명으로 옳은 것은?",
      "options": [
        {
          "id": "a",
          "text": "RIPv2는 유효 최대 홉 수를 기존보다 늘려 16홉까지 사용한다.",
          "explanation": "RIPv2에서도 유효 최대 홉 수는 15입니다. 16은 도달 불가를 뜻합니다."
        },
        {
          "id": "b",
          "text": "RIPv2는 경로 업데이트를 보낼 때 서브넷 마스크를 포함하지 않는다.",
          "explanation": "마스크를 넣지 않는 것은 RIPv1의 특징입니다. RIPv2는 서브넷 마스크를 포함합니다."
        },
        {
          "id": "c",
          "text": "RIPv2는 BGP와 동일하게 TCP 179를 사용하여 경로를 갱신한다.",
          "explanation": "TCP 179는 BGP의 대표 전송 포트입니다. RIPv2는 UDP 520을 사용합니다."
        },
        {
          "id": "d",
          "text": "RIPv2는 업데이트에 서브넷 마스크를 포함해 CIDR·VLSM을 지원한다.",
          "explanation": "RIPv2는 마스크를 포함하고 주로 224.0.0.9 멀티캐스트와 UDP 520을 사용합니다. 유효 최대는 15홉입니다."
        }
      ],
      "answer": "d",
      "explanation": "RIPv2는 마스크를 포함하고 주로 224.0.0.9 멀티캐스트와 UDP 520을 사용합니다. 유효 최대는 15홉입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 17쪽"
    },
    {
      "id": "nsm-077",
      "week": 3,
      "type": "choice",
      "prompt": "라우터가 배운 경로를 그 경로를 배운 인터페이스로 되돌려 광고하지 않는 원리는?",
      "options": [
        {
          "id": "a",
          "text": "Split Horizon",
          "explanation": "Split Horizon은 배운 쪽으로 되돌려 광고하지 않습니다. Poison Reverse는 되돌려 광고할 때 도달 불가로 표시합니다."
        },
        {
          "id": "b",
          "text": "Poison Reverse",
          "explanation": "Poison Reverse는 배운 방향으로 광고하되 도달 불가 비용으로 알립니다. 아예 되돌려 광고하지 않는 것은 Split Horizon입니다."
        },
        {
          "id": "c",
          "text": "Store-and-Forward",
          "explanation": "Store-and-Forward는 전체 프레임 수신 후 검사하는 스위칭 방식입니다. 라우팅 정보 광고 규칙이 아닙니다."
        },
        {
          "id": "d",
          "text": "Dual Stack",
          "explanation": "Dual Stack은 IPv4와 IPv6를 병행 지원하는 방식입니다. 경로를 되돌려 광고하는 문제와 다릅니다."
        }
      ],
      "answer": "a",
      "explanation": "Split Horizon은 배운 쪽으로 되돌려 광고하지 않습니다. Poison Reverse는 되돌려 광고할 때 도달 불가로 표시합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 17쪽"
    },
    {
      "id": "nsm-078",
      "week": 3,
      "type": "choice",
      "prompt": "OSPF에 대한 설명으로 옳은 것은?",
      "options": [
        {
          "id": "a",
          "text": "AS 번호의 숫자를 경로마다 더해 누적 비용을 계산한다.",
          "explanation": "AS 번호는 식별자이며 숫자 크기를 더해 OSPF 비용을 만들지 않습니다. OSPF는 링크 비용을 사용합니다."
        },
        {
          "id": "b",
          "text": "영역의 LSDB를 바탕으로 Dijkstra 최단 경로 계산을 수행한다.",
          "explanation": "OSPF는 링크 상태 기반 IGP이며 LSDB를 토대로 자신 기준 최단 경로를 계산합니다."
        },
        {
          "id": "c",
          "text": "경유한 AS 목록만을 비교해 언제나 최단 경로를 결정한다.",
          "explanation": "경유 AS 목록은 BGP의 AS_PATH와 관련됩니다. BGP도 목록 길이만으로 항상 경로를 고르지는 않습니다."
        },
        {
          "id": "d",
          "text": "수신 프레임의 MAC 주소만 학습하여 경로 정보를 구성한다.",
          "explanation": "MAC 학습은 L2 스위치의 기능입니다. OSPF는 링크 상태와 IP 경로 정보를 다룹니다."
        }
      ],
      "answer": "b",
      "explanation": "OSPF는 링크 상태 기반 IGP이며 LSDB를 토대로 자신 기준 최단 경로를 계산합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 18쪽"
    },
    {
      "id": "nsm-079",
      "week": 3,
      "type": "choice",
      "prompt": "BGP의 AS_PATH에 자신의 AS가 포함된 경로를 거부하는 주된 목적은?",
      "options": [
        {
          "id": "a",
          "text": "TCP 재전송 횟수 증가",
          "explanation": "AS_PATH 검사는 AS 경로의 루프 방지를 위한 것입니다. TCP 재전송 횟수를 늘리는 기능이 아닙니다."
        },
        {
          "id": "b",
          "text": "VLAN 프레임 암호화",
          "explanation": "VLAN 프레임 암호화는 AS_PATH의 기능이 아닙니다. AS_PATH는 경유 AS 정보를 담습니다."
        },
        {
          "id": "c",
          "text": "AS 경로의 루프 방지",
          "explanation": "AS_PATH는 경유 AS 목록입니다. 자신의 AS가 이미 포함된 경로를 거부하여 루프를 피하는 데 활용합니다."
        },
        {
          "id": "d",
          "text": "수신 윈도우 확대",
          "explanation": "수신 윈도우는 TCP 흐름 제어와 관련됩니다. 자신의 AS 포함 여부를 검사하는 목적은 루프 방지입니다."
        }
      ],
      "answer": "c",
      "explanation": "AS_PATH는 경유 AS 목록입니다. 자신의 AS가 이미 포함된 경로를 거부하여 루프를 피하는 데 활용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 18쪽"
    },
    {
      "id": "nsm-080",
      "week": 3,
      "type": "choice",
      "prompt": "Cisco IOS 계열에서 Router#에서 전역 설정 모드로 들어가는 명령은?",
      "options": [
        {
          "id": "a",
          "text": "enable",
          "explanation": "enable은 사용자 EXEC에서 특권 EXEC로 이동하는 명령입니다. Router#는 이미 특권 EXEC 상태입니다."
        },
        {
          "id": "b",
          "text": "disable",
          "explanation": "disable은 특권 EXEC에서 사용자 EXEC로 내려가는 명령입니다. 전역 설정 모드 진입이 아닙니다."
        },
        {
          "id": "c",
          "text": "copy running-config startup-config",
          "explanation": "copy running-config startup-config는 현재 설정을 저장하는 명령입니다. 설정 모드 진입 명령은 아닙니다."
        },
        {
          "id": "d",
          "text": "configure terminal",
          "explanation": "configure terminal로 Router(config)#에 들어갑니다. enable은 사용자 EXEC에서 특권 EXEC로 이동할 때 사용합니다."
        }
      ],
      "answer": "d",
      "explanation": "configure terminal로 Router(config)#에 들어갑니다. enable은 사용자 EXEC에서 특권 EXEC로 이동할 때 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 19쪽"
    },
    {
      "id": "nsm-081",
      "week": 4,
      "type": "choice",
      "prompt": "포트 1로 A→B 프레임이 처음 들어왔고 B의 MAC은 미등록이다. 일반적인 L2 스위치 동작은?",
      "options": [
        {
          "id": "a",
          "text": "출발지 A를 포트 1에 학습하고 같은 VLAN의 다른 대상 포트로 전달한다.",
          "explanation": "출발지 A와 수신 포트 1을 학습합니다. 목적지 B가 미등록이면 같은 VLAN 안에서 플러딩합니다."
        },
        {
          "id": "b",
          "text": "목적지 B를 포트 1에 학습하고 테이블에 없던 프레임은 즉시 폐기한다.",
          "explanation": "스위치는 출발지 A를 수신 포트 1에 학습합니다. 목적지 B를 포트 1에 학습하지 않으며, 미등록 목적지는 보통 플러딩합니다."
        },
        {
          "id": "c",
          "text": "출발지 A와 목적지 B를 모두 포트 1에 학습하고 그 포트로만 전달한다.",
          "explanation": "프레임 하나로 A와 B의 위치를 모두 배울 수 없습니다. 출발지 A와 수신 포트만 학습합니다."
        },
        {
          "id": "d",
          "text": "출발지 A를 포트 1에 학습하고 라우팅 없이 다른 모든 VLAN에 전달한다.",
          "explanation": "일반 L2 전달은 같은 VLAN 안에서 이루어집니다. 다른 VLAN으로 보내려면 L3 라우팅이 필요합니다."
        }
      ],
      "answer": "a",
      "explanation": "출발지 A와 수신 포트 1을 학습합니다. 목적지 B가 미등록이면 같은 VLAN 안에서 플러딩합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21쪽"
    },
    {
      "id": "nsm-082",
      "week": 4,
      "type": "choice",
      "prompt": "Cut-Through 스위칭의 특징은?",
      "options": [
        {
          "id": "a",
          "text": "프레임 전체를 수신한 다음에야 검사와 전송을 시작한다.",
          "explanation": "전체 프레임을 받은 뒤 검사·전달하는 방식은 Store-and-Forward입니다. Cut-Through는 전체 수신 전에 전달할 수 있습니다."
        },
        {
          "id": "b",
          "text": "프레임 앞 64바이트를 반드시 수신한 다음에 전달을 시작한다.",
          "explanation": "앞 64바이트를 기다리는 것은 Fragment-Free의 특징입니다. Cut-Through의 정의가 아닙니다."
        },
        {
          "id": "c",
          "text": "프레임 손실이 생기면 스위치가 종단 TCP 재전송을 보장한다.",
          "explanation": "스위칭 방식은 종단 TCP 재전송을 보장하지 않습니다. TCP 신뢰성은 통신 종단에서 처리합니다."
        },
        {
          "id": "d",
          "text": "프레임의 목적지 정보를 확인하면 전체 수신 전에 전달한다.",
          "explanation": "Cut-Through는 전체 FCS 검사 전에 전달할 수 있어 손상 프레임이 전파될 수 있습니다."
        }
      ],
      "answer": "d",
      "explanation": "Cut-Through는 전체 FCS 검사 전에 전달할 수 있어 손상 프레임이 전파될 수 있습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21쪽"
    },
    {
      "id": "nsm-083",
      "week": 4,
      "type": "choice",
      "prompt": "Access 포트와 Trunk 포트의 일반적인 용도를 올바르게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "Access: 여러 VLAN을 한 링크로 운반 / Trunk: 수신한 물리 신호만 증폭",
          "explanation": "여러 VLAN을 운반하는 것은 Trunk입니다. Trunk는 단순 신호 증폭 기능을 뜻하지 않습니다."
        },
        {
          "id": "b",
          "text": "Access: 한 VLAN의 단말을 연결 / Trunk: 여러 VLAN을 한 링크로 운반",
          "explanation": "Access는 통상 한 VLAN의 단말용이고 Trunk는 802.1Q 태그 등으로 여러 VLAN을 운반합니다. native VLAN 예외도 있습니다."
        },
        {
          "id": "c",
          "text": "Access: 여러 AS의 경로 정보를 교환 / Trunk: 단말에 IP 주소를 할당",
          "explanation": "AS 간 경로 교환은 BGP 등의 라우팅 기능입니다. Access·Trunk는 VLAN 연결 방식입니다."
        },
        {
          "id": "d",
          "text": "Access: 종단 사이의 TCP 연결 종료 / Trunk: MAC 주소를 IP 주소로 변환",
          "explanation": "TCP 종료나 MAC→IP 변환은 Access·Trunk의 구분 기준이 아닙니다. 단말 연결과 여러 VLAN 운반을 구분합니다."
        }
      ],
      "answer": "b",
      "explanation": "Access는 통상 한 VLAN의 단말용이고 Trunk는 802.1Q 태그 등으로 여러 VLAN을 운반합니다. native VLAN 예외도 있습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22쪽"
    },
    {
      "id": "nsm-084",
      "week": 4,
      "type": "choice",
      "prompt": "IEEE 802.1Q의 VLAN ID 필드 길이와 통상 사용하는 VLAN ID 범위는?",
      "options": [
        {
          "id": "a",
          "text": "16비트 · 0~65535",
          "explanation": "16비트 0~65535는 TCP/UDP 포트 번호의 범위입니다. VLAN ID는 12비트입니다."
        },
        {
          "id": "b",
          "text": "8비트 · 1~254",
          "explanation": "VLAN ID 필드는 8비트가 아니라 12비트입니다. 통상 1~4094를 사용합니다."
        },
        {
          "id": "c",
          "text": "12비트 · 1~4094",
          "explanation": "VLAN ID 필드는 12비트이며 통상 1~4094를 사용합니다. 전체 비트 조합과 일반 사용 범위를 구별합니다."
        },
        {
          "id": "d",
          "text": "32비트 · 1~4294967294",
          "explanation": "32비트는 IPv4 주소 길이입니다. VLAN ID 필드 길이는 12비트입니다."
        }
      ],
      "answer": "c",
      "explanation": "VLAN ID 필드는 12비트이며 통상 1~4094를 사용합니다. 전체 비트 조합과 일반 사용 범위를 구별합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22-23쪽"
    },
    {
      "id": "nsm-085",
      "week": 1,
      "type": "essay",
      "prompt": "MAC·IP·TCP/UDP 포트가 식별하는 대상을 설명하고, NAT 없는 라우터 전달에서 무엇이 바뀌는지 비교하세요.",
      "model": "MAC은 같은 링크의 다음 수신 인터페이스, IP는 네트워크의 송수신 인터페이스, TCP/UDP 포트는 응용·프로세스 통신 끝점을 식별한다. 일반적인 라우터 전달에서는 다음 링크에 맞게 MAC 주소가 바뀌고 종단 IP와 포트는 유지된다. NAT 같은 주소·포트 변환은 이 가정의 예외이다.",
      "rubric": [
        "MAC의 링크 수신자 역할",
        "IP와 포트의 식별 대상 구분",
        "링크마다 MAC 변경",
        "NAT 없는 조건과 변환 예외"
      ],
      "explanation": "MAC은 같은 링크의 다음 수신 인터페이스, IP는 네트워크의 송수신 인터페이스, TCP/UDP 포트는 응용·프로세스 통신 끝점을 식별한다. 일반적인 라우터 전달에서는 다음 링크에 맞게 MAC 주소가 바뀌고 종단 IP와 포트는 유지된다. NAT 같은 주소·포트 변환은 이 가정의 예외이다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4쪽"
    },
    {
      "id": "nsm-086",
      "week": 1,
      "type": "essay",
      "prompt": "OSI 7계층을 아래에서 위로 나열하고 TCP/IP 4계층과의 대응을 설명하세요.",
      "model": "OSI는 물리, 데이터링크, 네트워크, 전송, 세션, 표현, 응용 순서이다. TCP/IP 4계층에서는 물리·데이터링크를 네트워크 인터페이스(링크)로 묶고, 네트워크는 인터넷 계층, 전송은 전송 계층으로 대응한다. 세션·표현·응용은 TCP/IP 응용 계층에 포함한다.",
      "rubric": [
        "OSI 계층 순서",
        "물리·데이터링크를 링크로 통합",
        "네트워크·전송 대응",
        "상위 3계층을 응용으로 통합"
      ],
      "explanation": "OSI는 물리, 데이터링크, 네트워크, 전송, 세션, 표현, 응용 순서이다. TCP/IP 4계층에서는 물리·데이터링크를 네트워크 인터페이스(링크)로 묶고, 네트워크는 인터넷 계층, 전송은 전송 계층으로 대응한다. 세션·표현·응용은 TCP/IP 응용 계층에 포함한다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4쪽"
    },
    {
      "id": "nsm-087",
      "week": 2,
      "type": "essay",
      "prompt": "192.168.5.130/27의 마스크, 네트워크·브로드캐스트 주소, 일반 호스트 범위와 개수를 계산 과정을 포함해 쓰세요.",
      "model": "/27은 호스트 비트가 5개이고 마스크는 255.255.255.224이다. 전체 주소는 2^5=32개로 마지막 옥텟의 블록 경계가 32 간격이다. 130은 128~159 구간이므로 네트워크는 192.168.5.128, 브로드캐스트는 192.168.5.159이다. 호스트 범위는 192.168.5.129~192.168.5.158이며 개수는 32-2=30개이다.",
      "rubric": [
        "호스트 비트 5와 마스크 .224",
        "블록 크기 32와 경계",
        "네트워크 .128·브로드캐스트 .159",
        "호스트 .129~.158·30개"
      ],
      "explanation": "/27은 호스트 비트가 5개이고 마스크는 255.255.255.224이다. 전체 주소는 2^5=32개로 마지막 옥텟의 블록 경계가 32 간격이다. 130은 128~159 구간이므로 네트워크는 192.168.5.128, 브로드캐스트는 192.168.5.159이다. 호스트 범위는 192.168.5.129~192.168.5.158이며 개수는 32-2=30개이다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 7-8 · 계산 응용쪽"
    },
    {
      "id": "nsm-088",
      "week": 2,
      "type": "essay",
      "prompt": "192.168.20.0/24에서 A 100대, B 50대, C 25대를 수용하도록 큰 블록부터 VLSM을 배치하세요. 각 접두사와 남는 블록도 쓰세요.",
      "model": "A는 126호스트를 수용하는 192.168.20.0/25, B는 62호스트를 수용하는 192.168.20.128/26, C는 30호스트를 수용하는 192.168.20.192/27에 배치한다. 남는 블록은 192.168.20.224/27이다. 각 부서에 필요한 호스트 수와 네트워크·브로드캐스트 두 주소를 수용하는 최소 2의 거듭제곱 블록을 큰 요구량부터 정렬해 할당한다.",
      "rubric": [
        "A .0/25",
        "B .128/26",
        "C .192/27",
        "잔여 .224/27",
        "최소 블록·큰 요구량부터 배치"
      ],
      "explanation": "A는 126호스트를 수용하는 192.168.20.0/25, B는 62호스트를 수용하는 192.168.20.128/26, C는 30호스트를 수용하는 192.168.20.192/27에 배치한다. 남는 블록은 192.168.20.224/27이다. 각 부서에 필요한 호스트 수와 네트워크·브로드캐스트 두 주소를 수용하는 최소 2의 거듭제곱 블록을 큰 요구량부터 정렬해 할당한다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 8쪽"
    },
    {
      "id": "nsm-089",
      "week": 2,
      "type": "essay",
      "prompt": "A=192.168.1.10/24가 원격 C=10.0.0.5에 보낸다. 게이트웨이는 192.168.1.1이고 ARP 캐시는 비어 있다. ARP 대상·요청 범위·최초 프레임과 IP 패킷의 목적지를 설명하세요.",
      "model": "A는 C가 다른 서브넷에 있음을 판단하고 기본 게이트웨이 192.168.1.1의 MAC을 ARP로 조회한다. ARP 요청은 로컬 링크의 Ethernet 브로드캐스트이며 인터넷 전체로 전달되지 않는다. 응답으로 얻은 게이트웨이 MAC을 최초 프레임의 목적지로 사용하고 IP 패킷의 목적지는 10.0.0.5로 둔다. 원격 C의 MAC을 로컬 ARP로 찾는 것이 아니다.",
      "rubric": [
        "원격 서브넷 판단",
        "게이트웨이 IP를 ARP 조회",
        "로컬 브로드캐스트 범위",
        "MAC 목적지와 IP 목적지 구분"
      ],
      "explanation": "A는 C가 다른 서브넷에 있음을 판단하고 기본 게이트웨이 192.168.1.1의 MAC을 ARP로 조회한다. ARP 요청은 로컬 링크의 Ethernet 브로드캐스트이며 인터넷 전체로 전달되지 않는다. 응답으로 얻은 게이트웨이 MAC을 최초 프레임의 목적지로 사용하고 IP 패킷의 목적지는 10.0.0.5로 둔다. 원격 C의 MAC을 로컬 ARP로 찾는 것이 아니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10쪽"
    },
    {
      "id": "nsm-090",
      "week": 2,
      "type": "essay",
      "prompt": "MTU 1500바이트, IPv4 헤더 20바이트, IP 데이터 4000바이트이고 DF=0이다. 세 조각의 데이터 길이·전체 길이·Offset·MF를 계산하세요.",
      "model": "한 조각의 최대 데이터는 1500-20=1480바이트이며 8의 배수이다. 첫 조각은 데이터 1480, 전체 길이 1500, Offset 0, MF 1이다. 둘째는 데이터 1480, 전체 1500, Offset 1480/8=185, MF 1이다. 셋째는 데이터 1040, 전체 1060, Offset 2960/8=370, MF 0이다. Offset은 바이트 수 그대로가 아니라 8바이트 단위이며 각 조각에 헤더가 붙는다.",
      "rubric": [
        "데이터 1480·1480·1040",
        "전체 1500·1500·1060",
        "Offset 0·185·370",
        "MF 1·1·0과 8바이트 단위"
      ],
      "explanation": "한 조각의 최대 데이터는 1500-20=1480바이트이며 8의 배수이다. 첫 조각은 데이터 1480, 전체 길이 1500, Offset 0, MF 1이다. 둘째는 데이터 1480, 전체 1500, Offset 1480/8=185, MF 1이다. 셋째는 데이터 1040, 전체 1060, Offset 2960/8=370, MF 0이다. Offset은 바이트 수 그대로가 아니라 8바이트 단위이며 각 조각에 헤더가 붙는다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 9쪽"
    },
    {
      "id": "nsm-091",
      "week": 2,
      "type": "essay",
      "prompt": "IPv4/IPv6 전환의 이중 스택·터널링·프로토콜 변환을 비교하고 IPv6 사용만으로 모든 통신이 암호화되는지 설명하세요.",
      "model": "이중 스택은 장비가 IPv4와 IPv6를 병행 지원하는 방식이다. 터널링은 IPv6 패킷을 IPv4 패킷 안에 캡슐화해 IPv4 구간을 통과시킨 뒤 역캡슐화한다. 프로토콜 변환은 IPv4와 IPv6 사이 주소·헤더 등을 바꿔 통신하게 한다. IPv6 또는 IPsec 지원만으로 모든 통신이 자동 암호화되는 것은 아니며 보안 기능과 정책을 실제로 적용해야 한다.",
      "rubric": [
        "두 프로토콜 병행",
        "캡슐화·역캡슐화",
        "주소·헤더 변환",
        "자동 암호화 오해 구분"
      ],
      "explanation": "이중 스택은 장비가 IPv4와 IPv6를 병행 지원하는 방식이다. 터널링은 IPv6 패킷을 IPv4 패킷 안에 캡슐화해 IPv4 구간을 통과시킨 뒤 역캡슐화한다. 프로토콜 변환은 IPv4와 IPv6 사이 주소·헤더 등을 바꿔 통신하게 한다. IPv6 또는 IPsec 지원만으로 모든 통신이 자동 암호화되는 것은 아니며 보안 기능과 정책을 실제로 적용해야 한다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 12쪽"
    },
    {
      "id": "nsm-092",
      "week": 2,
      "type": "essay",
      "prompt": "TCP 연결 설정에서 클라이언트 ISN=1000, 서버 ISN=5000이며 응용 데이터는 없다. 세 메시지의 SEQ·ACK를 쓰고, 이후 클라이언트가 200바이트를 보낸 뒤 데이터 없는 FIN을 보낼 때 서버의 ACK 변화를 설명하세요.",
      "model": "첫 메시지는 클라이언트 SYN SEQ=1000이다. 둘째는 서버 SYN+ACK SEQ=5000, ACK=1001이며 셋째는 클라이언트 ACK SEQ=1001, ACK=5001이다. SYN은 각각 순서번호 1을 소비한다. 이후 클라이언트가 SEQ=1001로 200바이트를 보내면 서버의 누적 ACK는 1201이다. 클라이언트의 데이터 없는 FIN SEQ=1201은 순서번호 1을 소비하므로 서버 ACK는 1202가 된다. 순수 ACK는 순서번호를 소비하지 않는다.",
      "rubric": [
        "SYN 1000과 SYN+ACK 5000/1001",
        "마지막 ACK 1001/5001",
        "데이터 후 ACK 1201",
        "FIN 후 ACK 1202",
        "SYN·FIN 1, 순수 ACK 0"
      ],
      "explanation": "첫 메시지는 클라이언트 SYN SEQ=1000이다. 둘째는 서버 SYN+ACK SEQ=5000, ACK=1001이며 셋째는 클라이언트 ACK SEQ=1001, ACK=5001이다. SYN은 각각 순서번호 1을 소비한다. 이후 클라이언트가 SEQ=1001로 200바이트를 보내면 서버의 누적 ACK는 1201이다. 클라이언트의 데이터 없는 FIN SEQ=1201은 순서번호 1을 소비하므로 서버 ACK는 1202가 된다. 순수 ACK는 순서번호를 소비하지 않는다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 14-15쪽"
    },
    {
      "id": "nsm-093",
      "week": 2,
      "type": "essay",
      "prompt": "TCP 흐름 제어와 혼잡 제어가 보호하는 대상과 대표 윈도우를 비교하고 UDP 자체의 지원 여부를 설명하세요.",
      "model": "흐름 제어는 느린 수신자의 버퍼가 넘치지 않게 하며 TCP의 수신 윈도우 rwnd를 활용한다. 혼잡 제어는 네트워크 과부하를 완화하며 혼잡 윈도우 cwnd 등을 사용한다. UDP 자체는 TCP식 흐름 제어·혼잡 제어·재전송을 제공하지 않으므로 필요하면 응용이나 상위 프로토콜이 이를 구현한다.",
      "rubric": [
        "수신 버퍼와 rwnd",
        "네트워크 과부하와 cwnd",
        "UDP 자체 기능 부재",
        "상위 계층 보완 가능"
      ],
      "explanation": "흐름 제어는 느린 수신자의 버퍼가 넘치지 않게 하며 TCP의 수신 윈도우 rwnd를 활용한다. 혼잡 제어는 네트워크 과부하를 완화하며 혼잡 윈도우 cwnd 등을 사용한다. UDP 자체는 TCP식 흐름 제어·혼잡 제어·재전송을 제공하지 않으므로 필요하면 응용이나 상위 프로토콜이 이를 구현한다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13-14쪽"
    },
    {
      "id": "nsm-094",
      "week": 3,
      "type": "essay",
      "prompt": "RIP·OSPF·BGP를 알고리즘 계열, 주요 사용 범위, 경로 선택 기준으로 비교하세요.",
      "model": "RIP는 AS 내부의 IGP이며 거리 벡터 계열로 홉 수를 비용으로 사용하고 유효 최대 15홉, 16은 도달 불가이다. OSPF는 AS 내부의 링크 상태 IGP로 LSDB와 Dijkstra 계산을 통해 링크 비용 합을 기준으로 경로를 계산한다. BGP는 경로 벡터 계열로 AS 간 경로 교환에 널리 쓰이며 AS_PATH 등 속성과 정책으로 선택한다. BGP가 항상 AS 수가 가장 적은 경로만 고르는 것은 아니다.",
      "rubric": [
        "RIP: DV·IGP·홉 수",
        "RIP 15/16 구분",
        "OSPF: LS·IGP·비용",
        "BGP: PV·AS 간·속성/정책"
      ],
      "explanation": "RIP는 AS 내부의 IGP이며 거리 벡터 계열로 홉 수를 비용으로 사용하고 유효 최대 15홉, 16은 도달 불가이다. OSPF는 AS 내부의 링크 상태 IGP로 LSDB와 Dijkstra 계산을 통해 링크 비용 합을 기준으로 경로를 계산한다. BGP는 경로 벡터 계열로 AS 간 경로 교환에 널리 쓰이며 AS_PATH 등 속성과 정책으로 선택한다. BGP가 항상 AS 수가 가장 적은 경로만 고르는 것은 아니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16-18쪽"
    },
    {
      "id": "nsm-095",
      "week": 3,
      "type": "essay",
      "prompt": "RIPv1과 RIPv2의 마스크·업데이트 방식 차이를 설명하고, RIPv2의 홉 제한 및 EIGRP 분류에 관한 오해를 바로잡으세요.",
      "model": "RIPv1은 클래스 기반이며 업데이트에 서브넷 마스크를 싣지 않고 브로드캐스트를 사용한다. RIPv2는 서브넷 마스크를 포함해 CIDR·VLSM을 지원하며 주로 224.0.0.9 멀티캐스트를 쓴다. 두 버전 모두 유효 최대 15홉이고 16은 도달 불가이다. EIGRP는 순수 링크 상태가 아니라 DUAL을 쓰는 고급 거리 벡터 계열이다.",
      "rubric": [
        "RIPv1 마스크 미포함·브로드캐스트",
        "RIPv2 마스크 포함·멀티캐스트",
        "15 유효·16 도달 불가",
        "EIGRP 고급 DV·DUAL"
      ],
      "explanation": "RIPv1은 클래스 기반이며 업데이트에 서브넷 마스크를 싣지 않고 브로드캐스트를 사용한다. RIPv2는 서브넷 마스크를 포함해 CIDR·VLSM을 지원하며 주로 224.0.0.9 멀티캐스트를 쓴다. 두 버전 모두 유효 최대 15홉이고 16은 도달 불가이다. EIGRP는 순수 링크 상태가 아니라 DUAL을 쓰는 고급 거리 벡터 계열이다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 17쪽"
    },
    {
      "id": "nsm-096",
      "week": 3,
      "type": "essay",
      "prompt": "Cisco IOS 계열에서 사용자 EXEC → 특권 EXEC → 전역 설정 모드의 표시와 진입 명령을 쓰고, 설정 저장 명령과 enable secret의 의미를 설명하세요.",
      "model": "사용자 EXEC는 Router>이며 enable로 특권 EXEC Router#에 진입한다. configure terminal로 전역 설정 Router(config)#에 들어간다. copy running-config startup-config로 현재 설정을 시작 설정에 저장한다. enable secret은 특권 모드 접근 암호를 해시 형태로 보호하는 대표 설정이며 복호화 가능한 암호화와 구별한다. 저장 형식과 강도는 플랫폼·버전·설정에 따라 다르다.",
      "rubric": [
        "Router> → enable → Router#",
        "configure terminal → Router(config)#",
        "copy running-config startup-config",
        "secret은 해시·버전별 차이"
      ],
      "explanation": "사용자 EXEC는 Router>이며 enable로 특권 EXEC Router#에 진입한다. configure terminal로 전역 설정 Router(config)#에 들어간다. copy running-config startup-config로 현재 설정을 시작 설정에 저장한다. enable secret은 특권 모드 접근 암호를 해시 형태로 보호하는 대표 설정이며 복호화 가능한 암호화와 구별한다. 저장 형식과 강도는 플랫폼·버전·설정에 따라 다르다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 19쪽"
    },
    {
      "id": "nsm-097",
      "week": 4,
      "type": "essay",
      "prompt": "한 VLAN에서 스위치 포트 1로 A→B 프레임이 들어오고 B는 미등록이다. 이후 B의 응답이 포트 3으로 들어왔다. 학습과 전달 과정을 설명하세요.",
      "model": "처음 A→B가 포트 1로 들어오면 출발지 MAC A를 포트 1에 학습한다. B의 위치를 모르므로 같은 VLAN의 수신 포트 외 대상 포트로 플러딩한다. B의 응답이 포트 3으로 들어오면 B를 포트 3에 학습하고 이미 학습된 A의 포트 1로 전달한다. 이후 A→B는 목적지 B의 테이블 항목을 따라 포트 3으로 전달한다.",
      "rubric": [
        "A→1 학습",
        "미등록 B는 같은 VLAN 플러딩",
        "B→3 학습",
        "응답은 1, 이후 A→B는 3"
      ],
      "explanation": "처음 A→B가 포트 1로 들어오면 출발지 MAC A를 포트 1에 학습한다. B의 위치를 모르므로 같은 VLAN의 수신 포트 외 대상 포트로 플러딩한다. B의 응답이 포트 3으로 들어오면 B를 포트 3에 학습하고 이미 학습된 A의 포트 1로 전달한다. 이후 A→B는 목적지 B의 테이블 항목을 따라 포트 3으로 전달한다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21쪽"
    },
    {
      "id": "nsm-098",
      "week": 4,
      "type": "essay",
      "prompt": "Store-and-Forward·Cut-Through·Fragment-Free를 전달 시작 시점과 오류 검출 관점으로 비교하세요.",
      "model": "Store-and-Forward는 전체 프레임 수신 후 FCS를 검사하여 손상 프레임을 폐기할 수 있지만 수신 대기에 따른 지연이 있다. Cut-Through는 목적지 정보 등 필요한 앞부분 확인 후 전체 수신 전에 전달하여 지연을 줄이나 전체 FCS 검사 전 손상 프레임이 나갈 수 있다. Fragment-Free는 앞 64바이트를 기다려 짧은 충돌 조각 전파를 줄이며 전체 프레임 FCS 검사를 보장하지 않는다. 이 방식들이 종단 TCP 재전송을 직접 보장하는 것은 아니다.",
      "rubric": [
        "전체 수신·FCS 검사",
        "앞부분 확인 후 조기 전달",
        "64바이트 대기",
        "오류 검출 범위와 재전송 구별"
      ],
      "explanation": "Store-and-Forward는 전체 프레임 수신 후 FCS를 검사하여 손상 프레임을 폐기할 수 있지만 수신 대기에 따른 지연이 있다. Cut-Through는 목적지 정보 등 필요한 앞부분 확인 후 전체 수신 전에 전달하여 지연을 줄이나 전체 FCS 검사 전 손상 프레임이 나갈 수 있다. Fragment-Free는 앞 64바이트를 기다려 짧은 충돌 조각 전파를 줄이며 전체 프레임 FCS 검사를 보장하지 않는다. 이 방식들이 종단 TCP 재전송을 직접 보장하는 것은 아니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21쪽"
    },
    {
      "id": "nsm-099",
      "week": 4,
      "type": "essay",
      "prompt": "허브, 한 VLAN의 L2 스위치, 여러 VLAN의 L2 스위치를 충돌 도메인과 브로드캐스트 도메인 관점으로 비교하세요.",
      "model": "허브 기반 공유 Ethernet은 연결 장비 전체가 하나의 충돌 도메인과 하나의 브로드캐스트 도메인을 이룬다. L2 스위치는 일반적인 학습 모델에서 포트별로 충돌 범위를 분리하고 한 VLAN 구성의 브로드캐스트 도메인은 하나이다. 여러 VLAN을 구성하면 브로드캐스트 도메인은 VLAN별로 나뉜다. 전이중 스위치 링크에서는 정상 동작 중 충돌이 발생하지 않는다는 점도 구분한다.",
      "rubric": [
        "허브 전체 공유",
        "스위치 포트별 충돌 범위",
        "한 VLAN은 브로드캐스트 도메인 하나",
        "여러 VLAN별 분리",
        "전이중 충돌 없음"
      ],
      "explanation": "허브 기반 공유 Ethernet은 연결 장비 전체가 하나의 충돌 도메인과 하나의 브로드캐스트 도메인을 이룬다. L2 스위치는 일반적인 학습 모델에서 포트별로 충돌 범위를 분리하고 한 VLAN 구성의 브로드캐스트 도메인은 하나이다. 여러 VLAN을 구성하면 브로드캐스트 도메인은 VLAN별로 나뉜다. 전이중 스위치 링크에서는 정상 동작 중 충돌이 발생하지 않는다는 점도 구분한다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20, 22쪽"
    },
    {
      "id": "nsm-100",
      "week": 4,
      "type": "essay",
      "prompt": "같은 물리 스위치의 VLAN 10과 VLAN 20 단말이 통신하려 한다. 필요한 기능과 접근 정책, Access·Trunk의 역할 및 VLAN의 보안 한계를 설명하세요.",
      "model": "VLAN 10과 VLAN 20은 별개의 L2 브로드캐스트 도메인이므로 라우터나 L3 스위치의 Inter-VLAN Routing이 필요하다. Access 포트는 통상 한 VLAN의 단말을 연결하고 Trunk는 802.1Q 태그 등으로 여러 VLAN을 한 링크에 운반한다. VLAN 간 접근 허용·차단은 ACL·방화벽 정책으로 별도 설계한다. VLAN 분리만으로 통신이 암호화되거나 완전한 접근 통제가 자동 보장되지는 않는다.",
      "rubric": [
        "별개 L2 영역과 L3 라우팅 필요",
        "Access 단말·Trunk 다중 VLAN",
        "ACL·방화벽 정책",
        "자동 암호화·완전 통제 아님"
      ],
      "explanation": "VLAN 10과 VLAN 20은 별개의 L2 브로드캐스트 도메인이므로 라우터나 L3 스위치의 Inter-VLAN Routing이 필요하다. Access 포트는 통상 한 VLAN의 단말을 연결하고 Trunk는 802.1Q 태그 등으로 여러 VLAN을 한 링크에 운반한다. VLAN 간 접근 허용·차단은 ACL·방화벽 정책으로 별도 설계한다. VLAN 분리만으로 통신이 암호화되거나 완전한 접근 통제가 자동 보장되지는 않는다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22쪽"
    },
    {
      "id": "nsm-101",
      "week": 1,
      "type": "blanks",
      "prompt": "OSI 7계층을 1계층부터 7계층까지 순서대로 쓰세요. 각 칸에는 한글 이름만 쓰고 “계층”은 빼세요. 데이터링크는 붙여 쓰세요.",
      "fields": [
        "1계층",
        "2계층",
        "3계층",
        "4계층",
        "5계층",
        "6계층",
        "7계층"
      ],
      "answers": [
        "물리",
        "데이터링크",
        "네트워크",
        "전송",
        "세션",
        "표현",
        "응용"
      ],
      "explanation": "아래에서 위로 물리 → 데이터링크 → 네트워크 → 전송 → 세션 → 표현 → 응용입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-102",
      "week": 1,
      "type": "short",
      "prompt": "OSI 1계층의 이름은 무엇인가요?",
      "answers": [
        "물리",
        "물리 계층",
        "물리계층"
      ],
      "explanation": "1계층은 물리 계층으로 비트를 전기·광·무선 신호로 전달합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-103",
      "week": 1,
      "type": "short",
      "prompt": "OSI 2계층의 이름은 무엇인가요?",
      "answers": [
        "데이터링크",
        "데이터 링크",
        "데이터링크 계층",
        "데이터 링크 계층",
        "데이터링크계층"
      ],
      "explanation": "2계층은 데이터링크 계층으로 같은 링크에서 프레임을 전달합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-104",
      "week": 1,
      "type": "short",
      "prompt": "OSI 3계층의 이름은 무엇인가요?",
      "answers": [
        "네트워크",
        "네트워크 계층",
        "네트워크계층"
      ],
      "explanation": "3계층은 네트워크 계층으로 경로 결정과 IP 패킷 전달을 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-105",
      "week": 1,
      "type": "short",
      "prompt": "OSI 4계층의 이름은 무엇인가요?",
      "answers": [
        "전송",
        "전송 계층",
        "전송계층"
      ],
      "explanation": "4계층은 전송 계층으로 프로세스 간 통신을 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-106",
      "week": 1,
      "type": "short",
      "prompt": "OSI 5계층의 이름은 무엇인가요?",
      "answers": [
        "세션",
        "세션 계층",
        "세션계층"
      ],
      "explanation": "5계층은 세션 계층으로 대화의 설정·유지·종료를 관리합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-107",
      "week": 1,
      "type": "short",
      "prompt": "OSI 6계층의 이름은 무엇인가요?",
      "answers": [
        "표현",
        "표현 계층",
        "표현계층"
      ],
      "explanation": "6계층은 표현 계층으로 표현 형식 변환·암호화·압축을 다룹니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-108",
      "week": 1,
      "type": "short",
      "prompt": "OSI 7계층의 이름은 무엇인가요?",
      "answers": [
        "응용",
        "응용 계층",
        "응용계층"
      ],
      "explanation": "7계층은 응용 계층으로 사용자와 응용 프로그램에 네트워크 서비스를 제공합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-109",
      "week": 1,
      "type": "short",
      "prompt": "OSI 데이터링크 계층의 대표 데이터 전달 단위는 무엇인가요?",
      "answers": [
        "프레임",
        "frame",
        "Frame"
      ],
      "explanation": "물리 계층은 비트, 데이터링크 계층은 프레임을 대표 단위로 봅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 5 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-110",
      "week": 1,
      "type": "short",
      "prompt": "OSI 네트워크 계층에서 IP 데이터를 전달하는 단위를 무엇이라고 하나요?",
      "answers": [
        "패킷",
        "IP 패킷",
        "packet",
        "Packet"
      ],
      "explanation": "IP 패킷은 네트워크 계층의 전달 단위입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 5 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-111",
      "week": 1,
      "type": "short",
      "prompt": "여러 응용의 데이터를 하위 계층에서 모아 전송하는 과정을 무엇이라고 하나요?",
      "answers": [
        "다중화",
        "multiplexing",
        "Multiplexing"
      ],
      "explanation": "여러 응용 데이터를 모으는 것은 다중화, 받은 데이터를 각 응용으로 나누는 것은 역다중화입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-112",
      "week": 1,
      "type": "short",
      "prompt": "수신 측이 하위 계층부터 헤더 등의 제어 정보를 해석·제거하는 과정을 무엇이라고 하나요?",
      "answers": [
        "역캡슐화",
        "decapsulation",
        "Decapsulation"
      ],
      "explanation": "송신할 때 제어 정보를 붙이는 캡슐화의 반대 과정이 역캡슐화입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-113",
      "week": 2,
      "type": "short",
      "prompt": "같은 IPv4 링크에서 IP 주소에 대응하는 MAC 주소를 알아내는 프로토콜은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "ARP",
        "arp"
      ],
      "explanation": "ARP는 IPv4 주소 → MAC 주소 방향의 주소 해석입니다. 원격 목적지로 보낼 때는 같은 링크의 다음 홉 MAC을 조회합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-114",
      "week": 2,
      "type": "short",
      "prompt": "MAC 주소를 바탕으로 IPv4 주소를 알아내던 과거의 주소 설정 프로토콜은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "RARP",
        "rarp"
      ],
      "explanation": "RARP는 MAC 주소 → IPv4 주소 방향입니다. 과거 주소 설정 방식이며 현재는 DHCP 등이 대체했습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-115",
      "week": 2,
      "type": "short",
      "prompt": "자신의 IP 주소를 알리거나 IP 충돌 탐지 보조에 사용하는 ARP 유형은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "GARP",
        "garp"
      ],
      "explanation": "GARP는 자신의 IP를 대상으로 알림·질의를 보내며 캐시 갱신과 충돌 탐지 보조에 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-116",
      "week": 2,
      "type": "short",
      "prompt": "일반적인 Ethernet ARP 요청은 유니캐스트와 브로드캐스트 중 어느 방식으로 전송하나요?",
      "answers": [
        "브로드캐스트",
        "broadcast",
        "Broadcast"
      ],
      "explanation": "아직 대상 MAC을 모르므로 로컬 링크에 브로드캐스트로 요청합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-117",
      "week": 2,
      "type": "short",
      "prompt": "일반적인 ARP 응답은 보통 유니캐스트와 브로드캐스트 중 어느 방식으로 전송하나요?",
      "answers": [
        "유니캐스트",
        "unicast",
        "Unicast"
      ],
      "explanation": "ARP 응답은 보통 요청한 장비를 대상으로 유니캐스트로 전송합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 10 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-118",
      "week": 2,
      "type": "short",
      "prompt": "ping이 Echo Request와 Echo Reply에 사용하는 제어 프로토콜은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "ICMP",
        "icmp"
      ],
      "explanation": "ping은 ICMP Echo 요청·응답으로 도달성과 왕복 시간을 살핍니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 11 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-119",
      "week": 2,
      "type": "short",
      "prompt": "IPv4 주소는 몇 비트인가요? 숫자만 쓰세요.",
      "answers": [
        "32"
      ],
      "explanation": "IPv4는 8비트 옥텟 네 개, 총 32비트 주소를 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 6 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-120",
      "week": 2,
      "type": "short",
      "prompt": "IPv6 주소는 몇 비트인가요? 숫자만 쓰세요.",
      "answers": [
        "128"
      ],
      "explanation": "IPv6는 128비트 주소를 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 12 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-121",
      "week": 2,
      "type": "short",
      "prompt": "TCP/UDP 포트 번호는 몇 비트인가요? 숫자만 쓰세요.",
      "answers": [
        "16"
      ],
      "explanation": "포트 번호는 16비트이며 값의 범위는 0~65535입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4, 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-122",
      "week": 2,
      "type": "short",
      "prompt": "TCP와 UDP 중 연결 지향 프로토콜은 무엇인가요?",
      "answers": [
        "TCP",
        "tcp"
      ],
      "explanation": "TCP는 데이터를 주고받기 전에 연결을 설정하는 연결 지향 프로토콜입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-123",
      "week": 2,
      "type": "short",
      "prompt": "TCP와 UDP 중 비연결형 데이터그램 프로토콜은 무엇인가요?",
      "answers": [
        "UDP",
        "udp"
      ],
      "explanation": "UDP는 연결 설정 없이 데이터그램을 보내며 자체 전달·순서 보장을 제공하지 않습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-124",
      "week": 2,
      "type": "short",
      "prompt": "도메인 이름과 IP 주소 등의 레코드를 조회하는 응용 프로토콜은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "DNS",
        "dns"
      ],
      "explanation": "DNS는 도메인 이름과 IP 등 레코드를 조회하며 대표 포트는 UDP/TCP 53입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-125",
      "week": 2,
      "type": "short",
      "prompt": "파일 전송에 사용하는 응용 프로토콜로, TCP 21을 제어 연결에 쓰는 것은 무엇인가요?",
      "answers": [
        "FTP",
        "ftp"
      ],
      "explanation": "FTP는 파일 전송 프로토콜이며 제어 연결에 TCP 21을 사용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-126",
      "week": 2,
      "type": "short",
      "prompt": "웹의 요청·응답에 사용하는 대표 응용 프로토콜은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "HTTP",
        "http"
      ],
      "explanation": "HTTP는 웹 요청·응답 프로토콜입니다. 자료는 전통적 HTTP의 TCP 80과 HTTP/3의 QUIC/UDP 기반을 구분합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-127",
      "week": 2,
      "type": "short",
      "prompt": "같은 주소를 가진 여러 노드 중 라우팅 관점에서 가까운 한 노드로 전달하는 IPv6 주소 유형은 무엇인가요?",
      "answers": [
        "애니캐스트",
        "anycast",
        "Anycast"
      ],
      "explanation": "애니캐스트는 같은 주소를 가진 노드들 가운데 라우팅 관점에서 가까운 노드로 전달합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 12 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-128",
      "week": 2,
      "type": "short",
      "prompt": "특정 그룹에 참여한 수신자들에게 데이터를 전달하는 방식을 무엇이라고 하나요?",
      "answers": [
        "멀티캐스트",
        "multicast",
        "Multicast"
      ],
      "explanation": "멀티캐스트는 특정 그룹으로 전달합니다. 한 수신자는 유니캐스트, 영역 내 전체는 브로드캐스트입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 11 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-129",
      "week": 3,
      "type": "short",
      "prompt": "RIP가 경로 비용으로 사용하는 것은 무엇인가요? 한글 또는 영문으로 쓰세요.",
      "answers": [
        "홉 수",
        "홉수",
        "홉",
        "hop count",
        "Hop Count",
        "Hop count",
        "HOP COUNT",
        "hopcount",
        "HopCount",
        "hop",
        "Hop",
        "HOP",
        "hops",
        "Hops",
        "HOPS"
      ],
      "explanation": "RIP는 목적지까지 거치는 홉 수(hop count)를 비용으로 사용합니다. “홉”, “hop”, “hops”도 정답으로 인정합니다. 영문 철자는 hop이며 hope(희망)와 구별하세요.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 17 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-130",
      "week": 3,
      "type": "short",
      "prompt": "링크 상태 정보를 바탕으로 Dijkstra 계산을 수행하는 대표 IGP는 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "OSPF",
        "ospf"
      ],
      "explanation": "OSPF는 링크 상태 데이터베이스를 바탕으로 최단 경로를 계산하는 AS 내부 라우팅 프로토콜입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 18 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-131",
      "week": 3,
      "type": "short",
      "prompt": "인터넷의 자율시스템(AS) 사이에서 경로를 교환하는 대표 프로토콜은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "BGP",
        "bgp"
      ],
      "explanation": "BGP는 AS 간 경로 교환에 널리 쓰이며 경로 속성과 정책을 이용합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 18 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-132",
      "week": 3,
      "type": "short",
      "prompt": "관리자가 경로를 직접 설정하는 방식은 정적 라우팅과 동적 라우팅 중 무엇인가요?",
      "answers": [
        "정적 라우팅",
        "정적라우팅",
        "정적"
      ],
      "explanation": "정적 라우팅은 관리자가 직접 경로를 설정하므로 변화에 맞춰 직접 수정해야 합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-133",
      "week": 3,
      "type": "short",
      "prompt": "라우팅 프로토콜로 경로 정보를 교환·갱신하는 방식은 정적 라우팅과 동적 라우팅 중 무엇인가요?",
      "answers": [
        "동적 라우팅",
        "동적라우팅",
        "동적"
      ],
      "explanation": "동적 라우팅은 라우팅 프로토콜로 정보를 교환하여 네트워크 변화에 대응합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 16 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-134",
      "week": 3,
      "type": "short",
      "prompt": "Cisco IOS 계열에서 Router# 상태를 나타내는 EXEC 모드의 이름은 무엇인가요?",
      "answers": [
        "특권 EXEC",
        "특권 EXEC 모드",
        "특권 모드",
        "특권모드",
        "Privileged EXEC",
        "privileged exec"
      ],
      "explanation": "Router>는 사용자 EXEC, Router#는 특권 EXEC입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 19 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-135",
      "week": 4,
      "type": "short",
      "prompt": "약해진 신호를 재생해 전달하는 OSI 1계층 장비는 무엇인가요? 다중 포트 허브가 아닌 단일 기능 장비 이름을 쓰세요.",
      "answers": [
        "리피터",
        "repeater",
        "Repeater"
      ],
      "explanation": "리피터는 약해진 신호를 재생해 전달하며 목적지 주소로 선택 전달하지 않습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-136",
      "week": 4,
      "type": "short",
      "prompt": "IP 주소를 보고 서로 다른 네트워크 사이로 패킷을 전달하는 대표 장비는 무엇인가요? 스위치가 아닌 장비 이름을 쓰세요.",
      "answers": [
        "라우터",
        "router",
        "Router"
      ],
      "explanation": "라우터는 네트워크 계층에서 IP 주소와 전달 테이블을 이용해 패킷을 보냅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-137",
      "week": 4,
      "type": "short",
      "prompt": "호스트에 장착되어 MAC 주소를 사용하고 네트워크 매체와 연결하는 장치를 무엇이라고 하나요? 한글 이름 또는 영문 약어로 쓰세요.",
      "answers": [
        "NIC",
        "nic",
        "랜카드",
        "랜 카드",
        "네트워크 인터페이스 카드",
        "네트워크 카드"
      ],
      "explanation": "NIC 또는 랜카드는 호스트의 데이터를 매체 전송 규격으로 처리합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-138",
      "week": 4,
      "type": "short",
      "prompt": "물리적 위치와 별개로 LAN을 논리 그룹으로 나누고 브로드캐스트 도메인을 분리하는 기술은 무엇인가요? 약어로 쓰세요.",
      "answers": [
        "VLAN",
        "vlan"
      ],
      "explanation": "VLAN은 L2에서 논리적 LAN과 브로드캐스트 영역을 나눕니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 22 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-139",
      "week": 4,
      "type": "short",
      "prompt": "L2 스위치가 전달 포트를 찾기 위해 조회하는 주소는 IP 주소와 MAC 주소 중 무엇인가요?",
      "answers": [
        "MAC",
        "MAC 주소",
        "MAC주소",
        "mac",
        "mac 주소"
      ],
      "explanation": "일반적인 L2 스위치는 MAC 테이블에서 목적지 MAC 주소의 포트를 찾습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 20-21 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-140",
      "week": 4,
      "type": "short",
      "prompt": "스위치가 일정 시간 사용하지 않은 동적 MAC 테이블 항목을 삭제하는 과정을 무엇이라고 하나요?",
      "answers": [
        "에이징",
        "만료",
        "Aging",
        "aging"
      ],
      "explanation": "에이징은 사용하지 않은 동적 MAC 항목을 만료시켜 장비 이동이나 변화에 대응하게 합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 21 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-141",
      "week": 1,
      "type": "choice",
      "prompt": "프로토콜에서 데이터의 구조·형식·표현 순서를 정하는 요소는?",
      "options": [
        {
          "id": "a",
          "text": "구문(Syntax)",
          "explanation": "구문은 데이터의 모양과 배치 규칙을 정합니다. 의미는 해석과 동작, 타이밍은 전송 시점과 속도입니다."
        },
        {
          "id": "b",
          "text": "의미(Semantics)",
          "explanation": "의미는 필드의 뜻과 동작을 정합니다. 데이터 구조·형식은 구문입니다."
        },
        {
          "id": "c",
          "text": "타이밍(Timing)",
          "explanation": "타이밍은 전송 시점과 속도를 정합니다. 비트 배치나 형식은 구문입니다."
        },
        {
          "id": "d",
          "text": "토폴로지(Topology)",
          "explanation": "토폴로지는 네트워크의 연결 형태입니다. 프로토콜의 데이터 형식 요소는 구문입니다."
        }
      ],
      "answer": "a",
      "explanation": "구문은 데이터의 모양과 배치 규칙을 정합니다. 의미는 해석과 동작, 타이밍은 전송 시점과 속도입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-142",
      "week": 1,
      "type": "choice",
      "prompt": "프로토콜에서 “이 필드가 무엇을 뜻하며 어떤 동작을 해야 하는가?”를 정하는 요소는?",
      "options": [
        {
          "id": "a",
          "text": "구문",
          "explanation": "구문은 구조와 형식을 정합니다. 필드의 뜻과 동작은 의미가 담당합니다."
        },
        {
          "id": "b",
          "text": "의미",
          "explanation": "의미(Semantics)는 각 필드의 뜻과 그에 따른 동작을 정합니다."
        },
        {
          "id": "c",
          "text": "타이밍",
          "explanation": "타이밍은 언제 얼마나 빠르게 전송하는가입니다. 필드 해석과 동작을 뜻하지 않습니다."
        },
        {
          "id": "d",
          "text": "전송 매체",
          "explanation": "전송 매체는 신호가 이동하는 물리적 통로입니다. 필드의 뜻을 정하는 요소는 의미입니다."
        }
      ],
      "answer": "b",
      "explanation": "의미(Semantics)는 각 필드의 뜻과 그에 따른 동작을 정합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-143",
      "week": 1,
      "type": "choice",
      "prompt": "DTE와 DCE 사이의 장치 접속 표준에 해당하는 것은?",
      "options": [
        {
          "id": "a",
          "text": "SNA",
          "explanation": "SNA는 IBM의 통신망 구조입니다. DTE-DCE 장치 접속 표준은 RS-232C입니다."
        },
        {
          "id": "b",
          "text": "SDLC",
          "explanation": "SDLC는 SNA를 위한 데이터링크 프로토콜입니다. 장치 접속 표준과 다릅니다."
        },
        {
          "id": "c",
          "text": "RS-232C",
          "explanation": "RS-232C는 DTE와 DCE의 접속 표준입니다. SNA는 통신망 구조이고 SDLC는 링크 프로토콜입니다."
        },
        {
          "id": "d",
          "text": "OSI",
          "explanation": "OSI는 통신 기능을 7계층으로 설명하는 참조 모델입니다. DTE-DCE 접속 표준은 아닙니다."
        }
      ],
      "answer": "c",
      "explanation": "RS-232C는 DTE와 DCE의 접속 표준입니다. SNA는 통신망 구조이고 SDLC는 링크 프로토콜입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-144",
      "week": 1,
      "type": "choice",
      "prompt": "IBM의 독자적인 통신망 구조를 가리키는 것은?",
      "options": [
        {
          "id": "a",
          "text": "V.21",
          "explanation": "V.21은 모뎀 변조 방식 표준입니다. IBM의 통신망 구조는 SNA입니다."
        },
        {
          "id": "b",
          "text": "RS-232C",
          "explanation": "RS-232C는 장치 접속 표준입니다. 통신망 전체의 구조를 뜻하지 않습니다."
        },
        {
          "id": "c",
          "text": "SDLC",
          "explanation": "SDLC는 SNA를 위한 링크 프로토콜입니다. 망 구조 자체의 이름은 SNA입니다."
        },
        {
          "id": "d",
          "text": "SNA",
          "explanation": "SNA는 IBM의 통신망 구조입니다. 이를 위한 데이터링크 프로토콜로 SDLC가 소개됩니다."
        }
      ],
      "answer": "d",
      "explanation": "SNA는 IBM의 통신망 구조입니다. 이를 위한 데이터링크 프로토콜로 SDLC가 소개됩니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-145",
      "week": 1,
      "type": "choice",
      "prompt": "단말이 이웃 단말과 연결되어 고리 모양을 이루는 토폴로지는?",
      "options": [
        {
          "id": "a",
          "text": "링형",
          "explanation": "링형은 고리 구조이며 단일 링은 연결 단절에 취약합니다."
        },
        {
          "id": "b",
          "text": "스타형",
          "explanation": "스타형은 중앙 장비에 단말이 모이는 구조입니다. 이웃끼리 고리를 만드는 것은 링형입니다."
        },
        {
          "id": "c",
          "text": "버스형",
          "explanation": "버스형은 공유 선로에 단말이 연결됩니다. 고리 모양의 연결과 다릅니다."
        },
        {
          "id": "d",
          "text": "메시형",
          "explanation": "메시형은 여러 경로로 상호 연결하는 구조입니다. 단일 고리 구조는 링형입니다."
        }
      ],
      "answer": "a",
      "explanation": "링형은 고리 구조이며 단일 링은 연결 단절에 취약합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-146",
      "week": 1,
      "type": "choice",
      "prompt": "여러 단말이 하나의 공유 선로에 연결되는 토폴로지는?",
      "options": [
        {
          "id": "a",
          "text": "메시형",
          "explanation": "메시형은 여러 경로로 상호 연결합니다. 하나의 공유 선로를 쓰는 버스형과 다릅니다."
        },
        {
          "id": "b",
          "text": "버스형",
          "explanation": "버스형은 공유 선로에 단말을 연결하므로 주 선로의 문제가 전체 통신에 영향을 줄 수 있습니다."
        },
        {
          "id": "c",
          "text": "링형",
          "explanation": "링형은 이웃 단말을 고리로 연결합니다. 공유 선로 구조는 아닙니다."
        },
        {
          "id": "d",
          "text": "스타형",
          "explanation": "스타형은 중앙 허브·스위치에 단말을 연결합니다. 공유 선로는 버스형의 특징입니다."
        }
      ],
      "answer": "b",
      "explanation": "버스형은 공유 선로에 단말을 연결하므로 주 선로의 문제가 전체 통신에 영향을 줄 수 있습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-147",
      "week": 1,
      "type": "choice",
      "prompt": "여러 경로로 상호 연결해 우회 경로 확보에 유리하지만 연결 비용이 커질 수 있는 토폴로지는?",
      "options": [
        {
          "id": "a",
          "text": "버스형",
          "explanation": "버스형은 공유 선로를 사용하므로 주 선로 문제에 영향을 받습니다. 여러 우회 경로가 핵심인 구조는 메시형입니다."
        },
        {
          "id": "b",
          "text": "링형",
          "explanation": "단일 링형은 연결 단절에 취약합니다. 여러 경로로 상호 연결하는 구조는 메시형입니다."
        },
        {
          "id": "c",
          "text": "메시형",
          "explanation": "메시형은 여러 경로로 연결해 우회에 유리하지만 연결 수와 비용이 증가할 수 있습니다."
        },
        {
          "id": "d",
          "text": "스타형",
          "explanation": "스타형은 중앙 장비에 의존합니다. 여러 경로를 확보하는 메시형과 구분합니다."
        }
      ],
      "answer": "c",
      "explanation": "메시형은 여러 경로로 연결해 우회에 유리하지만 연결 수와 비용이 증가할 수 있습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 2 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-148",
      "week": 1,
      "type": "choice",
      "prompt": "OSI 계층을 낮은 계층부터 높은 계층으로 올바르게 나열한 것은?",
      "options": [
        {
          "id": "a",
          "text": "응용 → 표현 → 세션 → 전송 → 네트워크 → 데이터링크 → 물리",
          "explanation": "이 순서는 OSI 7계층에서 1계층으로 내려가는 역순입니다. 문제는 낮은 계층부터의 순서를 묻습니다."
        },
        {
          "id": "b",
          "text": "물리 → 네트워크 → 데이터링크 → 전송 → 세션 → 표현 → 응용",
          "explanation": "데이터링크와 네트워크의 위치가 바뀌었습니다. 물리 다음은 데이터링크, 그다음이 네트워크입니다."
        },
        {
          "id": "c",
          "text": "물리 → 데이터링크 → 전송 → 네트워크 → 표현 → 세션 → 응용",
          "explanation": "네트워크와 전송, 세션과 표현의 위치가 뒤바뀌었습니다. 네트워크→전송→세션→표현 순서입니다."
        },
        {
          "id": "d",
          "text": "물리 → 데이터링크 → 네트워크 → 전송 → 세션 → 표현 → 응용",
          "explanation": "OSI 1~7계층의 순서는 물리, 데이터링크, 네트워크, 전송, 세션, 표현, 응용입니다."
        }
      ],
      "answer": "d",
      "explanation": "OSI 1~7계층의 순서는 물리, 데이터링크, 네트워크, 전송, 세션, 표현, 응용입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-149",
      "week": 1,
      "type": "choice",
      "prompt": "비트를 전기·광·무선 신호로 전달하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "물리 계층",
          "explanation": "물리 계층은 매체를 통해 비트를 신호로 전달하는 1계층입니다."
        },
        {
          "id": "b",
          "text": "응용 계층",
          "explanation": "응용 계층은 OSI 7계층으로 네트워크 서비스를 제공합니다. 신호 전달은 물리 계층입니다."
        },
        {
          "id": "c",
          "text": "세션 계층",
          "explanation": "세션 계층은 OSI 5계층으로 대화를 관리합니다. 실제 신호 전달을 맡지 않습니다."
        },
        {
          "id": "d",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 형식 변환·암호화·압축을 다룹니다."
        }
      ],
      "answer": "a",
      "explanation": "물리 계층은 매체를 통해 비트를 신호로 전달하는 1계층입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-150",
      "week": 1,
      "type": "choice",
      "prompt": "직접 연결된 노드 사이에서 프레임을 전달하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 OSI 3계층입니다. 프레임의 같은 링크 전달이 아니라 IP 패킷의 경로 결정과 네트워크 간 전달을 담당합니다."
        },
        {
          "id": "b",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 같은 링크의 노드 사이에서 프레임 전달과 오류 검출 등을 수행합니다."
        },
        {
          "id": "c",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층이며 형식 변환·암호화·압축을 다룹니다. 프레임 전달 계층은 아닙니다."
        },
        {
          "id": "d",
          "text": "응용 계층",
          "explanation": "응용 계층은 OSI 7계층으로 사용자·응용 프로그램에 네트워크 서비스를 제공합니다."
        }
      ],
      "answer": "b",
      "explanation": "데이터링크 계층은 같은 링크의 노드 사이에서 프레임 전달과 오류 검출 등을 수행합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-151",
      "week": 1,
      "type": "choice",
      "prompt": "서로 다른 네트워크 사이의 경로 결정과 패킷 전달을 담당하는 계층은?",
      "options": [
        {
          "id": "a",
          "text": "세션 계층",
          "explanation": "세션 계층은 OSI 5계층으로 대화 설정·유지·종료를 관리합니다. IP 경로 결정은 네트워크 계층입니다."
        },
        {
          "id": "b",
          "text": "물리 계층",
          "explanation": "물리 계층은 OSI 1계층으로 비트를 신호로 전달합니다. 경로를 계산하지 않습니다."
        },
        {
          "id": "c",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 OSI 3계층이며 IP 주소와 경로 정보를 이용해 패킷을 전달합니다."
        },
        {
          "id": "d",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 데이터 형식 변환·암호화·압축을 담당합니다."
        }
      ],
      "answer": "c",
      "explanation": "네트워크 계층은 OSI 3계층이며 IP 주소와 경로 정보를 이용해 패킷을 전달합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-152",
      "week": 1,
      "type": "choice",
      "prompt": "종단 호스트의 프로세스 간 통신을 담당하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "물리 계층",
          "explanation": "물리 계층은 OSI 1계층으로 신호 전달을 담당합니다. 프로세스 통신 끝점을 구분하지 않습니다."
        },
        {
          "id": "b",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 같은 링크의 프레임 전달을 담당합니다. 프로세스 간 통신은 전송 계층입니다."
        },
        {
          "id": "c",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 형식 변환·암호화·압축을 담당합니다."
        },
        {
          "id": "d",
          "text": "전송 계층",
          "explanation": "전송 계층은 포트를 이용해 응용·프로세스 통신 끝점을 구분합니다."
        }
      ],
      "answer": "d",
      "explanation": "전송 계층은 포트를 이용해 응용·프로세스 통신 끝점을 구분합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-153",
      "week": 1,
      "type": "choice",
      "prompt": "대화의 설정·유지·종료와 동기화를 담당하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "세션 계층",
          "explanation": "세션 계층은 대화 관리와 동기화·복구 지점 관리를 담당합니다."
        },
        {
          "id": "b",
          "text": "물리 계층",
          "explanation": "물리 계층은 OSI 1계층으로 신호를 전달합니다. 대화 상태를 관리하지 않습니다."
        },
        {
          "id": "c",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 프레임 전달을 다룹니다. 대화 관리는 세션 계층입니다."
        },
        {
          "id": "d",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 OSI 3계층으로 경로 결정과 패킷 전달을 담당합니다."
        }
      ],
      "answer": "a",
      "explanation": "세션 계층은 대화 관리와 동기화·복구 지점 관리를 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-154",
      "week": 1,
      "type": "choice",
      "prompt": "문자 인코딩 같은 표현 형식 변환과 압축을 담당하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "전송 계층",
          "explanation": "전송 계층은 OSI 4계층으로 프로세스 간 통신을 담당합니다. 형식 변환과 압축은 표현 계층의 기능입니다."
        },
        {
          "id": "b",
          "text": "표현 계층",
          "explanation": "표현 계층은 데이터 형식 변환·암호화·복호화·압축을 다룹니다."
        },
        {
          "id": "c",
          "text": "물리 계층",
          "explanation": "물리 계층은 OSI 1계층으로 비트를 신호로 전달합니다. 문자 인코딩 변환을 담당하지 않습니다."
        },
        {
          "id": "d",
          "text": "세션 계층",
          "explanation": "세션 계층은 OSI 5계층으로 대화와 동기화를 관리합니다. 형식 변환은 표현 계층입니다."
        }
      ],
      "answer": "b",
      "explanation": "표현 계층은 데이터 형식 변환·암호화·복호화·압축을 다룹니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-155",
      "week": 1,
      "type": "choice",
      "prompt": "HTTP·FTP·DNS 같은 프로토콜이 속하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "전송 계층",
          "explanation": "전송 계층은 OSI 4계층이며 TCP·UDP가 대표적입니다. HTTP·FTP·DNS는 응용 계층 프로토콜입니다."
        },
        {
          "id": "b",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 프레임 전달을 다룹니다. 이 응용 서비스들의 계층과 다릅니다."
        },
        {
          "id": "c",
          "text": "응용 계층",
          "explanation": "이들은 사용자와 응용 프로그램에 네트워크 서비스를 제공하는 응용 계층 프로토콜입니다."
        },
        {
          "id": "d",
          "text": "물리 계층",
          "explanation": "물리 계층은 OSI 1계층으로 신호를 전달합니다. HTTP·FTP·DNS는 응용 계층입니다."
        }
      ],
      "answer": "c",
      "explanation": "이들은 사용자와 응용 프로그램에 네트워크 서비스를 제공하는 응용 계층 프로토콜입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-156",
      "week": 1,
      "type": "choice",
      "prompt": "TCP/IP 4계층 모델에서 OSI의 세션·표현·응용 계층을 묶어 대응시키는 계층은?",
      "options": [
        {
          "id": "a",
          "text": "인터넷 계층",
          "explanation": "TCP/IP 인터넷 계층은 OSI 네트워크 계층에 대응합니다. OSI 상위 세 계층은 응용 계층으로 묶습니다."
        },
        {
          "id": "b",
          "text": "전송 계층",
          "explanation": "TCP/IP 전송 계층은 OSI 전송 계층에 대응합니다. 세션·표현·응용을 통합하는 계층은 아닙니다."
        },
        {
          "id": "c",
          "text": "네트워크 인터페이스 계층",
          "explanation": "네트워크 인터페이스 계층은 OSI 물리·데이터링크에 대응합니다. 상위 세 계층과 구분합니다."
        },
        {
          "id": "d",
          "text": "응용 계층",
          "explanation": "TCP/IP 4계층의 응용 계층은 OSI 상위 세 계층의 기능에 대응합니다."
        }
      ],
      "answer": "d",
      "explanation": "TCP/IP 4계층의 응용 계층은 OSI 상위 세 계층의 기능에 대응합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-157",
      "week": 1,
      "type": "choice",
      "prompt": "한 호스트에서 통신하는 응용·프로세스의 끝점을 구분하는 대표 식별 정보는?",
      "options": [
        {
          "id": "a",
          "text": "TCP/UDP 포트 번호",
          "explanation": "TCP/UDP 포트는 응용 통신 끝점을 식별하며 물리적인 접속 포트와는 다릅니다."
        },
        {
          "id": "b",
          "text": "케이블 길이",
          "explanation": "케이블 길이는 물리적인 매체 특성입니다. 호스트의 응용 끝점을 구분하는 식별자는 포트 번호입니다."
        },
        {
          "id": "c",
          "text": "신호 전압",
          "explanation": "신호 전압은 물리 신호의 특성입니다. 응용 프로세스의 통신 식별자가 아닙니다."
        },
        {
          "id": "d",
          "text": "물리 스위치의 외형",
          "explanation": "스위치 외형은 응용 통신 끝점의 식별 정보가 아닙니다. TCP/UDP 포트 번호로 구분합니다."
        }
      ],
      "answer": "a",
      "explanation": "TCP/UDP 포트는 응용 통신 끝점을 식별하며 물리적인 접속 포트와는 다릅니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-158",
      "week": 1,
      "type": "choice",
      "prompt": "네트워크에서 송수신 인터페이스를 식별하는 논리 주소는?",
      "options": [
        {
          "id": "a",
          "text": "MAC 주소",
          "explanation": "MAC 주소는 데이터링크 계층에서 같은 링크의 수신 인터페이스를 식별합니다. 네트워크 계층 논리 주소는 IP입니다."
        },
        {
          "id": "b",
          "text": "IP 주소",
          "explanation": "IP는 네트워크 계층의 논리 주소입니다. MAC은 링크 수신자, 포트는 응용 통신 끝점과 관련됩니다."
        },
        {
          "id": "c",
          "text": "TCP 포트 번호",
          "explanation": "TCP 포트는 전송 계층의 응용 통신 끝점을 구분합니다. 송수신 네트워크 인터페이스의 논리 주소는 IP입니다."
        },
        {
          "id": "d",
          "text": "UDP 포트 번호",
          "explanation": "UDP 포트는 전송 계층의 응용 통신 끝점을 구분합니다. IP 주소와 역할이 다릅니다."
        }
      ],
      "answer": "b",
      "explanation": "IP는 네트워크 계층의 논리 주소입니다. MAC은 링크 수신자, 포트는 응용 통신 끝점과 관련됩니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-159",
      "week": 1,
      "type": "choice",
      "prompt": "같은 링크에서 다음 수신 인터페이스를 식별하는 대표 주소는?",
      "options": [
        {
          "id": "a",
          "text": "TCP 포트 번호",
          "explanation": "TCP 포트는 응용 통신 끝점을 식별합니다. 같은 링크의 수신 인터페이스는 MAC 주소로 식별합니다."
        },
        {
          "id": "b",
          "text": "UDP 포트 번호",
          "explanation": "UDP 포트는 응용 통신 끝점을 식별합니다. 링크 주소가 아닙니다."
        },
        {
          "id": "c",
          "text": "MAC 주소",
          "explanation": "MAC 주소는 링크에서 다음 수신 인터페이스를 식별합니다."
        },
        {
          "id": "d",
          "text": "응용 메시지 길이",
          "explanation": "메시지 길이는 데이터 크기 정보입니다. 수신 인터페이스를 식별하는 주소가 아닙니다."
        }
      ],
      "answer": "c",
      "explanation": "MAC 주소는 링크에서 다음 수신 인터페이스를 식별합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-160",
      "week": 1,
      "type": "choice",
      "prompt": "캡슐화와 역캡슐화를 올바르게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "송신: 계층별 제어 정보를 제거 / 수신: 해당 제어 정보를 추가",
          "explanation": "추가와 제거 방향이 반대입니다. 송신은 제어 정보를 추가하고 수신은 해석·제거합니다."
        },
        {
          "id": "b",
          "text": "송신: IP 주소 필드를 모두 삭제 / 수신: TCP·UDP 포트를 모두 삭제",
          "explanation": "IP·포트 주소 삭제가 캡슐화의 정의는 아닙니다. 각 계층의 제어 정보를 붙이고 해석하는 과정입니다."
        },
        {
          "id": "c",
          "text": "송신: 원본 데이터의 압축만 수행 / 수신: 원본 데이터의 암호화만 수행",
          "explanation": "캡슐화는 압축이나 암호화만을 뜻하지 않습니다. 계층별 헤더·트레일러 등의 추가를 뜻합니다."
        },
        {
          "id": "d",
          "text": "송신: 계층별 제어 정보를 추가 / 수신: 해당 제어 정보를 해석·제거",
          "explanation": "캡슐화는 송신 중 하위 계층의 헤더·트레일러 등을 붙이는 과정이며 역캡슐화는 수신 중 이를 해석·제거하는 과정입니다."
        }
      ],
      "answer": "d",
      "explanation": "캡슐화는 송신 중 하위 계층의 헤더·트레일러 등을 붙이는 과정이며 역캡슐화는 수신 중 이를 해석·제거하는 과정입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-161",
      "week": 1,
      "type": "choice",
      "prompt": "물리 계층의 대표 데이터 단위는 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "비트",
          "explanation": "물리 계층은 비트(Bit)를 전기·광·무선 신호로 전달합니다. 프레임의 구조를 해석하는 것은 데이터링크 계층입니다."
        },
        {
          "id": "b",
          "text": "프레임",
          "explanation": "프레임은 데이터링크 계층의 단위입니다. 물리 계층은 비트를 신호로 전달합니다."
        },
        {
          "id": "c",
          "text": "패킷",
          "explanation": "IP 패킷은 네트워크 계층의 단위입니다. 물리 계층 단위는 비트입니다."
        },
        {
          "id": "d",
          "text": "세그먼트",
          "explanation": "세그먼트는 전송 계층 TCP의 단위입니다. 물리 계층의 비트와 구분합니다."
        }
      ],
      "answer": "a",
      "explanation": "물리 계층은 비트(Bit)를 전기·광·무선 신호로 전달합니다. 프레임의 구조를 해석하는 것은 데이터링크 계층입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-162",
      "week": 1,
      "type": "choice",
      "prompt": "데이터링크 계층의 대표 데이터 단위와 기능을 올바르게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "패킷 단위 · 여러 네트워크 사이의 경로 결정",
          "explanation": "패킷과 네트워크 간 경로 결정은 네트워크 계층에 해당합니다. 데이터링크 계층은 프레임과 링크 전달입니다."
        },
        {
          "id": "b",
          "text": "프레임 단위 · 같은 링크의 노드 사이 전달",
          "explanation": "데이터링크 계층은 프레임(Frame)을 같은 링크의 노드 사이에서 전달합니다. 대표 식별 정보는 MAC 주소입니다."
        },
        {
          "id": "c",
          "text": "비트 단위 · 사용자에게 응용 서비스 제공",
          "explanation": "비트는 물리 계층 단위이고 응용 서비스 제공은 응용 계층 기능입니다. 두 항목 모두 데이터링크에 해당하지 않습니다."
        },
        {
          "id": "d",
          "text": "세그먼트 단위 · 문자 인코딩의 표현 형식 변환",
          "explanation": "세그먼트는 TCP의 단위이고 인코딩 변환은 표현 계층 기능입니다. 데이터링크의 프레임 전달과 다릅니다."
        }
      ],
      "answer": "b",
      "explanation": "데이터링크 계층은 프레임(Frame)을 같은 링크의 노드 사이에서 전달합니다. 대표 식별 정보는 MAC 주소입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-163",
      "week": 1,
      "type": "choice",
      "prompt": "IP를 사용하는 네트워크 계층의 전달 단위와 역할은?",
      "options": [
        {
          "id": "a",
          "text": "프레임 단위 · MAC 주소를 학습하여 링크 전달",
          "explanation": "프레임과 MAC 학습은 데이터링크 계층과 스위칭의 영역입니다. IP 네트워크 계층과 다릅니다."
        },
        {
          "id": "b",
          "text": "비트 단위 · 물리적 매체의 신호로 바꾸어 전송",
          "explanation": "비트와 신호 전달은 물리 계층에 해당합니다. IP 패킷 전달은 네트워크 계층입니다."
        },
        {
          "id": "c",
          "text": "패킷 단위 · 경로를 결정하여 네트워크 간 전달",
          "explanation": "네트워크 계층은 IP 패킷을 경로에 따라 전달합니다. 같은 링크의 프레임 전달과 구분합니다."
        },
        {
          "id": "d",
          "text": "메시지 단위 · 압축과 문자 인코딩을 변환",
          "explanation": "압축과 인코딩은 표현 계층의 기능입니다. IP 네트워크 계층은 경로와 패킷 전달을 다룹니다."
        }
      ],
      "answer": "c",
      "explanation": "네트워크 계층은 IP 패킷을 경로에 따라 전달합니다. 같은 링크의 프레임 전달과 구분합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-164",
      "week": 1,
      "type": "choice",
      "prompt": "전송 계층의 데이터 단위를 TCP와 UDP에 맞게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "TCP: 프레임 / UDP: 비트",
          "explanation": "프레임은 데이터링크, 비트는 물리 계층의 단위입니다. TCP·UDP 전송 계층 단위가 아닙니다."
        },
        {
          "id": "b",
          "text": "TCP: 패킷 / UDP: 프레임",
          "explanation": "IP 패킷은 네트워크, 프레임은 데이터링크 계층의 단위입니다. TCP 세그먼트·UDP 데이터그램과 다릅니다."
        },
        {
          "id": "c",
          "text": "TCP: 데이터그램 / UDP: 세그먼트",
          "explanation": "TCP와 UDP의 단위가 뒤바뀌었습니다. TCP는 세그먼트, UDP는 데이터그램입니다."
        },
        {
          "id": "d",
          "text": "TCP: 세그먼트 / UDP: 데이터그램",
          "explanation": "TCP의 전송 계층 단위는 세그먼트, UDP의 단위는 데이터그램입니다. 전송 계층 전체를 항상 세그먼트라고 부르면 UDP를 구분하지 못합니다."
        }
      ],
      "answer": "d",
      "explanation": "TCP의 전송 계층 단위는 세그먼트, UDP의 단위는 데이터그램입니다. 전송 계층 전체를 항상 세그먼트라고 부르면 UDP를 구분하지 못합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-165",
      "week": 1,
      "type": "choice",
      "prompt": "세션 계층의 데이터 단위를 이 자료의 OSI 표에 맞게 표현한 것은?",
      "options": [
        {
          "id": "a",
          "text": "데이터·메시지",
          "explanation": "자료에서는 세션·표현·응용 계층의 단위를 데이터·메시지로 설명합니다. 세션 계층의 핵심 역할은 대화의 설정·유지·종료와 동기화입니다."
        },
        {
          "id": "b",
          "text": "비트",
          "explanation": "비트는 물리 계층의 단위입니다. 세션 계층은 상위 데이터·메시지와 대화를 다룹니다."
        },
        {
          "id": "c",
          "text": "Ethernet 프레임",
          "explanation": "Ethernet 프레임은 데이터링크 계층의 단위입니다. 세션 계층의 단위로 한정하지 않습니다."
        },
        {
          "id": "d",
          "text": "TCP 세그먼트만",
          "explanation": "TCP 세그먼트는 전송 계층 TCP의 단위입니다. 세션 계층 전체를 TCP 세그먼트만으로 설명할 수 없습니다."
        }
      ],
      "answer": "a",
      "explanation": "자료에서는 세션·표현·응용 계층의 단위를 데이터·메시지로 설명합니다. 세션 계층의 핵심 역할은 대화의 설정·유지·종료와 동기화입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-166",
      "week": 1,
      "type": "choice",
      "prompt": "표현 계층이 처리하는 단위와 역할을 이 자료에 맞게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "프레임을 처리하며 MAC 주소를 기준으로 전달한다.",
          "explanation": "프레임과 MAC 기반 전달은 데이터링크 계층에 해당합니다. 표현 계층은 형식 변환 등을 맡습니다."
        },
        {
          "id": "b",
          "text": "데이터·메시지를 처리하며 형식을 변환하고 압축한다.",
          "explanation": "표현 계층은 데이터·메시지의 형식 변환, 암호화·복호화와 압축을 다룹니다. 고유 단위명 하나만으로 상위 세 계층을 구분하지 않습니다."
        },
        {
          "id": "c",
          "text": "비트를 처리하며 매체에서 약해진 신호를 재생한다.",
          "explanation": "비트와 신호 재생은 물리 계층의 영역입니다. 표현 계층의 데이터 변환과 다릅니다."
        },
        {
          "id": "d",
          "text": "IP 패킷을 처리하며 목적지까지의 경로를 결정한다.",
          "explanation": "IP 패킷의 경로 결정은 네트워크 계층의 기능입니다. 표현 계층 기능은 아닙니다."
        }
      ],
      "answer": "b",
      "explanation": "표현 계층은 데이터·메시지의 형식 변환, 암호화·복호화와 압축을 다룹니다. 고유 단위명 하나만으로 상위 세 계층을 구분하지 않습니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-167",
      "week": 1,
      "type": "choice",
      "prompt": "응용 계층의 단위와 역할을 이 자료에 맞게 연결한 것은?",
      "options": [
        {
          "id": "a",
          "text": "비트 단위를 다루며 매체를 통한 물리적 전송을 수행한다.",
          "explanation": "비트와 매체 전송은 물리 계층의 단위·기능입니다. 응용 계층과 다릅니다."
        },
        {
          "id": "b",
          "text": "프레임 단위를 다루며 링크 전송 오류를 검출하는 기능을 제공한다.",
          "explanation": "프레임과 링크 오류 검출은 데이터링크 계층의 단위·기능입니다."
        },
        {
          "id": "c",
          "text": "데이터·메시지를 다루며 프로그램에 네트워크 서비스를 제공한다.",
          "explanation": "응용 계층은 데이터·메시지를 다루며 HTTP·FTP·DNS 같은 네트워크 서비스를 제공합니다."
        },
        {
          "id": "d",
          "text": "세그먼트 단위를 다루며 종단 TCP의 순서 제어 기능만 수행한다.",
          "explanation": "TCP 세그먼트와 순서 제어는 전송 계층 TCP의 기능입니다. 응용 계층은 네트워크 서비스를 제공합니다."
        }
      ],
      "answer": "c",
      "explanation": "응용 계층은 데이터·메시지를 다루며 HTTP·FTP·DNS 같은 네트워크 서비스를 제공합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-168",
      "week": 1,
      "type": "choice",
      "prompt": "“비트를 실제 전송 매체의 신호로 보낸다”는 설명에 해당하는 계층 이름은?",
      "options": [
        {
          "id": "a",
          "text": "전송 계층",
          "explanation": "전송 계층은 OSI 4계층으로 TCP·UDP를 통한 프로세스 간 통신을 담당합니다. 신호 전달은 물리 계층입니다."
        },
        {
          "id": "b",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 OSI 3계층으로 IP 패킷의 경로 결정과 전달을 담당합니다."
        },
        {
          "id": "c",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 프레임을 전달합니다. 실제 비트 신호 전달은 물리 계층입니다."
        },
        {
          "id": "d",
          "text": "물리 계층",
          "explanation": "물리 계층은 비트를 전송 매체의 신호로 전달합니다. 데이터링크 계층은 그 위에서 프레임 경계와 링크 전달을 다룹니다."
        }
      ],
      "answer": "d",
      "explanation": "물리 계층은 비트를 전송 매체의 신호로 전달합니다. 데이터링크 계층은 그 위에서 프레임 경계와 링크 전달을 다룹니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-169",
      "week": 1,
      "type": "choice",
      "prompt": "“프레임을 전달하고 링크 수준의 오류를 검출한다”는 설명에 해당하는 계층은?",
      "options": [
        {
          "id": "a",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 프레임 전달과 링크 수준 오류 검출을 다룹니다. 오류 검출이 언제나 재전송 보장을 뜻하는 것은 아닙니다."
        },
        {
          "id": "b",
          "text": "전송 계층",
          "explanation": "전송 계층은 OSI 4계층으로 프로세스 통신을 다룹니다. 문제의 링크 수준 프레임 오류 검출은 데이터링크 계층입니다."
        },
        {
          "id": "c",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 형식 변환·압축·암호화를 다룹니다."
        },
        {
          "id": "d",
          "text": "응용 계층",
          "explanation": "응용 계층은 OSI 7계층으로 응용 서비스를 제공합니다. 프레임 처리를 담당하지 않습니다."
        }
      ],
      "answer": "a",
      "explanation": "데이터링크 계층은 프레임 전달과 링크 수준 오류 검출을 다룹니다. 오류 검출이 언제나 재전송 보장을 뜻하는 것은 아닙니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 5 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-170",
      "week": 1,
      "type": "choice",
      "prompt": "목적지 IP 주소를 기준으로 패킷이 이동할 경로를 결정하는 계층 이름은?",
      "options": [
        {
          "id": "a",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 MAC과 프레임을 다룹니다. 목적지 IP에 따른 경로 결정은 네트워크 계층입니다."
        },
        {
          "id": "b",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 IP 주소를 이용한 경로 결정과 패킷 전달을 담당합니다."
        },
        {
          "id": "c",
          "text": "세션 계층",
          "explanation": "세션 계층은 OSI 5계층으로 대화 상태와 동기화를 관리합니다. IP 경로 선택과 다릅니다."
        },
        {
          "id": "d",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 형식 변환·암호화·압축을 담당합니다."
        }
      ],
      "answer": "b",
      "explanation": "네트워크 계층은 IP 주소를 이용한 경로 결정과 패킷 전달을 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-171",
      "week": 1,
      "type": "choice",
      "prompt": "“포트로 응용 끝점을 구분하며 TCP 세그먼트나 UDP 데이터그램을 전달한다”는 계층은?",
      "options": [
        {
          "id": "a",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 형식 변환·암호화·압축을 담당합니다. 포트 기반 통신은 전송 계층입니다."
        },
        {
          "id": "b",
          "text": "세션 계층",
          "explanation": "세션 계층은 OSI 5계층으로 대화를 관리합니다. TCP·UDP 데이터 단위를 처리하는 전송 계층과 다릅니다."
        },
        {
          "id": "c",
          "text": "전송 계층",
          "explanation": "전송 계층은 프로세스 간 전달과 다중화·역다중화를 담당하며 TCP와 UDP가 대표 프로토콜입니다."
        },
        {
          "id": "d",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 프레임과 MAC을 다룹니다. TCP/UDP 포트는 전송 계층 정보입니다."
        }
      ],
      "answer": "c",
      "explanation": "전송 계층은 프로세스 간 전달과 다중화·역다중화를 담당하며 TCP와 UDP가 대표 프로토콜입니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-172",
      "week": 1,
      "type": "choice",
      "prompt": "상위 세 계층 중 대화의 동기화 지점과 연결된 대화 상태를 관리하는 계층은?",
      "options": [
        {
          "id": "a",
          "text": "응용 계층",
          "explanation": "응용 계층은 OSI 7계층으로 네트워크 서비스를 제공합니다. 대화 동기화 지점 관리는 세션 계층입니다."
        },
        {
          "id": "b",
          "text": "표현 계층",
          "explanation": "표현 계층은 OSI 6계층으로 데이터 형식을 변환합니다. 대화 상태 관리는 세션 계층입니다."
        },
        {
          "id": "c",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 OSI 3계층으로 IP 경로와 패킷 전달을 담당합니다."
        },
        {
          "id": "d",
          "text": "세션 계층",
          "explanation": "세션 계층은 대화의 설정·유지·종료와 동기화·복구 지점 관리를 담당합니다."
        }
      ],
      "answer": "d",
      "explanation": "세션 계층은 대화의 설정·유지·종료와 동기화·복구 지점 관리를 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-173",
      "week": 1,
      "type": "choice",
      "prompt": "OSI의 개념적 기능 분류에서 데이터 압축과 암호화·복호화를 맡는 계층 이름은?",
      "options": [
        {
          "id": "a",
          "text": "표현 계층",
          "explanation": "표현 계층은 형식 변환·암호화·복호화·압축을 다룹니다. 실제 보안 프로토콜의 구현 위치와 OSI의 개념적 기능 분류는 구별합니다."
        },
        {
          "id": "b",
          "text": "세션 계층",
          "explanation": "세션 계층은 OSI 5계층으로 대화 설정·유지·종료를 관리합니다. 압축·암호화는 표현 계층의 개념적 기능입니다."
        },
        {
          "id": "c",
          "text": "전송 계층",
          "explanation": "전송 계층은 OSI 4계층으로 프로세스 간 전달을 담당합니다. 이 문제의 OSI 기능 분류는 표현 계층을 묻습니다."
        },
        {
          "id": "d",
          "text": "데이터링크 계층",
          "explanation": "데이터링크 계층은 OSI 2계층으로 프레임 전달과 링크 오류 검출을 다룹니다."
        }
      ],
      "answer": "a",
      "explanation": "표현 계층은 형식 변환·암호화·복호화·압축을 다룹니다. 실제 보안 프로토콜의 구현 위치와 OSI의 개념적 기능 분류는 구별합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-174",
      "week": 1,
      "type": "choice",
      "prompt": "웹 요청·응답, 파일 전송, 도메인 이름 조회에 쓰이는 HTTP·FTP·DNS가 속하는 OSI 계층은?",
      "options": [
        {
          "id": "a",
          "text": "전송 계층",
          "explanation": "전송 계층은 OSI 4계층으로 TCP·UDP와 포트 기반 전달을 담당합니다. HTTP·FTP·DNS 서비스는 응용 계층입니다."
        },
        {
          "id": "b",
          "text": "응용 계층",
          "explanation": "응용 계층은 네트워크 서비스를 제공하며 전송 계층은 그 서비스가 통신할 때 사용하는 전송 기능을 제공합니다."
        },
        {
          "id": "c",
          "text": "네트워크 계층",
          "explanation": "네트워크 계층은 OSI 3계층으로 IP 패킷을 전달합니다. 응용 서비스를 직접 제공하는 계층은 아닙니다."
        },
        {
          "id": "d",
          "text": "물리 계층",
          "explanation": "물리 계층은 OSI 1계층으로 비트를 신호로 전달합니다. 사용자 네트워크 서비스는 응용 계층입니다."
        }
      ],
      "answer": "b",
      "explanation": "응용 계층은 네트워크 서비스를 제공하며 전송 계층은 그 서비스가 통신할 때 사용하는 전송 기능을 제공합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-175",
      "week": 1,
      "type": "short",
      "prompt": "OSI 1계층에서 신호로 전달하는 가장 기본적인 데이터 단위 이름을 쓰세요.",
      "answers": [
        "비트",
        "bit",
        "Bit"
      ],
      "explanation": "물리 계층의 단위는 비트입니다. 비트를 전기·광·무선 신호로 표현해 전달합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-176",
      "week": 1,
      "type": "short",
      "prompt": "MAC 주소로 같은 링크의 수신자를 구분할 때, 데이터링크 계층에서 주고받는 단위 이름을 쓰세요.",
      "answers": [
        "프레임",
        "frame",
        "Frame"
      ],
      "explanation": "데이터링크 계층은 프레임을 다루며 같은 링크의 노드 간 전달을 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-177",
      "week": 1,
      "type": "short",
      "prompt": "여러 네트워크를 거쳐 IP 주소를 기준으로 전달되는 네트워크 계층 단위 이름을 쓰세요.",
      "answers": [
        "패킷",
        "IP 패킷",
        "IP패킷",
        "packet",
        "Packet",
        "IP packet"
      ],
      "explanation": "네트워크 계층은 IP 패킷을 경로에 따라 전달합니다. 링크가 바뀌면 패킷을 담는 프레임은 새로 구성됩니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-178",
      "week": 1,
      "type": "short",
      "prompt": "TCP가 전송 계층에서 사용하는 데이터 단위의 이름은 무엇인가요?",
      "answers": [
        "세그먼트",
        "TCP 세그먼트",
        "TCP세그먼트",
        "segment",
        "Segment",
        "TCP segment"
      ],
      "explanation": "TCP의 데이터 단위는 세그먼트입니다. TCP는 응용에 바이트 스트림 서비스를 제공합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-179",
      "week": 1,
      "type": "short",
      "prompt": "UDP가 전송 계층에서 사용하는 데이터 단위의 이름은 무엇인가요?",
      "answers": [
        "데이터그램",
        "UDP 데이터그램",
        "UDP데이터그램",
        "datagram",
        "Datagram",
        "UDP datagram"
      ],
      "explanation": "UDP의 전송 계층 단위는 데이터그램입니다. 네트워크 계층의 IP 데이터그램과는 계층 문맥을 구별합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3, 13 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-180",
      "week": 1,
      "type": "short",
      "prompt": "이 자료에서 세션·표현·응용 계층의 단위를 부르는 일반적인 이름 하나를 쓰세요.",
      "answers": [
        "데이터",
        "메시지",
        "메세지",
        "데이터·메시지",
        "데이터/메시지",
        "data",
        "Data",
        "message",
        "Message"
      ],
      "explanation": "상위 세 계층의 단위는 자료에서 데이터·메시지로 표현합니다. “데이터”와 “메시지” 모두 정답이며, 흔히 쓰는 표기 “메세지”도 인정합니다. 표준 표기는 “메시지”입니다. 단위 이름은 겹치므로 대화 관리, 형식 변환, 응용 서비스라는 역할로 구분해야 합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-181",
      "week": 1,
      "type": "blanks",
      "prompt": "계층·프로토콜에 맞는 데이터 단위를 한글로 쓰세요. 각 칸에는 단위 이름만 쓰세요.",
      "fields": [
        "물리 계층",
        "데이터링크 계층",
        "네트워크 계층의 IP",
        "전송 계층의 TCP",
        "전송 계층의 UDP"
      ],
      "answers": [
        "비트",
        "프레임",
        "패킷",
        "세그먼트",
        "데이터그램"
      ],
      "explanation": "물리는 비트, 링크는 프레임, 네트워크의 IP는 패킷, 전송의 TCP는 세그먼트, UDP는 데이터그램입니다. 계층과 프로토콜을 함께 확인하세요.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-182",
      "week": 1,
      "type": "blanks",
      "prompt": "다음 기능에 대응하는 OSI 계층 이름을 한글로 쓰세요. “계층”은 빼고 이름만 쓰세요.",
      "fields": [
        "비트를 신호로 전달하는 계층",
        "프레임과 MAC 기반 링크 전달 계층",
        "IP 패킷의 경로 결정 계층",
        "포트 기반 프로세스 통신 계층"
      ],
      "answers": [
        "물리",
        "데이터링크",
        "네트워크",
        "전송"
      ],
      "explanation": "물리는 비트의 신호 전달, 데이터링크는 프레임 전달, 네트워크는 IP 패킷의 경로 결정, 전송은 포트 기반 프로세스 통신을 담당합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3-4 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-183",
      "week": 1,
      "type": "blanks",
      "prompt": "각 기능을 담당하는 OSI 상위 계층의 이름을 한글로 쓰세요. “계층”은 빼세요.",
      "fields": [
        "대화 설정·유지·종료와 동기화",
        "형식 변환·암호화·압축",
        "사용자·응용 프로그램에 네트워크 서비스 제공"
      ],
      "answers": [
        "세션",
        "표현",
        "응용"
      ],
      "explanation": "5계층 세션은 대화 관리, 6계층 표현은 형식 변환, 7계층 응용은 네트워크 서비스 제공입니다. 상위 세 계층의 단위는 데이터·메시지로 설명하므로 역할로 구별합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-184",
      "week": 1,
      "type": "blanks",
      "prompt": "OSI 상위 세 계층의 이름을 5계층부터 7계층까지 순서대로 쓰세요. “계층”은 빼세요.",
      "fields": [
        "5계층",
        "6계층",
        "7계층"
      ],
      "answers": [
        "세션",
        "표현",
        "응용"
      ],
      "explanation": "5~7계층은 세션 → 표현 → 응용입니다. 자료에서는 이 세 계층의 단위를 데이터·메시지로 표현하고 각각의 기능으로 구분합니다.",
      "source": "네트워크보안 Lecture 1-4 통합정리 빈칸학습 PDF 3 · 기초 확인쪽",
      "topics": [
        "basic"
      ]
    },
    {
      "id": "nsm-185",
      "week": 1,
      "type": "choice",
      "prompt": "물리 계층의 책임을 설명한 것으로 가장 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "인접 노드로 비트를 보내기 위해 매체의 신호로 바꾸어 전달한다.",
          "explanation": "물리 계층은 한 노드에서 다음 노드로 개개의 비트를 신호로 전달하는 역할입니다."
        },
        {
          "id": "b",
          "text": "원격 노드로 패킷을 보내기 위해 목적지까지의 최단 경로를 계산한다.",
          "explanation": "IP 경로 계산은 네트워크 계층의 기능입니다. 물리 계층은 비트와 신호를 다룹니다."
        },
        {
          "id": "c",
          "text": "원격 노드로 메시지를 보내기 위해 사용하는 문자 표현 형식을 바꾼다.",
          "explanation": "문자 형식 변환은 표현 계층의 기능입니다."
        },
        {
          "id": "d",
          "text": "종단 호스트의 프로그램을 구분하기 위해 전송 포트 번호를 처리한다.",
          "explanation": "포트 기반 프로세스 구분은 전송 계층의 기능입니다."
        }
      ],
      "answer": "a",
      "explanation": "물리 계층은 한 노드에서 다음 노드로 개개의 비트를 신호로 전달하는 역할입니다.",
      "source": "nsa_lecture01 - (26-2 rev.) (3).pdf · 원본 PDF 8쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-186",
      "week": 1,
      "type": "choice",
      "prompt": "데이터링크 계층의 신뢰성과 관련된 설명으로 가장 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "프레임의 오류를 검사하고 모든 링크에서 손실을 재전송으로 복구한다.",
          "explanation": "오류 검출과 손실 복구는 다릅니다. 일반 Ethernet 스위치가 TCP처럼 종단 재전송을 보장하지는 않습니다."
        },
        {
          "id": "b",
          "text": "프레임 전달과 오류 검출을 다루며 재전송 제공 여부는 구현마다 다르다.",
          "explanation": "데이터링크 계층은 링크의 프레임 전달과 오류 처리를 다룹니다. 강의의 신뢰성 설명을 모든 구현의 재전송 보장으로 일반화하지 않습니다."
        },
        {
          "id": "c",
          "text": "프레임 전달을 처리하면서 종단 사이의 모든 IP 통신을 자동 암호화한다.",
          "explanation": "링크 기능 자체가 IP 통신 전체의 암호화를 보장하지 않습니다."
        },
        {
          "id": "d",
          "text": "프레임을 보낼 때마다 인터넷 전체 지도를 만들고 최단 경로를 계산한다.",
          "explanation": "인터넷 경로 계산은 네트워크 계층의 라우팅과 관련됩니다."
        }
      ],
      "answer": "b",
      "explanation": "데이터링크 계층은 링크의 프레임 전달과 오류 처리를 다룹니다. 강의의 신뢰성 설명을 모든 구현의 재전송 보장으로 일반화하지 않습니다.",
      "source": "nsa_lecture01 - (26-2 rev.) (3).pdf · 원본 PDF 9 · 구현상 차이 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-187",
      "week": 1,
      "type": "choice",
      "prompt": "네트워크 계층이 필요한 이유를 가장 잘 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "전송 매체의 전압과 케이블 접속 규격을 정하기 위해서",
          "explanation": "전압·접속 규격은 물리 계층의 관심사입니다."
        },
        {
          "id": "b",
          "text": "송수신 데이터의 문자 표현과 인코딩을 통일하기 위해서",
          "explanation": "표현 형식 변환은 표현 계층의 기능입니다."
        },
        {
          "id": "c",
          "text": "여러 네트워크를 거쳐 목적지까지 패킷을 전달하기 위해서",
          "explanation": "네트워크 계층은 논리 주소와 경로 정보를 이용해 여러 네트워크 사이의 패킷 전달을 담당합니다."
        },
        {
          "id": "d",
          "text": "송수신 파일의 내용을 압축하거나 압축 형식을 바꾸기 위해서",
          "explanation": "압축은 표현 계층의 대표 기능이며 네트워크 간 전달 목적과 다릅니다."
        }
      ],
      "answer": "c",
      "explanation": "네트워크 계층은 논리 주소와 경로 정보를 이용해 여러 네트워크 사이의 패킷 전달을 담당합니다.",
      "source": "nsa_lecture01 - (26-2 rev.) (3).pdf · 원본 PDF 10쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-188",
      "week": 1,
      "type": "choice",
      "prompt": "통신에서 노드와 링크의 관계를 올바르게 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "노드는 전송 케이블의 길이이고 링크는 전송 계층의 포트 번호이다.",
          "explanation": "노드는 호스트·라우터 같은 지점이며 링크는 그 사이 통신 구간입니다."
        },
        {
          "id": "b",
          "text": "노드와 링크는 모두 장비를 식별하는 IP 주소를 다르게 부르는 이름이다.",
          "explanation": "노드·링크는 네트워크 구성 개념이며 IP 주소 자체의 별명이 아닙니다."
        },
        {
          "id": "c",
          "text": "노드는 전송되는 데이터 단위이고 링크는 데이터를 암호화하는 방식이다.",
          "explanation": "노드는 장비·지점을 뜻하며 링크는 암호화 방식이 아닙니다."
        },
        {
          "id": "d",
          "text": "노드는 통신이 이루어지는 지점이고 링크는 그 지점 사이의 통신 구간이다.",
          "explanation": "호스트나 라우터가 노드이며 이들을 연결하는 통신 구간이 링크입니다."
        }
      ],
      "answer": "d",
      "explanation": "호스트나 라우터가 노드이며 이들을 연결하는 통신 구간이 링크입니다.",
      "source": "nsa_lecture01 - (26-2 rev.) (3).pdf · 원본 PDF 8-10 · 노드·링크 이해 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-189",
      "week": 1,
      "type": "short",
      "prompt": "한 노드에서 다음 노드로 개개의 비트를 전달한다는 설명은 OSI의 어느 계층 책임인가요? 계층 이름을 쓰세요.",
      "answers": [
        "물리",
        "물리 계층",
        "물리계층",
        "Physical Layer",
        "physical layer"
      ],
      "explanation": "물리 계층의 핵심은 비트를 전송 매체의 신호로 전달하는 것입니다. 링크의 프레임 전달이나 IP 경로 결정과 구분합니다.",
      "source": "nsa_lecture01 - (26-2 rev.) (3).pdf · 원본 PDF 8쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-190",
      "week": 1,
      "type": "essay",
      "prompt": "물리·데이터링크·네트워크 계층이 각각 무엇을 어떤 범위로 전달하는지 설명하세요.",
      "model": "물리 계층은 비트를 신호로 표현해 인접 노드로 보낸다. 데이터링크 계층은 같은 링크의 장치 사이에서 프레임을 전달하며 오류 검출 등 링크 기능을 다룬다. 네트워크 계층은 논리 주소와 경로 정보를 바탕으로 서로 다른 네트워크를 거쳐 목적지까지 패킷을 전달한다. 링크 수준 오류 검출이 모든 종단 손실의 자동 복구를 보장하는 것은 아니다.",
      "rubric": [
        "물리: 비트와 신호",
        "데이터링크: 링크 범위의 프레임",
        "네트워크: 네트워크 간 패킷과 경로",
        "오류 검출과 종단 복구 구분"
      ],
      "explanation": "물리 계층은 비트를 신호로 표현해 인접 노드로 보낸다. 데이터링크 계층은 같은 링크의 장치 사이에서 프레임을 전달하며 오류 검출 등 링크 기능을 다룬다. 네트워크 계층은 논리 주소와 경로 정보를 바탕으로 서로 다른 네트워크를 거쳐 목적지까지 패킷을 전달한다. 링크 수준 오류 검출이 모든 종단 손실의 자동 복구를 보장하는 것은 아니다.",
      "source": "nsa_lecture01 - (26-2 rev.) (3).pdf · 원본 PDF 8-10쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-191",
      "week": 2,
      "type": "choice",
      "prompt": "CIDR의 개념을 가장 잘 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "A·B·C 클래스 경계 대신 접두사 길이로 주소 블록을 표현하는 방식",
          "explanation": "CIDR은 클래스 없는 주소 지정·라우팅 방식으로 접두사 길이를 사용하며 주소 집약에도 활용됩니다."
        },
        {
          "id": "b",
          "text": "A·B·C 클래스와 관계없이 모든 서브넷의 접두사를 /24로 고정하는 방식",
          "explanation": "CIDR은 /24 고정이 아니라 필요한 접두사 길이로 주소 블록을 표현합니다."
        },
        {
          "id": "c",
          "text": "송수신할 IPv4 주소를 링크의 MAC 주소로 바꾸어 암호화하는 방식",
          "explanation": "CIDR은 암호화나 IP→MAC 변환이 아닙니다. 주소 해석은 ARP와 관련됩니다."
        },
        {
          "id": "d",
          "text": "스위치가 학습한 MAC 테이블을 일정 주기로 모두 초기화하는 방식",
          "explanation": "MAC 테이블 만료는 스위치 에이징입니다. CIDR은 IP 주소 블록 표현 방식입니다."
        }
      ],
      "answer": "a",
      "explanation": "CIDR은 클래스 없는 주소 지정·라우팅 방식으로 접두사 길이를 사용하며 주소 집약에도 활용됩니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 11, 14쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-192",
      "week": 2,
      "type": "choice",
      "prompt": "VLSM을 사용하는 목적은 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "단말별 MAC 주소를 숨기도록 주소 블록을 다른 길이로 암호화하기 위해",
          "explanation": "VLSM은 MAC 은폐 기술이 아니라 가변 길이 서브넷 마스크를 이용하는 주소 할당 기술입니다."
        },
        {
          "id": "b",
          "text": "부서별 호스트 수에 맞추도록 주소 블록을 서로 다른 크기로 배분하기 위해",
          "explanation": "VLSM은 서로 다른 길이의 마스크로 서브넷 크기를 다르게 배분하여 주소를 효율적으로 사용합니다."
        },
        {
          "id": "c",
          "text": "부서별 호스트 수와 무관하게 주소 블록을 반드시 동일한 크기로 나누기 위해",
          "explanation": "동일 크기만 사용하는 것이 아니라 요구량에 따라 다른 크기를 배분할 수 있는 것이 핵심입니다."
        },
        {
          "id": "d",
          "text": "패킷별 전송 내용을 보호하도록 주소 블록에 자동 암호화를 적용하기 위해",
          "explanation": "주소 배분 방식이 통신 암호화를 제공하지는 않습니다."
        }
      ],
      "answer": "b",
      "explanation": "VLSM은 서로 다른 길이의 마스크로 서브넷 크기를 다르게 배분하여 주소를 효율적으로 사용합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 12, 14쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-193",
      "week": 2,
      "type": "choice",
      "prompt": "네트워크 트래픽 분석기가 살펴보는 항목으로 가장 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "운영체제에 등록된 계정별 비밀번호의 값과 길이",
          "explanation": "트래픽 분석은 통신 흐름의 유형·비율 등을 관찰하는 것이며 계정 비밀번호만을 뜻하지 않습니다."
        },
        {
          "id": "b",
          "text": "네트워크에 연결된 케이블 피복의 색상과 비율",
          "explanation": "케이블 색상이 아니라 네트워크에서 흐르는 통신의 특성을 분석합니다."
        },
        {
          "id": "c",
          "text": "유니캐스트·브로드캐스트 등 통신의 종류와 비율",
          "explanation": "트래픽 분석기는 통신의 유형과 비율 등을 관찰해 네트워크 상태를 이해하는 데 사용합니다."
        },
        {
          "id": "d",
          "text": "자동으로 복호화한 모든 장비의 암호문과 비밀번호",
          "explanation": "트래픽을 관찰한다고 모든 암호문이 자동 복호화되는 것은 아닙니다."
        }
      ],
      "answer": "c",
      "explanation": "트래픽 분석기는 통신의 유형과 비율 등을 관찰해 네트워크 상태를 이해하는 데 사용합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 15쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-194",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 직접 브로드캐스트 주소의 뜻으로 가장 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "자기 호스트만을 대상으로 하여 로컬 네트워크 스택을 가리키는 주소",
          "explanation": "자기 호스트를 가리키는 것은 루프백 문맥입니다. 직접 브로드캐스트는 특정 서브넷 전체를 대상으로 합니다."
        },
        {
          "id": "b",
          "text": "다음 홉 라우터 한 대를 대상으로 하여 해당 인터페이스를 가리키는 MAC 주소",
          "explanation": "직접 브로드캐스트는 IPv4 목적지 주소이며 한 라우터의 MAC 주소가 아닙니다."
        },
        {
          "id": "c",
          "text": "어떤 서브넷의 수신자도 지정하지 않은 상태를 나타내는 미지정 주소",
          "explanation": "미지정 주소와 직접 브로드캐스트는 다릅니다. 직접 브로드캐스트는 대상 서브넷이 정해져 있습니다."
        },
        {
          "id": "d",
          "text": "특정 IPv4 서브넷을 대상으로 하여 그 안의 모든 호스트를 가리키는 주소",
          "explanation": "예를 들어 192.168.10.0/24의 직접 브로드캐스트는 192.168.10.255입니다. 라우터가 외부에서 이를 전달하도록 허용한다는 뜻은 아닙니다."
        }
      ],
      "answer": "d",
      "explanation": "예를 들어 192.168.10.0/24의 직접 브로드캐스트는 192.168.10.255입니다. 라우터가 외부에서 이를 전달하도록 허용한다는 뜻은 아닙니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 15 · 전달 정책 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-195",
      "week": 2,
      "type": "choice",
      "prompt": "제한 브로드캐스트 주소 255.255.255.255를 올바르게 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "로컬 링크 안에서 사용하며 다른 네트워크로 전달하지 않는다.",
          "explanation": "제한 브로드캐스트는 현재 로컬 링크 범위입니다. 특정 서브넷을 지정하는 직접 브로드캐스트와 구분합니다."
        },
        {
          "id": "b",
          "text": "라우터를 거쳐 인터넷 전체의 모든 IPv4 장비에 전달한다.",
          "explanation": "제한 브로드캐스트는 라우터를 넘어 인터넷 전체로 퍼지지 않습니다."
        },
        {
          "id": "c",
          "text": "로컬 링크 안의 특정 DNS 서버 한 대만을 수신자로 지정한다.",
          "explanation": "특정 서버 한 대를 지정하는 유니캐스트와 다릅니다."
        },
        {
          "id": "d",
          "text": "라우터를 지날 때마다 해당 브로드캐스트를 IPv6로 변환한다.",
          "explanation": "IPv4 브로드캐스트가 자동으로 IPv6로 변환되는 규칙은 없습니다."
        }
      ],
      "answer": "a",
      "explanation": "제한 브로드캐스트는 현재 로컬 링크 범위입니다. 특정 서브넷을 지정하는 직접 브로드캐스트와 구분합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 15쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-196",
      "week": 2,
      "type": "choice",
      "prompt": "IGMP가 필요한 상황은 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "IPv4 호스트가 IPsec 기능으로 송신 패킷에 보안 처리를 적용할 때",
          "explanation": "IP 계층 보안은 IPsec과 관련됩니다. IGMP는 멀티캐스트 그룹 관리입니다."
        },
        {
          "id": "b",
          "text": "IPv4 호스트가 로컬 라우터에 멀티캐스트 그룹 참여 상태를 알릴 때",
          "explanation": "IGMP는 IPv4 호스트와 로컬 라우터 사이의 멀티캐스트 그룹 관리를 돕습니다."
        },
        {
          "id": "c",
          "text": "IPv4 호스트가 DNS 서버에 도메인 이름의 주소 레코드를 요청할 때",
          "explanation": "도메인 이름 레코드 조회는 DNS의 역할입니다."
        },
        {
          "id": "d",
          "text": "IPv4 호스트가 TCP 연결에서 손실된 데이터를 상대에게 재전송할 때",
          "explanation": "TCP 재전송은 TCP의 손실 복구 기능입니다. IGMP가 수행하지 않습니다."
        }
      ],
      "answer": "b",
      "explanation": "IGMP는 IPv4 호스트와 로컬 라우터 사이의 멀티캐스트 그룹 관리를 돕습니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 27 · 기능 설명 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-197",
      "week": 2,
      "type": "choice",
      "prompt": "IP의 데이터그램 전달 방식을 설명한 것으로 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "각 패킷을 전달할 때마다 목적지와 새로운 TCP 연결을 반드시 맺는다.",
          "explanation": "IP 데이터그램 전달에는 TCP 연결 설정이 필수 조건이 아닙니다."
        },
        {
          "id": "b",
          "text": "각 패킷을 링크 프레임과 동일시하여 계층의 단위를 구분하지 않는다.",
          "explanation": "IP 데이터그램은 네트워크 계층 단위입니다. 링크 계층의 프레임과 구분합니다."
        },
        {
          "id": "c",
          "text": "각 패킷을 개별 전달하며 동일 경로나 도착 순서를 자체 보장하지 않는다.",
          "explanation": "IP는 비연결형 데이터그램 전달로 개별 패킷을 처리하므로 같은 경로·도착 순서를 자체 보장하지 않습니다."
        },
        {
          "id": "d",
          "text": "각 패킷을 전달하기 전에 목적지까지 전용 회선을 먼저 예약해야 한다.",
          "explanation": "IP 데이터그램은 전달 전에 전용 회선 예약을 요구하는 방식이 아닙니다."
        }
      ],
      "answer": "c",
      "explanation": "IP는 비연결형 데이터그램 전달로 개별 패킷을 처리하므로 같은 경로·도착 순서를 자체 보장하지 않습니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 16, 27쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-198",
      "week": 2,
      "type": "choice",
      "prompt": "IP의 비신뢰성·최선형 전달이라는 말의 뜻은?",
      "options": [
        {
          "id": "a",
          "text": "전달을 수행하는 IP가 고장 나서 패킷을 전송할 수 없다는 뜻",
          "explanation": "비신뢰성은 고장이 아니라 서비스가 전달 보장을 제공하지 않는다는 뜻입니다."
        },
        {
          "id": "b",
          "text": "전달 중 손실이 생겨도 IP가 모든 패킷의 도착을 보장한다는 뜻",
          "explanation": "최선형 전달은 반드시 도착한다는 보장이 아닙니다."
        },
        {
          "id": "c",
          "text": "전달하는 모든 패킷의 데이터를 IP가 자동으로 암호화한다는 뜻",
          "explanation": "전달 보장과 암호화는 다른 개념이며 IP 자체가 모든 통신을 자동 암호화하지 않습니다."
        },
        {
          "id": "d",
          "text": "전달을 시도하되 손실·중복·순서를 IP가 자체 보장하지 않는다는 뜻",
          "explanation": "필요한 신뢰성은 TCP 같은 상위 기능으로 보완합니다. 최선형은 IP가 종단 전달을 보장하지 않는 서비스라는 뜻입니다."
        }
      ],
      "answer": "d",
      "explanation": "필요한 신뢰성은 TCP 같은 상위 기능으로 보완합니다. 최선형은 IP가 종단 전달을 보장하지 않는 서비스라는 뜻입니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 16, 28쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-199",
      "week": 2,
      "type": "choice",
      "prompt": "IP가 비접속형·비연결형이라는 뜻은 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "목적지와 사전 연결을 반드시 설정하지 않고 패킷을 보낸다.",
          "explanation": "비연결형은 사전 연결 설정 없이 데이터그램을 전달한다는 뜻입니다. 주소나 물리 연결의 존재 여부와 다릅니다."
        },
        {
          "id": "b",
          "text": "송신·목적지를 식별하는 어떤 주소도 사용하지 않고 보낸다.",
          "explanation": "IP는 비연결형이어도 송신·목적지 IP 주소를 사용합니다."
        },
        {
          "id": "c",
          "text": "유선 연결은 지원하지 않고 무선 네트워크에서만 전송한다.",
          "explanation": "비접속형은 무선 전용이라는 뜻이 아닙니다. 사전 연결 설정 여부를 말합니다."
        },
        {
          "id": "d",
          "text": "오류가 발생하면 IP 자체의 재전송으로 반드시 복구한다.",
          "explanation": "연결 설정 여부와 손실 복구는 별개입니다. IP가 모든 손실을 재전송으로 복구하지 않습니다."
        }
      ],
      "answer": "a",
      "explanation": "비연결형은 사전 연결 설정 없이 데이터그램을 전달한다는 뜻입니다. 주소나 물리 연결의 존재 여부와 다릅니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 16, 28쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-200",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 헤더의 Version 필드는 무엇을 나타내나요?",
      "options": [
        {
          "id": "a",
          "text": "송신 패킷이 찾아갈 목적지의 전송 포트 번호",
          "explanation": "포트 번호는 TCP/UDP 헤더의 정보입니다."
        },
        {
          "id": "b",
          "text": "송신 패킷에 적용된 인터넷 프로토콜의 버전",
          "explanation": "Version은 IP 버전을 표시합니다. IPv4 패킷에서는 값이 4입니다."
        },
        {
          "id": "c",
          "text": "송신 패킷이 이미 통과한 중간 라우터의 개수",
          "explanation": "통과 가능한 홉을 제한하는 필드는 TTL이며 Version과 다릅니다."
        },
        {
          "id": "d",
          "text": "송신 패킷에 담긴 파일의 압축 형식 버전",
          "explanation": "IP Version은 파일이나 압축 형식의 버전이 아닙니다."
        }
      ],
      "answer": "b",
      "explanation": "Version은 IP 버전을 표시합니다. IPv4 패킷에서는 값이 4입니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28 · 헤더 의미 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-201",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 헤더의 IHL이 5일 때 헤더 길이가 20바이트인 이유는?",
      "options": [
        {
          "id": "a",
          "text": "IHL 값과 관계없이 헤더 뒤에 항상 5바이트를 붙이기 때문",
          "explanation": "IHL은 고정 덧붙임 길이가 아니라 헤더 길이를 단위로 나타낸 값입니다."
        },
        {
          "id": "b",
          "text": "IHL 값은 헤더가 아닌 데이터 부분의 길이만 뜻하기 때문",
          "explanation": "IHL은 페이로드 길이가 아니라 IPv4 헤더 길이입니다."
        },
        {
          "id": "c",
          "text": "IHL 값은 4바이트 단위로 표시하므로 5×4로 계산하기 때문",
          "explanation": "IHL은 32비트, 즉 4바이트 단위로 헤더 길이를 나타냅니다. 기본값 5는 20바이트입니다."
        },
        {
          "id": "d",
          "text": "IHL 값은 20비트인 IPv4 주소 길이를 바이트로 바꾸기 때문",
          "explanation": "IPv4 주소는 32비트입니다. 주소 길이와 IHL 단위는 다른 개념입니다."
        }
      ],
      "answer": "c",
      "explanation": "IHL은 32비트, 즉 4바이트 단위로 헤더 길이를 나타냅니다. 기본값 5는 20바이트입니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28 · 계산 단위 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-202",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 헤더의 TOS가 관련되는 개념은 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "파일 소유권을 구분하여 사용자 접근을 처리하는 기능",
          "explanation": "TOS는 파일 소유권 설정이 아니라 IP 패킷의 서비스 관련 필드입니다."
        },
        {
          "id": "b",
          "text": "링크의 MAC 주소를 학습하여 출력 포트를 고르는 기능",
          "explanation": "MAC 학습은 L2 스위치 기능입니다. TOS와 다릅니다."
        },
        {
          "id": "c",
          "text": "로그인 암호를 검사하여 사용자 접근을 통제하는 기능",
          "explanation": "로그인 암호와 IP 서비스 표시 필드는 다른 개념입니다."
        },
        {
          "id": "d",
          "text": "패킷 서비스의 특성을 표시하여 전송 처리를 구분하는 기능",
          "explanation": "강의의 TOS는 서비스 특성과 처리 구분에 관한 필드입니다. 현재의 해당 옥텟은 DSCP·ECN 해석과 연결되며 표시만으로 품질이 자동 보장되지는 않습니다."
        }
      ],
      "answer": "d",
      "explanation": "강의의 TOS는 서비스 특성과 처리 구분에 관한 필드입니다. 현재의 해당 옥텟은 DSCP·ECN 해석과 연결되며 표시만으로 품질이 자동 보장되지는 않습니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28 · 필드 해석 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-203",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 헤더의 Total Length에 포함되는 범위는?",
      "options": [
        {
          "id": "a",
          "text": "IPv4 헤더의 바이트 수와 IP 데이터의 바이트 수를 합친 길이",
          "explanation": "전체 길이는 IPv4 헤더와 IP 데이터를 합친 바이트 수입니다. 바깥 링크 헤더·트레일러는 포함하지 않습니다."
        },
        {
          "id": "b",
          "text": "IPv4 헤더를 제외한 IP 데이터 부분의 바이트 수만 계산한 길이",
          "explanation": "IP 데이터만이 아니라 IPv4 헤더 길이도 포함합니다."
        },
        {
          "id": "c",
          "text": "IPv4 바깥의 Ethernet 헤더와 FCS의 바이트 수만 합친 길이",
          "explanation": "Ethernet 헤더·FCS는 바깥 링크 계층 정보이며 IP 전체 길이의 범위가 아닙니다."
        },
        {
          "id": "d",
          "text": "IPv4 데이터에 포함된 TCP 송신·수신 포트 두 개만 합친 길이",
          "explanation": "포트 두 개는 전송 계층 헤더의 일부일 뿐이며 IP 전체 길이의 범위가 아닙니다."
        }
      ],
      "answer": "a",
      "explanation": "전체 길이는 IPv4 헤더와 IP 데이터를 합친 바이트 수입니다. 바깥 링크 헤더·트레일러는 포함하지 않습니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28 · 헤더 의미 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-204",
      "week": 2,
      "type": "choice",
      "prompt": "TTL을 두는 주된 목적은 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "사용자 비밀번호의 유효 기간을 제한하여 계정 접근을 관리",
          "explanation": "IP 헤더의 TTL은 계정 비밀번호 유효 기간이 아닙니다."
        },
        {
          "id": "b",
          "text": "패킷의 전달 횟수를 제한하여 네트워크의 무한 순환을 방지",
          "explanation": "라우터를 지날 때 TTL이 감소하고 소진되면 패킷을 폐기하여 무한 순환을 제한합니다."
        },
        {
          "id": "c",
          "text": "인터페이스의 MAC 주소 길이를 결정하여 수신 장비를 식별",
          "explanation": "MAC 주소의 길이는 TTL로 결정하지 않습니다."
        },
        {
          "id": "d",
          "text": "UDP에 자체 재전송을 추가하여 손실된 데이터를 복구",
          "explanation": "TTL은 순환 제한 필드이며 UDP 재전송을 추가하지 않습니다."
        }
      ],
      "answer": "b",
      "explanation": "라우터를 지날 때 TTL이 감소하고 소진되면 패킷을 폐기하여 무한 순환을 제한합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-205",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4의 Identification 필드는 단편화에서 어떤 역할을 하나요?",
      "options": [
        {
          "id": "a",
          "text": "같은 사용자 계정이 만든 패킷을 구분하도록 UID를 저장한다.",
          "explanation": "Identification은 OS 사용자 식별자 UID가 아닙니다."
        },
        {
          "id": "b",
          "text": "같은 목적지로 향하는 패킷을 구분하도록 도메인 이름을 저장한다.",
          "explanation": "도메인 이름 조회는 DNS 문맥이며 Identification은 조각 식별에 쓰입니다."
        },
        {
          "id": "c",
          "text": "같은 원본 데이터그램에서 나온 조각을 식별할 정보를 제공한다.",
          "explanation": "같은 원본 IP 데이터그램의 조각들을 구별·재조립하는 데 관련되는 식별 정보입니다."
        },
        {
          "id": "d",
          "text": "같은 스위치로 들어온 패킷을 구분하도록 물리 포트 번호를 저장한다.",
          "explanation": "스위치 포트 번호가 아니라 IP 데이터그램 조각과 관련된 정보입니다."
        }
      ],
      "answer": "c",
      "explanation": "같은 원본 IP 데이터그램의 조각들을 구별·재조립하는 데 관련되는 식별 정보입니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28 · 단편화 의미 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-206",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4 단편화 플래그 DF와 MF의 의미를 올바르게 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "DF: 데이터 암호화 / MF: 암호 해제",
          "explanation": "DF·MF는 암호화 플래그가 아니라 단편화 관련 플래그입니다."
        },
        {
          "id": "b",
          "text": "DF: 목적지 포트 / MF: 송신 포트",
          "explanation": "포트는 TCP/UDP 헤더의 필드이며 DF·MF와 다릅니다."
        },
        {
          "id": "c",
          "text": "DF: 더 많은 조각 / MF: 단편화 금지",
          "explanation": "의미가 뒤바뀌었습니다. DF는 단편화 금지, MF는 뒤에 조각이 더 있음을 뜻합니다."
        },
        {
          "id": "d",
          "text": "DF: 단편화 금지 / MF: 뒤에 조각이 더 있음",
          "explanation": "DF는 Do not Fragment, MF는 More Fragments입니다. 마지막 조각의 MF는 0입니다."
        }
      ],
      "answer": "d",
      "explanation": "DF는 Do not Fragment, MF는 More Fragments입니다. 마지막 조각의 MF는 0입니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 28 · 플래그 의미 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-207",
      "week": 2,
      "type": "choice",
      "prompt": "Ethernet에서 물리주소라는 말이 일반적으로 가리키는 것은?",
      "options": [
        {
          "id": "a",
          "text": "MAC 주소",
          "explanation": "이 강의의 Ethernet 물리주소는 링크에서 인터페이스를 식별하는 MAC 주소를 뜻합니다."
        },
        {
          "id": "b",
          "text": "TCP 포트 번호",
          "explanation": "TCP 포트는 전송 계층 응용 통신 끝점의 식별 정보입니다."
        },
        {
          "id": "c",
          "text": "DNS 이름",
          "explanation": "DNS 이름은 이름 해석에 쓰이며 Ethernet 링크 주소가 아닙니다."
        },
        {
          "id": "d",
          "text": "사용자 UID",
          "explanation": "UID는 운영체제 사용자 식별자입니다. 네트워크 카드의 링크 주소가 아닙니다."
        }
      ],
      "answer": "a",
      "explanation": "이 강의의 Ethernet 물리주소는 링크에서 인터페이스를 식별하는 MAC 주소를 뜻합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 19, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-208",
      "week": 2,
      "type": "choice",
      "prompt": "QoS를 가장 잘 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "주소 블록을 늘려 사용 가능한 IP 주소 개수를 무조건 확대하는 기능",
          "explanation": "QoS는 주소 개수 확대가 아니라 통신 서비스 품질 관리입니다."
        },
        {
          "id": "b",
          "text": "지연·손실·대역폭 같은 통신 서비스의 품질 특성을 관리하는 개념",
          "explanation": "QoS는 트래픽의 지연·손실·대역폭 등 품질 특성을 관리합니다. 지원만으로 모든 품질이 무조건 보장되는 것은 아닙니다."
        },
        {
          "id": "c",
          "text": "MAC 주소를 기준으로 해당 장비의 IP 주소를 요청하는 프로토콜",
          "explanation": "MAC→IP는 과거 RARP와 관련되는 설명입니다. QoS의 뜻이 아닙니다."
        },
        {
          "id": "d",
          "text": "통신 종류와 관계없이 모든 패킷의 내용을 자동으로 암호화하는 기능",
          "explanation": "품질 관리와 암호화는 별개입니다. QoS 자체가 자동 암호화를 뜻하지 않습니다."
        }
      ],
      "answer": "b",
      "explanation": "QoS는 트래픽의 지연·손실·대역폭 등 품질 특성을 관리합니다. 지원만으로 모든 품질이 무조건 보장되는 것은 아닙니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 24, 29 · 용어 설명 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-209",
      "week": 2,
      "type": "choice",
      "prompt": "IPsec의 역할을 가장 잘 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "스위치의 물리 포트 색상을 지정하여 장비 간 연결 상태를 구분한다.",
          "explanation": "IPsec은 물리 포트의 외형 설정이 아니라 IP 계층 보안 체계입니다."
        },
        {
          "id": "b",
          "text": "송수신 IP 주소를 DNS 이름으로만 변환하여 장비 간 통신을 수행한다.",
          "explanation": "이름 변환 서비스의 설명이 아닙니다. IPsec은 통신 보안 기능을 제공합니다."
        },
        {
          "id": "c",
          "text": "IP 계층에서 인증·무결성·기밀성 등의 보안 기능을 제공한다.",
          "explanation": "IPsec은 IP 계층의 보안 프로토콜 체계입니다. 실제 보호 기능은 선택한 프로토콜과 설정에 따라 적용됩니다."
        },
        {
          "id": "d",
          "text": "IPv6의 주소 길이를 줄여 사용 가능한 주소 공간을 조정한다.",
          "explanation": "IPv6 주소 길이는 128비트이며 IPsec이 이를 줄이는 기능은 없습니다."
        }
      ],
      "answer": "c",
      "explanation": "IPsec은 IP 계층의 보안 프로토콜 체계입니다. 실제 보호 기능은 선택한 프로토콜과 설정에 따라 적용됩니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 24, 29 · 용어 설명 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-210",
      "week": 2,
      "type": "choice",
      "prompt": "IPv4와 IPv6의 공존을 위해 사용하는 이중 스택의 뜻은?",
      "options": [
        {
          "id": "a",
          "text": "한 장비가 IPv4 주소 두 개만을 사용하여 통신하는 방식",
          "explanation": "이중 스택은 같은 프로토콜 주소 두 개가 아니라 IPv4·IPv6 프로토콜을 함께 지원하는 것입니다."
        },
        {
          "id": "b",
          "text": "한 장비가 IPv6 주소를 항상 MAC 주소로 변환하는 방식",
          "explanation": "IPv6를 MAC으로 바꾸는 것과 이중 스택은 다른 개념입니다."
        },
        {
          "id": "c",
          "text": "한 장비가 모든 패킷을 반드시 두 번씩 복제 전송하는 방식",
          "explanation": "이중 스택은 모든 패킷을 복제 전송한다는 뜻이 아닙니다."
        },
        {
          "id": "d",
          "text": "한 장비가 IPv4와 IPv6를 함께 지원하여 통신하는 방식",
          "explanation": "IPv4와 IPv6를 병행 실행하여 점진적으로 공존·전환할 수 있게 합니다."
        }
      ],
      "answer": "d",
      "explanation": "IPv4와 IPv6를 병행 실행하여 점진적으로 공존·전환할 수 있게 합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 26, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-211",
      "week": 2,
      "type": "short",
      "prompt": "같은 IPv4 링크에서 다음 홉의 논리주소에 대응하는 물리주소를 찾아 프레임을 보내려 합니다. 사용하는 주소 해석 프로토콜은?",
      "answers": [
        "ARP",
        "arp",
        "Address Resolution Protocol",
        "주소 결정 프로토콜",
        "주소 해석 프로토콜"
      ],
      "explanation": "ARP는 다음 홉 IPv4 주소에 대응하는 MAC 주소를 알아냅니다. 원격 목적지이면 보통 로컬 기본 게이트웨이의 MAC을 찾습니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 19-20, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-212",
      "week": 2,
      "type": "short",
      "prompt": "장비가 자신의 MAC 주소를 바탕으로 IPv4 주소 설정 정보를 요청하던 과거 프로토콜의 이름은?",
      "answers": [
        "RARP",
        "rarp",
        "Reverse Address Resolution Protocol",
        "역주소 결정 프로토콜",
        "역주소 해석 프로토콜"
      ],
      "explanation": "RARP는 MAC 주소에 대응하는 IPv4 주소를 요청하던 과거 방식이며 현재는 DHCP 등이 대체했습니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 21, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-213",
      "week": 2,
      "type": "short",
      "prompt": "IP 전달 중 발생한 오류를 보고하거나 Echo 요청·응답으로 상태를 진단하는 제어 프로토콜은?",
      "answers": [
        "ICMP",
        "icmp",
        "ICMPv4",
        "Internet Control Message Protocol"
      ],
      "explanation": "ICMP는 IP 오류 보고·진단을 돕습니다. 손실된 응용 데이터를 직접 재전송하여 복구하는 프로토콜은 아닙니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 22-23, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-214",
      "week": 2,
      "type": "short",
      "prompt": "주소 공간을 확장해 128비트 주소를 사용하는 IP 버전의 이름은?",
      "answers": [
        "IPv6",
        "ipv6",
        "IPV6",
        "IP v6",
        "IP 버전 6"
      ],
      "explanation": "IPv6는 128비트 주소를 사용합니다. 주소 확장과 모든 통신의 자동 암호화는 구분해야 합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 24-25, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-215",
      "week": 2,
      "type": "short",
      "prompt": "IPv6 패킷을 IPv4 패킷의 데이터 부분에 담아 IPv4 구간을 지나게 하는 공존 기술은?",
      "answers": [
        "터널링",
        "tunneling",
        "Tunneling"
      ],
      "explanation": "터널링은 입구에서 IPv6 패킷을 IPv4 패킷으로 캡슐화하고 출구에서 역캡슐화합니다. 내부 프로토콜 자체를 바꾸는 변환과 다릅니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 26, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-216",
      "week": 2,
      "type": "short",
      "prompt": "IPv4와 IPv6 사이의 통신을 위해 주소·헤더 등 프로토콜 표현을 바꾸는 방식은? 터널링과 구별해서 쓰세요.",
      "answers": [
        "헤더 변환",
        "헤더변환",
        "프로토콜 변환",
        "프로토콜변환",
        "주소·프로토콜 변환",
        "변환"
      ],
      "explanation": "변환은 IPv4와 IPv6 사이의 헤더·주소 등을 바꿉니다. 터널링은 원래 패킷을 다른 패킷 안에 포장하는 방식입니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 26, 29쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-218",
      "week": 2,
      "type": "short",
      "prompt": "라우터가 목적지 주소로 전달 테이블을 조회하여 개별 패킷을 출력 인터페이스로 보내는 동작은?",
      "answers": [
        "포워딩",
        "forwarding",
        "Forwarding",
        "패킷 포워딩"
      ],
      "explanation": "경로와 테이블을 구성하는 라우팅과 그 테이블에 따라 실제 패킷을 보내는 포워딩을 구분합니다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 7, 28쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-219",
      "week": 2,
      "type": "essay",
      "prompt": "중요 체크의 IP 특징인 비신뢰성·비접속형·주소 지정·경로 지정이 각각 무엇을 뜻하는지 설명하세요.",
      "model": "비신뢰성은 IP 자체가 손실·중복·순서 등 종단 전달을 모두 보장하지 않는 최선형 서비스라는 뜻이다. 비접속형은 패킷 전송 전에 종단 연결을 반드시 설정하지 않는다는 뜻이다. 주소 지정은 송신·목적지 인터페이스를 IP 주소로 식별하는 것이며 경로 지정은 목적지까지 전달할 경로를 정하는 것이다. 필요한 신뢰성은 TCP 등 상위 기능으로 보완한다.",
      "rubric": [
        "비신뢰성은 고장이 아닌 전달 보장 부재",
        "비접속형은 사전 연결 설정 불필요",
        "IP 주소로 송수신 인터페이스 식별",
        "목적지로 가는 경로 결정"
      ],
      "explanation": "비신뢰성은 IP 자체가 손실·중복·순서 등 종단 전달을 모두 보장하지 않는 최선형 서비스라는 뜻이다. 비접속형은 패킷 전송 전에 종단 연결을 반드시 설정하지 않는다는 뜻이다. 주소 지정은 송신·목적지 인터페이스를 IP 주소로 식별하는 것이며 경로 지정은 목적지까지 전달할 경로를 정하는 것이다. 필요한 신뢰성은 TCP 등 상위 기능으로 보완한다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 16, 28쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-220",
      "week": 2,
      "type": "essay",
      "prompt": "IPv4 헤더의 Version, IHL, TOS, Total Length, TTL, Identification, DF·MF가 각각 어떤 정보를 담는지 설명하세요.",
      "model": "Version은 IP 버전이며 IPv4에서는 4이다. IHL은 4바이트 단위의 IPv4 헤더 길이로 기본 5는 20바이트이다. TOS는 서비스 관련 표시이며 현재 해당 옥텟은 DSCP·ECN 해석과 연결된다. Total Length는 IP 헤더와 데이터의 전체 바이트 수이다. TTL은 라우터를 지날 때 감소하여 무한 순환을 제한한다. Identification은 같은 원본 데이터그램의 조각을 식별하는 데 쓰인다. DF는 단편화 금지, MF는 뒤에 조각이 더 있음을 뜻한다.",
      "rubric": [
        "Version과 IHL의 뜻·단위",
        "TOS의 서비스 관련 의미",
        "전체 길이는 헤더+데이터",
        "TTL의 순환 제한",
        "Identification과 DF·MF 구분"
      ],
      "explanation": "Version은 IP 버전이며 IPv4에서는 4이다. IHL은 4바이트 단위의 IPv4 헤더 길이로 기본 5는 20바이트이다. TOS는 서비스 관련 표시이며 현재 해당 옥텟은 DSCP·ECN 해석과 연결된다. Total Length는 IP 헤더와 데이터의 전체 바이트 수이다. TTL은 라우터를 지날 때 감소하여 무한 순환을 제한한다. Identification은 같은 원본 데이터그램의 조각을 식별하는 데 쓰인다. DF는 단편화 금지, MF는 뒤에 조각이 더 있음을 뜻한다.",
      "source": "nsa_lecture02 (26-2 rev.) (1).pdf · 원본 PDF 17-18, 28 · 헤더 설명 보충쪽 · 중요 체크·관련 개념",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-221",
      "week": 3,
      "type": "choice",
      "prompt": "AS를 하나로 묶는 핵심 기준은 무엇인가요?",
      "options": [
        {
          "id": "a",
          "text": "모든 케이블의 길이가 같은가",
          "explanation": "AS는 케이블 길이가 아니라 관리·정책 범위에 관한 개념입니다."
        },
        {
          "id": "b",
          "text": "하나의 관리·정책 도메인에 속하는가",
          "explanation": "AS는 하나의 관리·정책 도메인에 속하는 네트워크·라우터 집합입니다. AS 내부·사이 라우팅을 구별하는 기준입니다."
        },
        {
          "id": "c",
          "text": "모든 호스트가 같은 MAC을 쓰는가",
          "explanation": "같은 MAC 주소를 공유하는 것으로 AS를 정의하지 않습니다."
        },
        {
          "id": "d",
          "text": "모든 패킷이 한 TCP 포트를 쓰는가",
          "explanation": "TCP 포트 번호로 AS를 구분하지 않습니다."
        }
      ],
      "answer": "b",
      "explanation": "AS는 하나의 관리·정책 도메인에 속하는 네트워크·라우터 집합입니다. AS 내부·사이 라우팅을 구별하는 기준입니다.",
      "source": "nsa_lecture03 (26-2 rev.).pdf · 원본 PDF 5 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-222",
      "week": 3,
      "type": "choice",
      "prompt": "라우팅에서 수렴(Convergence)의 뜻은?",
      "options": [
        {
          "id": "a",
          "text": "통신 변화 후 스위치가 저장된 모든 MAC 항목을 삭제하는 과정",
          "explanation": "MAC 항목 삭제는 스위치 에이징과 관련됩니다. 라우팅 수렴과 다릅니다."
        },
        {
          "id": "b",
          "text": "통신 변화 후 시스템의 모든 사용자를 하나의 계정으로 합치는 과정",
          "explanation": "사용자 계정 통합과 라우팅 정보 갱신은 별개입니다."
        },
        {
          "id": "c",
          "text": "경로 변화 후 라우터들이 갱신된 경로 정보를 일관되게 반영하는 과정",
          "explanation": "수렴은 장애나 경로 변화 후 라우터들이 변경된 경로를 반영하여 안정되는 과정입니다."
        },
        {
          "id": "d",
          "text": "경로 변화 후 라우터들이 전송하는 모든 패킷을 암호화하는 과정",
          "explanation": "수렴은 경로 정보 상태의 변화이며 암호화 과정이 아닙니다."
        }
      ],
      "answer": "c",
      "explanation": "수렴은 장애나 경로 변화 후 라우터들이 변경된 경로를 반영하여 안정되는 과정입니다.",
      "source": "nsa_lecture03 (26-2 rev.).pdf · 원본 PDF 6, 12, 15 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-223",
      "week": 3,
      "type": "choice",
      "prompt": "거리 벡터 라우팅의 무한 세기(Counting to infinity)를 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "다음 홉과 관계없이 모든 목적지의 비용이 0으로 유지되는 정상 상태",
          "explanation": "무한 세기는 정상 0홉 경로가 아니라 잘못된 경로 정보가 반복되는 문제입니다."
        },
        {
          "id": "b",
          "text": "할당 가능한 IPv6 주소 수를 계속 세어 새로운 주소를 만드는 방식",
          "explanation": "주소 수 계산이 아니라 거리 벡터의 경로 갱신 문제입니다."
        },
        {
          "id": "c",
          "text": "각 물리 링크의 전송 속도를 반복 측정해 대역폭 값을 갱신하는 방식",
          "explanation": "전송 속도 측정이 아니라 잘못된 경로 비용이 증가하는 현상입니다."
        },
        {
          "id": "d",
          "text": "잘못된 경로를 서로 믿고 광고하면서 목적지까지의 비용이 증가하는 현상",
          "explanation": "서로의 잘못된 광고를 신뢰하여 비용이 증가하고 도달 불가 판단이 늦어질 수 있습니다."
        }
      ],
      "answer": "d",
      "explanation": "서로의 잘못된 광고를 신뢰하여 비용이 증가하고 도달 불가 판단이 늦어질 수 있습니다.",
      "source": "nsa_lecture03 (26-2 rev.).pdf · 원본 PDF 7, 12 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-224",
      "week": 3,
      "type": "choice",
      "prompt": "BGP의 AS_PATH가 담는 정보는?",
      "options": [
        {
          "id": "a",
          "text": "경로가 거치는 AS 목록",
          "explanation": "AS_PATH는 경유 AS 정보를 담는 경로 속성입니다. 루프 방지와 정책에 따른 경로 선택 등에 활용합니다."
        },
        {
          "id": "b",
          "text": "사용자 로그인 암호",
          "explanation": "AS_PATH는 암호 저장 필드가 아닙니다."
        },
        {
          "id": "c",
          "text": "Ethernet 케이블 길이",
          "explanation": "케이블 길이 대신 AS 경로 정보를 다룹니다."
        },
        {
          "id": "d",
          "text": "스위치의 모든 MAC 항목",
          "explanation": "MAC 테이블은 스위치의 링크 전달 정보이며 BGP AS_PATH와 다릅니다."
        }
      ],
      "answer": "a",
      "explanation": "AS_PATH는 경유 AS 정보를 담는 경로 속성입니다. 루프 방지와 정책에 따른 경로 선택 등에 활용합니다.",
      "source": "nsa_lecture03 (26-2 rev.).pdf · 원본 PDF 9, 17 · 경로 벡터 의미 정정·보충쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-225",
      "week": 3,
      "type": "short",
      "prompt": "DUAL을 사용하고 부분 갱신과 빠른 수렴을 특징으로 하는 고급 거리 벡터 프로토콜의 약어는?",
      "answers": [
        "EIGRP",
        "eigrp"
      ],
      "explanation": "EIGRP는 거리 벡터 기반으로 DUAL을 사용합니다. 순수 링크 상태인 OSPF의 다익스트라와 구분합니다.",
      "source": "nsa_lecture03 (26-2 rev.).pdf · 원본 PDF 15 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-226",
      "week": 3,
      "type": "essay",
      "prompt": "거리 벡터·링크 상태·경로 벡터가 어떤 정보를 이용하는지 대표 프로토콜과 함께 설명하세요.",
      "model": "거리 벡터는 이웃이 알려준 목적지까지의 비용과 다음 홉을 이용하며 대표는 RIP이다. 링크 상태는 링크 상태 정보를 모아 LSDB를 구성하고 다익스트라로 최소 비용 경로를 계산하며 대표는 OSPF이다. 경로 벡터는 경유 AS 등 경로 속성과 정책을 이용하며 대표는 BGP이다. BGP를 L2 루프 방지 STP와 동일하게 보거나 AS 수만으로 항상 최단 경로를 선택한다고 이해하지 않는다.",
      "rubric": [
        "DV: 이웃 비용·다음 홉, RIP",
        "LS: LSDB·다익스트라, OSPF",
        "PV: AS 경로·정책, BGP",
        "BGP와 STP 및 단순 최단 경로 구분"
      ],
      "explanation": "거리 벡터는 이웃이 알려준 목적지까지의 비용과 다음 홉을 이용하며 대표는 RIP이다. 링크 상태는 링크 상태 정보를 모아 LSDB를 구성하고 다익스트라로 최소 비용 경로를 계산하며 대표는 OSPF이다. 경로 벡터는 경유 AS 등 경로 속성과 정책을 이용하며 대표는 BGP이다. BGP를 L2 루프 방지 STP와 동일하게 보거나 AS 수만으로 항상 최단 경로를 선택한다고 이해하지 않는다.",
      "source": "nsa_lecture03 (26-2 rev.).pdf · 원본 PDF 6-9, 17 · 분류 정정·보충쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-227",
      "week": 4,
      "type": "choice",
      "prompt": "네트워크 장치 드라이버의 역할을 가장 잘 설명한 것은?",
      "options": [
        {
          "id": "a",
          "text": "호스트와 무관하게 모든 원격 장비의 사용자 계정 정보를 바꾸는 소프트웨어",
          "explanation": "드라이버는 로컬 OS와 장치의 연결을 돕는 소프트웨어이지 원격 계정 변경 기능이 아닙니다."
        },
        {
          "id": "b",
          "text": "호스트가 사용할 웹 이름을 DNS 서버에서 IP 주소로 바꾸는 소프트웨어",
          "explanation": "이름 조회는 DNS의 역할입니다."
        },
        {
          "id": "c",
          "text": "호스트의 운영체제가 네트워크 인터페이스를 제어하고 사용하게 하는 소프트웨어",
          "explanation": "네트워크 드라이버는 OS가 네트워크 장치를 제어·사용하도록 연결합니다."
        },
        {
          "id": "d",
          "text": "여러 AS 사이에서 BGP 경로가 거쳐 가는 AS들을 기록한 경로 속성",
          "explanation": "AS 경로 속성은 BGP 문맥입니다. 장치 드라이버와 다릅니다."
        }
      ],
      "answer": "c",
      "explanation": "네트워크 드라이버는 OS가 네트워크 장치를 제어·사용하도록 연결합니다.",
      "source": "nsa_lecture04 (26-2) (1).pdf · 원본 PDF 3 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-228",
      "week": 4,
      "type": "choice",
      "prompt": "브리지의 개념으로 가장 적절한 것은?",
      "options": [
        {
          "id": "a",
          "text": "응용 계층에서 메시지의 내용을 압축하고 표현 형식을 변환하는 프로그램",
          "explanation": "압축은 표현 계층 기능이며 브리지는 데이터링크 계층 장비입니다."
        },
        {
          "id": "b",
          "text": "네트워크의 단말마다 사용할 새로운 IP 주소를 자동으로 할당하는 서버",
          "explanation": "주소 할당 서버와 MAC 기반 링크 연결 장비는 다릅니다."
        },
        {
          "id": "c",
          "text": "물리 계층에서 목적지 주소를 보지 않고 받은 신호만 반복하는 장치",
          "explanation": "주소 판단 없이 신호를 반복하는 것은 리피터·허브의 동작입니다."
        },
        {
          "id": "d",
          "text": "데이터링크 계층에서 MAC으로 세그먼트를 연결하고 충돌 범위를 나누는 장치",
          "explanation": "브리지는 데이터링크 계층에서 MAC 기반 필터링·전달로 세그먼트를 연결합니다."
        }
      ],
      "answer": "d",
      "explanation": "브리지는 데이터링크 계층에서 MAC 기반 필터링·전달로 세그먼트를 연결합니다.",
      "source": "nsa_lecture04 (26-2) (1).pdf · 원본 PDF 5 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-229",
      "week": 4,
      "type": "choice",
      "prompt": "강의에서 설명하는 프로토콜 변환 게이트웨이의 핵심 역할은?",
      "options": [
        {
          "id": "a",
          "text": "서로 다른 네트워크 환경의 데이터 형식과 프로토콜을 변환·중계한다.",
          "explanation": "강의의 변환 게이트웨이는 서로 다른 형식·프로토콜을 연결하는 개념입니다. 기본 게이트웨이라는 말은 보통 로컬 라우터를 뜻하므로 문맥을 구별합니다."
        },
        {
          "id": "b",
          "text": "서로 다른 네트워크 환경에서도 데이터 변환 없이 신호 증폭만 수행한다.",
          "explanation": "단순 신호 재생은 리피터의 역할입니다. 변환 게이트웨이는 형식·프로토콜 차이를 연결합니다."
        },
        {
          "id": "c",
          "text": "서로 다른 네트워크 환경의 패킷 중 TCP 포트 0에 해당하는 것만 전달한다.",
          "explanation": "게이트웨이의 정의가 TCP 포트 0 전달로 제한되는 것은 아닙니다."
        },
        {
          "id": "d",
          "text": "서로 다른 네트워크 환경에서 받은 패킷을 변환하지 않고 모두 폐기한다.",
          "explanation": "모든 패킷 폐기는 변환·중계라는 게이트웨이의 역할이 아닙니다."
        }
      ],
      "answer": "a",
      "explanation": "강의의 변환 게이트웨이는 서로 다른 형식·프로토콜을 연결하는 개념입니다. 기본 게이트웨이라는 말은 보통 로컬 라우터를 뜻하므로 문맥을 구별합니다.",
      "source": "nsa_lecture04 (26-2) (1).pdf · 원본 PDF 10 · 문맥 차이 보충쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-230",
      "week": 4,
      "type": "choice",
      "prompt": "포트 기반 VLAN은 무엇을 기준으로 단말의 VLAN 소속을 정하나요?",
      "options": [
        {
          "id": "a",
          "text": "단말 사용자가 로그인할 때 입력한 비밀번호의 전체 길이",
          "explanation": "포트 기반 VLAN은 사용자 암호 길이가 아니라 스위치 접속 포트를 기준으로 합니다."
        },
        {
          "id": "b",
          "text": "단말이 스위치에 물리적으로 연결되어 있는 접속 포트",
          "explanation": "여기서 포트는 물리적인 스위치 접속 포트입니다. TCP/UDP 포트 번호와 구별하세요."
        },
        {
          "id": "c",
          "text": "단말이 보내는 TCP 세그먼트 헤더에 기록된 순서번호",
          "explanation": "TCP 순서번호는 바이트 전달 상태 정보입니다. 물리 접속 포트 기준 VLAN과 다릅니다."
        },
        {
          "id": "d",
          "text": "단말이 보내는 IP 패킷 헤더에 기록된 TTL 필드 값",
          "explanation": "TTL은 IP 순환 제한 필드입니다. VLAN 소속 기준인 접속 포트와 다릅니다."
        }
      ],
      "answer": "b",
      "explanation": "여기서 포트는 물리적인 스위치 접속 포트입니다. TCP/UDP 포트 번호와 구별하세요.",
      "source": "nsa_lecture04 (26-2) (1).pdf · 원본 PDF 11-12 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-231",
      "week": 4,
      "type": "short",
      "prompt": "하나의 L2 브로드캐스트 프레임이 전달될 수 있는 논리적 범위를 무엇이라고 하나요?",
      "answers": [
        "브로드캐스트 도메인",
        "브로드캐스트도메인",
        "broadcast domain",
        "Broadcast Domain",
        "Broadcast domain"
      ],
      "explanation": "브로드캐스트 도메인은 L2 브로드캐스트가 도달하는 범위입니다. VLAN은 이 범위를 논리적으로 분리하며 충돌 도메인과는 다른 개념입니다.",
      "source": "nsa_lecture04 (26-2) (1).pdf · 원본 PDF 11 · 핵심 용어쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    },
    {
      "id": "nsm-232",
      "week": 4,
      "type": "essay",
      "prompt": "VLAN을 물리 배선과 논리 그룹의 차이, 브로드캐스트 범위, 보안 정책의 관점에서 설명하세요.",
      "model": "VLAN은 물리적 위치나 배선만으로 구분하지 않고 LAN을 논리 그룹으로 나누는 기술이다. VLAN마다 별도의 L2 브로드캐스트 도메인을 구성하여 프레임 전달 범위를 나눈다. 그룹별 보안 정책 적용과 이동·변경 관리에 유리하지만 VLAN 자체가 통신 암호화나 완전한 접근 통제를 자동 보장하지는 않는다. 다른 VLAN 간 통신에는 L3 라우팅과 접근 정책이 필요하다. 소속 분류 기준에는 포트·MAC·네트워크 주소·프로토콜 등이 있다.",
      "rubric": [
        "물리 배선과 논리 그룹 구분",
        "VLAN별 브로드캐스트 범위",
        "정책 적용과 관리상의 장점",
        "암호화·접근 통제의 별도 필요",
        "분류 기준 예시"
      ],
      "explanation": "VLAN은 물리적 위치나 배선만으로 구분하지 않고 LAN을 논리 그룹으로 나누는 기술이다. VLAN마다 별도의 L2 브로드캐스트 도메인을 구성하여 프레임 전달 범위를 나눈다. 그룹별 보안 정책 적용과 이동·변경 관리에 유리하지만 VLAN 자체가 통신 암호화나 완전한 접근 통제를 자동 보장하지는 않는다. 다른 VLAN 간 통신에는 L3 라우팅과 접근 정책이 필요하다. 소속 분류 기준에는 포트·MAC·네트워크 주소·프로토콜 등이 있다.",
      "source": "nsa_lecture04 (26-2) (1).pdf · 원본 PDF 11-12 · 보안 경계 보충쪽 · 핵심 용어 보충",
      "topics": [
        "basic",
        "keyword-concepts"
      ]
    }
  ]
};
  window.STUDY_BANKS.push(bank);
})();
