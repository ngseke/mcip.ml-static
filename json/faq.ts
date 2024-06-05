import { type z } from 'zod'
import { type FaqGroups } from './faqSchema'

export const faq = [
  {
    title: '參賽相關',
    content: [
      {
        question: '臨時有事不能參賽，該如何辦理退賽？',
        answer: '在報名截止前，您可經由【我】-【報名資訊】系統辦理退賽。\n報名截止後，你必須聯繫主辦院校辦理相關退賽事宜。\n\n註1：政大金旋獎因賽制規章規定，有關退費與棄賽之條約內容，由政大金旋獎自行處理，系統不需作出任何保證或承擔任何責任。',
      },
      {
        question: '報名期限/表單修改期限與主辦公布不符',
        answer: '依照主辦院校所設定的時間為主哦！',
      },
    ],
  },
  {
    title: '金流合作院校 - 繳費相關',
    content: [
      {
        question: '為什麼完成繳費了卻沒收到確認通知？',
        answer: '通常繳費完成後，會在一個工作天內收到樂台計畫 LINE 官方帳號的推播訊息。\n有時可能因為系統流量過大，而導致通知無法即時送達，此時請無需擔心，您依然可以經由 App【我】-【報名資訊】-【繳費資訊】查詢，敬請以 App 上顯示的繳費狀態為主。',
      },
      {
        question: '超過報名期限過後還能繳費嗎？',
        answer: '只要在報名後 3 天內完成繳費都算是報名成功哦！',
      },
      {
        question: '超過繳費期限匯款該怎麼辦？',
        answer: '超過 3 天繳費期限後，ATM 虛擬匯款帳號就會失效，必須透過重新報名取得新繳費代碼。',
      },
      {
        question: '虛擬 ATM 帳戶能使用臨櫃匯款嗎？',
        answer: '系統自動產生的虛擬帳號為 16 碼數字 (一般帳戶為 12 ~ 14 碼)，由於 16 碼的虛擬帳號是針對網路與 ATM 作使用，因此無法進行臨櫃現金匯款。',
      },
      {
        question: '匯款失敗可能原因？',
        answer: '1. 帳號輸入錯誤\n2. 帳號繳款期限過期\n3. 匯款金額輸入錯誤：務必按照頁面顯示之應繳款金額轉帳，若金額不符則無法順利轉帳。\n4. 餘額不足\n5. 提款卡未啟用轉帳功能\n6. 銀行帳戶未啟用「非約定轉帳」功能\n7. 選擇「約定轉帳」功能：虛擬 ATM 帳戶須使用「非約定轉帳」功能匯款。',
      },
    ],
  },
  {
    title: '金流合作院校 - 退費相關',
    content: [
      {
        question: '如何辦理退費呢？',
        answer: '若您想要辦理退賽，請主動聯繫主辦院校方，後續退款流程將由主辦院校方處理。相關說明請參閱主辦院校參賽規章。',
      },
    ],
  },
] satisfies z.infer<typeof FaqGroups>
