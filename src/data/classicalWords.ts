export interface WordMeaning {
  definition: string;
  example: string;
  source: string;
  grade: string;
  partOfSpeech?: string;
  sentenceTranslation?: string;
}

export interface ClassicalWord {
  id: string;
  character: string;
  pinyin: string;
  meanings: WordMeaning[];
  etymology?: string;
  relatedWords?: string[];
}

type RawClassicalWord = {
  character: string;
  pinyin: string | null;
  meanings: Array<{
    definition: string;
    example: string;
    source: string;
    grade: string;
    partOfSpeech?: string;
    sentenceTranslation?: string;
  }>;
  id?: string;
  etymology?: string;
  relatedWords?: string[];
};

const rawClassicalWords: RawClassicalWord[] = [
  {
    "character": "比",
    "pinyin": null,
    "meanings": [
      {
        "definition": "靠近",
        "example": "其两膝相比者，各隐卷底衣褶中。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "等到",
        "example": "比至陈，车六七百乘。",
        "source": "陈涉世家",
        "grade": "八年级"
      },
      {
        "definition": "比较",
        "example": "心却比，男儿烈。",
        "source": "满江红·小住京华",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "鄙",
    "pinyin": null,
    "meanings": [
      {
        "definition": "浅陋、目光短浅",
        "example": "肉食者鄙，未能远谋。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "浅陋、目光短浅",
        "example": "先帝不以臣卑鄙。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "兵",
    "pinyin": null,
    "meanings": [
      {
        "definition": "兵器、武器",
        "example": "今南方已定，兵甲已足。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "军队",
        "example": "可汗大点兵。",
        "source": "木兰诗",
        "grade": "七年级"
      },
      {
        "definition": "士兵",
        "example": "一老河兵闻之。",
        "source": "河中石兽",
        "grade": "八年级"
      },
      {
        "definition": "战争",
        "example": "况乃未休兵。",
        "source": "月夜忆舍弟",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "病",
    "pinyin": null,
    "meanings": [
      {
        "definition": "生病",
        "example": "未果，寻病终。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "枯萎",
        "example": "病树前头万木春。",
        "source": "酬乐天扬州初逢席上见赠",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "乘",
    "pinyin": null,
    "meanings": [
      {
        "definition": "乘坐",
        "example": "公与之乘。",
        "source": "曹刿论战",
        "grade": "九年级"
      },
      {
        "definition": "趁着",
        "example": "从今若许闲乘月。",
        "source": "游山西村",
        "grade": "七年级"
      },
      {
        "definition": "辆（车的计量）",
        "example": "比至陈，车六七百乘。",
        "source": "陈涉世家",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "持",
    "pinyin": null,
    "meanings": [
      {
        "definition": "拉开",
        "example": "彀兵刃，彀弓弩，持满。",
        "source": "周亚夫军细柳",
        "grade": "九年级"
      },
      {
        "definition": "拿着",
        "example": "屠乃奔倚其下，弛担持刀。",
        "source": "狼",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "从",
    "pinyin": null,
    "meanings": [
      {
        "definition": "跟随",
        "example": "七十而从心所欲。",
        "source": "论语十二章",
        "grade": "八年级"
      },
      {
        "definition": "跟随",
        "example": "择其善者而从之。",
        "source": "论语十二章",
        "grade": "九年级"
      },
      {
        "definition": "跟随",
        "example": "一狼得骨止，一狼仍从。",
        "source": "狼",
        "grade": "七年级"
      },
      {
        "definition": "跟随",
        "example": "隶而从者，崔氏二小生。",
        "source": "小石潭记",
        "grade": "八年级"
      },
      {
        "definition": "跟随",
        "example": "太守归而宾客从也。",
        "source": "醉翁亭记",
        "grade": "七年级"
      },
      {
        "definition": "跟随",
        "example": "战则请从。",
        "source": "曹刿论战",
        "grade": "八年级"
      },
      {
        "definition": "听从",
        "example": "小惠未徧，民弗从也。",
        "source": "曹刿论战",
        "grade": "九年级"
      },
      {
        "definition": "采取某种方式",
        "example": "无以致书以从观。",
        "source": "送东阳马生序",
        "grade": "七年级"
      },
      {
        "definition": "由、自",
        "example": "从小丘西行百二十步。",
        "source": "小石潭记",
        "grade": "八年级"
      },
      {
        "definition": "由、自",
        "example": "乃大惊，问所从来。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "从容、不慌不忙",
        "example": "鲦鱼出游从容。",
        "source": "庄子与惠子游于濠梁之上",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "达",
    "pinyin": null,
    "meanings": [
      {
        "definition": "到达",
        "example": "指通豫南，达于汉阴。",
        "source": "愚公移山",
        "grade": "九年级"
      },
      {
        "definition": "显达",
        "example": "不求闻达于诸侯。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "有学问的人",
        "example": "从乡之先达执经叩问。",
        "source": "送东阳马生序",
        "grade": "八年级"
      },
      {
        "definition": "通顺",
        "example": "辞达而已矣。",
        "source": "相关用例",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "当",
    "pinyin": null,
    "meanings": [
      {
        "definition": "在、处于",
        "example": "陈康肃公当射。",
        "source": "卖油翁",
        "grade": "八年级"
      },
      {
        "definition": "在、处于",
        "example": "容臣以当世之事。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "应当",
        "example": "耕当问奴，织当问婢。",
        "source": "书戴嵩画牛",
        "grade": "七年级"
      },
      {
        "definition": "应当",
        "example": "但当涉猎，见往事耳。",
        "source": "孙权劝学",
        "grade": "八年级"
      },
      {
        "definition": "将要",
        "example": "当奖率三军。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "将要",
        "example": "今当远离。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "面对",
        "example": "木兰当户织。",
        "source": "木兰诗",
        "grade": "九年级"
      },
      {
        "definition": "掌管",
        "example": "卿今当涂掌事。",
        "source": "孙权劝学",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "道",
    "pinyin": null,
    "meanings": [
      {
        "definition": "道路",
        "example": "伐竹取道，下见小潭。",
        "source": "小石潭记",
        "grade": "八年级"
      },
      {
        "definition": "道路",
        "example": "先帝创业未半而中道崩殂。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "道理",
        "example": "虽有至道，弗学，不知其善也。",
        "source": "虽有嘉肴",
        "grade": "八年级"
      },
      {
        "definition": "道理",
        "example": "以谘诹善道，察纳雅言。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "道理",
        "example": "行道之人弗受。",
        "source": "鱼我所欲也",
        "grade": "七年级"
      },
      {
        "definition": "正道",
        "example": "大道之行也。",
        "source": "大道之行也",
        "grade": "八年级"
      },
      {
        "definition": "正道",
        "example": "得道者多助，失道者寡助。",
        "source": "得道多助失道寡助",
        "grade": "七年级"
      },
      {
        "definition": "说",
        "example": "国人道之，闻之于宋君。",
        "source": "穿井得一人",
        "grade": "八年级"
      },
      {
        "definition": "说",
        "example": "不足为外人道也。",
        "source": "桃花源记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "得",
    "pinyin": null,
    "meanings": [
      {
        "definition": "得到",
        "example": "穿井得一人。",
        "source": "穿井得一人",
        "grade": "七年级"
      },
      {
        "definition": "得到",
        "example": "一狼得骨止。",
        "source": "狼",
        "grade": "八年级"
      },
      {
        "definition": "得到",
        "example": "林尽水源，便得一山。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "得到",
        "example": "得之心而寓之酒也。",
        "source": "醉翁亭记",
        "grade": "八年级"
      },
      {
        "definition": "能够",
        "example": "既出，得其船。",
        "source": "桃花源记",
        "grade": "九年级"
      },
      {
        "definition": "能够",
        "example": "遂迷，不复得路。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "能够",
        "example": "天子先驱至，不得入。",
        "source": "周亚夫军细柳",
        "grade": "八年级"
      },
      {
        "definition": "同德，感激",
        "example": "所识穷乏者得我与。",
        "source": "鱼我所欲也",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "尔",
    "pinyin": null,
    "meanings": [
      {
        "definition": "罢了",
        "example": "无他，但手熟尔。",
        "source": "卖油翁",
        "grade": "八年级"
      },
      {
        "definition": "助词",
        "example": "呼尔而与之，行道之人弗受。",
        "source": "鱼我所欲也",
        "grade": "九年级"
      },
      {
        "definition": "词尾",
        "example": "傲尔远逝。",
        "source": "小石潭记",
        "grade": "七年级"
      },
      {
        "definition": "你",
        "example": "尔安敢轻吾射？",
        "source": "卖油翁",
        "grade": "八年级"
      },
      {
        "definition": "你",
        "example": "尔辈不能究物理。",
        "source": "河中石兽",
        "grade": "七年级"
      },
      {
        "definition": "这、那",
        "example": "尔来二十有一年矣。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "伐",
    "pinyin": null,
    "meanings": [
      {
        "definition": "砍伐",
        "example": "伐竹取道，下见小潭。",
        "source": "小石潭记",
        "grade": "九年级"
      },
      {
        "definition": "攻打",
        "example": "十年春，齐师伐我。",
        "source": "曹刿论战",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "犯",
    "pinyin": null,
    "meanings": [
      {
        "definition": "侵犯",
        "example": "至于亚夫，可得而犯邪？",
        "source": "周亚夫军细柳",
        "grade": "八年级"
      },
      {
        "definition": "触犯",
        "example": "若有作奸犯科及为忠善者。",
        "source": "出师表",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "方",
    "pinyin": null,
    "meanings": [
      {
        "definition": "方圆",
        "example": "太行、王屋二山，方七百里。",
        "source": "愚公移山",
        "grade": "八年级"
      },
      {
        "definition": "地方",
        "example": "有朋自远方来，不亦乐乎？",
        "source": "论语十二章",
        "grade": "九年级"
      },
      {
        "definition": "将要",
        "example": "方欲行，转视积薪后。",
        "source": "狼",
        "grade": "七年级"
      },
      {
        "definition": "才、刚",
        "example": "方鼓琴而志在太山。",
        "source": "伯牙鼓琴",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "负",
    "pinyin": null,
    "meanings": [
      {
        "definition": "背",
        "example": "命夸娥氏二子负二山。",
        "source": "愚公移山",
        "grade": "七年级"
      },
      {
        "definition": "依仗",
        "example": "至于负者歌于途。",
        "source": "醉翁亭记",
        "grade": "八年级"
      },
      {
        "definition": "依仗",
        "example": "负势竞上，互相轩邈。",
        "source": "与朱元思书",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "赋",
    "pinyin": null,
    "meanings": [
      {
        "definition": "文体",
        "example": "刻唐贤今人诗赋于其上。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "写作",
        "example": "为陈同甫赋壮词以寄之。",
        "source": "破阵子",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "更",
    "pinyin": null,
    "meanings": [
      {
        "definition": "另外",
        "example": "士别三日，即更刮目相待。",
        "source": "孙权劝学",
        "grade": "七年级"
      },
      {
        "definition": "再",
        "example": "室中更无人。",
        "source": "石壕吏",
        "grade": "八年级"
      },
      {
        "definition": "又",
        "example": "湖中焉得更有此人。",
        "source": "湖心亭看雪",
        "grade": "九年级"
      },
      {
        "definition": "夜间计时",
        "example": "是日更定矣。",
        "source": "湖心亭看雪",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "苟",
    "pinyin": null,
    "meanings": [
      {
        "definition": "苟且",
        "example": "苟全性命于乱世。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "苟且",
        "example": "故不为苟得也。",
        "source": "鱼我所欲也",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "故",
    "pinyin": null,
    "meanings": [
      {
        "definition": "旧",
        "example": "温故而知新。",
        "source": "论语十二章",
        "grade": "八年级"
      },
      {
        "definition": "旧",
        "example": "骨已尽矣，而两狼之并驱如故。",
        "source": "狼",
        "grade": "九年级"
      },
      {
        "definition": "原因",
        "example": "见两小儿辩斗，问其故。",
        "source": "两小儿辩日",
        "grade": "七年级"
      },
      {
        "definition": "原因",
        "example": "既克，公问其故。",
        "source": "曹刿论战",
        "grade": "八年级"
      },
      {
        "definition": "因此",
        "example": "故天将降大任于是人也。",
        "source": "生于忧患死于安乐",
        "grade": "七年级"
      },
      {
        "definition": "因此",
        "example": "是故学然后知不足。",
        "source": "虽有嘉肴",
        "grade": "八年级"
      },
      {
        "definition": "因此",
        "example": "故自号曰醉翁也。",
        "source": "醉翁亭记",
        "grade": "九年级"
      },
      {
        "definition": "因此",
        "example": "故临崩寄臣以大事也。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "因此",
        "example": "故五月渡泸。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "因此",
        "example": "故克之。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "特意",
        "example": "余故道为学之难以告之。",
        "source": "送东阳马生序",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "顾",
    "pinyin": null,
    "meanings": [
      {
        "definition": "回头看",
        "example": "元方入门不顾。",
        "source": "陈太丘与友期行",
        "grade": "九年级"
      },
      {
        "definition": "回头看",
        "example": "顾野有麦场。",
        "source": "狼",
        "grade": "七年级"
      },
      {
        "definition": "拜访",
        "example": "三顾臣于草庐之中。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "观",
    "pinyin": null,
    "meanings": [
      {
        "definition": "看",
        "example": "启窗而观。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "观赏",
        "example": "可远观而不可亵玩焉。",
        "source": "爱莲说",
        "grade": "八年级"
      },
      {
        "definition": "景象",
        "example": "此则岳阳楼之大观也。",
        "source": "岳阳楼记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "归",
    "pinyin": null,
    "meanings": [
      {
        "definition": "返回",
        "example": "一屠晚归。",
        "source": "狼",
        "grade": "七年级"
      },
      {
        "definition": "返回",
        "example": "朝而往，暮而归。",
        "source": "醉翁亭记",
        "grade": "八年级"
      },
      {
        "definition": "返回",
        "example": "太守归而宾客从也。",
        "source": "醉翁亭记",
        "grade": "七年级"
      },
      {
        "definition": "归依",
        "example": "吾谁与归。",
        "source": "岳阳楼记",
        "grade": "八年级"
      },
      {
        "definition": "归聚",
        "example": "云归而岩穴暝。",
        "source": "醉翁亭记",
        "grade": "九年级"
      },
      {
        "definition": "出嫁",
        "example": "男有分，女有归。",
        "source": "大道之行也",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "过",
    "pinyin": null,
    "meanings": [
      {
        "definition": "犯错",
        "example": "人恒过，然后能改。",
        "source": "生于忧患死于安乐",
        "grade": "八年级"
      },
      {
        "definition": "过于",
        "example": "以其境过清，不可久居。",
        "source": "小石潭记",
        "grade": "七年级"
      },
      {
        "definition": "超过",
        "example": "过中不至，太丘舍去。",
        "source": "陈太丘与友期行",
        "grade": "八年级"
      },
      {
        "definition": "超过",
        "example": "况才之过于余者乎。",
        "source": "送东阳马生序",
        "grade": "九年级"
      },
      {
        "definition": "经过",
        "example": "及鲁肃过寻阳，与蒙议论。",
        "source": "孙权劝学",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "好",
    "pinyin": null,
    "meanings": [
      {
        "definition": "美丽",
        "example": "好鸟相鸣，嘤嘤成韵。",
        "source": "与朱元思书",
        "grade": "八年级"
      },
      {
        "definition": "美好",
        "example": "窈窕淑女，君子好逑。",
        "source": "关雎",
        "grade": "七年级"
      },
      {
        "definition": "喜爱",
        "example": "蜀中有杜处士，好书画。",
        "source": "书戴嵩画牛",
        "grade": "八年级"
      },
      {
        "definition": "喜爱",
        "example": "知之者不如好之者。",
        "source": "论语十二章",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "号",
    "pinyin": null,
    "meanings": [
      {
        "definition": "呼啸、大叫",
        "example": "阴风怒号，浊浪排空。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "取号、自称",
        "example": "故自号曰醉翁也。",
        "source": "醉翁亭记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "还",
    "pinyin": null,
    "meanings": [
      {
        "definition": "返回",
        "example": "便要还家，设酒杀鸡作食。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "归还",
        "example": "兴复汉室，还于旧都。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "归还",
        "example": "计日以还。",
        "source": "送东阳马生序",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "会",
    "pinyin": null,
    "meanings": [
      {
        "definition": "会合、聚集",
        "example": "迁客骚人，多会于此。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "恰逢",
        "example": "会天大雨，道不通。",
        "source": "陈涉世家",
        "grade": "八年级"
      },
      {
        "definition": "终将、必定",
        "example": "会当凌绝顶，一览众山小。",
        "source": "望岳",
        "grade": "七年级"
      },
      {
        "definition": "终将、必定",
        "example": "长风破浪会有时。",
        "source": "行路难",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "惠",
    "pinyin": null,
    "meanings": [
      {
        "definition": "恩惠",
        "example": "小惠未徧，民弗从也。",
        "source": "曹刿论战",
        "grade": "九年级"
      },
      {
        "definition": "通慧，聪明",
        "example": "甚矣，汝之不惠。",
        "source": "愚公移山",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "及",
    "pinyin": null,
    "meanings": [
      {
        "definition": "到、等到",
        "example": "及日中则如盘盂。",
        "source": "两小儿辩日",
        "grade": "八年级"
      },
      {
        "definition": "到、等到",
        "example": "及郡下，诣太守，说如此。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "来得及",
        "example": "悲守穷庐，将复何及。",
        "source": "诫子书",
        "grade": "八年级"
      },
      {
        "definition": "和、与",
        "example": "若有作奸犯科及为忠善者。",
        "source": "出师表",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "极",
    "pinyin": null,
    "meanings": [
      {
        "definition": "尽头",
        "example": "其远而无所至极邪。",
        "source": "北冥有鱼",
        "grade": "七年级"
      },
      {
        "definition": "极点",
        "example": "渔歌互答，此乐何极。",
        "source": "岳阳楼记",
        "grade": "八年级"
      },
      {
        "definition": "非常",
        "example": "初极狭，才通人。",
        "source": "桃花源记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "计",
    "pinyin": null,
    "meanings": [
      {
        "definition": "计算",
        "example": "通计一舟，为人五。",
        "source": "核舟记",
        "grade": "八年级"
      },
      {
        "definition": "计策",
        "example": "则汉室之隆，可计日而待也。",
        "source": "出师表",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "济",
    "pinyin": null,
    "meanings": [
      {
        "definition": "渡",
        "example": "直挂云帆济沧海。",
        "source": "行路难",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "假",
    "pinyin": null,
    "meanings": [
      {
        "definition": "假装",
        "example": "乃悟前狼假寐。",
        "source": "狼",
        "grade": "八年级"
      },
      {
        "definition": "借",
        "example": "以是人多以书假余。",
        "source": "送东阳马生序",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "间",
    "pinyin": null,
    "meanings": [
      {
        "definition": "中间",
        "example": "尾插入两股间。",
        "source": "书戴嵩画牛",
        "grade": "八年级"
      },
      {
        "definition": "期间",
        "example": "山间之朝暮也。",
        "source": "醉翁亭记",
        "grade": "九年级"
      },
      {
        "definition": "参与",
        "example": "肉食者谋之，又何间焉。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "隔开",
        "example": "遂与外人间隔。",
        "source": "桃花源记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "简",
    "pinyin": null,
    "meanings": [
      {
        "definition": "挑选",
        "example": "盖简桃核修狭者为之。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "挑选",
        "example": "是以先帝简拔以遗陛下。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "见",
    "pinyin": null,
    "meanings": [
      {
        "definition": "看见",
        "example": "孔子东游，见两小儿辩斗。",
        "source": "两小儿辩日",
        "grade": "九年级"
      },
      {
        "definition": "看见",
        "example": "见其发矢十中八九。",
        "source": "卖油翁",
        "grade": "七年级"
      },
      {
        "definition": "显现",
        "example": "高峰入云，清流见底。",
        "source": "答谢中书书",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "竭",
    "pinyin": null,
    "meanings": [
      {
        "definition": "耗尽",
        "example": "一鼓作气，再而衰，三而竭。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "耗尽",
        "example": "彼竭我盈。",
        "source": "曹刿论战",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "尽",
    "pinyin": null,
    "meanings": [
      {
        "definition": "完",
        "example": "担中肉尽。",
        "source": "狼",
        "grade": "九年级"
      },
      {
        "definition": "完",
        "example": "林尽水源，便得一山。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "全部",
        "example": "进尽忠言。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "进",
    "pinyin": null,
    "meanings": [
      {
        "definition": "做官",
        "example": "是进亦忧，退亦忧。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "进献",
        "example": "进尽忠言。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "居",
    "pinyin": null,
    "meanings": [
      {
        "definition": "停留",
        "example": "不可久居。",
        "source": "小石潭记",
        "grade": "九年级"
      },
      {
        "definition": "居住",
        "example": "面山而居。",
        "source": "愚公移山",
        "grade": "七年级"
      },
      {
        "definition": "处在",
        "example": "居庙堂之高则忧其民。",
        "source": "岳阳楼记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "举",
    "pinyin": null,
    "meanings": [
      {
        "definition": "推举",
        "example": "胶鬲举于鱼盐之中。",
        "source": "生于忧患死于安乐",
        "grade": "七年级"
      },
      {
        "definition": "推举",
        "example": "是以众议举宠为督。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "具",
    "pinyin": null,
    "meanings": [
      {
        "definition": "具备",
        "example": "各具情态。",
        "source": "核舟记",
        "grade": "九年级"
      },
      {
        "definition": "全部",
        "example": "具答之。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "全部",
        "example": "百废具兴。",
        "source": "岳阳楼记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "俱",
    "pinyin": null,
    "meanings": [
      {
        "definition": "全部",
        "example": "四时俱备。",
        "source": "答谢中书书",
        "grade": "七年级"
      },
      {
        "definition": "一起",
        "example": "虽与之俱学。",
        "source": "学弈",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "聚",
    "pinyin": null,
    "meanings": [
      {
        "definition": "集合",
        "example": "聚室而谋曰。",
        "source": "愚公移山",
        "grade": "九年级"
      },
      {
        "definition": "聚拢",
        "example": "峰峦如聚。",
        "source": "潼关怀古",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "遽",
    "pinyin": null,
    "meanings": [
      {
        "definition": "就、立刻",
        "example": "其子岂遽善游哉？",
        "source": "吕氏春秋",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "决",
    "pinyin": null,
    "meanings": [
      {
        "definition": "判断",
        "example": "孔子不能决也。",
        "source": "两小儿辩日",
        "grade": "七年级"
      },
      {
        "definition": "裂开",
        "example": "决眦入归鸟。",
        "source": "望岳",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "绝",
    "pinyin": null,
    "meanings": [
      {
        "definition": "断",
        "example": "伯牙破琴绝弦。",
        "source": "伯牙鼓琴",
        "grade": "九年级"
      },
      {
        "definition": "隔绝",
        "example": "率妻子邑人来此绝境。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "独特",
        "example": "天下独绝。",
        "source": "与朱元思书",
        "grade": "八年级"
      },
      {
        "definition": "极",
        "example": "佛印绝类弥勒。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "消失",
        "example": "哀转久绝。",
        "source": "三峡",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "类",
    "pinyin": null,
    "meanings": [
      {
        "definition": "类似",
        "example": "佛印绝类弥勒。",
        "source": "核舟记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "临",
    "pinyin": null,
    "meanings": [
      {
        "definition": "靠近",
        "example": "有亭翼然临于泉上者。",
        "source": "醉翁亭记",
        "grade": "七年级"
      },
      {
        "definition": "来到",
        "example": "临溪而渔。",
        "source": "醉翁亭记",
        "grade": "八年级"
      },
      {
        "definition": "面对",
        "example": "把酒临风。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "将要",
        "example": "临崩寄臣以大事也。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "窃",
    "pinyin": null,
    "meanings": [
      {
        "definition": "偷取",
        "example": "盗窃乱贼而不作。",
        "source": "大道之行也",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "请",
    "pinyin": null,
    "meanings": [
      {
        "definition": "请求",
        "example": "曹刿请见。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "请允许我",
        "example": "战则请从。",
        "source": "曹刿论战",
        "grade": "八年级"
      },
      {
        "definition": "请你",
        "example": "请循其本。",
        "source": "庄子与惠子游于濠梁之上",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "穷",
    "pinyin": null,
    "meanings": [
      {
        "definition": "穷困",
        "example": "所识穷乏者得我与。",
        "source": "鱼我所欲也",
        "grade": "八年级"
      },
      {
        "definition": "穷尽",
        "example": "子子孙孙无穷匮也。",
        "source": "愚公移山",
        "grade": "九年级"
      },
      {
        "definition": "穷尽",
        "example": "四时之景不同，而乐亦无穷也。",
        "source": "醉翁亭记",
        "grade": "七年级"
      },
      {
        "definition": "走完",
        "example": "复前行，欲穷其林。",
        "source": "桃花源记",
        "grade": "八年级"
      },
      {
        "definition": "极",
        "example": "穷冬烈风。",
        "source": "送东阳马生序",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "求",
    "pinyin": null,
    "meanings": [
      {
        "definition": "寻找",
        "example": "求二石兽于水中，竟不可得。",
        "source": "河中石兽",
        "grade": "八年级"
      },
      {
        "definition": "探求",
        "example": "予尝求古仁人之心。",
        "source": "岳阳楼记",
        "grade": "九年级"
      },
      {
        "definition": "要求",
        "example": "不求闻达于诸侯。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "要求",
        "example": "安求其能千里也。",
        "source": "马说",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "取",
    "pinyin": null,
    "meanings": [
      {
        "definition": "拿",
        "example": "乃取一葫芦置于地。",
        "source": "卖油翁",
        "grade": "七年级"
      },
      {
        "definition": "开辟",
        "example": "伐竹取道，下见小潭。",
        "source": "小石潭记",
        "grade": "八年级"
      },
      {
        "definition": "选取",
        "example": "舍鱼而取熊掌者也。",
        "source": "鱼我所欲也",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "去",
    "pinyin": null,
    "meanings": [
      {
        "definition": "离开",
        "example": "一狼径去。",
        "source": "狼",
        "grade": "七年级"
      },
      {
        "definition": "离开",
        "example": "乃记之而去。",
        "source": "小石潭记",
        "grade": "八年级"
      },
      {
        "definition": "离开",
        "example": "停数日，辞去。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "距离",
        "example": "我以日始出时去人近。",
        "source": "两小儿辩日",
        "grade": "八年级"
      },
      {
        "definition": "消逝",
        "example": "意与日去，遂成枯落。",
        "source": "诫子书",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "全",
    "pinyin": null,
    "meanings": [
      {
        "definition": "整个",
        "example": "全石以为底。",
        "source": "小石潭记",
        "grade": "七年级"
      },
      {
        "definition": "完全",
        "example": "子之不知鱼之乐，全矣。",
        "source": "庄子与惠子游于濠梁之上",
        "grade": "八年级"
      },
      {
        "definition": "保全",
        "example": "苟全性命于乱世。",
        "source": "出师表",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "任",
    "pinyin": null,
    "meanings": [
      {
        "definition": "责任",
        "example": "故天将降大任于是人也。",
        "source": "生于忧患死于安乐",
        "grade": "八年级"
      },
      {
        "definition": "委任",
        "example": "受任于败军之际。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "听凭",
        "example": "从流飘荡，任意东西。",
        "source": "与朱元思书",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "入",
    "pinyin": null,
    "meanings": [
      {
        "definition": "进入",
        "example": "元方入门不顾。",
        "source": "陈太丘与友期行",
        "grade": "八年级"
      },
      {
        "definition": "进入",
        "example": "便舍船，从口入。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "深入",
        "example": "深入不毛。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "插入",
        "example": "自钱孔入，而钱不湿。",
        "source": "卖油翁",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "若",
    "pinyin": null,
    "meanings": [
      {
        "definition": "像",
        "example": "巍巍乎若太山。",
        "source": "伯牙鼓琴",
        "grade": "七年级"
      },
      {
        "definition": "像",
        "example": "皆若空游无所依。",
        "source": "小石潭记",
        "grade": "八年级"
      },
      {
        "definition": "如果",
        "example": "若有作奸犯科及为忠善者。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "你",
        "example": "若屈伸呼吸，终日在天中行止。",
        "source": "杞人忧天",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "善",
    "pinyin": null,
    "meanings": [
      {
        "definition": "好",
        "example": "善哉乎鼓琴。",
        "source": "伯牙鼓琴",
        "grade": "九年级"
      },
      {
        "definition": "好",
        "example": "择其善者而从之。",
        "source": "论语十二章",
        "grade": "七年级"
      },
      {
        "definition": "擅长",
        "example": "陈康肃公善射。",
        "source": "卖油翁",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "少",
    "pinyin": null,
    "meanings": [
      {
        "definition": "不多",
        "example": "饮少辄醉。",
        "source": "醉翁亭记",
        "grade": "七年级"
      },
      {
        "definition": "短时间",
        "example": "少时，一狼径去。",
        "source": "狼",
        "grade": "八年级"
      },
      {
        "definition": "年轻",
        "example": "陈涉少时。",
        "source": "陈涉世家",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "舍",
    "pinyin": null,
    "meanings": [
      {
        "definition": "房屋",
        "example": "屋舍俨然。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "舍弃",
        "example": "舍鱼而取熊掌者也。",
        "source": "鱼我所欲也",
        "grade": "八年级"
      },
      {
        "definition": "解除",
        "example": "其人舍然大喜。",
        "source": "杞人忧天",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "涉",
    "pinyin": null,
    "meanings": [
      {
        "definition": "浏览",
        "example": "但当涉猎，见往事耳。",
        "source": "孙权劝学",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "生",
    "pinyin": null,
    "meanings": [
      {
        "definition": "生长",
        "example": "绝巘多生怪柏。",
        "source": "三峡",
        "grade": "九年级"
      },
      {
        "definition": "生存",
        "example": "生于忧患而死于安乐。",
        "source": "生于忧患死于安乐",
        "grade": "七年级"
      },
      {
        "definition": "生命",
        "example": "生，亦我所欲也。",
        "source": "鱼我所欲也",
        "grade": "八年级"
      },
      {
        "definition": "后生",
        "example": "崔氏二小生。",
        "source": "小石潭记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "胜",
    "pinyin": null,
    "meanings": [
      {
        "definition": "胜利",
        "example": "射者中，弈者胜。",
        "source": "醉翁亭记",
        "grade": "八年级"
      },
      {
        "definition": "尽",
        "example": "臣不胜受恩感激。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "美好",
        "example": "予观夫巴陵胜状。",
        "source": "岳阳楼记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "师",
    "pinyin": null,
    "meanings": [
      {
        "definition": "军队",
        "example": "齐师伐我。",
        "source": "曹刿论战",
        "grade": "八年级"
      },
      {
        "definition": "老师",
        "example": "可以为师矣。",
        "source": "论语十二章",
        "grade": "七年级"
      },
      {
        "definition": "京城",
        "example": "余朝京师。",
        "source": "送东阳马生序",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "施",
    "pinyin": null,
    "meanings": [
      {
        "definition": "施行",
        "example": "悉以咨之，然后施行。",
        "source": "出师表",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "实",
    "pinyin": null,
    "meanings": [
      {
        "definition": "实际",
        "example": "实是欲界之仙都。",
        "source": "答谢中书书",
        "grade": "七年级"
      },
      {
        "definition": "诚实",
        "example": "此皆良实。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "食",
    "pinyin": null,
    "meanings": [
      {
        "definition": "吃",
        "example": "弗食，不知其旨也。",
        "source": "虽有嘉肴",
        "grade": "七年级"
      },
      {
        "definition": "食物",
        "example": "一箪食，一瓢饮。",
        "source": "论语十二章",
        "grade": "八年级"
      },
      {
        "definition": "供养",
        "example": "主人日再食。",
        "source": "送东阳马生序",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "使",
    "pinyin": null,
    "meanings": [
      {
        "definition": "派遣",
        "example": "于是上乃使使持节诏将军。",
        "source": "周亚夫军细柳",
        "grade": "七年级"
      },
      {
        "definition": "让",
        "example": "使弈秋诲二人弈。",
        "source": "学弈",
        "grade": "八年级"
      },
      {
        "definition": "出使",
        "example": "安陵君因使唐雎使于秦。",
        "source": "唐雎不辱使命",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "释",
    "pinyin": null,
    "meanings": [
      {
        "definition": "放下",
        "example": "有卖油翁释担而立。",
        "source": "卖油翁",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "市",
    "pinyin": null,
    "meanings": [
      {
        "definition": "集市",
        "example": "百里奚举于市。",
        "source": "生于忧患死于安乐",
        "grade": "九年级"
      },
      {
        "definition": "买",
        "example": "愿为市鞍马。",
        "source": "木兰诗",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "侍",
    "pinyin": null,
    "meanings": [
      {
        "definition": "依靠",
        "example": "子何侍而往？",
        "source": "为学",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "数",
    "pinyin": null,
    "meanings": [
      {
        "definition": "几",
        "example": "夹岸数百步。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "计算",
        "example": "珠可历历数也。",
        "source": "核舟记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "属",
    "pinyin": null,
    "meanings": [
      {
        "definition": "嘱托",
        "example": "属予作文以记之。",
        "source": "岳阳楼记",
        "grade": "九年级"
      },
      {
        "definition": "类",
        "example": "有良田美池桑竹之属。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "连接",
        "example": "属引凄异。",
        "source": "三峡",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "说",
    "pinyin": null,
    "meanings": [
      {
        "definition": "讲述",
        "example": "说如此。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "文体",
        "example": "爱莲说。",
        "source": "爱莲说",
        "grade": "八年级"
      },
      {
        "definition": "通悦，高兴",
        "example": "学而时习之，不亦说乎？",
        "source": "论语十二章",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "素",
    "pinyin": null,
    "meanings": [
      {
        "definition": "白色",
        "example": "素湍绿潭。",
        "source": "三峡",
        "grade": "七年级"
      },
      {
        "definition": "朴素",
        "example": "可以调素琴。",
        "source": "陋室铭",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "汤",
    "pinyin": null,
    "meanings": [
      {
        "definition": "热水",
        "example": "及其日中如探汤。",
        "source": "两小儿辩日",
        "grade": "七年级"
      },
      {
        "definition": "水势浩大",
        "example": "浩浩汤汤。",
        "source": "岳阳楼记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "徒",
    "pinyin": null,
    "meanings": [
      {
        "definition": "空、只",
        "example": "亦免冠徒跣。",
        "source": "唐雎不辱使命",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "亡",
    "pinyin": null,
    "meanings": [
      {
        "definition": "灭亡",
        "example": "国恒亡。",
        "source": "生于忧患死于安乐",
        "grade": "七年级"
      },
      {
        "definition": "通无，没有",
        "example": "亡以应。",
        "source": "愚公移山",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "为",
    "pinyin": null,
    "meanings": [
      {
        "definition": "做",
        "example": "行拂乱其所为。",
        "source": "生于忧患死于安乐",
        "grade": "七年级"
      },
      {
        "definition": "作为",
        "example": "武陵人捕鱼为业。",
        "source": "桃花源记",
        "grade": "八年级"
      },
      {
        "definition": "是",
        "example": "俱为一体。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "成为",
        "example": "化而为鸟。",
        "source": "北冥有鱼",
        "grade": "七年级"
      },
      {
        "definition": "替、给",
        "example": "为人谋而不忠乎？",
        "source": "论语十二章",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "委",
    "pinyin": null,
    "meanings": [
      {
        "definition": "抛弃",
        "example": "相委而去。",
        "source": "陈太丘与友期行",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "务",
    "pinyin": null,
    "meanings": [
      {
        "definition": "事务",
        "example": "军中多务。",
        "source": "孙权劝学",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "鲜",
    "pinyin": null,
    "meanings": [
      {
        "definition": "鲜艳",
        "example": "芳草鲜美。",
        "source": "桃花源记",
        "grade": "九年级"
      },
      {
        "definition": "少",
        "example": "陶后鲜有闻。",
        "source": "爱莲说",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "向",
    "pinyin": null,
    "meanings": [
      {
        "definition": "朝向",
        "example": "眈眈相向。",
        "source": "狼",
        "grade": "八年级"
      },
      {
        "definition": "先前",
        "example": "便扶向路。",
        "source": "桃花源记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "效",
    "pinyin": null,
    "meanings": [
      {
        "definition": "功效",
        "example": "托臣以讨贼兴复之效。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "奏效",
        "example": "恐托付不效。",
        "source": "出师表",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "谢",
    "pinyin": null,
    "meanings": [
      {
        "definition": "道歉",
        "example": "长跪而谢之曰。",
        "source": "唐雎不辱使命",
        "grade": "七年级"
      },
      {
        "definition": "致谢",
        "example": "使人称谢。",
        "source": "周亚夫军细柳",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "信",
    "pinyin": null,
    "meanings": [
      {
        "definition": "诚信",
        "example": "则是无信。",
        "source": "陈太丘与友期行",
        "grade": "七年级"
      },
      {
        "definition": "相信",
        "example": "愿陛下亲之信之。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "行",
    "pinyin": null,
    "meanings": [
      {
        "definition": "行走",
        "example": "三人行，必有我师焉。",
        "source": "论语十二章",
        "grade": "九年级"
      },
      {
        "definition": "实行",
        "example": "然后施行。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "品行",
        "example": "夫君子之行。",
        "source": "诫子书",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "形",
    "pinyin": null,
    "meanings": [
      {
        "definition": "形体",
        "example": "无案牍之劳形。",
        "source": "陋室铭",
        "grade": "七年级"
      },
      {
        "definition": "形状",
        "example": "罔不因势象形。",
        "source": "核舟记",
        "grade": "八年级"
      },
      {
        "definition": "踪影",
        "example": "山岳潜形。",
        "source": "岳阳楼记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "兴",
    "pinyin": null,
    "meanings": [
      {
        "definition": "兴起",
        "example": "水波不兴。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "兴办",
        "example": "百废具兴。",
        "source": "岳阳楼记",
        "grade": "八年级"
      },
      {
        "definition": "振兴",
        "example": "兴复汉室。",
        "source": "出师表",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "修",
    "pinyin": null,
    "meanings": [
      {
        "definition": "修建",
        "example": "乃重修岳阳楼。",
        "source": "岳阳楼记",
        "grade": "八年级"
      },
      {
        "definition": "长",
        "example": "修狭者为之。",
        "source": "核舟记",
        "grade": "九年级"
      },
      {
        "definition": "修养",
        "example": "静以修身。",
        "source": "诫子书",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "徐",
    "pinyin": null,
    "meanings": [
      {
        "definition": "缓慢",
        "example": "徐以杓酌油沥之。",
        "source": "卖油翁",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "许",
    "pinyin": null,
    "meanings": [
      {
        "definition": "表约数",
        "example": "潭中鱼可百许头。",
        "source": "小石潭记",
        "grade": "七年级"
      },
      {
        "definition": "答应",
        "example": "杂然相许。",
        "source": "愚公移山",
        "grade": "八年级"
      },
      {
        "definition": "答应",
        "example": "遂许先帝以驱驰。",
        "source": "出师表",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "寻",
    "pinyin": null,
    "meanings": [
      {
        "definition": "寻找",
        "example": "寻张怀民。",
        "source": "记承天寺夜游",
        "grade": "七年级"
      },
      {
        "definition": "寻找",
        "example": "寻向所志。",
        "source": "桃花源记",
        "grade": "八年级"
      },
      {
        "definition": "不久",
        "example": "寻病终。",
        "source": "桃花源记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "业",
    "pinyin": null,
    "meanings": [
      {
        "definition": "事业",
        "example": "先帝创业未半。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "职业",
        "example": "捕鱼为业。",
        "source": "桃花源记",
        "grade": "九年级"
      },
      {
        "definition": "学业",
        "example": "其业有不精者。",
        "source": "送东阳马生序",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "遗",
    "pinyin": null,
    "meanings": [
      {
        "definition": "遗留",
        "example": "有遗男。",
        "source": "愚公移山",
        "grade": "八年级"
      },
      {
        "definition": "留下",
        "example": "遗德。",
        "source": "出师表",
        "grade": "七年级"
      },
      {
        "definition": "赠送",
        "example": "简拔以遗陛下。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "贻",
    "pinyin": null,
    "meanings": [
      {
        "definition": "赠送",
        "example": "尝贻余核舟一。",
        "source": "核舟记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "夷",
    "pinyin": null,
    "meanings": [
      {
        "definition": "平坦",
        "example": "船背稍夷。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "平和",
        "example": "言和而色夷。",
        "source": "送东阳马生序",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "异",
    "pinyin": null,
    "meanings": [
      {
        "definition": "不同",
        "example": "得无异乎。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "奇异",
        "example": "属引凄异。",
        "source": "三峡",
        "grade": "八年级"
      },
      {
        "definition": "惊异",
        "example": "渔人甚异之。",
        "source": "桃花源记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "易",
    "pinyin": null,
    "meanings": [
      {
        "definition": "更替",
        "example": "寒暑易节。",
        "source": "愚公移山",
        "grade": "七年级"
      },
      {
        "definition": "交换",
        "example": "以地易安陵。",
        "source": "唐雎不辱使命",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "诣",
    "pinyin": null,
    "meanings": [
      {
        "definition": "到、拜访",
        "example": "诣太守。",
        "source": "桃花源记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "益",
    "pinyin": null,
    "meanings": [
      {
        "definition": "增加",
        "example": "曾益其所不能。",
        "source": "生于忧患死于安乐",
        "grade": "八年级"
      },
      {
        "definition": "好处",
        "example": "大有所益。",
        "source": "孙权劝学",
        "grade": "九年级"
      },
      {
        "definition": "更加",
        "example": "香远益清。",
        "source": "爱莲说",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "阴",
    "pinyin": null,
    "meanings": [
      {
        "definition": "山北水南",
        "example": "达于汉阴。",
        "source": "愚公移山",
        "grade": "八年级"
      },
      {
        "definition": "阴暗",
        "example": "朝晖夕阴。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "树荫",
        "example": "佳木秀而繁阴。",
        "source": "醉翁亭记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "引",
    "pinyin": null,
    "meanings": [
      {
        "definition": "称引",
        "example": "引喻失义。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "拉",
        "example": "下车引之。",
        "source": "陈太丘与友期行",
        "grade": "七年级"
      },
      {
        "definition": "延长",
        "example": "属引凄异。",
        "source": "三峡",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "盈",
    "pinyin": null,
    "meanings": [
      {
        "definition": "满",
        "example": "曾不盈寸。",
        "source": "核舟记",
        "grade": "九年级"
      },
      {
        "definition": "旺盛",
        "example": "彼竭我盈。",
        "source": "曹刿论战",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "余",
    "pinyin": null,
    "meanings": [
      {
        "definition": "我",
        "example": "余贻核舟一。",
        "source": "核舟记",
        "grade": "八年级"
      },
      {
        "definition": "剩余",
        "example": "残年余力。",
        "source": "愚公移山",
        "grade": "九年级"
      },
      {
        "definition": "多余",
        "example": "阅十余岁。",
        "source": "河中石兽",
        "grade": "七年级"
      },
      {
        "definition": "其余",
        "example": "余人各复延至其家。",
        "source": "桃花源记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "狱",
    "pinyin": null,
    "meanings": [
      {
        "definition": "案件",
        "example": "小大之狱。",
        "source": "曹刿论战",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "御",
    "pinyin": null,
    "meanings": [
      {
        "definition": "驾驭",
        "example": "虽乘奔御风。",
        "source": "三峡",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "缘",
    "pinyin": null,
    "meanings": [
      {
        "definition": "沿着",
        "example": "缘溪行。",
        "source": "桃花源记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "远",
    "pinyin": null,
    "meanings": [
      {
        "definition": "遥远",
        "example": "有朋自远方来。",
        "source": "论语十二章",
        "grade": "九年级"
      },
      {
        "definition": "深远",
        "example": "远谋。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "疏远",
        "example": "远小人。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "云",
    "pinyin": null,
    "meanings": [
      {
        "definition": "说",
        "example": "古语有云。",
        "source": "书戴嵩画牛",
        "grade": "九年级"
      },
      {
        "definition": "助词",
        "example": "高峰入云。",
        "source": "答谢中书书",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "章",
    "pinyin": null,
    "meanings": [
      {
        "definition": "印章",
        "example": "又用篆章一。",
        "source": "核舟记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "知",
    "pinyin": null,
    "meanings": [
      {
        "definition": "知道",
        "example": "以我酌油知之。",
        "source": "卖油翁",
        "grade": "九年级"
      },
      {
        "definition": "智慧",
        "example": "孰为汝多知乎。",
        "source": "两小儿辩日",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "止",
    "pinyin": null,
    "meanings": [
      {
        "definition": "停止",
        "example": "后狼止而前狼又至。",
        "source": "狼",
        "grade": "八年级"
      },
      {
        "definition": "仅仅",
        "example": "止有剩骨。",
        "source": "狼",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "志",
    "pinyin": null,
    "meanings": [
      {
        "definition": "标记",
        "example": "处处志之。",
        "source": "桃花源记",
        "grade": "七年级"
      },
      {
        "definition": "志向",
        "example": "志于学。",
        "source": "论语十二章",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "致",
    "pinyin": null,
    "meanings": [
      {
        "definition": "取得",
        "example": "无以致书以观。",
        "source": "送东阳马生序",
        "grade": "九年级"
      },
      {
        "definition": "达到",
        "example": "无以致远。",
        "source": "诫子书",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "质",
    "pinyin": null,
    "meanings": [
      {
        "definition": "询问",
        "example": "援疑质理。",
        "source": "送东阳马生序",
        "grade": "八年级"
      },
      {
        "definition": "资质",
        "example": "非天质之卑。",
        "source": "送东阳马生序",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "专",
    "pinyin": null,
    "meanings": [
      {
        "definition": "独占",
        "example": "弗敢专也。",
        "source": "曹刿论战",
        "grade": "七年级"
      },
      {
        "definition": "专心",
        "example": "心不若余之专。",
        "source": "送东阳马生序",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "走",
    "pinyin": null,
    "meanings": [
      {
        "definition": "跑",
        "example": "双兔傍地走。",
        "source": "木兰诗",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "足",
    "pinyin": null,
    "meanings": [
      {
        "definition": "脚",
        "example": "细若蚊足。",
        "source": "核舟记",
        "grade": "七年级"
      },
      {
        "definition": "足够",
        "example": "兵甲已足。",
        "source": "出师表",
        "grade": "八年级"
      },
      {
        "definition": "值得",
        "example": "不足为外人道也。",
        "source": "桃花源记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "卒",
    "pinyin": null,
    "meanings": [
      {
        "definition": "最终",
        "example": "卒获有所闻。",
        "source": "送东阳马生序",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "作",
    "pinyin": null,
    "meanings": [
      {
        "definition": "振作",
        "example": "而后作。",
        "source": "生于忧患死于安乐",
        "grade": "八年级"
      },
      {
        "definition": "发出",
        "example": "泠泠作响。",
        "source": "与朱元思书",
        "grade": "九年级"
      },
      {
        "definition": "写作",
        "example": "作文以记之。",
        "source": "岳阳楼记",
        "grade": "七年级"
      },
      {
        "definition": "建造",
        "example": "作亭者谁。",
        "source": "醉翁亭记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "坐",
    "pinyin": null,
    "meanings": [
      {
        "definition": "坐着",
        "example": "坐潭上。",
        "source": "小石潭记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "卑鄙",
    "pinyin": null,
    "meanings": [
      {
        "definition": "地位低见识浅",
        "example": "先帝不以臣卑鄙。",
        "source": "出师表",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "布衣",
    "pinyin": null,
    "meanings": [
      {
        "definition": "平民",
        "example": "臣本布衣。",
        "source": "出师表",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "菲薄",
    "pinyin": null,
    "meanings": [
      {
        "definition": "轻视",
        "example": "不宜妄自菲薄。",
        "source": "出师表",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "其实",
    "pinyin": null,
    "meanings": [
      {
        "definition": "它的果实",
        "example": "其实味不同。",
        "source": "橘逾淮为枳",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "亲戚",
    "pinyin": null,
    "meanings": [
      {
        "definition": "亲属",
        "example": "亲戚畔之。",
        "source": "得道多助失道寡助",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "驱驰",
    "pinyin": null,
    "meanings": [
      {
        "definition": "奔走效劳",
        "example": "遂许先帝以驱驰。",
        "source": "出师表",
        "grade": "九年级"
      },
      {
        "definition": "策马奔驰",
        "example": "军中不得驱驰。",
        "source": "周亚夫军细柳",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "无论",
    "pinyin": null,
    "meanings": [
      {
        "definition": "更不必说",
        "example": "无论魏晋。",
        "source": "桃花源记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "牺牲",
    "pinyin": null,
    "meanings": [
      {
        "definition": "祭祀牲畜",
        "example": "牺牲玉帛。",
        "source": "曹刿论战",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "鸿儒",
    "pinyin": null,
    "meanings": [
      {
        "definition": "博学之人",
        "example": "谈笑有鸿儒。",
        "source": "陋室铭",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "白丁",
    "pinyin": null,
    "meanings": [
      {
        "definition": "平民",
        "example": "往来无白丁。",
        "source": "陋室铭",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "阡陌",
    "pinyin": null,
    "meanings": [
      {
        "definition": "田间小路",
        "example": "阡陌交通。",
        "source": "桃花源记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "交通",
    "pinyin": null,
    "meanings": [
      {
        "definition": "交错相通",
        "example": "阡陌交通。",
        "source": "桃花源记",
        "grade": "七年级"
      }
    ]
  },
  {
    "character": "问津",
    "pinyin": null,
    "meanings": [
      {
        "definition": "询问渡口",
        "example": "后遂无问津者。",
        "source": "桃花源记",
        "grade": "八年级"
      }
    ]
  },
  {
    "character": "绝境",
    "pinyin": null,
    "meanings": [
      {
        "definition": "与世隔绝的地方",
        "example": "来此绝境。",
        "source": "桃花源记",
        "grade": "九年级"
      }
    ]
  },
  {
    "character": "妻子",
    "pinyin": null,
    "meanings": [
      {
        "definition": "妻子儿女",
        "example": "率妻子邑人来此绝境。",
        "source": "桃花源记",
        "grade": "七年级"
      }
    ]
  }
];

function normalizeWordId(word: RawClassicalWord, index: number) {
  const safePinyin = (word.pinyin ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return word.id ?? `${word.character}-${safePinyin || "word"}-${index}`;
}

export const classicalWords: ClassicalWord[] = rawClassicalWords.map((w, index) => ({
  id: normalizeWordId(w, index),
  character: w.character,
  pinyin: w.pinyin ?? "",
  meanings: (w.meanings ?? []).map((m) => ({
    definition: m.definition,
    example: m.example,
    source: m.source,
    grade: m.grade,
    partOfSpeech: m.partOfSpeech ?? "—",
    sentenceTranslation: m.sentenceTranslation ?? "",
  })),
  etymology: w.etymology ?? "",
  relatedWords: w.relatedWords ?? [],
}));
