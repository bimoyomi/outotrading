// API 키 설정 파일
// 이 파일은 .gitignore에 추가하여 버전 관리에서 제외해야 합니다.

const config = {
    // 바이낸스 API 키 (선택사항 - 현재는 공개 API만 사용)
    binance: {
        apiKey: process.env.BINANCE_API_KEY || '',
        secretKey: process.env.BINANCE_SECRET_KEY || '',
        // 테스트넷 사용 여부
        testnet: process.env.BINANCE_TESTNET === 'true' || false
    },
    
    // API 엔드포인트 설정
    endpoints: {
        // 공개 API (API 키 불필요)
        public: {
            exchangeInfo: 'https://fapi.binance.com/fapi/v1/exchangeInfo',
            ticker24hr: 'https://fapi.binance.com/fapi/v1/ticker/24hr',
            klines: 'https://fapi.binance.com/fapi/v1/klines'
        },
        // 개인 API (API 키 필요)
        private: {
            account: 'https://fapi.binance.com/fapi/v2/account',
            positions: 'https://fapi.binance.com/fapi/v2/positionRisk'
        }
    }
};

// Node.js 환경에서만 사용
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}

// 브라우저 환경에서 사용
if (typeof window !== 'undefined') {
    window.config = config;
}
