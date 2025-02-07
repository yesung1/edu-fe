/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";
import type {
  ElectronicReceiptResponse,
  IdResponse,
  LatestBuyerResponse,
  PossiblePaymentMethodsResponse,
  RefundBanksResponse,
  StudentPaymentDetailResponse,
  StudentPaymentResponse,
  StudentRefundDetailResponse,
  StudentRefundResponse,
  Unit,
} from "../../../model";

export const getRefundPaymentIouxJYMMock = (
  overrideResponse: any = {}
): IdResponse => ({ id: faker.word.sample(), ...overrideResponse });

export const getNotifyVirtualAccountInfoUVB8jS8Mock = (): Unit => ({});

export const getIssueCashReceiptIouxJYMMock = (): Unit => ({});

export const getGetRefundsMock = (
  overrideResponse: any = {}
): StudentRefundResponse[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    orderNumber: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    productName: faker.word.sample(),
    refundedDate: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    refundId: faker.word.sample(),
    refundPrice: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    refundStatus: faker.helpers.arrayElement([
      "REFUND_REQUEST",
      "REFUND_WAITING",
      "REFUND_COMPLETION",
      "REFUND_REFUSAL",
    ] as const),
    ...overrideResponse,
  }));

export const getGetRefundJrEFRjkMock = (
  overrideResponse: any = {}
): StudentRefundDetailResponse => ({
  payment: {
    creditCardQuota: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    creditCardType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    easyPaymentType: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        "kakaopay",
        "naverpay",
        "naverpay_card",
        "naverpay_point",
        "payco",
        "lpay",
      ] as const),
      undefined,
    ]),
    isRefundable: faker.datatype.boolean(),
    paymentCompletedAt: faker.word.sample(),
    paymentId: faker.word.sample(),
    paymentRequestedAt: faker.word.sample(),
    paymentType: faker.helpers.arrayElement([
      "MANUAL",
      "FREE",
      "CARD",
      "ACCOUNT_TRANSFER",
      "VIRTUAL_ACCOUNT",
      "SIMPLE_PAYMENT",
    ] as const),
    totalPaymentPrice: faker.number.int({ min: undefined, max: undefined }),
    transferAccountBankType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    virtualAccountBankType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    ...overrideResponse,
  },
  products: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    majorSubject: {
      code: faker.word.sample(),
      name: faker.word.sample(),
      ...overrideResponse,
    },
    orderNumber: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    paymentPrice: faker.number.int({ min: undefined, max: undefined }),
    productName: faker.word.sample(),
    productType: faker.helpers.arrayElement(["CLINIC", "WORKBOOK"] as const),
    refundPrice: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    refundStatus: faker.helpers.arrayElement([
      "REFUND_REQUEST",
      "REFUND_WAITING",
      "REFUND_COMPLETION",
      "REFUND_REFUSAL",
    ] as const),
    teacherName: faker.word.sample(),
    ...overrideResponse,
  })),
  refund: {
    accountHolder: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    accountNumber: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    attachedFileNames: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1
      ).map(() => faker.word.sample()),
      undefined,
    ]),
    bankName: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    cancellationReceiptUrl: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    creditCardType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    easyRefundType: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        "kakaopay",
        "naverpay",
        "naverpay_card",
        "naverpay_point",
        "payco",
        "lpay",
      ] as const),
      undefined,
    ]),
    isCancelable: faker.datatype.boolean(),
    refundCompletedAt: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    refundReason: faker.word.sample(),
    refundRefusalGuide: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    refundRequestedAt: faker.word.sample(),
    refundType: faker.helpers.arrayElement([
      "MANUAL",
      "FREE",
      "CARD",
      "ACCOUNT_TRANSFER",
      "VIRTUAL_ACCOUNT",
      "SIMPLE_PAYMENT",
    ] as const),
    ...overrideResponse,
  },
  refundId: faker.word.sample(),
  ...overrideResponse,
});

export const getCancelRefundRequestJrEFRjkMock = (): Unit => ({});

