/* 전체 사이트 공통 문제은행 */
(() => {
  const bank = {
  "id": "hacking",
  "title": "해킹실무",
  "description": "리눅스 기초부터 네트워크 분석, UID 권한 흐름까지",
  "source": "해킹실무 1~7주차 통합정리 빈칸학습",
  "weeks": [
    "해킹 기초",
    "리눅스 구조",
    "계정과 권한",
    "정보 수집",
    "DB와 인증",
    "스니핑과 대응",
    "SetUID와 백도어"
  ],
  "questions": [
    {
      "id": "hk-001",
      "week": 1,
      "type": "choice",
      "prompt": "허가된 범위에서 취약점을 점검하고 개선하는 보안 전문가는?",
      "explanation": "화이트 햇은 사전 허가와 정해진 범위 안에서 보안 개선을 목적으로 활동한다.",
      "source": "PDF 2쪽",
      "options": [
        {
          "id": "o0",
          "text": "화이트 햇"
        },
        {
          "id": "o1",
          "text": "블랙 햇"
        },
        {
          "id": "o2",
          "text": "스크립트 키디"
        },
        {
          "id": "o3",
          "text": "핵티비스트"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-002",
      "week": 1,
      "type": "choice",
      "prompt": "원리 이해가 부족한 채 다른 사람이 만든 도구에 의존하는 사람은?",
      "explanation": "스크립트 키디는 도구의 동작 원리를 충분히 이해하지 않고 기존 도구나 스크립트에 의존하는 유형이다.",
      "source": "PDF 2쪽",
      "options": [
        {
          "id": "o0",
          "text": "스크립트 키디"
        },
        {
          "id": "o1",
          "text": "화이트 햇"
        },
        {
          "id": "o2",
          "text": "블루 햇"
        },
        {
          "id": "o3",
          "text": "커널 개발자"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-003",
      "week": 1,
      "type": "choice",
      "prompt": "침해 활동과 자신의 존재를 숨기고 접근을 유지하는 도구 모음은?",
      "explanation": "루트킷은 은폐와 접근 유지에 연결된다. 키로거는 키 입력 수집, 스니퍼는 패킷 캡처·분석 도구다.",
      "source": "PDF 2쪽",
      "options": [
        {
          "id": "o0",
          "text": "루트킷"
        },
        {
          "id": "o1",
          "text": "키로거"
        },
        {
          "id": "o2",
          "text": "패킷 스니퍼"
        },
        {
          "id": "o3",
          "text": "방화벽"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-004",
      "week": 1,
      "type": "choice",
      "prompt": "IP·DNS·ARP 등의 신원이나 주소를 위조하는 행위는?",
      "explanation": "스푸핑은 신원이나 주소를 위조하는 행위다. 스니핑(통신 관찰)과 구분한다.",
      "source": "PDF 2쪽",
      "options": [
        {
          "id": "o0",
          "text": "스푸핑"
        },
        {
          "id": "o1",
          "text": "스케줄링"
        },
        {
          "id": "o2",
          "text": "마운트"
        },
        {
          "id": "o3",
          "text": "리다이렉션"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-005",
      "week": 1,
      "type": "choice",
      "prompt": "정치·사회·종교적 메시지 전달을 목적으로 활동하는 유형은?",
      "explanation": "핵티비스트는 활동 목적이 사회·정치적 메시지 전달과 연결된다.",
      "source": "PDF 2쪽",
      "options": [
        {
          "id": "o0",
          "text": "핵티비스트"
        },
        {
          "id": "o1",
          "text": "블루 햇"
        },
        {
          "id": "o2",
          "text": "스크립트 키디"
        },
        {
          "id": "o3",
          "text": "장치 드라이버"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-006",
      "week": 1,
      "type": "short",
      "prompt": "0000부터 9999까지 숫자 4자리 비밀번호의 전체 경우의 수는? (숫자만)",
      "explanation": "각 자리마다 10개를 선택하므로 10⁴ = 10,000가지다. 1~4자리를 모두 포함한 경우와 다르다.",
      "source": "PDF 2쪽",
      "answers": [
        "10000",
        "10,000"
      ]
    },
    {
      "id": "hk-007",
      "week": 1,
      "type": "essay",
      "prompt": "그레이 햇이 취약점을 발견한 뒤 관리자에게 알렸다는 이유만으로 사전 허가가 있었다고 볼 수 없는 이유를 설명하세요.",
      "explanation": "선의나 사후 통보는 사전 허가를 대신하지 않는다. 점검하기 전에 권한과 범위를 확인해야 한다.",
      "source": "PDF 2쪽",
      "model": "선의나 사후 통보는 사전 허가를 대신하지 않는다. 점검하기 전에 권한과 범위를 확인해야 한다.",
      "rubric": [
        "선의·사후 통보와 사전 허가를 구분했다.",
        "점검 권한·범위의 사전 확인을 언급했다."
      ]
    },
    {
      "id": "hk-008",
      "week": 2,
      "type": "choice",
      "prompt": "하드웨어 장치와 자원을 관리하고 시스템 기능을 제공하는 계층은?",
      "explanation": "커널은 장치·메모리·프로세스 등 자원을 관리한다. 쉘은 사용자 명령을 해석하고 실행한다.",
      "source": "PDF 3쪽",
      "options": [
        {
          "id": "o0",
          "text": "커널"
        },
        {
          "id": "o1",
          "text": "쉘"
        },
        {
          "id": "o2",
          "text": "사용자"
        },
        {
          "id": "o3",
          "text": "텍스트 편집기"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-009",
      "week": 2,
      "type": "choice",
      "prompt": "파이프라인(|)의 역할로 알맞은 것은?",
      "explanation": "파이프는 프로세스 사이의 데이터 전달 통로다. 임시 디스크 파일을 만들었다가 지우는 방식으로 정의하지 않는다.",
      "source": "PDF 3쪽",
      "options": [
        {
          "id": "o0",
          "text": "앞 명령의 표준 출력을 뒤 명령의 표준 입력에 연결한다."
        },
        {
          "id": "o1",
          "text": "모든 출력을 임시 디스크 파일에 저장한다."
        },
        {
          "id": "o2",
          "text": "파일의 소유자를 바꾼다."
        },
        {
          "id": "o3",
          "text": "명령을 항상 관리자 권한으로 실행한다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-010",
      "week": 2,
      "type": "choice",
      "prompt": "시스템과 서비스의 설정 파일이 주로 위치하는 디렉터리는?",
      "explanation": "/etc에는 passwd, hosts, xinetd.conf 같은 계정·시스템·서비스 설정 파일이 있다.",
      "source": "PDF 4쪽",
      "options": [
        {
          "id": "o0",
          "text": "/etc"
        },
        {
          "id": "o1",
          "text": "/dev"
        },
        {
          "id": "o2",
          "text": "/boot"
        },
        {
          "id": "o3",
          "text": "/tmp"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-011",
      "week": 2,
      "type": "choice",
      "prompt": "장치를 나타내는 특수 파일이 주로 있는 경로는?",
      "explanation": "/dev는 장치를 파일 인터페이스로 다루기 위한 특수 파일을 담는다.",
      "source": "PDF 4쪽",
      "options": [
        {
          "id": "o0",
          "text": "/dev"
        },
        {
          "id": "o1",
          "text": "/root"
        },
        {
          "id": "o2",
          "text": "/home"
        },
        {
          "id": "o3",
          "text": "/usr/include"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-012",
      "week": 2,
      "type": "choice",
      "prompt": "/etc/passwd와 /usr/bin/passwd의 차이로 맞는 것은?",
      "explanation": "계정 정보 /etc/passwd, 비밀번호 해시 등 /etc/shadow, 변경 프로그램 /usr/bin/passwd를 구분한다.",
      "source": "PDF 4쪽",
      "options": [
        {
          "id": "o0",
          "text": "전자는 계정 정보 파일, 후자는 비밀번호 변경 프로그램이다."
        },
        {
          "id": "o1",
          "text": "두 경로 모두 비밀번호 해시 파일이다."
        },
        {
          "id": "o2",
          "text": "전자는 실행 프로그램, 후자는 계정 정보다."
        },
        {
          "id": "o3",
          "text": "두 경로 모두 root의 홈 디렉터리다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-013",
      "week": 2,
      "type": "choice",
      "prompt": "개인 작업 파일의 기본 저장소로 해석하면 안 되는 경로는?",
      "explanation": "/usr는 공유 프로그램·라이브러리·읽기 중심 데이터의 경로다. 이름만 보고 개인 사용자 파일 저장소로 해석하지 않는다.",
      "source": "PDF 4쪽",
      "options": [
        {
          "id": "o0",
          "text": "/usr"
        },
        {
          "id": "o1",
          "text": "/home/kali"
        },
        {
          "id": "o2",
          "text": "일반 사용자의 홈 디렉터리"
        },
        {
          "id": "o3",
          "text": "사용자가 지정한 작업 폴더"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-014",
      "week": 2,
      "type": "short",
      "prompt": "리눅스 최상위 디렉터리를 기호로 쓰세요.",
      "explanation": "최상위 디렉터리는 /이다. root 계정이나 그 홈 디렉터리 /root와 구분한다.",
      "source": "PDF 4쪽",
      "answers": [
        "/"
      ]
    },
    {
      "id": "hk-015",
      "week": 2,
      "type": "short",
      "prompt": "root 계정의 홈 디렉터리 경로는?",
      "explanation": "/는 최상위 디렉터리, /root는 관리자 root의 홈 디렉터리다.",
      "source": "PDF 4쪽",
      "answers": [
        "/root"
      ]
    },
    {
      "id": "hk-016",
      "week": 2,
      "type": "short",
      "prompt": "C 헤더 파일이 위치하는 강의의 디렉터리 경로는?",
      "explanation": "/usr/include에는 C 등에서 사용하는 헤더 파일이 위치한다.",
      "source": "PDF 4쪽",
      "answers": [
        "/usr/include"
      ]
    },
    {
      "id": "hk-017",
      "week": 2,
      "type": "essay",
      "prompt": "쉘과 커널의 역할을 구분하고, 모든 응용 프로그램이 쉘을 거쳐 커널을 사용하는지 설명하세요.",
      "explanation": "쉘은 사용자 명령을 해석·실행하고, 커널은 장치와 자원을 관리하며 시스템 기능을 제공한다. 응용 프로그램이 반드시 쉘을 거치는 것은 아니다.",
      "source": "PDF 3쪽",
      "model": "쉘은 사용자 명령을 해석·실행하고, 커널은 장치와 자원을 관리하며 시스템 기능을 제공한다. 응용 프로그램이 반드시 쉘을 거치는 것은 아니다.",
      "rubric": [
        "쉘의 명령 해석·실행 역할",
        "커널의 자원 관리 역할",
        "모든 응용 프로그램이 쉘을 거치지는 않음"
      ]
    },
    {
      "id": "hk-018",
      "week": 3,
      "type": "choice",
      "prompt": "/etc/passwd에서 UID와 GID는 각각 몇 번째 필드인가?",
      "explanation": "계정명 : 비밀번호 필드 : UID : GID : 설명 : 홈 디렉터리 : 로그인 쉘의 7개 필드다.",
      "source": "PDF 5쪽",
      "options": [
        {
          "id": "o0",
          "text": "세 번째, 네 번째"
        },
        {
          "id": "o1",
          "text": "첫 번째, 두 번째"
        },
        {
          "id": "o2",
          "text": "네 번째, 다섯 번째"
        },
        {
          "id": "o3",
          "text": "여섯 번째, 일곱 번째"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-019",
      "week": 3,
      "type": "choice",
      "prompt": "ls -al에서 -a의 의미는?",
      "explanation": "-a는 숨김 항목 포함, -l은 긴 목록 형식이다.",
      "source": "PDF 5쪽",
      "options": [
        {
          "id": "o0",
          "text": "숨김 항목도 포함한다."
        },
        {
          "id": "o1",
          "text": "긴 목록 형식으로 표시한다."
        },
        {
          "id": "o2",
          "text": "소유자를 변경한다."
        },
        {
          "id": "o3",
          "text": "실행 가능한 파일만 표시한다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-020",
      "week": 3,
      "type": "choice",
      "prompt": "drwxr-xr-x의 숫자 권한은?",
      "explanation": "소유자 rwx=7, 그룹 r-x=5, 기타 r-x=5이므로 755다. 맨 앞 d는 디렉터리 유형이다.",
      "source": "PDF 6쪽",
      "options": [
        {
          "id": "o0",
          "text": "755"
        },
        {
          "id": "o1",
          "text": "644"
        },
        {
          "id": "o2",
          "text": "775"
        },
        {
          "id": "o3",
          "text": "777"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-021",
      "week": 3,
      "type": "choice",
      "prompt": "일반적인 생성 요청과 별도 기본 ACL이 없을 때, umask 022로 만든 파일과 디렉터리의 권한은?",
      "explanation": "일반 파일 요청 666, 디렉터리 요청 777에서 umask 비트를 제거한다. 단순한 십진수 뺄셈이 아니다.",
      "source": "PDF 6쪽",
      "options": [
        {
          "id": "o0",
          "text": "파일 644 / 디렉터리 755"
        },
        {
          "id": "o1",
          "text": "파일 755 / 디렉터리 755"
        },
        {
          "id": "o2",
          "text": "파일 664 / 디렉터리 775"
        },
        {
          "id": "o3",
          "text": "파일 666 / 디렉터리 777"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-022",
      "week": 3,
      "type": "choice",
      "prompt": "umask를 변경했을 때 기존 파일에 대한 설명으로 맞는 것은?",
      "explanation": "umask는 이후 새로 생성되는 항목의 권한에 영향을 준다. 기존 권한 변경은 chmod 등을 사용한다.",
      "source": "PDF 6쪽",
      "options": [
        {
          "id": "o0",
          "text": "기존 파일 권한을 일괄 변경하지 않는다."
        },
        {
          "id": "o1",
          "text": "기존 파일 모두가 새 권한으로 바뀐다."
        },
        {
          "id": "o2",
          "text": "기존 파일 소유자가 root가 된다."
        },
        {
          "id": "o3",
          "text": "기존 디렉터리가 삭제된다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-023",
      "week": 3,
      "type": "choice",
      "prompt": "파일의 소유자를 변경하는 명령은?",
      "explanation": "chown은 소유자, chmod는 권한, chgrp는 그룹을 변경한다.",
      "source": "PDF 6쪽",
      "options": [
        {
          "id": "o0",
          "text": "chown"
        },
        {
          "id": "o1",
          "text": "chmod"
        },
        {
          "id": "o2",
          "text": "chgrp"
        },
        {
          "id": "o3",
          "text": "umask"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-024",
      "week": 3,
      "type": "choice",
      "prompt": "SetUID 실행 직후 EUID는 누구의 UID로 설정되는가? (강의의 일반 실습 조건)",
      "explanation": "SetUID는 소유자가 root일 때만 적용되는 것이 아니다. 실행 파일 소유자가 kali라면 EUID는 kali의 UID가 된다.",
      "source": "PDF 7쪽",
      "options": [
        {
          "id": "o0",
          "text": "실행 파일 소유자의 UID"
        },
        {
          "id": "o1",
          "text": "항상 root의 UID"
        },
        {
          "id": "o2",
          "text": "항상 실행자의 기본 그룹 ID"
        },
        {
          "id": "o3",
          "text": "파일을 마지막으로 읽은 사용자의 UID"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-025",
      "week": 3,
      "type": "choice",
      "prompt": "-rwSr-xr-x에서 대문자 S가 의미하는 것은?",
      "explanation": "소유자 실행 위치의 s는 SetUID와 실행 비트가 함께 있음을, S는 실행 비트 없이 SetUID만 있음을 나타낸다.",
      "source": "PDF 7쪽",
      "options": [
        {
          "id": "o0",
          "text": "SetUID는 있지만 소유자 실행 비트는 없다."
        },
        {
          "id": "o1",
          "text": "SetUID와 소유자 실행 비트가 모두 있다."
        },
        {
          "id": "o2",
          "text": "SetGID만 있다."
        },
        {
          "id": "o3",
          "text": "일반 사용자의 읽기 권한이 없다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-026",
      "week": 3,
      "type": "choice",
      "prompt": "강의에서 사용하는 해킹 5단계의 순서로 맞는 것은?",
      "explanation": "PDF의 설명 순서다. 모든 실제 침해가 반드시 이 순서를 따르는 것은 아니다.",
      "source": "PDF 8쪽",
      "options": [
        {
          "id": "o0",
          "text": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성"
        },
        {
          "id": "o1",
          "text": "정보 수집 → 로컬 어택 → 리모트 어택 → 백도어 생성 → 흔적 지우기"
        },
        {
          "id": "o2",
          "text": "백도어 생성 → 정보 수집 → 로컬 어택 → 흔적 지우기 → 리모트 어택"
        },
        {
          "id": "o3",
          "text": "리모트 어택 → 정보 수집 → 흔적 지우기 → 백도어 생성 → 로컬 어택"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-027",
      "week": 3,
      "type": "choice",
      "prompt": "일정에 따라 주기적으로 작업을 실행하는 강의의 서비스 이름은?",
      "explanation": "crond는 반복 일정, atd는 예약한 시점의 일회성 작업과 연결된다.",
      "source": "PDF 9쪽",
      "options": [
        {
          "id": "o0",
          "text": "crond"
        },
        {
          "id": "o1",
          "text": "atd"
        },
        {
          "id": "o2",
          "text": "named"
        },
        {
          "id": "o3",
          "text": "sendmail"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-029",
      "week": 3,
      "type": "short",
      "prompt": "일반적인 생성 요청과 별도 기본 ACL이 없을 때, umask 002로 만든 일반 파일의 숫자 권한은?",
      "explanation": "666에서 002 비트를 제거하면 664(rw-rw-r--)다. 디렉터리는 775다.",
      "source": "PDF 6쪽",
      "answers": [
        "664",
        "0664"
      ]
    },
    {
      "id": "hk-030",
      "week": 3,
      "type": "short",
      "prompt": "SetUID와 기본 권한 755를 합친 네 자리 권한은?",
      "explanation": "4000(SetUID) + 755 = 4755이며 일반 파일의 기호 표시는 -rwsr-xr-x이다.",
      "source": "PDF 7쪽",
      "answers": [
        "4755"
      ]
    },
    {
      "id": "hk-032",
      "week": 3,
      "type": "essay",
      "prompt": "Exploit과 Backdoor의 차이를 설명하세요.",
      "explanation": "Exploit은 취약점을 실제로 이용하는 코드나 기법이다. Backdoor는 정상 인증·접근 절차를 우회하는 숨겨진 접근 경로로, 이후 재접근과 접근 유지에 연결된다.",
      "source": "PDF 8쪽",
      "model": "Exploit은 취약점을 실제로 이용하는 코드나 기법이다. Backdoor는 정상 인증·접근 절차를 우회하는 숨겨진 접근 경로로, 이후 재접근과 접근 유지에 연결된다.",
      "rubric": [
        "Exploit의 취약점 이용",
        "Backdoor의 인증·접근 우회",
        "최초 이용 수단과 접근 유지의 구분"
      ]
    },
    {
      "id": "hk-033",
      "week": 4,
      "type": "choice",
      "prompt": "검색엔진과 공개 데이터에서 대상 정보를 얻는 방식은?",
      "explanation": "수동적 수집은 공개 출처를 활용한다. 대상 서비스에 직접 요청·접속하는 방식은 능동적 수집이다.",
      "source": "PDF 10쪽",
      "options": [
        {
          "id": "o0",
          "text": "수동적 정보 수집"
        },
        {
          "id": "o1",
          "text": "능동적 정보 수집"
        },
        {
          "id": "o2",
          "text": "로컬 권한 상승"
        },
        {
          "id": "o3",
          "text": "로그 삭제"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-034",
      "week": 4,
      "type": "choice",
      "prompt": "Metasploit 콘솔에서 모듈을 선택하는 명령은?",
      "explanation": "use는 모듈 선택, set은 옵션 설정, run은 실행, db_status는 DB 연결 상태 확인이다.",
      "source": "PDF 10쪽",
      "options": [
        {
          "id": "o0",
          "text": "use"
        },
        {
          "id": "o1",
          "text": "set"
        },
        {
          "id": "o2",
          "text": "run"
        },
        {
          "id": "o3",
          "text": "db_status"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-035",
      "week": 4,
      "type": "choice",
      "prompt": "직접 호스팅되는 SMB 서비스의 단서가 되는 포트는?",
      "explanation": "445는 직접 호스팅 SMB, 139는 NetBIOS 세션, 135는 Microsoft RPC 계열 서비스의 단서다.",
      "source": "PDF 11쪽",
      "options": [
        {
          "id": "o0",
          "text": "445/tcp"
        },
        {
          "id": "o1",
          "text": "53/udp"
        },
        {
          "id": "o2",
          "text": "3306/tcp"
        },
        {
          "id": "o3",
          "text": "23/tcp"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-036",
      "week": 4,
      "type": "choice",
      "prompt": "SMB 정책 결과 PasswordMin=0의 의미는?",
      "explanation": "정책의 최소 길이와 실제 계정에 설정된 비밀번호는 다르다.",
      "source": "PDF 11쪽",
      "options": [
        {
          "id": "o0",
          "text": "최소 비밀번호 길이 정책이 0이다."
        },
        {
          "id": "o1",
          "text": "모든 계정의 비밀번호가 비어 있다."
        },
        {
          "id": "o2",
          "text": "비밀번호가 숫자 0이다."
        },
        {
          "id": "o3",
          "text": "모든 계정이 잠겨 있다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-037",
      "week": 4,
      "type": "choice",
      "prompt": "wafw00f 실행 결과가 연결 거부 오류인 경우의 올바른 결론은?",
      "explanation": "연결 거부는 WAF 식별에 성공한 결과가 아니다.",
      "source": "PDF 11쪽",
      "options": [
        {
          "id": "o0",
          "text": "이 오류만으로 WAF 존재·부재를 확정할 수 없다."
        },
        {
          "id": "o1",
          "text": "WAF가 없다고 확정한다."
        },
        {
          "id": "o2",
          "text": "WAF가 있다고 확정한다."
        },
        {
          "id": "o3",
          "text": "웹 서버 버전이 확정된다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-038",
      "week": 4,
      "type": "short",
      "prompt": "Kali 쉘에서 Metasploit 콘솔을 시작하는 명령은?",
      "explanation": "Kali 쉘에서 msfconsole을 실행한 다음 콘솔 내부에서 use, set, run 등을 입력한다.",
      "source": "PDF 10쪽",
      "answers": [
        "msfconsole"
      ]
    },
    {
      "id": "hk-039",
      "week": 4,
      "type": "short",
      "prompt": "Metasploit에서 대상 호스트를 지정하는 옵션 이름은?",
      "explanation": "RHOSTS는 대상 호스트, THREADS는 병렬 처리 수준이다. 옵션을 모듈마다 확인한다.",
      "source": "PDF 11쪽",
      "answers": [
        "RHOSTS"
      ]
    },
    {
      "id": "hk-041",
      "week": 5,
      "type": "choice",
      "prompt": "Metasploit의 DB 연결 상태를 확인하는 명령은?",
      "explanation": "서비스를 시작했다는 사실만으로 MSF의 DB 연결까지 입증되지는 않는다. 콘솔에서 db_status로 확인한다.",
      "source": "PDF 12쪽",
      "options": [
        {
          "id": "o0",
          "text": "db_status"
        },
        {
          "id": "o1",
          "text": "service postgresql start"
        },
        {
          "id": "o2",
          "text": "services -d"
        },
        {
          "id": "o3",
          "text": "hosts -d"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-042",
      "week": 5,
      "type": "choice",
      "prompt": "Nmap 스캔 결과를 Metasploit DB에 저장하는 데 사용하는 명령은?",
      "explanation": "DB 연결 상태에서 db_nmap으로 스캔·가져오기 후 services로 저장된 서비스를 확인한다.",
      "source": "PDF 13쪽",
      "options": [
        {
          "id": "o0",
          "text": "db_nmap"
        },
        {
          "id": "o1",
          "text": "db_status"
        },
        {
          "id": "o2",
          "text": "creds"
        },
        {
          "id": "o3",
          "text": "msfconsole"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-043",
      "week": 5,
      "type": "choice",
      "prompt": "Nmap의 -sT 옵션 의미는?",
      "explanation": "-sT는 TCP Connect, -sU는 UDP, -sV는 서비스 버전, -O는 OS 식별이다.",
      "source": "PDF 13쪽",
      "options": [
        {
          "id": "o0",
          "text": "TCP Connect 스캔"
        },
        {
          "id": "o1",
          "text": "UDP 스캔"
        },
        {
          "id": "o2",
          "text": "OS 식별"
        },
        {
          "id": "o3",
          "text": "서비스 버전 식별"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-044",
      "week": 5,
      "type": "choice",
      "prompt": "Nmap의 --reason 옵션 의미는?",
      "explanation": "--reason은 상태 판정의 이유를 표시한다. 포트 범위 지정은 -p다.",
      "source": "PDF 13쪽",
      "options": [
        {
          "id": "o0",
          "text": "포트 상태 판정 이유 표시"
        },
        {
          "id": "o1",
          "text": "전체 포트 자동 검사"
        },
        {
          "id": "o2",
          "text": "스캔 결과 삭제"
        },
        {
          "id": "o3",
          "text": "비밀번호 후보 파일 지정"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-045",
      "week": 5,
      "type": "choice",
      "prompt": "crunch 1 4의 두 숫자가 뜻하는 것은?",
      "explanation": "1~4자리 모두를 뜻한다. 숫자 문자 집합이면 10+100+1000+10000=11,110개다.",
      "source": "PDF 14쪽",
      "options": [
        {
          "id": "o0",
          "text": "최소 길이 1, 최대 길이 4"
        },
        {
          "id": "o1",
          "text": "정확히 4자리만 생성"
        },
        {
          "id": "o2",
          "text": "포트 1부터 4까지 검사"
        },
        {
          "id": "o3",
          "text": "문자 집합 1개와 출력 파일 4개"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-046",
      "week": 5,
      "type": "choice",
      "prompt": "기존 파일 내용 뒤에 출력을 덧붙이는 기호는?",
      "explanation": ">>는 덧붙이기, >는 덮어쓰기다. cat 입력을 끝낼 때 Ctrl+D를 사용한다. Ctrl+Z는 일시 중지다.",
      "source": "PDF 14쪽",
      "options": [
        {
          "id": "o0",
          "text": ">>"
        },
        {
          "id": "o1",
          "text": ">"
        },
        {
          "id": "o2",
          "text": "|"
        },
        {
          "id": "o3",
          "text": "2>"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-047",
      "week": 5,
      "type": "choice",
      "prompt": "Metasploit의 user_file / pass_file에 지정하는 경로는?",
      "explanation": "강의의 사용자명·비밀번호 후보 파일은 Kali에 있다. 대상 서버의 파일과 혼동하지 않는다.",
      "source": "PDF 15쪽",
      "options": [
        {
          "id": "o0",
          "text": "점검 도구를 실행하는 Kali의 후보 파일 경로"
        },
        {
          "id": "o1",
          "text": "항상 대상 VM의 경로"
        },
        {
          "id": "o2",
          "text": "대상 DB 내부 테이블 이름"
        },
        {
          "id": "o3",
          "text": "웹 서버의 URL"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-048",
      "week": 5,
      "type": "choice",
      "prompt": "Login Successful: postgres:postgres@template1의 올바른 해석은?",
      "explanation": "@template1은 DB 이름이다. DB 인증 성공과 운영체제 UID 0 획득은 별개다.",
      "source": "PDF 15쪽",
      "options": [
        {
          "id": "o0",
          "text": "사용자 postgres / 비밀번호 postgres / DB template1"
        },
        {
          "id": "o1",
          "text": "사용자 postgres / 비밀번호 postgres@template1"
        },
        {
          "id": "o2",
          "text": "운영체제 root 권한 획득"
        },
        {
          "id": "o3",
          "text": "사용자 template1 / 비밀번호 postgres"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-049",
      "week": 5,
      "type": "choice",
      "prompt": "Metasploit에서 services -d의 의미는?",
      "explanation": "MSF DB의 레코드 정리 명령이다. 대상 시스템에서 서비스가 종료되는 것은 아니다.",
      "source": "PDF 12쪽",
      "options": [
        {
          "id": "o0",
          "text": "저장된 서비스 레코드를 삭제한다."
        },
        {
          "id": "o1",
          "text": "대상 서버의 모든 서비스를 중지한다."
        },
        {
          "id": "o2",
          "text": "PostgreSQL을 시작한다."
        },
        {
          "id": "o3",
          "text": "대상의 포트를 닫는다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-051",
      "week": 5,
      "type": "short",
      "prompt": "숫자 문자 집합으로 1~4자리 조합을 모두 만들면 몇 개인가요? (숫자만)",
      "explanation": "10¹ + 10² + 10³ + 10⁴ = 11,110개다. 정확히 4자리만인 10,000개와 구분한다.",
      "source": "PDF 14쪽",
      "answers": [
        "11110",
        "11,110"
      ]
    },
    {
      "id": "hk-052",
      "week": 5,
      "type": "short",
      "prompt": "강의에서 사용하는 PostgreSQL의 포트 번호는?",
      "explanation": "PostgreSQL은 5432, MySQL은 3306이다.",
      "source": "PDF 15쪽",
      "answers": [
        "5432"
      ]
    },
    {
      "id": "hk-054",
      "week": 6,
      "type": "choice",
      "prompt": "프러미스큐어스 모드의 올바른 설명은?",
      "explanation": "이미 인터페이스에 도달한 프레임의 수신 범위를 바꾼다. 다른 스위치 포트에서만 흐르는 패킷까지 자동으로 받지는 않는다.",
      "source": "PDF 16쪽",
      "options": [
        {
          "id": "o0",
          "text": "인터페이스에 도달한 프레임을 목적지 MAC이 달라도 받아들인다."
        },
        {
          "id": "o1",
          "text": "스위치 전체의 모든 트래픽이 자동으로 도달한다."
        },
        {
          "id": "o2",
          "text": "암호화된 모든 비밀번호를 자동으로 해독한다."
        },
        {
          "id": "o3",
          "text": "원격 호스트의 UID를 변경한다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-055",
      "week": 6,
      "type": "choice",
      "prompt": "tcpdump -i eth0 -X host 192.168.44.204에서 -i eth0는?",
      "explanation": "-i는 인터페이스, -X는 16진수와 ASCII 표시, host는 출발지 또는 목적지 주소 필터다.",
      "source": "PDF 17쪽",
      "options": [
        {
          "id": "o0",
          "text": "캡처 인터페이스 지정"
        },
        {
          "id": "o1",
          "text": "출력 파일 지정"
        },
        {
          "id": "o2",
          "text": "대상 비밀번호 지정"
        },
        {
          "id": "o3",
          "text": "포트 0번만 지정"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-056",
      "week": 6,
      "type": "choice",
      "prompt": "텔넷에서 비밀번호가 화면에 가려져 있을 때 올바른 설명은?",
      "explanation": "화면의 마스킹은 전송 암호화가 아니다. 강의는 텔넷의 평문 정보가 패킷에 노출될 수 있음을 확인한다.",
      "source": "PDF 17쪽",
      "options": [
        {
          "id": "o0",
          "text": "화면 표시 여부와 통신 암호화 여부는 다르다."
        },
        {
          "id": "o1",
          "text": "네트워크에서도 반드시 암호화된다."
        },
        {
          "id": "o2",
          "text": "스니핑이 절대 불가능하다."
        },
        {
          "id": "o3",
          "text": "비밀번호가 서버로 전송되지 않는다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-057",
      "week": 6,
      "type": "choice",
      "prompt": "강의의 ARP 리다이렉트에서 클라이언트 ARP 캐시의 서버 IP는 어느 MAC으로 바뀌는가?",
      "explanation": "서버 IP에 대한 MAC 대응을 Kali의 MAC으로 바꾸어 서버행 패킷이 중간 시스템을 지나도록 한다.",
      "source": "PDF 18쪽",
      "options": [
        {
          "id": "o0",
          "text": "중간 관찰자 Kali의 MAC"
        },
        {
          "id": "o1",
          "text": "클라이언트 자신의 MAC"
        },
        {
          "id": "o2",
          "text": "무조건 브로드캐스트 MAC"
        },
        {
          "id": "o3",
          "text": "DNS 서버의 MAC"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-058",
      "week": 6,
      "type": "choice",
      "prompt": "프러미스큐어스 모드 탐지 응답 하나로 모든 스니퍼의 존재를 확정할 수 있는가?",
      "explanation": "탐지 결과는 구성에 따라 달라진다. 응답·무응답 하나로 존재·부재를 단정하지 않는다.",
      "source": "PDF 19쪽",
      "options": [
        {
          "id": "o0",
          "text": "아니다. OS·인터페이스·네트워크 구성에 영향을 받는다."
        },
        {
          "id": "o1",
          "text": "그렇다. 모든 스니퍼는 동일한 응답을 한다."
        },
        {
          "id": "o2",
          "text": "응답이 없으면 반드시 안전하다."
        },
        {
          "id": "o3",
          "text": "DNS 응답만 있으면 관리자 권한이 확정된다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-059",
      "week": 6,
      "type": "choice",
      "prompt": "MIME 이메일의 암호화·전자서명과 X.509 인증서에 연결되는 기술은?",
      "explanation": "S/MIME은 MIME 이메일의 암호화와 전자서명에 사용되며 강의는 X.509 인증서와 연결한다.",
      "source": "PDF 19쪽",
      "options": [
        {
          "id": "o0",
          "text": "S/MIME"
        },
        {
          "id": "o1",
          "text": "텔넷"
        },
        {
          "id": "o2",
          "text": "ARP"
        },
        {
          "id": "o3",
          "text": "FIFO"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-060",
      "week": 6,
      "type": "choice",
      "prompt": "VPN에 대한 설명으로 적절한 것은?",
      "explanation": "암호화가 적용되는 구간과 종단의 보안은 구분해야 한다.",
      "source": "PDF 19쪽",
      "options": [
        {
          "id": "o0",
          "text": "단말과 VPN 종단 사이를 보호하며 종단 침해까지 해결하지는 않는다."
        },
        {
          "id": "o1",
          "text": "모든 종단의 악성 프로그램을 제거한다."
        },
        {
          "id": "o2",
          "text": "복호화 후 데이터도 항상 숨긴다."
        },
        {
          "id": "o3",
          "text": "상대 인증이 전혀 필요 없다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-061",
      "week": 6,
      "type": "short",
      "prompt": "tcpdump에서 16진수와 ASCII를 함께 표시하는 옵션은? (대소문자 구분)",
      "explanation": "-x는 16진수, -X는 16진수와 ASCII다. -X만으로 두 형식을 함께 표시할 수 있다.",
      "source": "PDF 17쪽",
      "answers": [
        "-X"
      ]
    },
    {
      "id": "hk-062",
      "week": 6,
      "type": "short",
      "prompt": "강의 Windows 클라이언트에서 ARP 캐시를 조회하는 명령은?",
      "explanation": "arp -a로 IP-MAC 대응을 확인한다. 변조 전후 같은 서버 IP에 연결된 MAC을 비교한다.",
      "source": "PDF 18쪽",
      "answers": [
        "arp -a"
      ]
    },
    {
      "id": "hk-063",
      "week": 6,
      "type": "short",
      "prompt": "텔넷 대신 암호화된 원격 로그인을 제공하는 대표적인 프로토콜은?",
      "explanation": "SSH는 원격 로그인 통신을 보호한다. 비밀번호 화면 마스킹과 네트워크 암호화를 구분한다.",
      "source": "PDF 19쪽",
      "answers": [
        "SSH"
      ]
    },
    {
      "id": "hk-064",
      "week": 6,
      "type": "essay",
      "prompt": "ARP 캐시의 MAC이 바뀌었다는 것만으로 정상 통신을 유지하며 패킷 캡처에도 성공했다고 볼 수 없는 이유는?",
      "explanation": "ARP 변조는 IP-MAC 대응의 변화다. 중간 시스템이 패킷을 전달해야 정상 세션이 이어지고, 캡처 인터페이스에 패킷이 도달하고 캡처가 수행되어야 관찰도 가능하다. MAC 대응, 패킷 전달, 캡처를 각각 확인해야 한다.",
      "source": "PDF 18쪽",
      "model": "ARP 변조는 IP-MAC 대응의 변화다. 중간 시스템이 패킷을 전달해야 정상 세션이 이어지고, 캡처 인터페이스에 패킷이 도달하고 캡처가 수행되어야 관찰도 가능하다. MAC 대응, 패킷 전달, 캡처를 각각 확인해야 한다.",
      "rubric": [
        "IP-MAC 대응 변화",
        "중간 시스템의 패킷 전달 필요",
        "실제 캡처를 별도로 확인"
      ]
    },
    {
      "id": "hk-065",
      "week": 7,
      "type": "choice",
      "prompt": "RUID를 읽는 C 함수는?",
      "explanation": "getuid()는 RUID, geteuid()는 EUID를 조회한다.",
      "source": "PDF 20쪽",
      "options": [
        {
          "id": "o0",
          "text": "getuid()"
        },
        {
          "id": "o1",
          "text": "geteuid()"
        },
        {
          "id": "o2",
          "text": "setgid()"
        },
        {
          "id": "o3",
          "text": "chmod()"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-066",
      "week": 7,
      "type": "choice",
      "prompt": "강의의 일반 실습에서 자식 프로그램 종료 후 부모 쉘의 UID는?",
      "explanation": "프로그램 내부의 출력과 종료 뒤 부모 쉘에서 실행한 id를 섞지 않는다.",
      "source": "PDF 20쪽",
      "options": [
        {
          "id": "o0",
          "text": "기존 부모 쉘의 UID가 유지된다."
        },
        {
          "id": "o1",
          "text": "자식의 최종 EUID를 항상 물려받는다."
        },
        {
          "id": "o2",
          "text": "항상 0이 된다."
        },
        {
          "id": "o3",
          "text": "항상 파일 소유자 UID로 바뀐다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-067",
      "week": 7,
      "type": "choice",
      "prompt": "kali 소유 SetUID 파일을 root가 실행했을 때 실행 직후 (RUID, EUID)는?",
      "explanation": "강의 조건에서 RUID는 실행자 root의 0, EUID는 파일 소유자 kali의 1000이다.",
      "source": "PDF 23쪽",
      "options": [
        {
          "id": "o0",
          "text": "(0, 1000)"
        },
        {
          "id": "o1",
          "text": "(0, 0)"
        },
        {
          "id": "o2",
          "text": "(1000, 0)"
        },
        {
          "id": "o3",
          "text": "(1000, 1000)"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-068",
      "week": 7,
      "type": "choice",
      "prompt": "강의에서 SetUID만 설정한 bash가 최종 root 쉘을 유지하지 못한 이유는?",
      "explanation": "강의는 시작값 (1000,0)에서 bash가 권한을 낮춰 (1000,1000)이 된 결과를 보여준다. 환경·쉘에 따라 동작이 달라질 수 있다.",
      "source": "PDF 24쪽",
      "options": [
        {
          "id": "o0",
          "text": "bash의 기본 동작에서 실제·유효 UID가 다르면 권한을 낮출 수 있다."
        },
        {
          "id": "o1",
          "text": "SetUID는 bash에서 언제나 EUID를 1001로 만든다."
        },
        {
          "id": "o2",
          "text": "root가 파일을 소유할 수 없기 때문이다."
        },
        {
          "id": "o3",
          "text": "chmod가 파일 내용을 암호화하기 때문이다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-069",
      "week": 7,
      "type": "choice",
      "prompt": "2>/dev/null에서 숫자 2는 무엇인가?",
      "explanation": "0은 표준 입력, 1은 표준 출력, 2는 표준 오류다. 2>/dev/null은 표준 오류만 버린다.",
      "source": "PDF 26쪽",
      "options": [
        {
          "id": "o0",
          "text": "표준 오류 파일 디스크립터"
        },
        {
          "id": "o1",
          "text": "EUID"
        },
        {
          "id": "o2",
          "text": "RUID"
        },
        {
          "id": "o3",
          "text": "그룹 ID"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-070",
      "week": 7,
      "type": "choice",
      "prompt": "find / -perm 4755가 찾는 것은?",
      "explanation": "정확한 모드 일치이므로 다른 기본 권한을 가진 SetUID 파일까지 전부 찾는 조건은 아니다.",
      "source": "PDF 27쪽",
      "options": [
        {
          "id": "o0",
          "text": "권한 모드가 정확히 4755인 항목"
        },
        {
          "id": "o1",
          "text": "모든 SetUID 파일 전체"
        },
        {
          "id": "o2",
          "text": "소유자가 UID 4755인 파일"
        },
        {
          "id": "o3",
          "text": "크기가 4755바이트인 파일"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-071",
      "week": 7,
      "type": "choice",
      "prompt": "정상 chfn에 대한 설명으로 알맞은 것은?",
      "explanation": "강의의 임의 명령 실행은 교체된 파일의 동작이다. 정상 chfn 자체의 기능으로 암기하지 않는다.",
      "source": "PDF 27쪽",
      "options": [
        {
          "id": "o0",
          "text": "사용자 설명 정보를 변경하는 프로그램이다."
        },
        {
          "id": "o1",
          "text": "원래 임의 명령 실행용 백도어다."
        },
        {
          "id": "o2",
          "text": "항상 shadow 파일을 출력한다."
        },
        {
          "id": "o3",
          "text": "네트워크 패킷을 캡처한다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-072",
      "week": 7,
      "type": "choice",
      "prompt": "SetUID 파일이 발견되었을 때 적절한 판단은?",
      "explanation": "passwd 같은 정상 특수 권한 프로그램도 있다. 평소 기준과 비교해 추가·변경 여부와 내용을 확인한다.",
      "source": "PDF 28쪽",
      "options": [
        {
          "id": "o0",
          "text": "정상 용도와 변경 여부·소유권·무결성을 함께 점검한다."
        },
        {
          "id": "o1",
          "text": "모두 악성 파일이므로 삭제한다."
        },
        {
          "id": "o2",
          "text": "파일명만 정상이면 안전하다."
        },
        {
          "id": "o3",
          "text": "s 비트만으로 침해가 확정된다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-073",
      "week": 7,
      "type": "choice",
      "prompt": "setuid()가 0을 반환했다는 사실의 의미는?",
      "explanation": "반환값 0과 사용자 식별자 0은 다른 개념이다. 목표 ID와 실제 출력값을 함께 봐야 한다.",
      "source": "PDF 20쪽",
      "options": [
        {
          "id": "o0",
          "text": "함수 호출이 성공했다는 뜻이며 UID 0 획득과는 다르다."
        },
        {
          "id": "o1",
          "text": "항상 관리자 UID를 얻었다."
        },
        {
          "id": "o2",
          "text": "함수가 실패했다."
        },
        {
          "id": "o3",
          "text": "RUID가 반드시 0으로 바뀌었다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-074",
      "week": 7,
      "type": "blanks",
      "prompt": "root 소유, SetUID 없음, 실행자 root(0). setuid(1000) 호출 전후 네 값을 쓰세요.",
      "explanation": "처음부터 EUID=0인 강의 조건이므로 RUID와 EUID를 모두 1000으로 바꿀 수 있다.",
      "source": "PDF 32쪽",
      "fields": [
        "호출 전 RUID",
        "호출 전 EUID",
        "호출 후 RUID",
        "호출 후 EUID"
      ],
      "answers": [
        "0",
        "0",
        "1000",
        "1000"
      ]
    },
    {
      "id": "hk-075",
      "week": 7,
      "type": "blanks",
      "prompt": "root 소유, SetUID 없음, 실행자 kali(1000). setuid(0) 호출 전후 네 값을 쓰세요.",
      "explanation": "root 소유라는 사실만으로 EUID가 0이 되지 않는다. 일반 권한에서 이 root 변경 시도는 실패해 값이 유지된다.",
      "source": "PDF 32쪽",
      "fields": [
        "호출 전 RUID",
        "호출 전 EUID",
        "호출 후 RUID",
        "호출 후 EUID"
      ],
      "answers": [
        "1000",
        "1000",
        "1000",
        "1000"
      ]
    },
    {
      "id": "hk-076",
      "week": 7,
      "type": "blanks",
      "prompt": "root 소유, SetUID 있음, 실행자 kali1001(1001). setuid(1000) 호출 전후 네 값을 쓰세요.",
      "explanation": "SetUID로 실행 직후 EUID=0이 된다. 이 유효 root 권한으로 두 UID를 1000으로 바꾼다. 종료 후 부모 쉘은 (1001,1001)이다.",
      "source": "PDF 32쪽",
      "fields": [
        "호출 전 RUID",
        "호출 전 EUID",
        "호출 후 RUID",
        "호출 후 EUID"
      ],
      "answers": [
        "1001",
        "0",
        "1000",
        "1000"
      ]
    },
    {
      "id": "hk-077",
      "week": 7,
      "type": "blanks",
      "prompt": "kali(1000) 소유, SetUID 있음, 실행자 kali1001(1001). setuid(1000) 호출 전후 네 값을 쓰세요.",
      "explanation": "EUID는 소유자 kali의 1000이다. 관리자 유효 권한이 없어 RUID는 1001로 남는다. 출력이 그대로인 것만으로 함수 반환 실패를 확정하지 않는다.",
      "source": "PDF 32쪽",
      "fields": [
        "호출 전 RUID",
        "호출 전 EUID",
        "호출 후 RUID",
        "호출 후 EUID"
      ],
      "answers": [
        "1001",
        "1000",
        "1001",
        "1000"
      ]
    },
    {
      "id": "hk-078",
      "week": 7,
      "type": "blanks",
      "prompt": "kali(1000) 소유, SetUID 있음, 실행자 root(0). setuid(1000) 호출 전후 네 값을 쓰세요.",
      "explanation": "실행 전 root 쉘이었다는 사실보다 실행 후 EUID를 본다. 소유자 kali의 EUID=1000이므로 두 UID를 모두 1000으로 바꾸는 목표는 달성하지 못한다.",
      "source": "PDF 33쪽",
      "fields": [
        "호출 전 RUID",
        "호출 전 EUID",
        "호출 후 RUID",
        "호출 후 EUID"
      ],
      "answers": [
        "0",
        "1000",
        "0",
        "1000"
      ]
    },
    {
      "id": "hk-079",
      "week": 7,
      "type": "blanks",
      "prompt": "강의의 root 소유 SetUID 래퍼를 kali(1000)가 실행했다. 래퍼 진입 시와 setuid(0) 호출 후 값을 쓰세요.",
      "explanation": "래퍼 진입 때 (1000,0)이며, 강의의 유효 root 조건으로 setuid(0) 후 (0,0)이 된다. 이 값은 래퍼 내부 값이며 부모 쉘은 별개다.",
      "source": "PDF 33쪽",
      "fields": [
        "호출 전 RUID",
        "호출 전 EUID",
        "호출 후 RUID",
        "호출 후 EUID"
      ],
      "answers": [
        "1000",
        "0",
        "0",
        "0"
      ]
    },
    {
      "id": "hk-080",
      "week": 7,
      "type": "short",
      "prompt": "EUID를 읽는 C 함수는? (괄호 포함 가능)",
      "explanation": "geteuid()는 EUID를, getuid()는 RUID를 읽는다.",
      "source": "PDF 20쪽",
      "answers": [
        "geteuid()",
        "geteuid"
      ]
    },
    {
      "id": "hk-081",
      "week": 7,
      "type": "short",
      "prompt": "현재 디렉터리의 setuid1000 실행 파일을 실행하는 표기를 쓰세요.",
      "explanation": "./는 현재 디렉터리를 뜻한다. C 함수 setuid() 또는 권한 명령 chmod와 구분한다.",
      "source": "PDF 35쪽",
      "answers": [
        "./setuid1000"
      ]
    },
    {
      "id": "hk-082",
      "week": 7,
      "type": "short",
      "prompt": "id에서 숫자로 EUID만 조회하는 강의의 보충 명령은?",
      "explanation": "id -u는 EUID, id -ru는 RUID를 조회한다.",
      "source": "PDF 20쪽",
      "answers": [
        "id -u"
      ]
    },
    {
      "id": "hk-084",
      "week": 7,
      "type": "essay",
      "prompt": "SetUID more로 /etc/shadow 내용을 읽었을 때 부모 kali 쉘도 root가 되었다고 볼 수 있나요? 실행 중과 종료 후를 구분해 설명하세요.",
      "explanation": "강의 조건에서 more는 실행 중 (1000,0)의 유효 권한으로 파일을 읽는다. 자식 프로그램의 권한이 부모 쉘로 전달되는 것은 아니므로 종료 뒤 부모 kali 쉘은 (1000,1000)이다. 특권 파일 읽기 성공과 root 쉘 획득은 구분한다.",
      "source": "PDF 34쪽",
      "model": "강의 조건에서 more는 실행 중 (1000,0)의 유효 권한으로 파일을 읽는다. 자식 프로그램의 권한이 부모 쉘로 전달되는 것은 아니므로 종료 뒤 부모 kali 쉘은 (1000,1000)이다. 특권 파일 읽기 성공과 root 쉘 획득은 구분한다.",
      "rubric": [
        "more 실행 중 (1000,0)",
        "종료 뒤 부모 쉘 (1000,1000)",
        "특권 읽기와 root 쉘을 구분"
      ]
    },
    {
      "id": "hk-085",
      "week": 3,
      "type": "choice",
      "prompt": "SetGID가 설정된 실행 파일이 실행 직후 변경하는 값은?",
      "explanation": "SetGID는 그룹 체계에 적용된다. SetUID의 사용자 체계와 구분한다.",
      "source": "PDF 7쪽",
      "options": [
        {
          "id": "o0",
          "text": "EGID를 파일 그룹 ID로 설정한다."
        },
        {
          "id": "o1",
          "text": "RUID를 항상 0으로 설정한다."
        },
        {
          "id": "o2",
          "text": "EUID를 항상 root로 설정한다."
        },
        {
          "id": "o3",
          "text": "부모 쉘의 UID를 파일 소유자로 설정한다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-086",
      "week": 4,
      "type": "choice",
      "prompt": "SMB 열거 결과 LockoutTries=0의 강의 해석은?",
      "explanation": "LockoutTries는 시도 횟수 기반 잠금 정책이다. PasswordMin과 구분한다.",
      "source": "PDF 11쪽",
      "options": [
        {
          "id": "o0",
          "text": "시도 횟수 기반 잠금 임계값이 없다."
        },
        {
          "id": "o1",
          "text": "모든 계정이 이미 잠겼다."
        },
        {
          "id": "o2",
          "text": "사용자 수가 0명이다."
        },
        {
          "id": "o3",
          "text": "최소 비밀번호 길이가 0이다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-087",
      "week": 5,
      "type": "choice",
      "prompt": "Nmap의 -O 옵션에 대한 설명으로 맞는 것은?",
      "explanation": "대문자 O다. Too many fingerprints match처럼 후보가 많으면 구체적인 OS를 특정하지 못할 수 있다.",
      "source": "PDF 13쪽",
      "options": [
        {
          "id": "o0",
          "text": "운영체제 식별을 시도한다."
        },
        {
          "id": "o1",
          "text": "숫자 0을 사용해 포트 0만 검사한다."
        },
        {
          "id": "o2",
          "text": "항상 운영체제를 유일하게 확정한다."
        },
        {
          "id": "o3",
          "text": "암호화된 비밀번호를 해독한다."
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-088",
      "week": 5,
      "type": "short",
      "prompt": "cat 명령으로 후보를 입력하다 표준 입력을 끝낼 때 누르는 키는? (Ctrl+D 형식)",
      "explanation": "Ctrl+D는 표준 입력의 끝을 전달한다. Ctrl+Z는 작업 일시 중지이므로 입력 종료와 다르다.",
      "source": "PDF 14쪽",
      "answers": [
        "Ctrl+D",
        "Ctrl + D",
        "ctrl+d",
        "ctrl + d"
      ]
    },
    {
      "id": "hk-089",
      "week": 6,
      "type": "short",
      "prompt": "강의에서 텔넷과 연결하는 TCP 포트 번호는?",
      "explanation": "강의 패킷 흐름의 .204:23에서 23은 텔넷 서비스의 포트다.",
      "source": "PDF 18쪽",
      "answers": [
        "23"
      ]
    },
    {
      "id": "hk-090",
      "week": 7,
      "type": "choice",
      "prompt": "정상 프로그램처럼 보이거나 그 안에 의도치 않은 동작을 포함한 프로그램은?",
      "explanation": "프로그램의 정상 같은 외형과 실제 동작을 구분한다. 정상 파일명이나 안내 문구만으로 무결성을 판단하지 않는다.",
      "source": "PDF 28쪽",
      "options": [
        {
          "id": "o0",
          "text": "트로이 목마"
        },
        {
          "id": "o1",
          "text": "장치 드라이버 전체"
        },
        {
          "id": "o2",
          "text": "FIFO"
        },
        {
          "id": "o3",
          "text": "정상 passwd 전체"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-091",
      "week": 7,
      "type": "choice",
      "prompt": "서비스 침해로 실행된 코드의 권한을 판단할 때 확인할 것은?",
      "explanation": "서비스의 요청 처리 프로세스 권한이 중요하다. 웹 방문 자체가 방문자에게 서버 root 권한을 부여하는 것은 아니다.",
      "source": "PDF 28쪽",
      "options": [
        {
          "id": "o0",
          "text": "실제 요청을 처리하는 프로세스의 권한"
        },
        {
          "id": "o1",
          "text": "접속한 웹 방문자의 화면 크기"
        },
        {
          "id": "o2",
          "text": "도메인 이름의 길이"
        },
        {
          "id": "o3",
          "text": "백도어 파일명에 root가 들어가는지 여부"
        }
      ],
      "answer": "o0"
    },
    {
      "id": "hk-092",
      "week": 7,
      "type": "short",
      "prompt": "파일의 소유자를 바꾸는 명령과 C의 UID 변경 함수를 구분하세요. 파일 소유자 변경 명령 이름만 쓰세요.",
      "explanation": "chown은 파일 소유권 변경 명령이고 setuid()는 프로세스의 사용자 ID 변경을 요청하는 C 함수다. chmod는 파일 권한을 바꾼다.",
      "source": "PDF 7쪽",
      "answers": [
        "chown"
      ]
    }
  ]
};
  window.STUDY_BANKS.push(bank);
})();
