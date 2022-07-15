var WholesaleOrderJson = [];
var wholesaleAmount = 0;


var WholesaleService = {
  addOrderRepository: function (sheet) {
    var range = XLSX.utils.decode_range(sheet['!ref']);
    
    console.log(range.s.r);
    console.log(range.e.r);
    const newRange = XLSX.utils.encode_range(range);
    WholesaleOrderJson = [];
    aoa = XLSX.utils.sheet_to_json(sheet, {range: newRange});
    aoa.forEach(function(o){
      var qty = o["Order Qty"]
      var productName = o["Product"]
      console.log(productName);
      if(qty > 0 && productName != undefined){
        wholesaleAmount += o["Sum"]
        WholesaleOrderJson.push(o);
      }
    })
    console.log(WholesaleOrderJson)
    console.log(wholesaleAmount)
    console.log(typeof wholesaleAmount)
    return WholesaleOrderJson;
  },
  convertToOrderlistForEzadminformatJson: function () {
    let orderListJson = [];
    var discountRate = 0;

    if(wholesaleAmount >= 500000) { // 50만원 이상 구매 시 30% 할인
      discountRate = 0.3;
    } else if(wholesaleAmount >= 300000) { // 30만원 이상 구매 시 15% 할인
      discountRate = 0.15;
    }

    WholesaleOrderJson.forEach(order => {
      console.log(order)

      // 상품별 총 주문금액
      var itemPriceAmount = order["Price"] * order["Order Qty"]; 
      
      // 상품별 마진 금액
      var itemPriceNet = itemPriceAmount * (1 - discountRate); 

      orderListJson.push(
          {
            "주문번호": moment().format("YYYYMMDD00SS"),
            "상품번호": order["Code"],
            "상품명": order["Product"],
            "옵션정보": order["Option"],
            "수량": order["Order Qty"],
            "상품가격": order["Price"],
            "구매자명": $("#orderName").val(),
            "구매자ID": $("#orderId").val(),
            "수취인명": $("#recieverName").val(),
            "수취인연락처1": $("#tel1").val(),
            "수취인연락처2": $("#tel2").val(),
            "우편번호": $("#zipcode").val(),
            "배송지": $("#addr").val(),
            "배송메세지": $("#msg").val(),
            "상품별 총 주문금액": itemPriceAmount,
            "정산예정금액": itemPriceNet,
            "배송비 형태": "무료",
          });
      
    });

    return orderListJson;
  },
  clearOrder() {

    WholesaleOrderJson = [];
    wholesaleAmount = 0;

    $("#recieverName").val("");
    $("#tel1").val("");
    $("#tel2").val("");
    $("#zipcode").val("");
    $("#addr").val("");
    $("#msg").val("");
    console.log("clear");
  }

}