export const getGetPaymentsMock = (
  overrideResponse: any = {}
): StudentPaymentResponse[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    approvalNumber: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    orderNumber: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    paymentCompletedDate: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    paymentId: faker.word.sample(),
    paymentPrice: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    productName: faker.word.sample(),
    status: faker.helpers.arrayElement([
      "WAIT",
      "COMPLETION",
      "EXPIRED",
    ] as const),
    ...overrideResponse,
  }));

export const getGetPaymentUVB8jS8Mock = (
  overrideResponse: any = {}
): StudentPaymentDetailResponse => ({
  orderProduct: {
    approvalNumber: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    clinicId: faker.word.sample(),
    isEnrolled: faker.datatype.boolean(),
    majorSubject: {
      code: faker.word.sample(),
      name: faker.word.sample(),
      ...overrideResponse,
    },
    orderNumber: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    paymentId: faker.word.sample(),
    paymentPrice: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    productName: faker.word.sample(),
    productType: faker.helpers.arrayElement(["CLINIC", "WORKBOOK"] as const),
    status: faker.helpers.arrayElement([
      "WAIT",
      "COMPLETION",
      "EXPIRED",
    ] as const),
    teacherName: faker.word.sample(),
    ...overrideResponse,
  },
  paymentInfo: {
    cashReceiptUrl: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    creditCardQuota: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    creditCardReceiptUrl: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    creditCardType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    depositDueDate: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    discountPrice: faker.number.int({ min: undefined, max: undefined }),
    easyPaymentType: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        "kakaopay",
        "naverpay",
        "naverpay_card",
        "naverpay_point",
        "payco",
        "lpay",
      ] as const),
      undefined,
    ]),
    isElectronicReceiptExisted: faker.datatype.boolean(),
    isRefundable: faker.datatype.boolean(),
    originalPrice: faker.number.int({ min: undefined, max: undefined }),
    paymentCompletedAt: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    paymentRequestedAt: faker.word.sample(),
    paymentType: faker.helpers.arrayElement([
      "MANUAL",
      "FREE",
      "CARD",
      "ACCOUNT_TRANSFER",
      "VIRTUAL_ACCOUNT",
      "SIMPLE_PAYMENT",
    ] as const),
    salePrice: faker.number.int({ min: undefined, max: undefined }),
    status: faker.helpers.arrayElement([
      "WAIT",
      "COMPLETION",
      "EXPIRED",
    ] as const),
    totalPaymentPrice: faker.number.int({ min: undefined, max: undefined }),
    transferAccountBankType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    virtualAccountBankType: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    virtualAccountNumber: faker.helpers.arrayElement([
      faker.word.sample(),
      undefined,
    ]),
    ...overrideResponse,
  },
  ...overrideResponse,
});

export const getGetElectronicReceiptUVB8jS8Mock = (
  overrideResponse: any = {}
): ElectronicReceiptResponse => ({
  approvalNumber: faker.word.sample(),
  buyerName: faker.word.sample(),
  company: {
    address: faker.word.sample(),
    businessRegistrationNumber: faker.word.sample(),
    companyName: faker.word.sample(),
    contactNumber: faker.word.sample(),
    representativeName: faker.word.sample(),
    ...overrideResponse,
  },
  paymentCompletedAt: faker.word.sample(),
  paymentMethod: faker.word.sample(),
  paymentPrice: faker.number.int({ min: undefined, max: undefined }),
  productName: faker.word.sample(),
  ...overrideResponse,
});

export const getGetRefundableBanksUVB8jS8Mock = (
  overrideResponse: any = {}
): RefundBanksResponse => ({
  banks: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    bankCode: faker.word.sample(),
    bankName: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getGetPossiblePaymentMethodsMock = (
  overrideResponse: any = {}
): PossiblePaymentMethodsResponse => ({
  interestFreeInstallmentCardGuide: faker.word.sample(),
  methods: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    methodCode: faker.helpers.arrayElement([
      "card",
      "trans",
      "vbank",
      "kakaopay",
      "naverpay",
      "payco",
    ] as const),
    methodName: faker.word.sample(),
    methodSiteCode: faker.word.sample(),
    ...overrideResponse,
  })),
  paymentGatewayCode: faker.word.sample(),
  paymentGatewayName: faker.word.sample(),
  ...overrideResponse,
});

