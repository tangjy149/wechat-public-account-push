/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx39339dc7c2dd926e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e42f6ff9d1625e03bb0782f2123a8e44',

  province: '四川',
  city: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU25972TkhOo0UQygQ5dWdB6tTx9HQ4S4iojHbLM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-26',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1997', date: '11-26',
        },
        {
          type: '节日', name: '开盒纪念日', year: '2022', date: '11-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'earthy_love_words', date: '2022-11-07' },
        // 结婚纪念日
        { keyword: 'birthday_message', date: '1999-11-26' },
      ],
    },
  ],

  // SLOT_LIST: [
  //   // 这样配置的话，就会每次发送这句话
  //   { keyword: 'note_en', contents: 'I miss you every day!' },
  //   // 这样配置的话，就会每次发送这句话
  //   { keyword: 'notice', contents: '记得滴眼药水宝宝' },
  //   // 这样配置的话，就会每次随机选一句话发送
  //   {
  //     keyword: 'note_ch',
  //     contents: [
  //       '因为太喜欢你，所以看谁都像是情敌。',
  //       '申请成为你爱里的永久居民。',
  //       '你很傻，你很笨，可我还是很羡慕你，因为你有我',
  //       '遇见你，就好像捡到了100斤的运气'
  //     ],
  //   }
    // 你可以不断按格式往下增加
    // ...
  ],
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

