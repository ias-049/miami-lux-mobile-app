
export const BASE_URL = '';
export const API_VERSION = 'v1';
export const API_URL = `${BASE_URL}/${API_VERSION}/`;


export type Country = {
    name: string;
    flag: string;
    value: string;
    label: string;
    code: string;
    dial_code: string
}
export const COUNTRIES: Country[] = [
    {
        "name": "Afghanistan",
        "flag": "🇦🇫",
        "code": "AF",
        "dial_code": "+93",
        "label": "🇦🇫 Afghanistan (+93)",
        "value": "+93"
    },
    {
        "name": "Åland Islands",
        "flag": "🇦🇽",
        "code": "AX",
        "dial_code": "+358",
        "label": "🇦🇽 Åland Islands (+358)",
        "value": "+358"
    },
    {
        "name": "Albania",
        "flag": "🇦🇱",
        "code": "AL",
        "dial_code": "+355",
        "label": "🇦🇱 Albania (+355)",
        "value": "+355"
    },
    {
        "name": "Algeria",
        "flag": "🇩🇿",
        "code": "DZ",
        "dial_code": "+213",
        "label": "🇩🇿 Algeria (+213)",
        "value": "+213"
    },
    {
        "name": "American Samoa",
        "flag": "🇦🇸",
        "code": "AS",
        "dial_code": "+1684",
        "label": "🇦🇸 American Samoa (+1684)",
        "value": "+1684"
    },
    {
        "name": "Andorra",
        "flag": "🇦🇩",
        "code": "AD",
        "dial_code": "+376",
        "label": "🇦🇩 Andorra (+376)",
        "value": "+376"
    },
    {
        "name": "Angola",
        "flag": "🇦🇴",
        "code": "AO",
        "dial_code": "+244",
        "label": "🇦🇴 Angola (+244)",
        "value": "+244"
    },
    {
        "name": "Anguilla",
        "flag": "🇦🇮",
        "code": "AI",
        "dial_code": "+1264",
        "label": "🇦🇮 Anguilla (+1264)",
        "value": "+1264"
    },
    {
        "name": "Antarctica",
        "flag": "🇦🇶",
        "code": "AQ",
        "dial_code": "+672",
        "label": "🇦🇶 Antarctica (+672)",
        "value": "+672"
    },
    {
        "name": "Antigua and Barbuda",
        "flag": "🇦🇬",
        "code": "AG",
        "dial_code": "+1268",
        "label": "🇦🇬 Antigua and Barbuda (+1268)",
        "value": "+1268"
    },
    {
        "name": "Argentina",
        "flag": "🇦🇷",
        "code": "AR",
        "dial_code": "+54",
        "label": "🇦🇷 Argentina (+54)",
        "value": "+54"
    },
    {
        "name": "Armenia",
        "flag": "🇦🇲",
        "code": "AM",
        "dial_code": "+374",
        "label": "🇦🇲 Armenia (+374)",
        "value": "+374"
    },
    {
        "name": "Aruba",
        "flag": "🇦🇼",
        "code": "AW",
        "dial_code": "+297",
        "label": "🇦🇼 Aruba (+297)",
        "value": "+297"
    },
    {
        "name": "Australia",
        "flag": "🇦🇺",
        "code": "AU",
        "dial_code": "+61",
        "label": "🇦🇺 Australia (+61)",
        "value": "+61"
    },
    {
        "name": "Austria",
        "flag": "🇦🇹",
        "code": "AT",
        "dial_code": "+43",
        "label": "🇦🇹 Austria (+43)",
        "value": "+43"
    },
    {
        "name": "Azerbaijan",
        "flag": "🇦🇿",
        "code": "AZ",
        "dial_code": "+994",
        "label": "🇦🇿 Azerbaijan (+994)",
        "value": "+994"
    },
    {
        "name": "Bahamas",
        "flag": "🇧🇸",
        "code": "BS",
        "dial_code": "+1242",
        "label": "🇧🇸 Bahamas (+1242)",
        "value": "+1242"
    },
    {
        "name": "Bahrain",
        "flag": "🇧🇭",
        "code": "BH",
        "dial_code": "+973",
        "label": "🇧🇭 Bahrain (+973)",
        "value": "+973"
    },
    {
        "name": "Bangladesh",
        "flag": "🇧🇩",
        "code": "BD",
        "dial_code": "+880",
        "label": "🇧🇩 Bangladesh (+880)",
        "value": "+880"
    },
    {
        "name": "Barbados",
        "flag": "🇧🇧",
        "code": "BB",
        "dial_code": "+1246",
        "label": "🇧🇧 Barbados (+1246)",
        "value": "+1246"
    },
    {
        "name": "Belarus",
        "flag": "🇧🇾",
        "code": "BY",
        "dial_code": "+375",
        "label": "🇧🇾 Belarus (+375)",
        "value": "+375"
    },
    {
        "name": "Belgium",
        "flag": "🇧🇪",
        "code": "BE",
        "dial_code": "+32",
        "label": "🇧🇪 Belgium (+32)",
        "value": "+32"
    },
    {
        "name": "Belize",
        "flag": "🇧🇿",
        "code": "BZ",
        "dial_code": "+501",
        "label": "🇧🇿 Belize (+501)",
        "value": "+501"
    },
    {
        "name": "Benin",
        "flag": "🇧🇯",
        "code": "BJ",
        "dial_code": "+229",
        "label": "🇧🇯 Benin (+229)",
        "value": "+229"
    },
    {
        "name": "Bermuda",
        "flag": "🇧🇲",
        "code": "BM",
        "dial_code": "+1441",
        "label": "🇧🇲 Bermuda (+1441)",
        "value": "+1441"
    },
    {
        "name": "Bhutan",
        "flag": "🇧🇹",
        "code": "BT",
        "dial_code": "+975",
        "label": "🇧🇹 Bhutan (+975)",
        "value": "+975"
    },
    {
        "name": "Bolivia, Plurinational State of bolivia",
        "flag": "🇧🇴",
        "code": "BO",
        "dial_code": "+591",
        "label": "🇧🇴 Bolivia (+591)",
        "value": "+591"
    },
    {
        "name": "Bosnia and Herzegovina",
        "flag": "🇧🇦",
        "code": "BA",
        "dial_code": "+387",
        "label": "🇧🇦 Bosnia and Herzegovina (+387)",
        "value": "+387"
    },
    {
        "name": "Botswana",
        "flag": "🇧🇼",
        "code": "BW",
        "dial_code": "+267",
        "label": "🇧🇼 Botswana (+267)",
        "value": "+267"
    },
    {
        "name": "Bouvet Island",
        "flag": "🇧🇻",
        "code": "BV",
        "dial_code": "+47",
        "label": "🇧🇻 Bouvet Island (+47)",
        "value": "+47"
    },
    {
        "name": "Brazil",
        "flag": "🇧🇷",
        "code": "BR",
        "dial_code": "+55",
        "label": "🇧🇷 Brazil (+55)",
        "value": "+55"
    },
    {
        "name": "British Indian Ocean Territory",
        "flag": "🇮🇴",
        "code": "IO",
        "dial_code": "+246",
        "label": "🇮🇴 British Indian Ocean Territory (+246)",
        "value": "+246"
    },
    {
        "name": "Brunei Darussalam",
        "flag": "🇧🇳",
        "code": "BN",
        "dial_code": "+673",
        "label": "🇧🇳 Brunei Darussalam (+673)",
        "value": "+673"
    },
    {
        "name": "Bulgaria",
        "flag": "🇧🇬",
        "code": "BG",
        "dial_code": "+359",
        "label": "🇧🇬 Bulgaria (+359)",
        "value": "+359"
    },
    {
        "name": "Burkina Faso",
        "flag": "🇧🇫",
        "code": "BF",
        "dial_code": "+226",
        "label": "🇧🇫 Burkina Faso (+226)",
        "value": "+226"
    },
    {
        "name": "Burundi",
        "flag": "🇧🇮",
        "code": "BI",
        "dial_code": "+257",
        "label": "🇧🇮 Burundi (+257)",
        "value": "+257"
    }
];
