const userList = [
  {
    id: 1,
    name: "위스토어",
    vendorId: 1
  },
  {
    id: 2,
    name: "스마트앤스토리지",
    vendorId: 2
  }
];

const vendors = [
  {
    id: 1,
    name: "CJ대한통운",
    viewName: "CJ택배-Type1",
    sheetName: "배송관리",
    fileName: "CJ택배발송용",
    smartStore: {
      viewName: "CJ대한통운",
    },
    st11: {
      code: '00034',
      deliveryType: '01'
    },
    coupang: {
      viewName: "CJ 대한통운"
    },
    kakao: {
      code: "2"
    },
    gmarket: {
      viewName: "CJ택배",
    },
    lotteon: {
      viewName: "CJ택배",
    },
    ssg: {
      code: '0000033011'

    }, interpark: {
      code: '169168'
    }, wemakeprice: {
      viewName: 'CJ대한통운'
    }
  },
  {
    id: 2,
    name: "CJ대한통운",
    viewName: "CJ택배-Type2",
    sheetName: "Sheet1",
    fileName: "CJ택배발송용",
    smartStore: {
      viewName: "CJ대한통운",
    },
    st11: {
      code: '00034',
      deliveryType: '01'
    },
    coupang: {
      viewName: "CJ 대한통운"
    },
    kakao: {
      code: "2"
    },
    gmarket: {
      viewName: "CJ택배",
    },
    lotteon: {
      viewName: "CJ택배",
    },
    ssg: {
      code: '0000033011'

    }, interpark: {
      code: '169168'
    }, wemakeprice: {
      viewName: 'CJ대한통운'
    }
  }
];

const company = {
  "st11": "11번가",
  "naver": "스마트스토어",
  "coupang": "쿠팡",
  "kakaoStore": "카카오톡스토어",
  "gmarket": "지마켓",
  "lotteon": "롯데on",
  "ssg": "ssg",
  "interpark": "인터파크",
  "wemakeprice": "위메프"
};

const searchParams = new URLSearchParams(window.location.search);

const platform = {
  coupang: {
    name: "쿠팡",
    invoiceFileName: "송장_쿠팡_"
  },
  esm: {
    gmarket: {
      name: "지마켓"
    },
    auction: {
      name: "옥션"
    },
    invoiceFileName: "송장_esm_"
  },
  interpark: {
    name: "인터파크",
    invoiceFileName: "송장_인터파크_"
  },
  kakaotalk: {
    name: "카카오톡스토어",
    invoiceFileName: "송장_카카오_"
  },
  lotteon: {
    name: "롯데on",
    invoiceFileName: "송장_롯데on_"
  },
  smartStore: {
    name: "스마트스토어",
    invoiceFileName: "송장_스마트스토어_"
  },
  ssg: {
    name: "SSG.COM",
    invoiceFileName: "송장_ssg.com_"
  },
  st11: {
    name: "11번가",
    invoiceFileName: "송장_11번가_"
  },
  wemakeprice: {
    name: "위메프",
    invoiceFileName: "송장_위메프_"
  }
};


const sellerInfo = {
  phone : "010-3024-8589",
  senderName : "디라운드주식회사",
  addr: "경기도 고양시 덕양구 화정동 CJ화정대리점",
  userId : searchParams.get("user"),
  vendor: vendors.find(v => v.id == 1)
}

// function findVendor(userId){
//   let vendorId = 1;
//   let vendor = vendors.find(v => v.id == vendorId);
//   return vendor;
// }
