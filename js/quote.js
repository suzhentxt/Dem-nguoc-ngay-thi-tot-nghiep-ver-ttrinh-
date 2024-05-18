var quote = [
    "Nghị lực và bền bỉ có thể giúp bạn chinh phục mọi thứ",
    "Vấp ngã không phải là thất bại, chỉ là dừng lại cho đỡ mỏi chân thôi!",
    "Ước mơ không có ngày hết hạn, hãy hít thở sâu và cố gắng thêm lần nữa.",
    "Cuộc sống rất ngắn. Đừng lẵng phí nó bởi những nỗi buồn. Hãy là chính mình, luôn vui vẻ, tự do, và trở thành bất cứ gì bạn muốn.",
    "Phía sau tôi không có lấy một người, sao tôi dám ngã xuống.",
    "Thời gian còn lại rất ngắn. Hãy cố gắng hết sức mình, để không phải hối tiếc.",
    "Con đường do bản thân lựa chọn, dù có quỳ cũng phải đi cho hết.",
    "Thái độ bây giờ của bạn sẽ quyết định mười năm sau bạn là một nhân vật tầm cỡ hay chỉ là một kẻ thất bại.",
    "Nếu như không có vận may, thì hãy thử dùng dũng khí.",
    "Để có thể thành công, bạn cần phải tin rằng mình có thể.",
    "Bạn chỉ thất bại khi bạn ngừng cố gắng.",
    'Học khi người khác đang ngủ. Làm khi người khác đang nghỉ ngơi. Sẵn sàng khi người khác đang chơi. Và không ngừng cố gắng',
    'Học tập giúp chúng ta  rèn luyện bản thân hoàn thiện hơn',
    'Chỉ còn vài ngày nữa thôi là cuộc đời bạn sẽ bước qua trang mới cho nên hãy tập trung cao độ để thi cử thật tốt nhé',
    'Đây là những giờ phút vô cùng quan trọng của cuộc đời, hãy tập trung ôn thi và đừng để bất cứ điều gì làm xao nhãng bạn nhé',
    'Thi tốt nhé, 12 năm đèn sách giờ đây là lúc chúng ta gặt hái trái ngọt, chúng ta phải kiêu hãnh đạp tan cánh cổng Đại học nhé bạn của tôi',
    'Thế là 12 năm đèn sách cũng đến lúc cần phải chứng tỏ bản thân rồi. Cố lên…',
    'Thà để giọt mồ hôi rơi trên trang sách còn hơn để giọt nước mắt rơi trên đề thi',
    'Thi cử luôn luôn song hành trên con đường học vấn. Và bạn chỉ còn một kỳ thi cuối cùng này thôi là sẽ xa ghế nhà trường. Hãy cố gắng để không phải hối tiếc gì cả',
    'Tương lai tươi đẹp đang chờ đón các bạn',
    'Bạn có nghe thấy tiếng cánh cổng trường đại học đang réo gọi tên bạn không? Hãy làm bài thật tốt để có thể đến "âu yếm" nó',
    'Hãy tin rằng không có sự thất bại, con người luôn luôn có đủ khả năng để chinh phục những đỉnh cao! Hãy bình tĩnh, cẩn thận, và làm bài một cách thông minh như các bạn vẫn vậy',
    'Hãy bình tĩnh, tự tin để làm bài thật tốt, tất cả mọi người đều tin tưởng ở bạn',
    'Mùa thi xin chúc bạn có: Giấy báo về nhà, chuẩn bị xôi gà, và sẽ phải xa nhà!',
    'Đừng sợ, kì thi này không làm khó bạn được đâu. Vì còn nhiều kì thi đằng sau nữa. Cố lên nhé!',
    'Tố Trinh cố lên',
    'Suốt 12 năm miệt mài đèn sách, kỳ thi này là lúc bạn thể hiện khả năng của mình, cố lên và giành được số điểm thật cao nhé. Chúc bạn thi tốt!',
    'Đỗ Đại học nhé, bạn của tôi ơi. Chúc cho những ước mơ của bạn thành hiện thực'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('quotedisplay').innerHTML = quote[randomNumber];
}
