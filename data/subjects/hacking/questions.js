/* 전체 사이트 공통 문제은행 · 친구 제공 문제와 SetUID 집중 학습 포함 */
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
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
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
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 1
      }
    },
    {
      "id": "hk-075",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
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
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "kali",
        "actorUid": "1000",
        "file": "setuid0",
        "target": "0",
        "outcome": "실패",
        "number": 2
      }
    },
    {
      "id": "hk-076",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
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
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "root",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 3
      }
    },
    {
      "id": "hk-077",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
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
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 4
      }
    },
    {
      "id": "hk-078",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
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
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 5
      }
    },
    {
      "id": "hk-079",
      "week": 7,
      "type": "blanks",
      "prompt": "강의의 root 소유 SetUID 래퍼를 kali(1000)가 실행했다. 래퍼 진입 시와 setuid(0) 호출 후 값을 쓰세요.\n\n파일 권한 확인 · ls -al의 주요 열 (문제 조건 기준)\n권한 / 소유자 / 파일명\n-rwsr-xr-x / root / 래퍼 실행 파일\n일반 실행 파일 · 숫자 권한 4755 · 소유자 root (UID 0)\n소유자 rwx(읽기·쓰기·실행), 그룹 r-x(읽기·실행), 기타 r-x(읽기·실행).\n소유자 실행 위치의 s: 소유자 실행 권한과 SetUID가 함께 설정되어 있습니다.",
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
    },
    {
      "id": "hk-093",
      "week": 7,
      "type": "short",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.\n호출 전 RUID, 호출 전 EUID, 호출 후 RUID, 호출 후 EUID 순서로 숫자 네 개를 입력하세요. 공백 또는 쉼표로 구분합니다.",
      "explanation": "호출 전 (RUID, EUID)는 (0, 0), 호출 후는 (1000, 1000)이다. 유효 root 권한으로 두 UID를 모두 1000으로 바꾸는 강의 목표에 성공한다.",
      "source": "SUID 관련 ppt.pdf 4쪽 (슬라이드 12)",
      "answers": [
        "0 0 1000 1000",
        "0, 0, 1000, 1000",
        "0,0,1000,1000"
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 1
      }
    },
    {
      "id": "hk-094",
      "week": 7,
      "type": "short",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.\n호출 전 RUID, 호출 전 EUID, 호출 후 RUID, 호출 후 EUID 순서로 숫자 네 개를 입력하세요. 공백 또는 쉼표로 구분합니다.",
      "explanation": "호출 전후 모두 (RUID, EUID) = (1000, 1000)이다. root 소유라도 SetUID가 없으므로 유효 root 권한을 얻지 못해 setuid(0) 호출이 실패한다.",
      "source": "SUID 관련 ppt.pdf 7쪽 (슬라이드 15)",
      "answers": [
        "1000 1000 1000 1000",
        "1000, 1000, 1000, 1000",
        "1000,1000,1000,1000"
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "kali",
        "actorUid": "1000",
        "file": "setuid0",
        "target": "0",
        "outcome": "실패",
        "number": 2
      }
    },
    {
      "id": "hk-095",
      "week": 7,
      "type": "short",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.\n호출 전 RUID, 호출 전 EUID, 호출 후 RUID, 호출 후 EUID 순서로 숫자 네 개를 입력하세요. 공백 또는 쉼표로 구분합니다.",
      "explanation": "호출 전 (RUID, EUID)는 (1001, 0), 호출 후는 (1000, 1000)이다. SetUID로 얻은 유효 root 권한으로 두 UID를 모두 1000으로 바꾸는 강의 목표에 성공한다.",
      "source": "SUID 관련 ppt.pdf 9쪽 (슬라이드 17)",
      "answers": [
        "1001 0 1000 1000",
        "1001, 0, 1000, 1000",
        "1001,0,1000,1000"
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "root",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 3
      }
    },
    {
      "id": "hk-096",
      "week": 7,
      "type": "short",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.\n호출 전 RUID, 호출 전 EUID, 호출 후 RUID, 호출 후 EUID 순서로 숫자 네 개를 입력하세요. 공백 또는 쉼표로 구분합니다.",
      "explanation": "호출 전후 모두 (RUID, EUID) = (1001, 1000)이다. PPT의 실패 표시는 두 UID를 모두 1000으로 바꾸는 목표를 달성하지 못했다는 뜻이다. 출력이 그대로라는 사실만으로 함수가 -1을 반환했다고 확정하지 않는다.",
      "source": "SUID 관련 ppt.pdf 12쪽 (슬라이드 20)",
      "answers": [
        "1001 1000 1001 1000",
        "1001, 1000, 1001, 1000",
        "1001,1000,1001,1000"
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 4
      }
    },
    {
      "id": "hk-097",
      "week": 7,
      "type": "short",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.\n호출 전 RUID, 호출 전 EUID, 호출 후 RUID, 호출 후 EUID 순서로 숫자 네 개를 입력하세요. 공백 또는 쉼표로 구분합니다.",
      "explanation": "호출 전후 모두 (RUID, EUID) = (0, 1000)이다. 실행 파일 소유자의 UID가 EUID에 적용되어 두 UID를 모두 1000으로 바꾸는 강의 목표는 달성하지 못한다. PPT의 실패 표시는 함수 반환값의 실패와 구분한다.",
      "source": "SUID 관련 ppt.pdf 13쪽 (슬라이드 21)",
      "answers": [
        "0 1000 0 1000",
        "0, 1000, 0, 1000",
        "0,1000,0,1000"
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 5
      }
    },
    {
      "id": "hk-friend-w1t01",
      "week": 1,
      "type": "essay",
      "prompt": "화이트 햇(White Hat) 해커의 의미를 설명하시오.",
      "explanation": "악의 없이 시스템의 보안 취약점을 찾아내는 보안 전문가.",
      "source": "친구 제공 문제집 · 1주차 이론 1번 · 원문 7쪽",
      "model": "악의 없이 시스템의 보안 취약점을 찾아내는 보안 전문가.",
      "rubric": [
        "핵심 내용: 악의",
        "핵심 내용: 취약점"
      ]
    },
    {
      "id": "hk-friend-w1t02",
      "week": 1,
      "type": "short",
      "prompt": "타인에게 피해를 주는 불법적인 해킹의 유형은?",
      "explanation": "블랙 햇(Black Hat).",
      "source": "친구 제공 문제집 · 1주차 이론 2번 · 원문 7쪽",
      "answers": [
        "블랙 햇(Black Hat).",
        "블랙 햇",
        "블랙햇",
        "Black Hat",
        "black hat"
      ]
    },
    {
      "id": "hk-friend-w1t03",
      "week": 1,
      "type": "short",
      "prompt": "해킹 뒤 관리자에게 사실을 알리고 수정 대가를 기대하는 유형은?",
      "explanation": "그레이 햇(Gray Hat).",
      "source": "친구 제공 문제집 · 1주차 이론 3번 · 원문 7쪽",
      "answers": [
        "그레이 햇(Gray Hat).",
        "그레이 햇",
        "그레이햇",
        "Gray Hat",
        "Grey Hat",
        "gray hat",
        "grey hat"
      ]
    },
    {
      "id": "hk-friend-w1t04",
      "week": 1,
      "type": "short",
      "prompt": "시스템의 정식 운영 전에 버그를 찾는 베타 테스트 성격의 유형은?",
      "explanation": "블루 햇(Blue Hat).",
      "source": "친구 제공 문제집 · 1주차 이론 4번 · 원문 8쪽",
      "answers": [
        "블루 햇(Blue Hat).",
        "블루 햇",
        "블루햇",
        "Blue Hat",
        "blue hat"
      ]
    },
    {
      "id": "hk-friend-w1t05",
      "week": 1,
      "type": "essay",
      "prompt": "아마추어 해커(스크립트 키디)의 정의는?",
      "explanation": "컴퓨터 지식이 부족하고 남이 만든 프로그램을 이용해 해킹을 시도하는 사람.",
      "source": "친구 제공 문제집 · 1주차 이론 5번 · 원문 8쪽",
      "model": "컴퓨터 지식이 부족하고 남이 만든 프로그램을 이용해 해킹을 시도하는 사람.",
      "rubric": [
        "핵심 내용: 지식",
        "핵심 내용: 남이만든 / 다른사람이만든 / 타인이만든"
      ]
    },
    {
      "id": "hk-friend-w1t06",
      "week": 1,
      "type": "short",
      "prompt": "정치·사회·종교적 메시지를 전하기 위해 해킹하는 유형은?",
      "explanation": "핵티비스트(Hacktivist).",
      "source": "친구 제공 문제집 · 1주차 이론 6번 · 원문 8쪽",
      "answers": [
        "핵티비스트(Hacktivist).",
        "핵티비스트",
        "Hacktivist",
        "hacktivist"
      ]
    },
    {
      "id": "hk-friend-w1t07",
      "week": 1,
      "type": "essay",
      "prompt": "취약점 검사(Vulnerability Scanner)의 목적은?",
      "explanation": "시스템에 침투할 수 있는 보안 취약점을 찾는 것.",
      "source": "친구 제공 문제집 · 1주차 이론 7번 · 원문 9쪽",
      "model": "시스템에 침투할 수 있는 보안 취약점을 찾는 것.",
      "rubric": [
        "핵심 내용: 취약점",
        "핵심 내용: 찾 / 검색 / 탐지 / 검사"
      ]
    },
    {
      "id": "hk-friend-w1t08",
      "week": 1,
      "type": "essay",
      "prompt": "비밀번호 크래킹(Password Cracking)이란?",
      "explanation": "시스템의 비밀번호를 알아내는 기술.",
      "source": "친구 제공 문제집 · 1주차 이론 8번 · 원문 10쪽",
      "model": "시스템의 비밀번호를 알아내는 기술.",
      "rubric": [
        "핵심 내용: 비밀번호",
        "핵심 내용: 알아 / 찾 / 해독 / 탈취 / 추측"
      ]
    },
    {
      "id": "hk-friend-w1t09",
      "week": 1,
      "type": "essay",
      "prompt": "루트킷(Rootkit)이란?",
      "explanation": "사용자가 알아채지 못하게 설치되며 자신의 존재를 숨기는 프로그램 모음.",
      "source": "친구 제공 문제집 · 1주차 이론 9번 · 원문 11쪽",
      "model": "사용자가 알아채지 못하게 설치되며 자신의 존재를 숨기는 프로그램 모음.",
      "rubric": [
        "핵심 내용: 몰래",
        "핵심 내용: 숨 / 은폐 / 감추"
      ]
    },
    {
      "id": "hk-friend-w1t10",
      "week": 1,
      "type": "essay",
      "prompt": "키 로거, 스푸핑, 패킷 스니퍼의 기능을 각각 한 가지씩 작성하시오.",
      "explanation": "키 로거: 키보드 입력 기록 수집 / 스푸핑: 신뢰 대상 사칭 / 패킷 스니퍼: 네트워크 패킷 가로채기.",
      "source": "친구 제공 문제집 · 1주차 이론 10번 · 원문 12~14쪽",
      "model": "키 로거: 키보드 입력 기록 수집 / 스푸핑: 신뢰 대상 사칭 / 패킷 스니퍼: 네트워크 패킷 가로채기.",
      "rubric": [
        "핵심 내용: 키보드",
        "핵심 내용: 위장 / 사칭 / 속이",
        "핵심 내용: 패킷 / packet"
      ]
    },
    {
      "id": "hk-friend-w1p01",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 직원의 타이핑 기록을 몰래 수집한다. 해당 기술명은?",
      "explanation": "키 로거(Key Logger).\n\n원문 주의: 1주차는 명령어 실습이 아닌 기술 사례형 연습이야.",
      "source": "친구 제공 문제집 · 1주차 실습 1번 · 원문 12쪽",
      "answers": [
        "키 로거(Key Logger).",
        "키 로거",
        "키로거",
        "Key Logger",
        "key logger",
        "Keylogger",
        "keylogger"
      ]
    },
    {
      "id": "hk-friend-w1p02",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 공격자가 신뢰받는 PC의 IP 주소인 것처럼 위장한다. 해당 기술명은?",
      "explanation": "IP 스푸핑(IP Spoofing).",
      "source": "친구 제공 문제집 · 1주차 실습 2번 · 원문 13쪽",
      "answers": [
        "IP 스푸핑(IP Spoofing).",
        "IP 스푸핑",
        "IP Spoofing",
        "IP spoofing",
        "ip spoofing"
      ]
    },
    {
      "id": "hk-friend-w1p03",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 통신 중인 패킷을 중간에서 가로챈다. 강의자료의 해당 기술명은?",
      "explanation": "패킷 스니퍼(Packet Sniffer).",
      "source": "친구 제공 문제집 · 1주차 실습 3번 · 원문 14쪽",
      "answers": [
        "패킷 스니퍼(Packet Sniffer).",
        "패킷 스니퍼",
        "패킷 스니핑",
        "Packet Sniffer",
        "packet sniffer"
      ]
    },
    {
      "id": "hk-friend-w1p04",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 타인의 PC에 숨겨져 자기 존재를 감춘 프로그램 모음이 있다. 명칭은?",
      "explanation": "루트킷(Rootkit).",
      "source": "친구 제공 문제집 · 1주차 실습 4번 · 원문 11쪽",
      "answers": [
        "루트킷(Rootkit).",
        "루트킷",
        "Rootkit",
        "rootkit"
      ]
    },
    {
      "id": "hk-friend-w1p05",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 4자리 비밀번호에 0000부터 9999까지 가능한 숫자를 대입한다. 적용 기술은?",
      "explanation": "비밀번호 크래킹(무차별 대입 방식).",
      "source": "친구 제공 문제집 · 1주차 실습 5번 · 원문 10쪽",
      "answers": [
        "비밀번호 크래킹(무차별 대입 방식).",
        "비밀번호 크래킹",
        "무차별 대입",
        "무차별 대입 공격",
        "Brute Force",
        "brute force"
      ]
    },
    {
      "id": "hk-friend-w1p06",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 회사 보안 담당자가 악의 없이 취약점을 찾는다. 해커의 유형은?",
      "explanation": "화이트 햇(White Hat).",
      "source": "친구 제공 문제집 · 1주차 실습 6번 · 원문 7쪽",
      "answers": [
        "화이트 햇(White Hat).",
        "화이트 햇",
        "화이트햇",
        "White Hat",
        "white hat"
      ]
    },
    {
      "id": "hk-friend-w1p07",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 침투 후 관리자에게 사실을 알리고 수정 대가를 요구한다. 해커의 유형은?",
      "explanation": "그레이 햇(Gray Hat).",
      "source": "친구 제공 문제집 · 1주차 실습 7번 · 원문 7쪽",
      "answers": [
        "그레이 햇(Gray Hat).",
        "그레이 햇",
        "그레이햇",
        "Gray Hat",
        "Grey Hat",
        "gray hat",
        "grey hat"
      ]
    },
    {
      "id": "hk-friend-w1p08",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 서비스를 정식 오픈하기 전에 보안 버그를 찾아내는 베타테스트 성격의 유형은?",
      "explanation": "블루 햇(Blue Hat).",
      "source": "친구 제공 문제집 · 1주차 실습 8번 · 원문 8쪽",
      "answers": [
        "블루 햇(Blue Hat).",
        "블루 햇",
        "블루햇",
        "Blue Hat",
        "blue hat"
      ]
    },
    {
      "id": "hk-friend-w1p09",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 다른 사람이 만든 해킹 프로그램만 사용하고 관련 지식이 부족하다. 유형은?",
      "explanation": "스크립트 키디(Script Kiddie).",
      "source": "친구 제공 문제집 · 1주차 실습 9번 · 원문 8쪽",
      "answers": [
        "스크립트 키디(Script Kiddie).",
        "스크립트 키디",
        "스크립트키디",
        "Script Kiddie",
        "script kiddie"
      ]
    },
    {
      "id": "hk-friend-w1p10",
      "week": 1,
      "type": "short",
      "prompt": "[사례 판별] 정치적 메시지를 알리기 위해 특정 기관의 홈페이지를 공격한다. 유형은?",
      "explanation": "핵티비스트(Hacktivist).",
      "source": "친구 제공 문제집 · 1주차 실습 10번 · 원문 8쪽",
      "answers": [
        "핵티비스트(Hacktivist).",
        "핵티비스트",
        "Hacktivist",
        "hacktivist"
      ]
    },
    {
      "id": "hk-friend-w2t01",
      "week": 2,
      "type": "essay",
      "prompt": "셸(Shell)의 역할을 강의자료 용어로 설명하시오.",
      "explanation": "응용 프로그램에서 명령을 받아 커널에 전달하고 사용자의 입력에 따라 프로그램을 수행한다.",
      "source": "친구 제공 문제집 · 2주차 이론 1번 · 원문 49쪽",
      "model": "응용 프로그램에서 명령을 받아 커널에 전달하고 사용자의 입력에 따라 프로그램을 수행한다.",
      "rubric": [
        "핵심 내용: 응용프로그램",
        "핵심 내용: 커널"
      ]
    },
    {
      "id": "hk-friend-w2t02r",
      "week": 2,
      "type": "essay",
      "prompt": "리눅스의 시스템 구조를 이루는 주요 세 영역을 모두 작성하시오.",
      "explanation": "파일 서브 시스템, 장치 드라이버, 프로세스 제어.\n\n학습 참고: 이 자동판정은 예시 4종을 확인해. 다른 올바른 4종을 썼다면 직접 정답 인정 가능.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "source": "친구 제공 문제집 · 2주차 이론 2번 · 원문 48쪽",
      "model": "파일 서브 시스템, 장치 드라이버, 프로세스 제어.\n\n학습 참고: 이 자동판정은 예시 4종을 확인해. 다른 올바른 4종을 썼다면 직접 정답 인정 가능.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "rubric": [
        "핵심 내용: 파일서브시스템",
        "핵심 내용: 장치드라이버",
        "핵심 내용: 프로세스제어"
      ]
    },
    {
      "id": "hk-friend-w2t03r",
      "week": 2,
      "type": "essay",
      "prompt": "리눅스의 일반 파일에 속하는 대표적인 두 가지를 작성하시오.",
      "explanation": "데이터 파일, 실행 파일.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "source": "친구 제공 문제집 · 2주차 이론 3번 · 원문 50쪽",
      "model": "데이터 파일, 실행 파일.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "rubric": [
        "핵심 내용: 데이터파일",
        "핵심 내용: 실행파일"
      ]
    },
    {
      "id": "hk-friend-w2t04r",
      "week": 2,
      "type": "essay",
      "prompt": "리눅스에서 디렉터리는 파일에 해당하는가? 디렉터리가 담고 있는 정보도 설명하시오.",
      "explanation": "디렉터리도 파일에 해당하며, 내부 파일과 하위 디렉터리에 대한 정보를 담는다.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "source": "친구 제공 문제집 · 2주차 이론 4번 · 원문 50쪽",
      "model": "디렉터리도 파일에 해당하며, 내부 파일과 하위 디렉터리에 대한 정보를 담는다.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "rubric": [
        "핵심 내용: 파일",
        "핵심 내용: 하위디렉터리"
      ]
    },
    {
      "id": "hk-friend-w2t05r",
      "week": 2,
      "type": "essay",
      "prompt": "리눅스의 특수 파일은 무엇을 다루기 위한 파일이며 주로 어느 디렉터리에 위치하는가?",
      "explanation": "프린터·터미널 등 물리적 장치에 접근하기 위한 파일로, /dev에 위치한다.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "source": "친구 제공 문제집 · 2주차 이론 5번 · 원문 50쪽",
      "model": "프린터·터미널 등 물리적 장치에 접근하기 위한 파일로, /dev에 위치한다.\n\n원문 주의: Shell 주요 기능 암기는 교수님이 시험에서 제외한다고 안내하여 다른 PDF 개념으로 대체했어.",
      "rubric": [
        "핵심 내용: 장치 / 프린터 / 터미널",
        "핵심 내용: /dev"
      ]
    },
    {
      "id": "hk-friend-w2t06",
      "week": 2,
      "type": "essay",
      "prompt": "리눅스의 구성 요소를 바깥 계층부터 네 가지로 작성하시오.",
      "explanation": "응용 프로그램 → 셸 → 커널 → 하드웨어 (또는 반대 방향).\n\n학습 참고: 정순/역순 배열은 모범답안과 직접 대조해.",
      "source": "친구 제공 문제집 · 2주차 이론 6번 · 원문 47쪽",
      "model": "응용 프로그램 → 셸 → 커널 → 하드웨어 (또는 반대 방향).\n\n학습 참고: 정순/역순 배열은 모범답안과 직접 대조해.",
      "rubric": [
        "핵심 내용: 응용프로그램",
        "핵심 내용: 쉘 / 셸",
        "핵심 내용: 커널",
        "핵심 내용: 하드웨어"
      ]
    },
    {
      "id": "hk-friend-w2t07",
      "week": 2,
      "type": "essay",
      "prompt": "리눅스 파일 서브 시스템의 역할은?",
      "explanation": "저장 공간에서 파일을 저장하고 읽는 역할.",
      "source": "친구 제공 문제집 · 2주차 이론 7번 · 원문 48쪽",
      "model": "저장 공간에서 파일을 저장하고 읽는 역할.",
      "rubric": [
        "핵심 내용: 파일",
        "핵심 내용: 저장 / 읽"
      ]
    },
    {
      "id": "hk-friend-w2t08",
      "week": 2,
      "type": "essay",
      "prompt": "장치 드라이버의 역할은?",
      "explanation": "하드웨어와 소프트웨어를 연결하는 인터페이스 제공.",
      "source": "친구 제공 문제집 · 2주차 이론 8번 · 원문 48쪽",
      "model": "하드웨어와 소프트웨어를 연결하는 인터페이스 제공.",
      "rubric": [
        "핵심 내용: 하드웨어",
        "핵심 내용: 소프트웨어"
      ]
    },
    {
      "id": "hk-friend-w2t09",
      "week": 2,
      "type": "essay",
      "prompt": "프로세스 제어가 구현하는 세 가지를 작성하시오.",
      "explanation": "프로세스 간 통신, 스케줄링, 메모리 관리.",
      "source": "친구 제공 문제집 · 2주차 이론 9번 · 원문 48쪽",
      "model": "프로세스 간 통신, 스케줄링, 메모리 관리.",
      "rubric": [
        "핵심 내용: 통신",
        "핵심 내용: 스케줄링",
        "핵심 내용: 메모리"
      ]
    },
    {
      "id": "hk-friend-w2t10",
      "week": 2,
      "type": "essay",
      "prompt": "강의자료의 파일 종류 네 가지를 작성하시오.",
      "explanation": "일반 파일, 디렉터리, 특수 파일, 파이프 파일.",
      "source": "친구 제공 문제집 · 2주차 이론 10번 · 원문 50쪽",
      "model": "일반 파일, 디렉터리, 특수 파일, 파이프 파일.",
      "rubric": [
        "핵심 내용: 일반파일",
        "핵심 내용: 디렉터리",
        "핵심 내용: 특수파일",
        "핵심 내용: 파이프파일"
      ]
    },
    {
      "id": "hk-friend-w2p01",
      "week": 2,
      "type": "short",
      "prompt": "[개념 적용] 응용 프로그램의 명령을 커널에 전달하는 리눅스 구성 요소는?",
      "explanation": "쉘(Shell).\n\n원문 주의: 수업하지 않은 네트워크/운영체제 환경설정 실습 대신, 2주차 PDF의 리눅스 개념을 사례로 확인하는 문제야.",
      "source": "친구 제공 문제집 · 2주차 실습 1번 · 원문 49쪽",
      "answers": [
        "쉘(Shell).",
        "셸",
        "쉘",
        "Shell",
        "shell"
      ]
    },
    {
      "id": "hk-friend-w2p02r",
      "week": 2,
      "type": "short",
      "prompt": "[개념 적용] 다음 중 데이터나 실행 프로그램을 담는 파일의 종류를 작성하시오.",
      "explanation": "일반 파일.\n\n원문 주의: 실습 명령어가 아니라, 2주차 PDF의 파일시스템·디렉터리 개념을 확인하는 문제야.",
      "source": "친구 제공 문제집 · 2주차 실습 2번 · 원문 50쪽",
      "answers": [
        "일반 파일.",
        "일반 파일",
        "일반파일"
      ]
    },
    {
      "id": "hk-friend-w2p03r",
      "week": 2,
      "type": "short",
      "prompt": "[개념 적용] 여러 파일과 하위 디렉터리의 정보를 담는 파일시스템 객체의 명칭은?",
      "explanation": "디렉터리.\n\n원문 주의: 실습 명령어가 아니라, 2주차 PDF의 파일시스템·디렉터리 개념을 확인하는 문제야.",
      "source": "친구 제공 문제집 · 2주차 실습 3번 · 원문 50쪽",
      "answers": [
        "디렉터리.",
        "디렉터리",
        "디렉토리",
        "directory",
        "Directory"
      ]
    },
    {
      "id": "hk-friend-w2p04r",
      "week": 2,
      "type": "short",
      "prompt": "[경로 확인] 기본 프로그램의 모듈이 저장되는 디렉터리 경로를 작성하시오.",
      "explanation": "/lib\n\n원문 주의: 강의 PDF에는 있지만 실제 수업에서 다뤘는지는 확인되지 않았어. 교수님 강조범위보다 우선순위를 낮춰.",
      "source": "친구 제공 문제집 · 2주차 실습 4번 · 원문 51쪽",
      "answers": [
        "/lib"
      ]
    },
    {
      "id": "hk-friend-w2p05r",
      "week": 2,
      "type": "short",
      "prompt": "[경로 확인] 부팅할 때 읽히는 커널 관련 프로그램 파일이 담긴 디렉터리는?",
      "explanation": "/boot\n\n원문 주의: 강의 PDF에는 있지만 실제 수업에서 다뤘는지는 확인되지 않았어. 교수님 강조범위보다 우선순위를 낮춰.",
      "source": "친구 제공 문제집 · 2주차 실습 5번 · 원문 51쪽",
      "answers": [
        "/boot"
      ]
    },
    {
      "id": "hk-friend-w2p06r",
      "week": 2,
      "type": "short",
      "prompt": "[경로 확인] 리눅스에서 기본적으로 실행 가능한 파일들이 담기는 디렉터리는?",
      "explanation": "/bin\n\n원문 주의: 강의 PDF에는 있지만 실제 수업에서 다뤘는지는 확인되지 않았어. 교수님 강조범위보다 우선순위를 낮춰.",
      "source": "친구 제공 문제집 · 2주차 실습 6번 · 원문 51쪽",
      "answers": [
        "/bin"
      ]
    },
    {
      "id": "hk-friend-w2p07r",
      "week": 2,
      "type": "short",
      "prompt": "[경로 확인] 프로그램 실행·설치 과정에서 생기는 임시 파일을 저장하는 디렉터리는?",
      "explanation": "/tmp\n\n원문 주의: 강의 PDF에는 있지만 실제 수업에서 다뤘는지는 확인되지 않았어. 교수님 강조범위보다 우선순위를 낮춰.",
      "source": "친구 제공 문제집 · 2주차 실습 7번 · 원문 51쪽",
      "answers": [
        "/tmp"
      ]
    },
    {
      "id": "hk-friend-w2p08",
      "week": 2,
      "type": "short",
      "prompt": "[개념 적용] 시스템 환경 설정 및 주요 설정 파일이 담기는 디렉터리 경로를 쓰시오.",
      "explanation": "/etc\n\n원문 주의: 수업하지 않은 네트워크/운영체제 환경설정 실습 대신, 2주차 PDF의 리눅스 개념을 사례로 확인하는 문제야.",
      "source": "친구 제공 문제집 · 2주차 실습 8번 · 원문 51쪽",
      "answers": [
        "/etc"
      ]
    },
    {
      "id": "hk-friend-w2p09",
      "week": 2,
      "type": "short",
      "prompt": "[개념 적용] 장치(프린터·터미널 등)를 다루기 위한 특수 파일이 모여 있는 디렉터리 경로를 쓰시오.",
      "explanation": "/dev\n\n원문 주의: 수업하지 않은 네트워크/운영체제 환경설정 실습 대신, 2주차 PDF의 리눅스 개념을 사례로 확인하는 문제야.",
      "source": "친구 제공 문제집 · 2주차 실습 9번 · 원문 51쪽",
      "answers": [
        "/dev"
      ]
    },
    {
      "id": "hk-friend-w2p10",
      "week": 2,
      "type": "short",
      "prompt": "[개념 적용] 일반 사용자의 개인 작업 디렉터리가 위치하는 상위 디렉터리 경로를 쓰시오.",
      "explanation": "/home\n\n원문 주의: 수업하지 않은 네트워크/운영체제 환경설정 실습 대신, 2주차 PDF의 리눅스 개념을 사례로 확인하는 문제야.",
      "source": "친구 제공 문제집 · 2주차 실습 10번 · 원문 52쪽",
      "answers": [
        "/home"
      ]
    },
    {
      "id": "hk-friend-w3t01",
      "week": 3,
      "type": "essay",
      "prompt": "리눅스 로그인(Login)의 의미는?",
      "explanation": "계정 ID와 비밀번호로 사용자 신원을 확인하고 권한에 따른 시스템 접근을 허가받는 과정.",
      "source": "친구 제공 문제집 · 3주차 이론 1번 · 원문 4쪽",
      "model": "계정 ID와 비밀번호로 사용자 신원을 확인하고 권한에 따른 시스템 접근을 허가받는 과정.",
      "rubric": [
        "핵심 내용: 계정",
        "핵심 내용: 비밀번호 / 패스워드",
        "핵심 내용: 접근 / 권한"
      ]
    },
    {
      "id": "hk-friend-w3t02",
      "week": 3,
      "type": "essay",
      "prompt": "/etc/passwd의 세 번째와 네 번째 필드 명칭을 순서대로 작성하시오.",
      "explanation": "UID(User ID), GID(Group ID).",
      "source": "친구 제공 문제집 · 3주차 이론 2번 · 원문 6쪽",
      "model": "UID(User ID), GID(Group ID).",
      "rubric": [
        "핵심 내용: uid",
        "핵심 내용: gid"
      ]
    },
    {
      "id": "hk-friend-w3t03",
      "week": 3,
      "type": "essay",
      "prompt": "ls -al 출력의 맨 앞 문자 d와 -는 각각 무엇을 뜻하는가?",
      "explanation": "d: 디렉터리 / -: 일반 파일.",
      "source": "친구 제공 문제집 · 3주차 이론 3번 · 원문 8쪽",
      "model": "d: 디렉터리 / -: 일반 파일.",
      "rubric": [
        "핵심 내용: 디렉터리",
        "핵심 내용: 일반파일"
      ]
    },
    {
      "id": "hk-friend-w3t04",
      "week": 3,
      "type": "essay",
      "prompt": "r, w, x가 의미하는 권한과 숫자값을 각각 작성하시오.",
      "explanation": "r 읽기 4 / w 쓰기 2 / x 실행 1.",
      "source": "친구 제공 문제집 · 3주차 이론 4번 · 원문 9쪽",
      "model": "r 읽기 4 / w 쓰기 2 / x 실행 1.",
      "rubric": [
        "핵심 내용: 읽기",
        "핵심 내용: 쓰기",
        "핵심 내용: 실행",
        "핵심 내용: 4",
        "핵심 내용: 2",
        "핵심 내용: 1"
      ]
    },
    {
      "id": "hk-friend-w3t05",
      "week": 3,
      "type": "essay",
      "prompt": "umask란 무엇인가?",
      "explanation": "새 파일·디렉터리 생성 시 기본 권한에서 제한할 권한을 지정하는 값.",
      "source": "친구 제공 문제집 · 3주차 이론 5번 · 원문 11쪽",
      "model": "새 파일·디렉터리 생성 시 기본 권한에서 제한할 권한을 지정하는 값.",
      "rubric": [
        "핵심 내용: 생성",
        "핵심 내용: 권한",
        "핵심 내용: 제한 / 마스크 / 지정"
      ]
    },
    {
      "id": "hk-friend-w3t06",
      "week": 3,
      "type": "essay",
      "prompt": "RUID와 EUID를 각각 정확하게 정의하시오.",
      "explanation": "RUID: 프로세스의 실제 사용자 ID / EUID: 권한 검사에 사용되는 사용자 ID.",
      "source": "친구 제공 문제집 · 3주차 이론 6번 · 원문 16쪽",
      "model": "RUID: 프로세스의 실제 사용자 ID / EUID: 권한 검사에 사용되는 사용자 ID.",
      "rubric": [
        "핵심 내용: ruid",
        "핵심 내용: euid",
        "핵심 내용: 실제 / 실행",
        "핵심 내용: 권한 / 검사"
      ]
    },
    {
      "id": "hk-friend-w3t07",
      "week": 3,
      "type": "short",
      "prompt": "SetUID 비트가 설정된 실행 파일의 EUID는 실행 시 누구의 UID로 설정되는가?",
      "explanation": "파일 소유자의 UID.",
      "source": "친구 제공 문제집 · 3주차 이론 7번 · 원문 18~19쪽",
      "answers": [
        "파일 소유자의 UID.",
        "파일 소유자의 UID",
        "파일 소유자 UID",
        "소유자의 UID",
        "소유자 UID"
      ]
    },
    {
      "id": "hk-friend-w3t08",
      "week": 3,
      "type": "essay",
      "prompt": "해킹의 5단계를 순서대로 작성하시오.",
      "explanation": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성.\n\n학습 참고: 순서도 확인해.",
      "source": "친구 제공 문제집 · 3주차 이론 8번 · 원문 20쪽",
      "model": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성.\n\n학습 참고: 순서도 확인해.",
      "rubric": [
        "핵심 내용: 정보수집",
        "핵심 내용: 리모트어택",
        "핵심 내용: 로컬어택",
        "핵심 내용: 흔적지우기",
        "핵심 내용: 백도어생성"
      ]
    },
    {
      "id": "hk-friend-w3t09",
      "week": 3,
      "type": "essay",
      "prompt": "포트 스캐닝의 정의는?",
      "explanation": "해당 IP를 사용하는 컴퓨터의 열려 있는 포트를 검색하는 것.",
      "source": "친구 제공 문제집 · 3주차 이론 9번 · 원문 21쪽",
      "model": "해당 IP를 사용하는 컴퓨터의 열려 있는 포트를 검색하는 것.",
      "rubric": [
        "핵심 내용: 포트",
        "핵심 내용: 열려 / 열린",
        "핵심 내용: 검색 / 탐지 / 확인"
      ]
    },
    {
      "id": "hk-friend-w3t10",
      "week": 3,
      "type": "essay",
      "prompt": "데몬(Daemon)의 정의는?",
      "explanation": "백그라운드에서 특정 작업이나 서비스를 수행하는 프로그램.",
      "source": "친구 제공 문제집 · 3주차 이론 10번 · 원문 21쪽",
      "model": "백그라운드에서 특정 작업이나 서비스를 수행하는 프로그램.",
      "rubric": [
        "핵심 내용: 백그라운드",
        "핵심 내용: 서비스 / 작업"
      ]
    },
    {
      "id": "hk-friend-w3p01",
      "week": 3,
      "type": "short",
      "prompt": "[출력 판별] drwxr-xr-x 2 root root … 에서 첫 문자 d의 파일 종류는?",
      "explanation": "디렉터리.",
      "source": "친구 제공 문제집 · 3주차 실습 1번 · 원문 8쪽",
      "answers": [
        "디렉터리.",
        "디렉터리",
        "디렉토리",
        "directory",
        "Directory"
      ]
    },
    {
      "id": "hk-friend-w3p02",
      "week": 3,
      "type": "short",
      "prompt": "[권한 계산] -rw-r--r-- 를 세 자리 숫자 권한으로 작성하시오.",
      "explanation": "644",
      "source": "친구 제공 문제집 · 3주차 실습 2번 · 원문 9~10쪽",
      "answers": [
        "644"
      ]
    },
    {
      "id": "hk-friend-w3p03",
      "week": 3,
      "type": "short",
      "prompt": "[권한 계산] drwxr-xr-x 를 세 자리 숫자 권한으로 작성하시오.",
      "explanation": "755",
      "source": "친구 제공 문제집 · 3주차 실습 3번 · 원문 9쪽",
      "answers": [
        "755"
      ]
    },
    {
      "id": "hk-friend-w3p04",
      "week": 3,
      "type": "short",
      "prompt": "[명령어 빈칸] umask를 002로 변경하는 명령어는?\n\numask 확인 · 변경 전 값 0022는 문제에서 가정한 예시\nkali$ umask\n0022  # 변경 전 초기값(예시)\nkali$ [여기에 변경 명령어 입력]\nkali$ umask\n0002  # umask 002 설정 후 출력",
      "explanation": "umask 002\n\n원문 주의: 0022와 0002는 서로 다른 값이야. umask 002를 설정하면 umask 명령 출력은 0002로 표시될 수 있어. 초기값 0022는 환경에 따라 달라지며 이 문제에서만 가정한 값이야.",
      "source": "친구 제공 문제집 · 3주차 실습 4번 · 원문 12쪽",
      "answers": [
        "umask 002"
      ]
    },
    {
      "id": "hk-friend-w3p05",
      "week": 3,
      "type": "short",
      "prompt": "[결과 예측] umask 002 이후 touch c.txt 를 실행할 때 c.txt의 권한은?",
      "explanation": "664",
      "source": "친구 제공 문제집 · 3주차 실습 5번 · 원문 12쪽",
      "answers": [
        "664"
      ]
    },
    {
      "id": "hk-friend-w3p06",
      "week": 3,
      "type": "short",
      "prompt": "[결과 예측] umask 002 이후 mkdir c 를 실행할 때 c의 권한은?",
      "explanation": "775",
      "source": "친구 제공 문제집 · 3주차 실습 6번 · 원문 12쪽",
      "answers": [
        "775"
      ]
    },
    {
      "id": "hk-friend-w3p07",
      "week": 3,
      "type": "short",
      "prompt": "[명령어 빈칸] c.txt의 접근 권한을 777로 변경하시오.\n\n권한 변경 결과\n-rw-rw-r-- 1 kali kali ... c.txt\nroot# [권한 변경 명령어]\n-rwxrwxrwx 1 kali kali ... c.txt",
      "explanation": "chmod 777 c.txt",
      "source": "친구 제공 문제집 · 3주차 실습 7번 · 원문 13쪽",
      "answers": [
        "chmod 777 c.txt"
      ]
    },
    {
      "id": "hk-friend-w3p08",
      "week": 3,
      "type": "short",
      "prompt": "[명령어 빈칸] d.txt 소유자를 kali로 변경하시오.\n\n소유자 변경 결과\n-rw-r--r-- 1 root root ... d.txt\nroot# [소유자 변경 명령어]\n-rw-r--r-- 1 kali root ... d.txt",
      "explanation": "chown kali d.txt",
      "source": "친구 제공 문제집 · 3주차 실습 8번 · 원문 14쪽",
      "answers": [
        "chown kali d.txt"
      ]
    },
    {
      "id": "hk-friend-w3p09",
      "week": 3,
      "type": "short",
      "prompt": "[명령어 빈칸] d.txt 소유 그룹을 kali로 변경하시오.\n\n소유 그룹 변경 결과\n-rw-r--r-- 1 kali root ... d.txt\nroot# [그룹 변경 명령어]\n-rw-r--r-- 1 kali kali ... d.txt",
      "explanation": "chgrp kali d.txt",
      "source": "친구 제공 문제집 · 3주차 실습 9번 · 원문 14쪽",
      "answers": [
        "chgrp kali d.txt"
      ]
    },
    {
      "id": "hk-friend-w3p10",
      "week": 3,
      "type": "short",
      "prompt": "[권한 계산] -rwsr-xr-x 의 4자리 숫자 권한을 작성하시오.",
      "explanation": "4755",
      "source": "친구 제공 문제집 · 3주차 실습 10번 · 원문 18쪽",
      "answers": [
        "4755"
      ]
    },
    {
      "id": "hk-friend-w4t01",
      "week": 4,
      "type": "essay",
      "prompt": "Metasploit이 무엇을 위해 개발된 프로그램인지 한 문장으로 작성하시오.",
      "explanation": "운영체제 등의 취약점을 점검하는 프로그램.",
      "source": "친구 제공 문제집 · 4주차 이론 1번 · 원문 5쪽",
      "model": "운영체제 등의 취약점을 점검하는 프로그램.",
      "rubric": [
        "핵심 내용: 취약점",
        "핵심 내용: 점검 / 검사 / 진단"
      ]
    },
    {
      "id": "hk-friend-w4t02",
      "week": 4,
      "type": "short",
      "prompt": "MSF의 정식 명칭을 영어로 작성하시오.",
      "explanation": "Metasploit Framework.",
      "source": "친구 제공 문제집 · 4주차 이론 2번 · 원문 5~7쪽",
      "answers": [
        "Metasploit Framework.",
        "Metasploit Framework"
      ]
    },
    {
      "id": "hk-friend-w4t03",
      "week": 4,
      "type": "essay",
      "prompt": "수동적 정보 수집(Passive Information Gathering)이란?",
      "explanation": "공격 대상 시스템에 직접 접근하지 않고 검색 등을 통해 정보를 수집하는 방식.",
      "source": "친구 제공 문제집 · 4주차 이론 3번 · 원문 4쪽",
      "model": "공격 대상 시스템에 직접 접근하지 않고 검색 등을 통해 정보를 수집하는 방식.",
      "rubric": [
        "핵심 내용: 대상 / 시스템",
        "핵심 내용: 직접접근하지 / 접근없이 / 간접 / 검색"
      ]
    },
    {
      "id": "hk-friend-w4t04",
      "week": 4,
      "type": "essay",
      "prompt": "능동적 정보 수집(Active Information Gathering)이란?",
      "explanation": "공격 대상에 직접 접근하여 정보를 수집하는 방식.",
      "source": "친구 제공 문제집 · 4주차 이론 4번 · 원문 7쪽",
      "model": "공격 대상에 직접 접근하여 정보를 수집하는 방식.",
      "rubric": [
        "핵심 내용: 직접",
        "핵심 내용: 정보수집 / 정보를수집 / 정보획득"
      ]
    },
    {
      "id": "hk-friend-w4t05",
      "week": 4,
      "type": "essay",
      "prompt": "Nmap의 정식 명칭과 용도를 작성하시오.",
      "explanation": "Network Mapper — 포트 스캐닝에 이용하는 도구.",
      "source": "친구 제공 문제집 · 4주차 이론 5번 · 원문 17쪽",
      "model": "Network Mapper — 포트 스캐닝에 이용하는 도구.",
      "rubric": [
        "핵심 내용: networkmapper",
        "핵심 내용: 포트스캐닝 / 포트검색 / 포트검사"
      ]
    },
    {
      "id": "hk-friend-w4t06",
      "week": 4,
      "type": "essay",
      "prompt": "포트 스캐닝(Port Scanning)은 무엇을 확인하는 과정인가?",
      "explanation": "대상 호스트에서 열려 있는 포트를 확인하는 과정.",
      "source": "친구 제공 문제집 · 4주차 이론 6번 · 원문 17~19쪽",
      "model": "대상 호스트에서 열려 있는 포트를 확인하는 과정.",
      "rubric": [
        "핵심 내용: 포트",
        "핵심 내용: 열려 / 개방 / open"
      ]
    },
    {
      "id": "hk-friend-w4t07",
      "week": 4,
      "type": "essay",
      "prompt": "수동적 정보 수집의 강의자료 예시를 하나 작성하시오.",
      "explanation": "구글 검색, IP 주소 조회 등.",
      "source": "친구 제공 문제집 · 4주차 이론 7번 · 원문 4쪽",
      "model": "구글 검색, IP 주소 조회 등.",
      "rubric": [
        "핵심 내용: 구글 / google / 검색 / ip주소 / 아이피조회"
      ]
    },
    {
      "id": "hk-friend-w4t08",
      "week": 4,
      "type": "essay",
      "prompt": "능동적 정보 수집을 수행하면 어떤 위험이 생길 수 있는가? 한 가지 작성하시오.",
      "explanation": "방화벽에서 차단되거나 침입 탐지 장치에 감지될 수 있다.",
      "source": "친구 제공 문제집 · 4주차 이론 8번 · 원문 7쪽",
      "model": "방화벽에서 차단되거나 침입 탐지 장치에 감지될 수 있다.",
      "rubric": [
        "핵심 내용: 차단 / 탐지 / 감지 / 기록 / 로그"
      ]
    },
    {
      "id": "hk-friend-w4t09",
      "week": 4,
      "type": "essay",
      "prompt": "Nmap의 -sT 옵션은 어떤 종류의 포트 스캔을 뜻하는가?",
      "explanation": "일반적인 TCP 연결 방식 포트 스캔.",
      "source": "친구 제공 문제집 · 4주차 이론 9번 · 원문 17쪽",
      "model": "일반적인 TCP 연결 방식 포트 스캔.",
      "rubric": [
        "핵심 내용: tcp",
        "핵심 내용: 스캔 / scan / 연결"
      ]
    },
    {
      "id": "hk-friend-w4t10",
      "week": 4,
      "type": "essay",
      "prompt": "정보 수집 단계에서 포트 스캐닝을 사용하는 목적은 무엇인가?",
      "explanation": "대상 호스트의 열려 있는 포트를 확인하여 접근 가능한 서비스를 파악하는 것.",
      "source": "친구 제공 문제집 · 4주차 이론 10번 · 원문 17~19쪽",
      "model": "대상 호스트의 열려 있는 포트를 확인하여 접근 가능한 서비스를 파악하는 것.",
      "rubric": [
        "핵심 내용: 포트",
        "핵심 내용: 서비스 / 열려 / 접근"
      ]
    },
    {
      "id": "hk-friend-w4p01",
      "week": 4,
      "type": "short",
      "prompt": "[명령어 빈칸] 대상 192.168.44.131의 포트를 Nmap으로 확인할 때 가장 기본적인 실행 명령어를 작성하시오.\n\n강의자료 대상 IP를 사용한 기본 실습형 문제\nkali$ [명령어 입력]\n대상: 192.168.44.131",
      "explanation": "nmap 192.168.44.131",
      "source": "친구 제공 문제집 · 4주차 실습 1번 · 원문 17쪽",
      "answers": [
        "nmap 192.168.44.131"
      ]
    },
    {
      "id": "hk-friend-w4p02",
      "week": 4,
      "type": "short",
      "prompt": "[출력 해석] Nmap 결과에서 `80/tcp open http`가 나왔다. 포트 80은 열려 있는가, 닫혀 있는가?\n\nNmap 출력의 예시(실제 PDF 명령어 문법을 바탕으로 재구성)\nPORT    STATE  SERVICE\n80/tcp  open   http",
      "explanation": "열려 있다(open).",
      "source": "친구 제공 문제집 · 4주차 실습 2번 · 원문 17~19쪽",
      "answers": [
        "열려 있다(open).",
        "open",
        "열림",
        "열려 있다",
        "열려 있다(open)"
      ]
    },
    {
      "id": "hk-friend-w4p03",
      "week": 4,
      "type": "short",
      "prompt": "[기초 개념 적용] 대상 시스템에 직접 접속해 포트 스캔으로 정보를 확인한 경우 수동적/능동적 정보 수집 중 무엇인가?",
      "explanation": "능동적 정보 수집.",
      "source": "친구 제공 문제집 · 4주차 실습 3번 · 원문 7, 17쪽",
      "answers": [
        "능동적 정보 수집.",
        "능동적 정보 수집",
        "능동적 정보수집",
        "능동적",
        "Active Information Gathering"
      ]
    },
    {
      "id": "hk-friend-w5t01",
      "week": 5,
      "type": "essay",
      "prompt": "Metasploitable은 어떤 목적으로 만든 시스템인가?",
      "explanation": "모의 침투 실습을 위해 의도적으로 취약하게 만든 가상 운영체제.",
      "source": "친구 제공 문제집 · 5주차 이론 1번 · 원문 4~6쪽",
      "model": "모의 침투 실습을 위해 의도적으로 취약하게 만든 가상 운영체제.",
      "rubric": [
        "핵심 내용: 취약 / 약점",
        "핵심 내용: 실습 / 연습 / 모의침투"
      ]
    },
    {
      "id": "hk-friend-w5t02",
      "week": 5,
      "type": "essay",
      "prompt": "비밀번호 크래킹(Password Cracking)은 무엇을 알아내기 위한 기술인가?",
      "explanation": "계정 인증에 사용되는 비밀번호를 알아내는 기술.",
      "source": "친구 제공 문제집 · 5주차 이론 2번 · 원문 31~41쪽",
      "model": "계정 인증에 사용되는 비밀번호를 알아내는 기술.",
      "rubric": [
        "핵심 내용: 비밀번호 / 패스워드",
        "핵심 내용: 알아 / 해독 / 추측 / 획득 / 크래킹"
      ]
    },
    {
      "id": "hk-friend-w5t03",
      "week": 5,
      "type": "essay",
      "prompt": "무차별 대입(Brute Force) 공격을 설명하시오.",
      "explanation": "가능한 비밀번호 조합을 순차적으로 대입하는 공격.",
      "source": "친구 제공 문제집 · 5주차 이론 3번 · 원문 31쪽",
      "model": "가능한 비밀번호 조합을 순차적으로 대입하는 공격.",
      "rubric": [
        "핵심 내용: 가능한 / 모든 / 여러 / 조합",
        "핵심 내용: 대입 / 시도"
      ]
    },
    {
      "id": "hk-friend-w5t04",
      "week": 5,
      "type": "essay",
      "prompt": "사전 기반(Dictionary) 공격을 설명하시오.",
      "explanation": "사전에 있는 단어나 미리 준비한 비밀번호 후보 목록을 대입하는 공격.",
      "source": "친구 제공 문제집 · 5주차 이론 4번 · 원문 35쪽",
      "model": "사전에 있는 단어나 미리 준비한 비밀번호 후보 목록을 대입하는 공격.",
      "rubric": [
        "핵심 내용: 사전 / 단어 / 목록",
        "핵심 내용: 대입 / 시도"
      ]
    },
    {
      "id": "hk-friend-w5t05",
      "week": 5,
      "type": "essay",
      "prompt": "Brute Force와 Dictionary 공격의 핵심 차이는 무엇인가?",
      "explanation": "Brute Force는 가능한 조합을 만들고, Dictionary 공격은 준비된 후보 단어 목록을 대입한다.",
      "source": "친구 제공 문제집 · 5주차 이론 5번 · 원문 31, 35쪽",
      "model": "Brute Force는 가능한 조합을 만들고, Dictionary 공격은 준비된 후보 단어 목록을 대입한다.",
      "rubric": [
        "핵심 내용: 조합 / 무차별",
        "핵심 내용: 사전 / 목록 / 단어"
      ]
    },
    {
      "id": "hk-friend-w5t06",
      "week": 5,
      "type": "essay",
      "prompt": "Crunch는 무엇을 생성하는 도구인가?",
      "explanation": "무차별 대입 공격에 사용할 비밀번호 후보 목록을 생성하는 도구.",
      "source": "친구 제공 문제집 · 5주차 이론 6번 · 원문 31~34쪽",
      "model": "무차별 대입 공격에 사용할 비밀번호 후보 목록을 생성하는 도구.",
      "rubric": [
        "핵심 내용: 비밀번호 / 패스워드",
        "핵심 내용: 목록 / 조합 / 후보"
      ]
    },
    {
      "id": "hk-friend-w5t07",
      "week": 5,
      "type": "short",
      "prompt": "5주차 실습에서 `numeric` 문자 집합은 어떤 문자들로 이루어져 있는가?",
      "explanation": "숫자(0~9).",
      "source": "친구 제공 문제집 · 5주차 이론 7번 · 원문 32~34쪽",
      "answers": [
        "숫자(0~9).",
        "숫자",
        "0~9",
        "0-9",
        "숫자(0~9)",
        "숫자 0~9"
      ]
    },
    {
      "id": "hk-friend-w5t08",
      "week": 5,
      "type": "essay",
      "prompt": "`users.txt` 파일에는 어떤 종류의 정보를 기록했는가?",
      "explanation": "계정 이름(사용자 이름) 후보 목록.",
      "source": "친구 제공 문제집 · 5주차 이론 8번 · 원문 37쪽",
      "model": "계정 이름(사용자 이름) 후보 목록.",
      "rubric": [
        "핵심 내용: 사용자 / 계정 / 아이디 / id",
        "핵심 내용: 목록 / 후보 / 이름"
      ]
    },
    {
      "id": "hk-friend-w5t09",
      "week": 5,
      "type": "essay",
      "prompt": "`passwords.txt` 파일에는 어떤 종류의 정보를 기록했는가?",
      "explanation": "비밀번호 후보 목록.",
      "source": "친구 제공 문제집 · 5주차 이론 9번 · 원문 33~35쪽",
      "model": "비밀번호 후보 목록.",
      "rubric": [
        "핵심 내용: 비밀번호 / 패스워드",
        "핵심 내용: 목록 / 후보"
      ]
    },
    {
      "id": "hk-friend-w5t10",
      "week": 5,
      "type": "essay",
      "prompt": "사전 기반 공격에 사용할 후보 목록의 역할을 한 문장으로 설명하시오.",
      "explanation": "미리 정리한 사용자명 또는 비밀번호 후보들을 인증 과정에서 순서대로 시험할 수 있도록 준비하는 역할.",
      "source": "친구 제공 문제집 · 5주차 이론 10번 · 원문 35~37쪽",
      "model": "미리 정리한 사용자명 또는 비밀번호 후보들을 인증 과정에서 순서대로 시험할 수 있도록 준비하는 역할.",
      "rubric": [
        "핵심 내용: 후보 / 단어 / 목록 / 사전",
        "핵심 내용: 대입 / 시험 / 시도"
      ]
    },
    {
      "id": "hk-friend-w5p01",
      "week": 5,
      "type": "short",
      "prompt": "[사례 분류] 비밀번호로 가능한 모든 네 자리 숫자를 차례로 대입한다. 어떤 공격 방식인가?",
      "explanation": "무차별 대입 공격(Brute Force).",
      "source": "친구 제공 문제집 · 5주차 실습 1번 · 원문 31, 34쪽",
      "answers": [
        "무차별 대입 공격(Brute Force).",
        "무차별 대입",
        "무차별 대입 공격",
        "Brute Force",
        "brute force"
      ]
    },
    {
      "id": "hk-friend-w5p02",
      "week": 5,
      "type": "short",
      "prompt": "[사례 분류] 미리 정리해 둔 유명 비밀번호 목록을 하나씩 대입한다. 어떤 공격 방식인가?",
      "explanation": "사전 기반 공격(Dictionary Attack).",
      "source": "친구 제공 문제집 · 5주차 실습 2번 · 원문 35쪽",
      "answers": [
        "사전 기반 공격(Dictionary Attack).",
        "사전 기반 공격",
        "사전 공격",
        "Dictionary Attack",
        "dictionary attack"
      ]
    },
    {
      "id": "hk-friend-w5p03",
      "week": 5,
      "type": "short",
      "prompt": "[파일 역할] 실습에서 사용자명 후보를 적은 파일의 이름은?",
      "explanation": "users.txt",
      "source": "친구 제공 문제집 · 5주차 실습 3번 · 원문 37쪽",
      "answers": [
        "users.txt"
      ]
    },
    {
      "id": "hk-friend-w5p04",
      "week": 5,
      "type": "short",
      "prompt": "[파일 역할] 실습에서 비밀번호 후보를 적은 파일의 이름은?",
      "explanation": "passwords.txt",
      "source": "친구 제공 문제집 · 5주차 실습 4번 · 원문 33~35쪽",
      "answers": [
        "passwords.txt"
      ]
    },
    {
      "id": "hk-friend-w6t01",
      "week": 6,
      "type": "essay",
      "prompt": "스니핑(Sniffing)이란 무엇인가?",
      "explanation": "네트워크를 통해 전송되는 정보를 엿듣거나 가로채는 것.",
      "source": "친구 제공 문제집 · 6주차 이론 1번 · 원문 5~6쪽",
      "model": "네트워크를 통해 전송되는 정보를 엿듣거나 가로채는 것.",
      "rubric": [
        "핵심 내용: 패킷 / 데이터 / 정보",
        "핵심 내용: 도청 / 엿듣 / 가로채"
      ]
    },
    {
      "id": "hk-friend-w6t02",
      "week": 6,
      "type": "essay",
      "prompt": "프러미스큐어스 모드(Promiscuous Mode)의 정의는?",
      "explanation": "MAC 주소와 IP 주소에 관계없이 수신한 패킷을 스니퍼에게 전달하는 모드.",
      "source": "친구 제공 문제집 · 6주차 이론 2번 · 원문 7쪽",
      "model": "MAC 주소와 IP 주소에 관계없이 수신한 패킷을 스니퍼에게 전달하는 모드.",
      "rubric": [
        "핵심 내용: mac",
        "핵심 내용: ip",
        "핵심 내용: 패킷 / packet"
      ]
    },
    {
      "id": "hk-friend-w6t03",
      "week": 6,
      "type": "essay",
      "prompt": "바이패스 모드(Bypass Mode)는 무엇인가?",
      "explanation": "패킷 분석 기능까지 하드웨어로 구현된 랜 카드 모드.",
      "source": "친구 제공 문제집 · 6주차 이론 3번 · 원문 7쪽",
      "model": "패킷 분석 기능까지 하드웨어로 구현된 랜 카드 모드.",
      "rubric": [
        "핵심 내용: 패킷",
        "핵심 내용: 하드웨어"
      ]
    },
    {
      "id": "hk-friend-w6t04",
      "week": 6,
      "type": "essay",
      "prompt": "TCPDump는 어떤 도구인가?",
      "explanation": "리눅스에서 패킷을 수집·분석하는 대표적인 스니핑 도구.",
      "source": "친구 제공 문제집 · 6주차 이론 4번 · 원문 11쪽",
      "model": "리눅스에서 패킷을 수집·분석하는 대표적인 스니핑 도구.",
      "rubric": [
        "핵심 내용: 패킷 / 스니핑",
        "핵심 내용: 수집 / 분석 / 캡처"
      ]
    },
    {
      "id": "hk-friend-w6t05",
      "week": 6,
      "type": "essay",
      "prompt": "Fragrouter의 기능은?",
      "explanation": "받은 패킷을 원래 목적지로 전달하여 세션을 유지하도록 돕는 패킷 릴레이 도구.",
      "source": "친구 제공 문제집 · 6주차 이론 5번 · 원문 12쪽",
      "model": "받은 패킷을 원래 목적지로 전달하여 세션을 유지하도록 돕는 패킷 릴레이 도구.",
      "rubric": [
        "핵심 내용: 패킷",
        "핵심 내용: 전달 / 릴레이"
      ]
    },
    {
      "id": "hk-friend-w6t06",
      "week": 6,
      "type": "essay",
      "prompt": "DSniff는 무엇인가?",
      "explanation": "네트워크 패킷에서 계정·비밀번호 등 정보를 분석하는 스니핑 도구 모음.",
      "source": "친구 제공 문제집 · 6주차 이론 6번 · 원문 14쪽",
      "model": "네트워크 패킷에서 계정·비밀번호 등 정보를 분석하는 스니핑 도구 모음.",
      "rubric": [
        "핵심 내용: 스니핑",
        "핵심 내용: 도구 / 패키지"
      ]
    },
    {
      "id": "hk-friend-w6t07",
      "week": 6,
      "type": "essay",
      "prompt": "ARP 리다이렉트 공격에서 바꾸려는 정보는?",
      "explanation": "공격 대상의 IP 주소와 MAC 주소 사이의 ARP 대응 관계(ARP 테이블).",
      "source": "친구 제공 문제집 · 6주차 이론 7번 · 원문 26~31쪽",
      "model": "공격 대상의 IP 주소와 MAC 주소 사이의 ARP 대응 관계(ARP 테이블).",
      "rubric": [
        "핵심 내용: arp / mac",
        "핵심 내용: 테이블 / 매핑 / 연결 / 대응"
      ]
    },
    {
      "id": "hk-friend-w6t08",
      "week": 6,
      "type": "essay",
      "prompt": "스니핑 능동적 대응책을 2가지 작성하시오.",
      "explanation": "Ping 탐지, ARP 탐지, DNS 탐지, 유인 탐지, ARP Watch 중 2가지.\n\n학습 참고: 서로 다른 두 방법을 적었는지는 직접 확인해.",
      "source": "친구 제공 문제집 · 6주차 이론 8번 · 원문 34~35쪽",
      "model": "Ping 탐지, ARP 탐지, DNS 탐지, 유인 탐지, ARP Watch 중 2가지.\n\n학습 참고: 서로 다른 두 방법을 적었는지는 직접 확인해.",
      "rubric": [
        "핵심 내용: ping / 핑 / arp / dns / 유인 / watch",
        "핵심 내용: 탐지 / 확인"
      ]
    },
    {
      "id": "hk-friend-w6t09",
      "week": 6,
      "type": "essay",
      "prompt": "스니핑 수동적 대응책의 핵심 원리는?",
      "explanation": "통신 데이터를 암호화해 가로채도 내용을 쉽게 읽을 수 없게 하는 것.",
      "source": "친구 제공 문제집 · 6주차 이론 9번 · 원문 36~38쪽",
      "model": "통신 데이터를 암호화해 가로채도 내용을 쉽게 읽을 수 없게 하는 것.",
      "rubric": [
        "핵심 내용: 암호화"
      ]
    },
    {
      "id": "hk-friend-w6t10",
      "week": 6,
      "type": "essay",
      "prompt": "6주차 PDF에서 제시한 수동적 대응 방법 두 가지를 작성하시오.",
      "explanation": "SSL, PGP, PEM, S/MIME, SSH, VPN 중 두 가지.\n\n학습 참고: 서로 다른 두 가지를 적었는지는 직접 확인해.",
      "source": "친구 제공 문제집 · 6주차 이론 10번 · 원문 36~38쪽",
      "model": "SSL, PGP, PEM, S/MIME, SSH, VPN 중 두 가지.\n\n학습 참고: 서로 다른 두 가지를 적었는지는 직접 확인해.",
      "rubric": [
        "핵심 내용: ssl / pgp / pem / s/mime / ssh / vpn"
      ]
    },
    {
      "id": "hk-friend-w6p01",
      "week": 6,
      "type": "short",
      "prompt": "[기본 명령어] eth0 인터페이스를 프러미스큐어스 모드로 설정하는 PDF 명령어를 작성하시오.\n\n수업 자료의 명령어 · 설정 대상\nkali# [명령어 입력]\n네트워크 인터페이스: eth0",
      "explanation": "ifconfig eth0 promisc",
      "source": "친구 제공 문제집 · 6주차 실습 1번 · 원문 8~10쪽",
      "answers": [
        "ifconfig eth0 promisc"
      ]
    },
    {
      "id": "hk-friend-w6p02",
      "week": 6,
      "type": "short",
      "prompt": "[명령어 식별] 패킷을 수집하기 위해 6주차 PDF에서 사용한 대표적인 콘솔 도구의 명칭은?",
      "explanation": "tcpdump",
      "source": "친구 제공 문제집 · 6주차 실습 2번 · 원문 11, 19쪽",
      "answers": [
        "tcpdump"
      ]
    },
    {
      "id": "hk-friend-w6p03",
      "week": 6,
      "type": "essay",
      "prompt": "[실습 결과 이해] 평문 Telnet 로그인 패킷을 캡처한 PDF 실습에서 노출된 정보의 종류 두 가지는?\n\n수업 자료의 평문 통신 관찰 상황\nTelnet 클라이언트 → 서버 로그인\n네트워크 중간에서 TCPDump가 평문 패킷을 수집함",
      "explanation": "로그인 계정(아이디), 비밀번호(패스워드).",
      "source": "친구 제공 문제집 · 6주차 실습 3번 · 원문 20~22쪽",
      "model": "로그인 계정(아이디), 비밀번호(패스워드).",
      "rubric": [
        "핵심 내용: 아이디 / 계정 / 사용자",
        "핵심 내용: 비밀번호 / 패스워드"
      ]
    },
    {
      "id": "hk-friend-w7t01",
      "week": 7,
      "type": "essay",
      "prompt": "SetUID 비트의 기능을 설명하시오.",
      "explanation": "실행 파일의 프로세스를 파일 소유자의 유효 사용자 ID(EUID)로 실행하도록 설정하는 특수 권한.",
      "source": "친구 제공 문제집 · 7주차 이론 1번 · 원문 7, 22~24쪽",
      "model": "실행 파일의 프로세스를 파일 소유자의 유효 사용자 ID(EUID)로 실행하도록 설정하는 특수 권한.",
      "rubric": [
        "핵심 내용: 파일소유자",
        "핵심 내용: euid"
      ]
    },
    {
      "id": "hk-friend-w7t02",
      "week": 7,
      "type": "essay",
      "prompt": "RUID(Real User ID)의 의미는?",
      "explanation": "프로세스의 실제 사용자 식별 번호(일반적으로 실행자 UID).",
      "source": "친구 제공 문제집 · 7주차 이론 2번 · 원문 7쪽",
      "model": "프로세스의 실제 사용자 식별 번호(일반적으로 실행자 UID).",
      "rubric": [
        "핵심 내용: 실제 / 실행자",
        "핵심 내용: uid / 사용자id / 사용자식별"
      ]
    },
    {
      "id": "hk-friend-w7t03",
      "week": 7,
      "type": "essay",
      "prompt": "EUID(Effective User ID)의 의미는?",
      "explanation": "프로세스의 접근 권한 검사에 사용되는 사용자 식별 번호.",
      "source": "친구 제공 문제집 · 7주차 이론 3번 · 원문 7쪽",
      "model": "프로세스의 접근 권한 검사에 사용되는 사용자 식별 번호.",
      "rubric": [
        "핵심 내용: 권한",
        "핵심 내용: 검사 / 판단"
      ]
    },
    {
      "id": "hk-friend-w7t04",
      "week": 7,
      "type": "essay",
      "prompt": "-rwsr-xr-x 권한에서 소문자 s가 나타내는 것은?",
      "explanation": "소유자 실행 비트 자리의 SUID와 실행 권한이 모두 설정됨.",
      "source": "친구 제공 문제집 · 7주차 이론 4번 · 원문 23, 27쪽",
      "model": "소유자 실행 비트 자리의 SUID와 실행 권한이 모두 설정됨.",
      "rubric": [
        "핵심 내용: suid",
        "핵심 내용: 실행 / x"
      ]
    },
    {
      "id": "hk-friend-w7t05",
      "week": 7,
      "type": "essay",
      "prompt": "7주차 PDF의 로컬 백도어(Local Backdoor)는 주로 무엇에 이용되는가?",
      "explanation": "이미 접근한 서버에서 관리자 권한으로 상승하는 데 이용된다.",
      "source": "친구 제공 문제집 · 7주차 이론 5번 · 원문 5쪽",
      "model": "이미 접근한 서버에서 관리자 권한으로 상승하는 데 이용된다.",
      "rubric": [
        "핵심 내용: 권한",
        "핵심 내용: 상승 / root / 관리자"
      ]
    },
    {
      "id": "hk-friend-w7t06",
      "week": 7,
      "type": "essay",
      "prompt": "7주차 PDF의 원격 백도어(Remote Backdoor)는 무엇인가?",
      "explanation": "네트워크를 통해 원격으로 시스템에 접근하도록 만든 통로/프로그램.",
      "source": "친구 제공 문제집 · 7주차 이론 6번 · 원문 5쪽",
      "model": "네트워크를 통해 원격으로 시스템에 접근하도록 만든 통로/프로그램.",
      "rubric": [
        "핵심 내용: 원격 / 네트워크",
        "핵심 내용: 접근 / 접속"
      ]
    },
    {
      "id": "hk-friend-w7t07",
      "week": 7,
      "type": "essay",
      "prompt": "백도어(Backdoor)란?",
      "explanation": "정상 인증 절차를 거치지 않고 시스템이나 프로그램에 접근하도록 만든 통로.",
      "source": "친구 제공 문제집 · 7주차 이론 7번 · 원문 4쪽",
      "model": "정상 인증 절차를 거치지 않고 시스템이나 프로그램에 접근하도록 만든 통로.",
      "rubric": [
        "핵심 내용: 인증",
        "핵심 내용: 우회 / 거치지 / 없이"
      ]
    },
    {
      "id": "hk-friend-w7t08",
      "week": 7,
      "type": "essay",
      "prompt": "트로이 목마(Trojan Horse)의 특징은?",
      "explanation": "정상적인 프로그램에 사용자가 의도하지 않은 코드가 삽입된 것.",
      "source": "친구 제공 문제집 · 7주차 이론 8번 · 원문 4쪽",
      "model": "정상적인 프로그램에 사용자가 의도하지 않은 코드가 삽입된 것.",
      "rubric": [
        "핵심 내용: 정상",
        "핵심 내용: 삽입 / 숨겨 / 의도하지않"
      ]
    },
    {
      "id": "hk-friend-w7t09",
      "week": 7,
      "type": "short",
      "prompt": "SetUID와 해킹의 5단계 중 직접 관련이 큰 단계는?",
      "explanation": "3단계 로컬 어택(관리자 권한 상승).",
      "source": "친구 제공 문제집 · 7주차 이론 9번 · 원문 3주차 27쪽·7주차 22쪽",
      "answers": [
        "3단계 로컬 어택(관리자 권한 상승).",
        "로컬 어택",
        "3단계 로컬 어택",
        "로컬 어택(관리자 권한 상승)",
        "3단계 로컬 어택(관리자 권한 상승)"
      ]
    },
    {
      "id": "hk-friend-w7t10",
      "week": 7,
      "type": "essay",
      "prompt": "백도어 탐지·대응 방법 두 가지를 작성하시오.",
      "explanation": "열린 포트/프로세스 확인, SetUID 파일 검사, 무결성 검사, 로그 분석 등.\n\n학습 참고: 서로 다른 두 방법을 적었는지 직접 확인해.",
      "source": "친구 제공 문제집 · 7주차 이론 10번 · 원문 54~55쪽",
      "model": "열린 포트/프로세스 확인, SetUID 파일 검사, 무결성 검사, 로그 분석 등.\n\n학습 참고: 서로 다른 두 방법을 적었는지 직접 확인해.",
      "rubric": [
        "핵심 내용: 포트 / 프로세스 / setuid / 무결성 / 로그",
        "핵심 내용: 확인 / 검사 / 분석 / 탐지"
      ]
    },
    {
      "id": "hk-friend-w7p01",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 일반 사용자 계정과 관리자의 UID·GID를 현재 셸에서 확인하는 명령어는?\n\n실습 명령 흐름\nkali$ [현재 사용자의 UID·GID 확인 명령어]",
      "explanation": "id",
      "source": "친구 제공 문제집 · 7주차 실습 1번 · 원문 28쪽",
      "answers": [
        "id"
      ]
    },
    {
      "id": "hk-friend-w7p02",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
      "explanation": "호출 전 RUID=0, EUID=0\nsetuid(1000): 성공\n호출 후 RUID=1000, EUID=1000\n성공. root EUID 0으로 setuid(1000)이 수행되고 RUID·EUID가 1000이 됨.\n\n학습 참고: 호출 전에는 실행자 및 SUID에 따라 UID가 정해지고, 호출 후에는 setuid() 효과를 고려해.\n\n원문 주의: 강의자료에 표시된 실행 결과를 맞히는 문제야. 코드에서 setuid()의 반환값은 출력하지 않으므로 성공·실패 판단은 PDF 해설 기준이야.",
      "source": "친구 제공 문제집 · 7주차 실습 2번 · 원문 10~12쪽",
      "fields": [
        "호출 전 · RUID",
        "호출 전 · EUID",
        "호출 후 · RUID",
        "호출 후 · EUID"
      ],
      "answers": [
        "0",
        "0",
        "1000",
        "1000"
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 1
      }
    },
    {
      "id": "hk-friend-w7p03",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
      "explanation": "호출 전 RUID=1000, EUID=1000\nsetuid(0): 실패\n호출 후 RUID=1000, EUID=1000\n실패. root 권한이 없는 실행이므로 강의자료에서 RUID·EUID가 1000으로 유지됨.\n\n학습 참고: 호출 전에는 실행자 및 SUID에 따라 UID가 정해지고, 호출 후에는 setuid() 효과를 고려해.\n\n원문 주의: 강의자료에 표시된 실행 결과를 맞히는 문제야. 코드에서 setuid()의 반환값은 출력하지 않으므로 성공·실패 판단은 PDF 해설 기준이야.",
      "source": "친구 제공 문제집 · 7주차 실습 3번 · 원문 13~15쪽",
      "fields": [
        "호출 전 · RUID",
        "호출 전 · EUID",
        "호출 후 · RUID",
        "호출 후 · EUID"
      ],
      "answers": [
        "1000",
        "1000",
        "1000",
        "1000"
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "kali",
        "actorUid": "1000",
        "file": "setuid0",
        "target": "0",
        "outcome": "실패",
        "number": 2
      }
    },
    {
      "id": "hk-friend-w7p04",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
      "explanation": "호출 전 RUID=1001, EUID=0\nsetuid(1000): 성공\n호출 후 RUID=1000, EUID=1000\n성공. root 소유 SUID 파일이라 EUID 0으로 시작하고 setuid(1000) 호출 후 양쪽 모두 1000으로 변경됨.\n\n학습 참고: 호출 전에는 실행자 및 SUID에 따라 UID가 정해지고, 호출 후에는 setuid() 효과를 고려해.\n\n원문 주의: 강의자료에 표시된 실행 결과를 맞히는 문제야. 코드에서 setuid()의 반환값은 출력하지 않으므로 성공·실패 판단은 PDF 해설 기준이야.",
      "source": "친구 제공 문제집 · 7주차 실습 4번 · 원문 16~17쪽",
      "fields": [
        "호출 전 · RUID",
        "호출 전 · EUID",
        "호출 후 · RUID",
        "호출 후 · EUID"
      ],
      "answers": [
        "1001",
        "0",
        "1000",
        "1000"
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "root",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 3
      }
    },
    {
      "id": "hk-friend-w7p05",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
      "explanation": "호출 전 RUID=1001, EUID=1000\nsetuid(1000): 실패\n호출 후 RUID=1001, EUID=1000\n강의자료 표기: 실패. 출력은 RUID 1001, EUID 1000으로 유지됨. 실제 Linux에서는 호출 성공 여부가 PDF 설명과 다를 수 있음.\n\n학습 참고: 호출 전에는 실행자 및 SUID에 따라 UID가 정해지고, 호출 후에는 setuid() 효과를 고려해.\n\n원문 주의: 강의자료에 표시된 실행 결과를 맞히는 문제야. 코드에서 setuid()의 반환값은 출력하지 않으므로 성공·실패 판단은 PDF 해설 기준이야. 파일 소유자가 kali인 사례의 성공·실패 해설은 실제 Linux와 다를 수 있어.",
      "source": "친구 제공 문제집 · 7주차 실습 5번 · 원문 18~20쪽",
      "fields": [
        "호출 전 · RUID",
        "호출 전 · EUID",
        "호출 후 · RUID",
        "호출 후 · EUID"
      ],
      "answers": [
        "1001",
        "1000",
        "1001",
        "1000"
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 4
      }
    },
    {
      "id": "hk-friend-w7p06",
      "week": 7,
      "type": "blanks",
      "prompt": "화면의 파일 권한과 실행 계정을 보고, setuid() 호출 전후의 RUID·EUID를 구하세요.",
      "explanation": "호출 전 RUID=0, EUID=1000\nsetuid(1000): 실패\n호출 후 RUID=0, EUID=1000\n강의자료 표기: 실패. 출력은 RUID 0, EUID 1000으로 유지됨. 실제 Linux의 setuid() 반환값은 PDF 설명과 다를 수 있음.\n\n학습 참고: 호출 전에는 실행자 및 SUID에 따라 UID가 정해지고, 호출 후에는 setuid() 효과를 고려해.\n\n원문 주의: 강의자료에 표시된 실행 결과를 맞히는 문제야. 코드에서 setuid()의 반환값은 출력하지 않으므로 성공·실패 판단은 PDF 해설 기준이야. 파일 소유자가 kali인 사례의 성공·실패 해설은 실제 Linux와 다를 수 있어.",
      "source": "친구 제공 문제집 · 7주차 실습 6번 · 원문 21쪽",
      "fields": [
        "호출 전 · RUID",
        "호출 전 · EUID",
        "호출 후 · RUID",
        "호출 후 · EUID"
      ],
      "answers": [
        "0",
        "1000",
        "0",
        "1000"
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 5
      }
    },
    {
      "id": "hk-friend-w7p07",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] backdoor.c를 컴파일하여 backdoor 실행 파일을 만든다.\n\n컴파일 실습 흐름 · PDF 25~27쪽\nroot# nano backdoor.c\nroot# [컴파일 명령어]\nroot# ls -al backdoor\n-rwxr-xr-x 1 root root ... backdoor",
      "explanation": "gcc -o backdoor backdoor.c",
      "source": "친구 제공 문제집 · 7주차 실습 7번 · 원문 26쪽",
      "answers": [
        "gcc -o backdoor backdoor.c"
      ]
    },
    {
      "id": "hk-friend-w7p08",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 생성한 backdoor에 SetUID 권한 4755를 설정한다.\n\n권한 설정 실습 흐름 · PDF 26~28쪽\nroot# ls -al backdoor\n-rwxr-xr-x 1 root root ... backdoor\nroot# [권한 설정 명령어]\nroot# ls -al backdoor\n-rwsr-xr-x 1 root root ... backdoor",
      "explanation": "chmod 4755 backdoor",
      "source": "친구 제공 문제집 · 7주차 실습 8번 · 원문 27쪽",
      "answers": [
        "chmod 4755 backdoor"
      ]
    },
    {
      "id": "hk-friend-w7p09",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 파일시스템 전체에서 권한이 정확히 4755인 파일을 찾는 PDF 명령어는?\n\n기존 SUID 파일 확인 · PDF 45쪽\nroot# [전체 파일시스템에서 4755 파일 검색 명령어]\n/usr/bin/chfn\n...",
      "explanation": "find / -perm 4755",
      "source": "친구 제공 문제집 · 7주차 실습 9번 · 원문 45쪽",
      "answers": [
        "find / -perm 4755"
      ]
    },
    {
      "id": "hk-friend-w7p10",
      "week": 7,
      "type": "essay",
      "prompt": "[결과 설명] PDF의 localbackdoor를 통해 일반 사용자가 /etc/shadow를 읽을 수 있었던 이유는?\n\n실습 상황\n-rwsr-xr-x 1 root root ... localbackdoor\n실행자(가정): kali (UID 1000)\n보호된 대상: /etc/shadow (일반 사용자 읽기 불가)",
      "explanation": "root 소유 SUID 실행 파일의 EUID가 0이어서 보호된 파일 접근 권한을 이용했기 때문.",
      "source": "친구 제공 문제집 · 7주차 실습 10번 · 원문 42~43, 51쪽",
      "model": "root 소유 SUID 실행 파일의 EUID가 0이어서 보호된 파일 접근 권한을 이용했기 때문.",
      "rubric": [
        "핵심 내용: suid",
        "핵심 내용: euid / 유효uid",
        "핵심 내용: 0 / root"
      ]
    },
    {
      "id": "hk-friend-w7p11",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 7주차 PDF에서 /bin/bash를 실습 폴더 /home/kali/test3/bash로 복사하는 명령어는?\n\n실습 파일 준비 · PDF 23쪽\nroot# [파일 복사 명령어]\nroot# ls -al /home/kali/test3/bash\n-rwxr-xr-x 1 root root ... bash",
      "explanation": "cp /bin/bash /home/kali/test3/bash",
      "source": "친구 제공 문제집 · 7주차 실습 11번 · 원문 23쪽",
      "answers": [
        "cp /bin/bash /home/kali/test3/bash"
      ]
    },
    {
      "id": "hk-friend-w7p12",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 실습용으로 복사한 bash 파일의 권한을 4755로 설정하시오.\n\n권한 비트 변경 · PDF 23쪽\nroot# ls -al bash\n-rwxr-xr-x 1 root root ... bash\nroot# [권한 변경 명령어]\n-rwsr-xr-x 1 root root ... bash",
      "explanation": "chmod 4755 bash",
      "source": "친구 제공 문제집 · 7주차 실습 12번 · 원문 23쪽",
      "answers": [
        "chmod 4755 bash"
      ]
    },
    {
      "id": "hk-friend-w7p13",
      "week": 7,
      "type": "essay",
      "prompt": "[실행 결과] root 소유 bash 복사본에 chmod 4755를 준 다음 일반 사용자로 실행했어. 7주차 PDF에서 root 권한 상승 성공/실패는?\n\n실행 결과 판단 · PDF 23~24쪽\n-rwsr-xr-x 1 root root ... bash\n실행자(가정): kali (UID 1000)\nkali$ ./bash\nkali$ id\nuid=1000(kali) ...",
      "explanation": "권한 상승 실패. bash의 보호 동작 때문에 일반적으로 권한이 유지되지 않았다고 강의자료가 설명함.\n\n원문 주의: 7주차 PDF에 나온 bash 실습 결과를 묻는 문제야.",
      "source": "친구 제공 문제집 · 7주차 실습 13번 · 원문 24쪽",
      "model": "권한 상승 실패. bash의 보호 동작 때문에 일반적으로 권한이 유지되지 않았다고 강의자료가 설명함.\n\n원문 주의: 7주차 PDF에 나온 bash 실습 결과를 묻는 문제야.",
      "rubric": [
        "핵심 내용: 실패"
      ]
    },
    {
      "id": "hk-friend-w7p14",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] root 셸에서 일반 사용자 kali로 전환하는 실습 명령어는?\n\n계정 변경 · PDF 28쪽\nroot# [kali로 사용자 전환 명령어]\nkali$ id",
      "explanation": "su kali",
      "source": "친구 제공 문제집 · 7주차 실습 14번 · 원문 28쪽",
      "answers": [
        "su kali"
      ]
    },
    {
      "id": "hk-friend-w7p15",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 일반 사용자로 돌아온 뒤 현재 UID·GID를 확인하는 명령어는?\n\n계정 확인 · PDF 28쪽\nroot# su kali\nkali$ [현재 UID·GID 확인 명령어]",
      "explanation": "id",
      "source": "친구 제공 문제집 · 7주차 실습 15번 · 원문 28쪽",
      "answers": [
        "id"
      ]
    },
    {
      "id": "hk-friend-w7p16",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 컴파일된 backdoor 실행 파일을 현재 작업 디렉터리에서 실행하는 명령어는?\n\nSUID 실행 파일 동작 확인 · PDF 28쪽\n-rwsr-xr-x 1 root root ... backdoor\nkali$ id\nuid=1000(kali) ...\nkali$ [실행 명령어]\nroot# id\nuid=0(root) ...",
      "explanation": "./backdoor",
      "source": "친구 제공 문제집 · 7주차 실습 16번 · 원문 28쪽",
      "answers": [
        "./backdoor"
      ]
    },
    {
      "id": "hk-friend-w7p17",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 강의자료에서 localbackdoor.c를 컴파일해 localbackdoor 실행 파일을 만드는 명령어는?\n\n로컬 백도어 생성 흐름 · PDF 38~40쪽\nroot# nano localbackdoor.c\nroot# [컴파일 명령어]\nroot# ls -al localbackdoor\n-rwxr-xr-x 1 root root ... localbackdoor",
      "explanation": "gcc -o localbackdoor localbackdoor.c",
      "source": "친구 제공 문제집 · 7주차 실습 17번 · 원문 38쪽",
      "answers": [
        "gcc -o localbackdoor localbackdoor.c"
      ]
    },
    {
      "id": "hk-friend-w7p18",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 컴파일된 localbackdoor에 SUID 포함 4755 권한을 부여하는 명령어는?\n\n로컬 백도어 실행 권한 · PDF 38~40쪽\nroot# ls -al localbackdoor\n-rwxr-xr-x 1 root root ... localbackdoor\nroot# [권한 변경 명령어]\n-rwsr-xr-x 1 root root ... localbackdoor",
      "explanation": "chmod 4755 localbackdoor",
      "source": "친구 제공 문제집 · 7주차 실습 18번 · 원문 38쪽",
      "answers": [
        "chmod 4755 localbackdoor"
      ]
    },
    {
      "id": "hk-friend-w7p19",
      "week": 7,
      "type": "essay",
      "prompt": "[실행 결과] 강의자료의 root 소유 SetUID localbackdoor 프로그램을 kali가 실행한 상황이야. 실행 중 EUID가 0이 되는 이유는?\n\n파일 정보 및 실행 조건 · PDF 42~43쪽\n-rwsr-xr-x 1 root root ... localbackdoor\n실행자(가정): kali (UID 1000)\n실행 중 프로그램 EUID는 몇 번인가?",
      "explanation": "파일 소유자가 root이고 SUID가 설정되어 있으므로 실행 시 EUID가 root의 UID 0으로 설정됨.",
      "source": "친구 제공 문제집 · 7주차 실습 19번 · 원문 42~43쪽",
      "model": "파일 소유자가 root이고 SUID가 설정되어 있으므로 실행 시 EUID가 root의 UID 0으로 설정됨.",
      "rubric": [
        "핵심 내용: suid / setuid",
        "핵심 내용: 소유자 / root",
        "핵심 내용: euid / 0"
      ]
    },
    {
      "id": "hk-friend-w7p20",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] localbackdoor2.c를 컴파일해서 localbackdoor2 실행 파일을 만드는 명령어를 작성하시오.\n\nlocalbackdoor2 컴파일 흐름 · PDF 47~48쪽\nroot# nano localbackdoor2.c\nroot# [컴파일 명령어]\nroot# ls -al localbackdoor2\n-rwxr-xr-x 1 root root ... localbackdoor2",
      "explanation": "gcc -o localbackdoor2 localbackdoor2.c",
      "source": "친구 제공 문제집 · 7주차 실습 20번 · 원문 48쪽",
      "answers": [
        "gcc -o localbackdoor2 localbackdoor2.c"
      ]
    },
    {
      "id": "hk-friend-w7p21",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] localbackdoor2 실행 파일에 4755 권한을 적용하는 명령어는?\n\nlocalbackdoor2 SUID 설정 · PDF 48쪽\nroot# ls -al localbackdoor2\n-rwxr-xr-x 1 root root ... localbackdoor2\nroot# [권한 변경 명령어]\n-rwsr-xr-x 1 root root ... localbackdoor2",
      "explanation": "chmod 4755 localbackdoor2",
      "source": "친구 제공 문제집 · 7주차 실습 21번 · 원문 48쪽",
      "answers": [
        "chmod 4755 localbackdoor2"
      ]
    },
    {
      "id": "hk-friend-w7p22",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 현재 폴더의 localbackdoor2 파일에 적용된 권한·소유자를 확인하는 명령어는?\n\n권한 확인 · PDF 48~49쪽\nroot# [파일 권한 확인 명령어]\n-rwsr-xr-x 1 root root ... localbackdoor2",
      "explanation": "ls -al localbackdoor2",
      "source": "친구 제공 문제집 · 7주차 실습 22번 · 원문 48~49쪽",
      "answers": [
        "ls -al localbackdoor2"
      ]
    },
    {
      "id": "hk-friend-w7p23",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸] 컴파일 후 SUID를 설정한 localbackdoor2를 현재 폴더에서 실행하여 동작을 확인하시오.\n\n프로그램 실행 확인 · PDF 49쪽\nroot# [실행 명령어]\nEnter the new value, or press ENTER for the default\nFull Name []:",
      "explanation": "./localbackdoor2",
      "source": "친구 제공 문제집 · 7주차 실습 23번 · 원문 49쪽",
      "answers": [
        "./localbackdoor2"
      ]
    },
    {
      "id": "hk-friend-w7p24",
      "week": 7,
      "type": "short",
      "prompt": "[명령어 빈칸·PDF 실습] 7주차 PDF 50쪽에서 localbackdoor2를 /usr/bin/chfn 경로로 옮기는 명령어 전체를 작성하시오. (격리된 실습 VM에서만 다룬 상황)\n\n실습 VM의 파일 이동 · PDF 50쪽\nroot# ls -al localbackdoor2\n-rwsr-xr-x 1 root root ... localbackdoor2\nroot# [파일 이동 명령어]\nroot# ls -al /usr/bin/chfn\n-rwsr-xr-x 1 root root ... /usr/bin/chfn",
      "explanation": "mv localbackdoor2 /usr/bin/chfn\n\n원문 주의: 강의 PDF에 나온 명령어의 식별·암기 문제야. 실제 사용 중인 시스템에서는 실행하지 마.",
      "source": "친구 제공 문제집 · 7주차 실습 24번 · 원문 50쪽",
      "answers": [
        "mv localbackdoor2 /usr/bin/chfn"
      ]
    },
    {
      "id": "hk-friend-w7p25",
      "week": 7,
      "type": "essay",
      "prompt": "[실행 결과] 강의자료의 root 소유 SetUID 프로그램으로 교체된 chfn을 kali가 실행해 /etc/shadow를 읽을 수 있었던 원인은?\n\n파일 정보 및 실습 결과 · PDF 50~51쪽\n-rwsr-xr-x 1 root root ... /usr/bin/chfn\n실행자(가정): kali (UID 1000)\nkali$ /usr/bin/chfn \"cat /etc/shadow\"\nroot:...  (보호된 파일의 내용이 화면에 표시됨)",
      "explanation": "root 소유 SUID 프로그램이 실행 중 EUID 0으로 동작했기 때문에 보호된 파일 읽기 권한을 얻음.\n\n원문 주의: 7주차 강의자료의 실습 결과 해석 문제. 실제 시스템 파일 교체는 금지하고 전용 VM에서만 실습해.",
      "source": "친구 제공 문제집 · 7주차 실습 25번 · 원문 51쪽",
      "model": "root 소유 SUID 프로그램이 실행 중 EUID 0으로 동작했기 때문에 보호된 파일 읽기 권한을 얻음.\n\n원문 주의: 7주차 강의자료의 실습 결과 해석 문제. 실제 시스템 파일 교체는 금지하고 전용 VM에서만 실습해.",
      "rubric": [
        "핵심 내용: suid / setuid",
        "핵심 내용: euid / 유효uid",
        "핵심 내용: 0 / root"
      ]
    },
    {
      "id": "hk-friend-essay01",
      "week": 3,
      "type": "essay",
      "prompt": "[기본형] 해킹의 5단계를 순서대로 작성하고, 각 단계에서 수행하는 활동과 목적을 설명하시오.",
      "explanation": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n\n정보 수집: 대상 시스템의 IP, 열려 있는 포트, 서비스와 버전 등의 정보를 파악한다.\n리모트 어택: 원격에서 취약점(Exploit)을 이용해 대상 서버의 셸 접근을 시도한다.\n로컬 어택: 서버 내부에 접근한 뒤 잘못된 설정이나 SetUID 파일 등을 활용해 관리자 권한을 얻으려 한다.\n흔적 지우기: 접속 기록이나 로그 등 공격 흔적을 제거한다.\n백도어 생성: 이후 다시 접근할 수 있도록 숨겨진 재침입 경로를 마련한다.\n\n학습 참고: 단계 순서 + 다섯 단계의 의미를 모두 설명하는지 직접 점검해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "source": "친구 제공 문제집 · 5단계 서술형 1번 · 원문 3주차 20~29쪽",
      "model": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n\n정보 수집: 대상 시스템의 IP, 열려 있는 포트, 서비스와 버전 등의 정보를 파악한다.\n리모트 어택: 원격에서 취약점(Exploit)을 이용해 대상 서버의 셸 접근을 시도한다.\n로컬 어택: 서버 내부에 접근한 뒤 잘못된 설정이나 SetUID 파일 등을 활용해 관리자 권한을 얻으려 한다.\n흔적 지우기: 접속 기록이나 로그 등 공격 흔적을 제거한다.\n백도어 생성: 이후 다시 접근할 수 있도록 숨겨진 재침입 경로를 마련한다.\n\n학습 참고: 단계 순서 + 다섯 단계의 의미를 모두 설명하는지 직접 점검해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "rubric": [
        "1단계 정보 수집",
        "2단계 리모트 어택",
        "3단계 로컬 어택",
        "4단계 흔적 지우기",
        "5단계 백도어 생성",
        "대상 정보 파악",
        "원격 접근/셸",
        "관리자 권한 상승",
        "접속 기록/로그 제거",
        "재접근 경로 확보"
      ]
    },
    {
      "id": "hk-friend-essay02",
      "week": 3,
      "type": "essay",
      "prompt": "[기술 연결형] 해킹의 5단계를 순서대로 작성하고, 단계별 활동과 강의에서 다룬 관련 기술·도구를 연결해 설명하시오.",
      "explanation": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n정보 수집: 대상 정보 파악, 포트 스캐닝·Nmap\n리모트 어택: 원격 취약점 공격, Exploit\n로컬 어택: 내부에서 관리자 권한 상승, SetUID\n흔적 지우기: 접속 기록·로그 제거\n백도어 생성: 다시 침입하기 위한 숨은 통로 확보, 로컬 백도어\n\n학습 참고: 모든 단계에 특정 도구가 있다고 억지로 쓰지 말고, PDF에 연결되는 예시만 작성해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "source": "친구 제공 문제집 · 5단계 서술형 2번 · 원문 3주차 20~29쪽, 4주차 17쪽, 7주차 3~5쪽",
      "model": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n정보 수집: 대상 정보 파악, 포트 스캐닝·Nmap\n리모트 어택: 원격 취약점 공격, Exploit\n로컬 어택: 내부에서 관리자 권한 상승, SetUID\n흔적 지우기: 접속 기록·로그 제거\n백도어 생성: 다시 침입하기 위한 숨은 통로 확보, 로컬 백도어\n\n학습 참고: 모든 단계에 특정 도구가 있다고 억지로 쓰지 말고, PDF에 연결되는 예시만 작성해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "rubric": [
        "1단계 정보 수집",
        "2단계 리모트 어택",
        "3단계 로컬 어택",
        "4단계 흔적 지우기",
        "5단계 백도어 생성",
        "포트 스캐닝 또는 Nmap",
        "Exploit/취약점",
        "SetUID/권한 상승",
        "로그/접속 기록",
        "재침입/백도어 목적"
      ]
    },
    {
      "id": "hk-friend-essay03",
      "week": 3,
      "type": "essay",
      "prompt": "[과정 설명형] 해킹 공격자가 대상의 정보를 수집하고 원격 접근을 시도한 뒤 관리자 권한을 얻고 재접근 경로를 확보하는 전 과정을 해킹의 5단계에 맞춰 설명하시오.",
      "explanation": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n\n정보 수집: 대상 시스템의 IP, 열려 있는 포트, 서비스와 버전 등의 정보를 파악한다.\n리모트 어택: 원격에서 취약점(Exploit)을 이용해 대상 서버의 셸 접근을 시도한다.\n로컬 어택: 서버 내부에 접근한 뒤 잘못된 설정이나 SetUID 파일 등을 활용해 관리자 권한을 얻으려 한다.\n흔적 지우기: 접속 기록이나 로그 등 공격 흔적을 제거한다.\n백도어 생성: 이후 다시 접근할 수 있도록 숨겨진 재침입 경로를 마련한다.\n\n학습 참고: 문장 속에 순서를 드러내고, 중간의 흔적 지우기를 빠뜨리지 않았는지 확인해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "source": "친구 제공 문제집 · 5단계 서술형 3번 · 원문 3주차 20~29쪽",
      "model": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n\n정보 수집: 대상 시스템의 IP, 열려 있는 포트, 서비스와 버전 등의 정보를 파악한다.\n리모트 어택: 원격에서 취약점(Exploit)을 이용해 대상 서버의 셸 접근을 시도한다.\n로컬 어택: 서버 내부에 접근한 뒤 잘못된 설정이나 SetUID 파일 등을 활용해 관리자 권한을 얻으려 한다.\n흔적 지우기: 접속 기록이나 로그 등 공격 흔적을 제거한다.\n백도어 생성: 이후 다시 접근할 수 있도록 숨겨진 재침입 경로를 마련한다.\n\n학습 참고: 문장 속에 순서를 드러내고, 중간의 흔적 지우기를 빠뜨리지 않았는지 확인해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "rubric": [
        "1단계 정보 수집",
        "2단계 리모트 어택",
        "3단계 로컬 어택",
        "4단계 흔적 지우기",
        "5단계 백도어 생성",
        "정보 수집 내용",
        "원격 셸 접근",
        "관리자 권한 상승",
        "흔적 정리",
        "재침입 목적"
      ]
    },
    {
      "id": "hk-friend-essay04",
      "week": 3,
      "type": "essay",
      "prompt": "[비교형] 리모트 어택과 로컬 어택의 차이를 설명하고, 해킹의 5단계에서 두 공격이 어떤 역할을 하는지 서술하시오.",
      "explanation": "해킹 5단계 중 2단계 리모트 어택은 원격 대상의 취약점을 이용해 서버의 셸을 얻으려는 과정이다. 3단계 로컬 어택은 내부 접근 이후 관리자(root) 권한을 획득하는 과정이다. 두 과정은 정보 수집 이후 진행하며, 원격 공격으로 곧바로 root를 얻었다면 로컬 어택은 생략될 수도 있다.\n\n학습 참고: 이 비교형은 전체 5단계를 다 쓰지 않아도 문제에 요구된 비교만 정확하면 돼.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "source": "친구 제공 문제집 · 5단계 서술형 4번 · 원문 3주차 25~27쪽",
      "model": "해킹 5단계 중 2단계 리모트 어택은 원격 대상의 취약점을 이용해 서버의 셸을 얻으려는 과정이다. 3단계 로컬 어택은 내부 접근 이후 관리자(root) 권한을 획득하는 과정이다. 두 과정은 정보 수집 이후 진행하며, 원격 공격으로 곧바로 root를 얻었다면 로컬 어택은 생략될 수도 있다.\n\n학습 참고: 이 비교형은 전체 5단계를 다 쓰지 않아도 문제에 요구된 비교만 정확하면 돼.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "rubric": [
        "리모트 어택=원격 접근",
        "로컬 어택=내부 접근",
        "원격 셸 획득",
        "관리자 권한 상승",
        "단계의 선후"
      ]
    },
    {
      "id": "hk-friend-essay05",
      "week": 3,
      "type": "essay",
      "prompt": "[상황 분석형] 공격자가 ① 포트 스캐닝 ② 원격 셸 획득 ③ 관리자 권한 상승 ④ 접속 기록 제거 ⑤ 숨겨진 재접근 통로 설치를 했다. 각 행위를 해킹의 5단계와 연결하고 그 이유를 설명하시오.",
      "explanation": "① 정보 수집: 포트 스캐닝으로 열린 서비스를 확인한다.\n② 리모트 어택: 원격 셸 획득을 시도한다.\n③ 로컬 어택: 관리자 권한을 획득한다.\n④ 흔적 지우기: 접속 기록을 제거한다.\n⑤ 백도어 생성: 재침입할 통로를 남긴다.\n\n학습 참고: 사례의 ①~⑤와 강의자료 단계의 순서가 각각 대응하는지 확인해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "source": "친구 제공 문제집 · 5단계 서술형 5번 · 원문 3주차 20~29쪽",
      "model": "① 정보 수집: 포트 스캐닝으로 열린 서비스를 확인한다.\n② 리모트 어택: 원격 셸 획득을 시도한다.\n③ 로컬 어택: 관리자 권한을 획득한다.\n④ 흔적 지우기: 접속 기록을 제거한다.\n⑤ 백도어 생성: 재침입할 통로를 남긴다.\n\n학습 참고: 사례의 ①~⑤와 강의자료 단계의 순서가 각각 대응하는지 확인해.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "rubric": [
        "1단계 정보 수집",
        "2단계 리모트 어택",
        "3단계 로컬 어택",
        "4단계 흔적 지우기",
        "5단계 백도어 생성",
        "포트 스캐닝 의미",
        "원격 셸 의미",
        "권한 상승 의미",
        "기록 제거 의미",
        "재침입 의미"
      ]
    },
    {
      "id": "hk-friend-essay06",
      "week": 3,
      "type": "essay",
      "prompt": "[종합형] 해킹의 5단계를 순서대로 쓰고, 단계별 목적·수행 작업·관련 기술 또는 도구를 연결하여 전체 공격 과정을 서술하시오.",
      "explanation": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n정보 수집: 대상 시스템의 IP, 열려 있는 포트, 서비스와 버전 등의 정보를 파악한다. 대표 기술: 포트 스캐닝, Nmap\n리모트 어택: 원격에서 취약점(Exploit)을 이용해 대상 서버의 셸 접근을 시도한다. 관련 용어: Exploit\n로컬 어택: 서버 내부에 접근한 뒤 잘못된 설정이나 SetUID 파일 등을 활용해 관리자 권한을 얻으려 한다. 관련 기술: SetUID 및 권한 상승\n흔적 지우기: 접속 기록이나 로그 등 공격 흔적을 제거한다. 접속 기록·로그 제거\n백도어 생성: 이후 다시 접근할 수 있도록 숨겨진 재침입 경로를 마련한다. 관련 기술: 로컬 백도어\n\n학습 참고: 이 문제는 실제 시험의 확정 문제가 아니라 네가 예상한 서술형을 집중 연습하도록 만든 종합형이야.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "source": "친구 제공 문제집 · 5단계 서술형 6번 · 원문 3주차 20~29쪽, 4주차 17쪽, 7주차 3~5쪽",
      "model": "정보 수집 → 리모트 어택 → 로컬 어택 → 흔적 지우기 → 백도어 생성\n정보 수집: 대상 시스템의 IP, 열려 있는 포트, 서비스와 버전 등의 정보를 파악한다. 대표 기술: 포트 스캐닝, Nmap\n리모트 어택: 원격에서 취약점(Exploit)을 이용해 대상 서버의 셸 접근을 시도한다. 관련 용어: Exploit\n로컬 어택: 서버 내부에 접근한 뒤 잘못된 설정이나 SetUID 파일 등을 활용해 관리자 권한을 얻으려 한다. 관련 기술: SetUID 및 권한 상승\n흔적 지우기: 접속 기록이나 로그 등 공격 흔적을 제거한다. 접속 기록·로그 제거\n백도어 생성: 이후 다시 접근할 수 있도록 숨겨진 재침입 경로를 마련한다. 관련 기술: 로컬 백도어\n\n학습 참고: 이 문제는 실제 시험의 확정 문제가 아니라 네가 예상한 서술형을 집중 연습하도록 만든 종합형이야.\n\n원문 주의: 자동 채점은 문장 의미를 완전히 이해하지 못해. 키워드 점검은 참고용이고 모범답안과 직접 비교해 정답으로 인정해 줘.",
      "rubric": [
        "1단계 정보 수집",
        "2단계 리모트 어택",
        "3단계 로컬 어택",
        "4단계 흔적 지우기",
        "5단계 백도어 생성",
        "정보 수집 예시 기술",
        "원격 공격 활동",
        "로컬 공격 활동",
        "로그 제거",
        "재접근 경로"
      ]
    },
    {
      "id": "hk-friend-exam01",
      "week": 6,
      "type": "choice",
      "prompt": "[객관식] 스니핑을 위한 여러 도구를 패키지로 제공하는 프로그램은 무엇인가?",
      "explanation": "DSniff(디스니프)",
      "source": "친구 제공 문제집 · 실전 예상 1번 · 원문 6주차 14~16쪽",
      "options": [
        {
          "id": "o0",
          "text": "Nmap"
        },
        {
          "id": "o1",
          "text": "Metasploit"
        },
        {
          "id": "o2",
          "text": "DSniff"
        },
        {
          "id": "o3",
          "text": "Crunch"
        }
      ],
      "answer": "o2"
    },
    {
      "id": "hk-setuid-01",
      "week": 7,
      "type": "blanks",
      "prompt": "SetUID 집중 연습: 파일 권한과 실행 계정을 보고 호출 전후의 RUID·EUID 네 값을 입력하세요.",
      "explanation": "처음부터 EUID=0인 강의 조건이므로 RUID와 EUID를 모두 1000으로 바꿀 수 있다.",
      "source": "SetUID 집중 연습 · SUID 다섯 사례 1",
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
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 1
      },
      "topics": [
        "setuid"
      ]
    },
    {
      "id": "hk-setuid-02",
      "week": 7,
      "type": "blanks",
      "prompt": "SetUID 집중 연습: 파일 권한과 실행 계정을 보고 호출 전후의 RUID·EUID 네 값을 입력하세요.",
      "explanation": "root 소유라는 사실만으로 EUID가 0이 되지 않는다. 일반 권한에서 이 root 변경 시도는 실패해 값이 유지된다.",
      "source": "SetUID 집중 연습 · SUID 다섯 사례 2",
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
      ],
      "practice": {
        "permission": "-rwxr-xr-x",
        "owner": "root",
        "actor": "kali",
        "actorUid": "1000",
        "file": "setuid0",
        "target": "0",
        "outcome": "실패",
        "number": 2
      },
      "topics": [
        "setuid"
      ]
    },
    {
      "id": "hk-setuid-03",
      "week": 7,
      "type": "blanks",
      "prompt": "SetUID 집중 연습: 파일 권한과 실행 계정을 보고 호출 전후의 RUID·EUID 네 값을 입력하세요.",
      "explanation": "SetUID로 실행 직후 EUID=0이 된다. 이 유효 root 권한으로 두 UID를 1000으로 바꾼다. 종료 후 부모 쉘은 (1001,1001)이다.",
      "source": "SetUID 집중 연습 · SUID 다섯 사례 3",
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
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "root",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "성공",
        "number": 3
      },
      "topics": [
        "setuid"
      ]
    },
    {
      "id": "hk-setuid-04",
      "week": 7,
      "type": "blanks",
      "prompt": "SetUID 집중 연습: 파일 권한과 실행 계정을 보고 호출 전후의 RUID·EUID 네 값을 입력하세요.",
      "explanation": "EUID는 소유자 kali의 1000이다. 관리자 유효 권한이 없어 RUID는 1001로 남는다. 출력이 그대로인 것만으로 함수 반환 실패를 확정하지 않는다.",
      "source": "SetUID 집중 연습 · SUID 다섯 사례 4",
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
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "kali1001",
        "actorUid": "1001",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 4
      },
      "topics": [
        "setuid"
      ]
    },
    {
      "id": "hk-setuid-05",
      "week": 7,
      "type": "blanks",
      "prompt": "SetUID 집중 연습: 파일 권한과 실행 계정을 보고 호출 전후의 RUID·EUID 네 값을 입력하세요.",
      "explanation": "실행 전 root 쉘이었다는 사실보다 실행 후 EUID를 본다. 소유자 kali의 EUID=1000이므로 두 UID를 모두 1000으로 바꾸는 목표는 달성하지 못한다.",
      "source": "SetUID 집중 연습 · SUID 다섯 사례 5",
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
      ],
      "practice": {
        "permission": "-rwsr-xr-x",
        "owner": "kali",
        "actor": "root",
        "actorUid": "0",
        "file": "setuid1000",
        "target": "1000",
        "outcome": "실패",
        "number": 5
      },
      "topics": [
        "setuid"
      ]
    }
  ]
};
  // 각 문항에서 정답을 제외한 원래 보기 순서의 해설입니다.
  const wrongReasons = {
    'hk-001': ['블랙 햇은 악의적·무단 침해와 연결되는 유형입니다. 사전 허가를 받고 보안을 개선하는 화이트 햇과 구분합니다.', '스크립트 키디는 원리 이해가 부족한 채 기존 도구에 의존하는 유형입니다. 허가된 보안 전문가라는 정의와 다릅니다.', '핵티비스트는 정치·사회적 메시지 전달이라는 목적에 따른 분류입니다. 허가된 보안 점검 전문가를 뜻하지 않습니다.'],
    'hk-002': ['화이트 햇은 허가된 보안 개선 활동을 하는 유형입니다. 도구 원리를 모른 채 의존하는 특징은 스크립트 키디입니다.', '블루 햇은 강의의 해커 분류 중 하나지만, 기존 도구에 의존하는 유형의 명칭은 스크립트 키디입니다.', '커널 개발자는 운영체제 핵심 부분을 개발하는 사람입니다. 타인의 도구에 의존하는 해커 유형의 명칭이 아닙니다.'],
    'hk-003': ['키로거는 키 입력을 수집합니다. 존재 은폐와 접근 유지용 도구 모음인 루트킷과 다릅니다.', '패킷 스니퍼는 통신 패킷을 캡처·분석합니다. 시스템에서 존재를 숨기는 도구 모음의 정의와 다릅니다.', '방화벽은 정책에 따라 네트워크 접근을 통제합니다. 침해자의 존재 은폐 도구 모음이 아닙니다.'],
    'hk-004': ['스케줄링은 작업 실행 순서나 시점을 정하는 것입니다. 신원·주소 위조는 스푸핑입니다.', '마운트는 파일시스템을 특정 경로에 연결하는 동작입니다. 주소 위조와 다릅니다.', '리다이렉션은 입출력이나 전달 방향을 바꾸는 개념입니다. 신원·주소 위조 자체의 명칭은 스푸핑입니다.'],
    'hk-005': ['블루 햇이라는 분류보다 문제의 정치·사회적 활동 목적에 직접 대응하는 명칭은 핵티비스트입니다.', '스크립트 키디는 도구 의존과 원리 이해 부족에 따른 분류입니다. 정치·사회적 목적에 따른 분류가 아닙니다.', '장치 드라이버는 운영체제와 하드웨어를 연결하는 소프트웨어입니다. 해커의 활동 목적 분류가 아닙니다.'],
    'hk-008': ['쉘은 사용자 명령을 해석하고 실행합니다. 장치·메모리·프로세스 등 시스템 자원 관리의 핵심은 커널입니다.', '사용자는 시스템을 이용하는 주체입니다. 하드웨어 자원을 관리하는 운영체제 핵심 계층은 커널입니다.', '텍스트 편집기는 문서를 편집하는 응용 프로그램입니다. 시스템 자원 관리 계층이 아닙니다.'],
    'hk-009': ['파이프는 표준 출력을 다음 명령의 표준 입력에 연결합니다. 모든 출력을 임시 디스크 파일에 저장하는 것으로 정의하지 않습니다.', '파일 소유자를 바꾸는 명령은 chown입니다. 파이프 기호는 소유권을 변경하지 않습니다.', '파이프는 입출력을 연결할 뿐 실행 권한을 관리자 권한으로 바꾸지 않습니다.'],
    'hk-010': ['/dev에는 장치를 나타내는 특수 파일이 있습니다. 일반적인 시스템·서비스 설정 파일은 /etc에 둡니다.', '/boot는 부팅 관련 파일의 경로입니다. 시스템·서비스 설정 디렉터리와 다릅니다.', '/tmp는 임시 파일을 위한 경로입니다. 주 설정 파일 디렉터리는 /etc입니다.'],
    'hk-011': ['/root는 root 사용자의 홈 디렉터리입니다. 장치 특수 파일의 대표 위치는 /dev입니다.', '/home은 일반 사용자 홈 디렉터리들이 있는 경로입니다. 장치 특수 파일 경로가 아닙니다.', '/usr/include는 헤더 파일 등이 있는 경로입니다. 장치 파일은 /dev에 있습니다.'],
    'hk-012': ['비밀번호 해시 등은 보통 /etc/shadow에 있습니다. /etc/passwd는 계정 정보, /usr/bin/passwd는 변경 프로그램입니다.', '두 경로의 역할이 반대입니다. /etc/passwd가 계정 정보 파일이고 /usr/bin/passwd가 실행 프로그램입니다.', 'root의 홈 디렉터리는 /root입니다. 제시된 두 경로는 계정 정보 파일과 비밀번호 변경 프로그램입니다.'],
    'hk-013': ['/home/kali는 일반 사용자 kali의 홈 경로로 개인 작업 파일을 저장할 수 있습니다. 문제는 그렇게 해석하면 안 되는 경로를 묻습니다.', '일반 사용자의 홈 디렉터리는 개인 작업 파일의 기본 저장소로 사용합니다. 이 설명에 맞지 않는 경로는 /usr입니다.', '사용자가 지정한 작업 폴더는 개인 작업 파일을 저장할 수 있습니다. /usr를 개인 홈처럼 해석하는 것이 잘못입니다.'],
    'hk-018': ['첫 번째는 계정명, 두 번째는 비밀번호 필드입니다. UID와 GID는 세 번째·네 번째입니다.', '네 번째는 GID, 다섯 번째는 설명 필드입니다. UID는 세 번째입니다.', '여섯 번째는 홈 디렉터리, 일곱 번째는 로그인 쉘입니다. UID·GID 필드가 아닙니다.'],
    'hk-019': ['긴 목록 형식은 -l 옵션입니다. -a는 숨김 항목을 포함하는 옵션입니다.', '소유자 변경은 chown의 역할입니다. ls -a는 목록에 표시할 항목 범위를 바꿉니다.', '-a는 실행 가능 파일만 고르는 옵션이 아닙니다. 숨김 항목까지 포함합니다.'],
    'hk-020': ['644는 rw-r--r--입니다. 문제의 소유자는 rwx이고 그룹·기타도 실행 권한이 있으므로 755입니다.', '775는 그룹도 rwx입니다. 문제의 그룹은 r-x이므로 그룹 값은 5입니다.', '777은 소유자·그룹·기타 모두 rwx입니다. 문제의 그룹과 기타에는 쓰기 권한이 없습니다.'],
    'hk-021': ['일반 파일은 기본 요청에 실행 비트가 없으므로 umask 022로 755가 되지 않습니다. 파일은 644입니다.', '파일 664·디렉터리 775는 일반적으로 umask 002에 대응합니다. 문제는 022입니다.', '666·777은 umask로 비트를 제거하기 전의 일반 생성 요청입니다. 022를 적용하면 644·755입니다.'],
    'hk-022': ['umask는 이후 새로 생성되는 항목에 영향을 줍니다. 기존 파일의 권한을 일괄 변경하지 않습니다.', 'umask는 생성 권한의 마스크이며 소유자를 root로 바꾸는 설정이 아닙니다.', 'umask 변경은 기존 디렉터리를 삭제하지 않습니다. 새 항목의 생성 권한에 영향을 줍니다.'],
    'hk-023': ['chmod는 파일 권한 비트를 변경합니다. 소유자를 바꾸는 명령은 chown입니다.', 'chgrp는 파일의 그룹을 변경합니다. 소유자 변경 명령과 구분합니다.', 'umask는 새 항목의 생성 권한을 제한합니다. 기존 파일의 소유자를 바꾸지 않습니다.'],
    'hk-024': ['실행 파일 소유자가 root일 때에만 EUID가 root의 UID가 됩니다. SetUID의 일반 규칙은 실행 파일 소유자의 UID입니다.', '기본 그룹 ID는 그룹 체계의 값입니다. SetUID 실행 시의 EUID는 실행 파일 소유자의 사용자 ID입니다.', '마지막으로 파일을 읽은 사용자는 SetUID의 EUID 결정 기준이 아닙니다. 파일 소유자가 기준입니다.'],
    'hk-025': ['소유자 위치에 소문자 s가 있으면 SetUID와 실행 비트가 함께 있습니다. 대문자 S는 소유자 실행 비트가 없는 상태입니다.', 'SetGID 표시는 그룹 실행 위치에 나타납니다. 문제의 대문자 S는 소유자 실행 위치의 SetUID 표시입니다.', '대문자 S는 읽기 권한의 유무를 뜻하지 않습니다. SetUID 설정과 소유자 실행 비트 부재를 뜻합니다.'],
    'hk-026': ['강의 순서에서는 리모트 어택이 로컬 어택보다 앞이고 흔적 지우기가 백도어 생성보다 앞입니다.', '강의는 백도어 생성이 아니라 정보 수집으로 시작합니다. 제시된 단계 순서가 다릅니다.', '강의는 리모트 어택에 앞서 정보 수집을 배치하고, 로컬 어택 뒤에 흔적 지우기와 백도어 생성을 설명합니다.'],
    'hk-027': ['atd는 예약된 시점의 일회성 작업과 연결됩니다. 반복 일정 실행은 crond입니다.', 'named는 DNS 서비스와 관련된 데몬입니다. 주기적인 작업 실행 서비스가 아닙니다.', 'sendmail은 메일 전송과 관련된 서비스입니다. 반복 일정 작업은 crond입니다.'],
    'hk-033': ['능동적 정보 수집은 대상 서비스에 직접 요청·접속하는 방식입니다. 공개 출처 활용 중심의 수동적 수집과 구분합니다.', '로컬 권한 상승은 이미 접근한 시스템에서 권한을 높이는 행위입니다. 공개 데이터에서 정보를 얻는 단계가 아닙니다.', '로그 삭제는 흔적 제거와 관련됩니다. 검색엔진·공개 데이터 활용을 뜻하지 않습니다.'],
    'hk-034': ['set은 선택된 모듈 등의 옵션 값을 설정하는 명령입니다. 모듈 선택은 use입니다.', 'run은 모듈 실행에 사용하는 명령입니다. 선택 명령과 구분해야 합니다.', 'db_status는 데이터베이스 연결 상태 확인 명령입니다. 모듈 선택 기능이 아닙니다.'],
    'hk-035': ['53/udp는 DNS의 대표 포트입니다. 직접 호스팅 SMB의 단서는 445/tcp입니다.', '3306/tcp는 MySQL의 대표 포트입니다. SMB와 구분합니다.', '23/tcp는 Telnet의 대표 포트입니다. 직접 호스팅 SMB는 445/tcp입니다.'],
    'hk-036': ['최소 길이 정책이 0이라는 사실은 모든 계정의 실제 비밀번호가 비어 있다는 뜻이 아닙니다.', 'PasswordMin은 길이 정책의 값입니다. 실제 비밀번호 문자열이 숫자 0이라는 의미가 아닙니다.', '최소 비밀번호 길이와 계정 잠금 상태는 다른 설정입니다. 이 값으로 모든 계정의 잠금을 판단할 수 없습니다.'],
    'hk-037': ['연결 거부는 WAF 탐지에 성공한 결과가 아닙니다. WAF가 없다고 확정할 근거가 되지 않습니다.', '연결 거부만으로 그 원인이 WAF라고 확정할 수 없습니다. 접근 실패와 WAF 존재 확인은 다릅니다.', '연결 거부 오류는 웹 서버 버전 정보를 확정하지 못합니다. 탐지 성공 응답이 아닙니다.'],
    'hk-041': ['PostgreSQL 서비스 시작과 Metasploit의 DB 연결 성공은 별개입니다. 콘솔에서 db_status로 연결 상태를 확인합니다.', 'services -d는 저장된 서비스 레코드 삭제입니다. DB 연결 상태 확인 명령이 아닙니다.', 'hosts -d는 저장된 호스트 레코드 삭제에 사용하는 명령입니다. 연결 상태 확인은 db_status입니다.'],
    'hk-042': ['db_status는 연결 상태를 확인합니다. 스캔 결과를 DB에 저장하는 명령은 db_nmap입니다.', 'creds는 저장된 자격 증명 정보를 다룹니다. Nmap 스캔·저장 명령이 아닙니다.', 'msfconsole은 Metasploit 콘솔을 실행합니다. 콘솔 내 Nmap 결과 저장 명령은 db_nmap입니다.'],
    'hk-043': ['UDP 스캔은 -sU입니다. -sT는 TCP Connect 스캔입니다.', 'OS 식별은 대문자 -O 옵션입니다. -sT와 목적이 다릅니다.', '서비스 버전 식별은 -sV입니다. -sT는 TCP Connect 스캔입니다.'],
    'hk-044': ['검사할 포트 범위는 -p 등으로 지정합니다. --reason은 포트 상태 판정 근거를 표시합니다.', '--reason은 결과 삭제 옵션이 아닙니다. 판정 이유를 출력합니다.', '--reason은 비밀번호 후보 파일을 지정하지 않습니다. 포트 상태 판정의 이유를 보여줍니다.'],
    'hk-045': ['첫 숫자는 최소 길이, 둘째는 최대 길이입니다. 1~4자리 범위이지 4자리만 생성하는 것이 아닙니다.', 'crunch의 이 인수는 문자열 길이 범위입니다. 네트워크 포트 검사 범위가 아닙니다.', '1과 4는 문자 집합 개수나 출력 파일 수가 아니라 최소·최대 문자열 길이입니다.'],
    'hk-046': ['>는 표준 출력을 파일로 보내며 기존 내용을 덮어씁니다. 뒤에 덧붙이기는 >>입니다.', '|는 앞 명령의 출력을 다음 명령의 입력으로 연결합니다. 파일 덧붙이기 기호가 아닙니다.', '2>는 표준 오류의 리다이렉션입니다. 일반적인 출력 덧붙이기는 >>입니다.'],
    'hk-047': ['후보 파일을 읽는 것은 Kali에서 실행되는 도구입니다. 경로를 항상 대상 VM 기준으로 해석하면 안 됩니다.', 'user_file·pass_file은 후보 목록 파일을 지정합니다. 대상 DB 테이블 이름을 입력하는 옵션이 아닙니다.', '이 옵션은 웹 URL이 아니라 도구가 읽을 로컬 후보 파일 경로를 지정합니다.'],
    'hk-049': ['services -d는 Metasploit DB 레코드를 삭제합니다. 대상 서버의 실제 서비스를 중지하지 않습니다.', 'PostgreSQL 시작은 별도의 서비스 관리 동작입니다. services -d는 저장된 서비스 레코드 정리입니다.', 'DB 레코드를 지우는 것과 대상 포트를 닫는 것은 다릅니다. 원격 포트를 차단하는 명령이 아닙니다.'],
    'hk-054': ['프러미스큐어스 모드는 이미 인터페이스에 도달한 프레임의 수신 범위를 바꿉니다. 스위치 전체 트래픽을 자동으로 가져오지 않습니다.', '프레임 수신 모드 변경은 암호문 해독 기능이 아닙니다. 암호화된 비밀번호가 자동 복호화되지는 않습니다.', '이 모드는 네트워크 인터페이스 수신 동작과 관련됩니다. 원격 호스트 UID를 변경하지 않습니다.'],
    'hk-055': ['출력 파일 지정과 캡처 인터페이스 선택은 다릅니다. -i eth0는 eth0 인터페이스에서 캡처하라는 의미입니다.', '-i는 비밀번호 지정 옵션이 아닙니다. 캡처할 인터페이스 이름을 지정합니다.', 'eth0의 0은 인터페이스 이름의 일부입니다. 포트 0번만 선택하는 뜻이 아닙니다.'],
    'hk-057': ['서버 IP를 클라이언트 자신의 MAC으로 바꾸는 것은 강의의 중간 시스템 경유 조건과 다릅니다. Kali의 MAC을 사용합니다.', '브로드캐스트 MAC은 링크 전체 수신용입니다. 강의에서 주입하는 것은 중간 관찰자 Kali의 MAC입니다.', 'DNS 서버의 MAC으로 바꾸는 것이 아닙니다. 서버행 패킷이 Kali를 지나도록 Kali MAC으로 대응시킵니다.'],
    'hk-058': ['OS·인터페이스·네트워크 구성에 따라 응답이 달라질 수 있습니다. 모든 스니퍼가 동일하게 응답하지 않습니다.', '응답이 없어도 필터링이나 구현 차이 등 원인이 있을 수 있습니다. 안전을 확정할 수 없습니다.', 'DNS 응답 여부는 관리자 권한 획득의 증거가 아닙니다. 서로 다른 개념을 연결한 보기입니다.'],
    'hk-059': ['Telnet은 원격 터미널 프로토콜입니다. MIME 이메일 암호화·전자서명 기술은 S/MIME입니다.', 'ARP는 IPv4 주소에 대응하는 링크 MAC 주소를 찾습니다. 이메일 서명 기술이 아닙니다.', 'FIFO는 먼저 들어온 것을 먼저 처리하는 방식이나 이름 있는 파이프 문맥의 용어입니다. 이메일 암호화 기술이 아닙니다.'],
    'hk-060': ['VPN은 통신 구간을 보호하는 기술입니다. 모든 종단의 악성 프로그램을 제거하는 백신 기능은 아닙니다.', 'VPN 종단에서 복호화된 데이터는 종단 보안과 후속 구간의 영향을 받습니다. 항상 숨겨지는 것은 아닙니다.', 'VPN에서도 상대 인증은 중요합니다. 인증이 전혀 필요 없다는 설명은 잘못입니다.'],
    'hk-065': ['geteuid()는 유효 사용자 ID인 EUID를 조회합니다. 실제 사용자 ID인 RUID는 getuid()로 읽습니다.', 'setgid()는 그룹 ID를 설정하는 함수입니다. RUID 조회 함수가 아닙니다.', 'chmod()는 파일 모드·권한을 변경하는 함수입니다. RUID 조회와 다릅니다.'],
    'hk-066': ['자식의 UID 변경이 종료 후 부모 쉘로 거꾸로 상속되는 것은 아닙니다. 부모의 기존 UID가 유지됩니다.', '자식 프로그램 종료만으로 부모 쉘 UID가 root의 0이 되지 않습니다.', '파일 소유자의 UID가 부모 쉘에 자동 적용되지 않습니다. 자식 실행 중의 EUID와 부모 상태를 구분해야 합니다.'],
    'hk-067': ['RUID 0은 맞지만 EUID는 SetUID 실행 파일의 소유자 kali의 1000이 됩니다. root가 실행했다는 이유로 둘 다 0인 것은 아닙니다.', 'RUID와 EUID가 뒤바뀌었습니다. RUID는 실행자 root의 0, EUID는 파일 소유자 kali의 1000입니다.', 'RUID는 실행자 root의 0을 유지합니다. 두 값이 모두 kali의 1000으로 바뀌는 것은 아닙니다.'],
    'hk-068': ['SetUID가 EUID를 언제나 1001로 만든다는 규칙은 없습니다. 일반적으로 실행 파일 소유자의 UID를 적용합니다.', 'root도 파일 소유자가 될 수 있습니다. 문제의 결과는 bash의 권한 낮춤 동작과 관련됩니다.', 'chmod는 권한 비트를 변경합니다. 파일 내용을 암호화해서 root 쉘을 막는 것이 아닙니다.'],
    'hk-070': ['-perm 4755는 정확한 모드 일치 조건입니다. 4700 등 다른 권한의 SetUID 항목까지 모두 찾지는 않습니다.', '4755는 이 조건에서 권한 모드 값입니다. 파일 소유자의 UID를 뜻하지 않습니다.', '-perm은 권한 조건입니다. 파일 크기가 4755바이트라는 뜻이 아닙니다.'],
    'hk-071': ['정상 chfn은 사용자 설명 정보를 변경합니다. 강의에서 교체된 파일의 백도어 동작을 정상 기능과 혼동하면 안 됩니다.', '정상 chfn의 기능은 사용자 설명 정보 변경입니다. shadow 파일을 항상 출력하지 않습니다.', '패킷 캡처는 스니퍼의 기능입니다. 정상 chfn의 사용자 정보 변경 기능과 다릅니다.'],
    'hk-072': ['passwd 등 정상적인 SetUID 프로그램도 있습니다. 설정 사실만으로 모두 악성이라고 판단할 수 없습니다.', '공격자가 정상 파일명을 사용할 수 있으므로 이름만으로 안전을 판단하지 않습니다. 내용·소유권·무결성을 확인해야 합니다.', 's 비트는 특수 권한 설정을 나타냅니다. 이 비트 하나만으로 침해를 확정하지 못합니다.'],
    'hk-073': ['반환값 0은 호출 성공을 의미합니다. 목표 UID가 1000일 수도 있으므로 관리자 UID 획득을 뜻하지 않습니다.', 'setuid()에서 반환값 0은 성공입니다. 실패와 구분해야 합니다.', '반환값과 RUID 값은 별개입니다. 목표 ID·권한·실제 결과를 확인해야 하며 RUID가 반드시 0인 것은 아닙니다.'],
    'hk-085': ['RUID는 사용자 체계의 값입니다. SetGID는 그룹 체계의 EGID에 적용되며 RUID를 항상 0으로 만들지 않습니다.', 'EUID 변경은 SetUID와 관련됩니다. SetGID는 EGID를 파일 그룹 ID로 설정합니다.', 'SetGID 실행은 자식 프로그램의 그룹 체계에 적용됩니다. 부모 쉘 UID를 파일 소유자로 바꾸지 않습니다.'],
    'hk-087': ['옵션은 숫자 0이 아닌 대문자 O입니다. 포트 0번 지정이 아니라 운영체제 식별 시도입니다.', 'OS 식별은 추정이며 후보가 여러 개면 하나로 확정하지 못할 수 있습니다.', '-O는 OS 식별 옵션입니다. 암호화된 비밀번호를 복호화하는 옵션이 아닙니다.'],
    'hk-090': ['장치 드라이버는 정상적으로 하드웨어와 OS를 연결합니다. 모든 드라이버를 위장 악성 프로그램으로 분류할 수 없습니다.', 'FIFO는 처리 순서나 프로세스 간 통신 문맥의 용어입니다. 정상처럼 위장한 악성 프로그램 유형은 트로이 목마입니다.', '정상 passwd는 비밀번호 변경 프로그램입니다. 정상 프로그램 전체를 트로이 목마라고 할 수 없습니다.'],
    'hk-091': ['웹 방문자의 화면 크기는 서버 코드가 어떤 권한으로 실행되는지 결정하지 않습니다. 요청 처리 프로세스 권한을 확인합니다.', '도메인 이름 길이는 서버 프로세스 실행 권한의 기준이 아닙니다.', '파일명에 root가 들어가도 실제 권한을 보장하지 않습니다. 요청을 처리하는 프로세스의 권한을 확인해야 합니다.'],
    'hk-friend-exam01': ['Nmap은 호스트·포트·서비스 등의 탐색 도구입니다. 강의에서 여러 스니핑 도구의 패키지로 묻는 것은 DSniff입니다.', 'Metasploit은 보안 점검 모듈을 실행하는 프레임워크입니다. 스니핑 도구 패키지라는 단서는 DSniff에 해당합니다.', 'Crunch는 후보 문자열 목록 생성 도구입니다. 스니핑 도구 패키지가 아닙니다.']
  };
  for (const q of bank.questions.filter(q => q.type === 'choice')) {
    const reasons = wrongReasons[q.id];
    if (!reasons || reasons.length !== 3) throw Error(`${q.id}: 오답 해설 3개가 필요합니다.`);
    let wrongIndex = 0;
    for (const option of q.options) option.explanation = option.id === q.answer ? q.explanation : reasons[wrongIndex++];
  }
  window.STUDY_BANKS.push(bank);
})();
