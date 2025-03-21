const API_URL_VERIFY = 'https://stash-wallet-qa.koinpayments.com/KOIN/VerifyEmailAddress';
const API_URL_CONSENT = 'https://stash-wallet-qa.koinpayments.com/KOIN/UpdateConsent';
const HEADERS = {
    'ApiKey': 'KAH2024PROP',
    'ProgramKey': 'KAH2024',
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46QGRtMW4xMjM0'
};

async function verifyEmail(enrollmentId) {
    try {
        const response = await fetch(API_URL_VERIFY, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ EnrollmentId: enrollmentId })
        });

        const data = await response.json();
        console.log('Email Verification Response:', data);
    } catch (error) {
        console.error('Error verifying email:', error);
    }
}

async function updateConsent(enrollmentId) {
    try {
        const response = await fetch(API_URL_CONSENT, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ EnrollmentId: enrollmentId })
        });

        const data = await response.json();
        console.log('Consent Update Response:', data);
    } catch (error) {
        console.error('Error updating consent:', error);
    }
}