export const getGetLatestBuyerMock = (
  overrideResponse: any = {}
): LatestBuyerResponse => ({
  name: faker.word.sample(),
  phoneNumber: faker.word.sample(),
  ...overrideResponse,
});

export const getRefundPaymentIouxJYMMockHandler = (
  overrideResponse?: IdResponse
) => {
  return http.post("*/clus/payments/:paymentId/refund", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getRefundPaymentIouxJYMMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getNotifyVirtualAccountInfoUVB8jS8MockHandler = (
  overrideResponse?: Unit
) => {
  return http.post(
    "*/clus/payments/:paymentId/notify/virtual-account-info",
    async () => {
      await delay(1000);
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getNotifyVirtualAccountInfoUVB8jS8Mock()
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  );
};

export const getIssueCashReceiptIouxJYMMockHandler = (
  overrideResponse?: Unit
) => {
  return http.post("*/clus/payments/:paymentId/cash-receipt", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getIssueCashReceiptIouxJYMMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetRefundsMockHandler = (
  overrideResponse?: StudentRefundResponse[]
) => {
  return http.get("*/clus/refunds", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(overrideResponse ? overrideResponse : getGetRefundsMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetRefundJrEFRjkMockHandler = (
  overrideResponse?: StudentRefundDetailResponse
) => {
  return http.get("*/clus/refunds/:refundId", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetRefundJrEFRjkMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getCancelRefundRequestJrEFRjkMockHandler = (
  overrideResponse?: Unit
) => {
  return http.delete("*/clus/refunds/:refundId", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getCancelRefundRequestJrEFRjkMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetPaymentsMockHandler = (
  overrideResponse?: StudentPaymentResponse[]
) => {
  return http.get("*/clus/payments", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetPaymentsMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetPaymentUVB8jS8MockHandler = (
  overrideResponse?: StudentPaymentDetailResponse
) => {
  return http.get("*/clus/payments/:paymentId", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetPaymentUVB8jS8Mock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetElectronicReceiptUVB8jS8MockHandler = (
  overrideResponse?: ElectronicReceiptResponse
) => {
  return http.get("*/clus/payments/:paymentId/electronic-receipt", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetElectronicReceiptUVB8jS8Mock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetRefundableBanksUVB8jS8MockHandler = (
  overrideResponse?: RefundBanksResponse
) => {
  return http.get("*/clus/payments/:paymentId/banks", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetRefundableBanksUVB8jS8Mock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetPossiblePaymentMethodsMockHandler = (
  overrideResponse?: PossiblePaymentMethodsResponse
) => {
  return http.get("*/clus/payment-methods", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetPossiblePaymentMethodsMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};

export const getGetLatestBuyerMockHandler = (
  overrideResponse?: LatestBuyerResponse
) => {
  return http.get("*/clus/latest-buyer", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetLatestBuyerMock()
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
};
export const getPaymentMock = () => [
  getRefundPaymentIouxJYMMockHandler(),
  getNotifyVirtualAccountInfoUVB8jS8MockHandler(),
  getIssueCashReceiptIouxJYMMockHandler(),
  getGetRefundsMockHandler(),
  getGetRefundJrEFRjkMockHandler(),
  getCancelRefundRequestJrEFRjkMockHandler(),
  getGetPaymentsMockHandler(),
  getGetPaymentUVB8jS8MockHandler(),
  getGetElectronicReceiptUVB8jS8MockHandler(),
  getGetRefundableBanksUVB8jS8MockHandler(),
  getGetPossiblePaymentMethodsMockHandler(),
  getGetLatestBuyerMockHandler(),
];
