/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx39339dc7c2dd926e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e42f6ff9d1625e03bb0782f2123a8e44',

  IS_SHOW_COLOR: true,
  
  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '玥玥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obcz76WhCH7FRScC_Wobx2rarmJE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '9QJpf71MNJoRa2sBl4_baKRquF_G1bLN5HIR_TduZ_E',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '婉婉阴历生日', year: '1996', date: '05-19',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '玥玥阳历生日', year: '1999', date: '11-26',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2022', date: '11-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-07' },
      ],
    }
  ],
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'note_en', contents: [
      'I miss you every day!' ,
      'You are my today and all of my tomorrows.',
      'You will never age for me, nor fade, nor die.',
      'Let us flip the coin and see. Head, I am yours. Tail, you are mine.',
      'Every time I see you, I fall in love all over again.',
      'May there be enough clouds in yours life to make a beautiful sunset.',
      'I need you like a heart needs a beat.',
      'The time that you are my most fatal.'
      ]},
    // 这样配置的话，就会每次发送这句话
    { keyword: 'notice', contents: [
      '天气变冷了，要多加衣服呀', 
      'Happy Happy, 记得微笑。' ,
      '记得按时吃饭哦！', 
      '眼药水可别又忘了，笨',
      '要做一个只记得快乐和知识点的人。'，
      '别忘了今天的午餐'
    ]},
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'note_ch',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气',
        '想做你跌落的春天，做你的多巴胺，做你阖眼后吻上眸的晚安',
        '我会在日落时想起你。',
        '还有星河可以寄望，还有宇宙可以浪漫不止。',
        '穿过西风与山河，安知甜与乐。',
        '三分月辉两分云沙四分秋黛，还有一分你的眉眼，这才是我的秋天。'
      ],
    }
  ],
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: false,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },  

  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'eedea9a4b88ac83f7f33fca625e4c5c1',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },

  IS_SHOW_COLOR: true,

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obcz76ZjkxdcaN41iXTGBw-lxi3E',
    }
  ],

}

module.exports = USER_CONFIG
