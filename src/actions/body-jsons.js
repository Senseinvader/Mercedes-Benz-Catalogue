import CarModel from "../model/carModel";
import {API_KEY} from "../non-export-data/api-key";

export const carModel = new CarModel("205066_000",
    "I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56",
    53776.1,
    "EUR",
    333,
    "PS",
    2996,
    "cm³",
    250,
    "km/h",
    4.9,
    's',
    undefined,
    undefined
);

export const expectedDataOfModelConfiguration = [
        {
            "type": "FETCH_MODEL_CONFIGURATION_REQUEST"
        },
        {
            "modelConfiguration": {
                "acceleration": 4.9,
                "accelerationUnit": "s",
                "capacity": 2996,
                "capacityUnit": "cm³",
                "configurationId": "I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56",
                "currency": "EUR",
                "cylinder": "6",
                "doors": 4,
                "emissionStandard": "Euro 6d-TEMP",
                "modelId": "205066_000",
                "power": 333,
                "powerUnit": "PS",
                "price": 53776.1,
                "seats": 5,
                "topSpeed": 250,
                "topSpeedUnit": "km/h",
                "vehicleComponents": [
                    {
                        "code": "P15",
                        "codeType": "I",
                        "componentSortId": 0,
                        "componentType": "LINES",
                        "description": "Mit dem AVANTGARDE Exterieur unterstreichen Sie die Individualität und Sportlichkeit Ihres Fahrzeugs – und zeigen, dass Ihnen zeitgemäße Hochwertigkeit am Herzen liegt. Das Zusammenspiel der Design-Elemente ergibt ein außergewöhnlich ausdrucksstarkes Fahrzeug. Das tiefergelegte Fahrwerk bietet die ideale Balance aus Dynamik, Komfort und Sicherheit.",
                        "fixed": true,
                        "hidden": false,
                        "id": "I-P15",
                        "name": "AVANTGARDE Exterieur",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "code": "P75",
                        "codeType": "I",
                        "componentSortId": 1,
                        "componentType": "LINES",
                        "description": "Mit dem Serien-Interieur setzen Sie auf zeitlose Attraktivität. Fließende Formen, dunkle Eleganz und sanfte Kontraste ergeben einen puristischen Gesamteindruck und interpretieren modernen Luxus gänzlich neu. Die teilelektrischen Seriensitze bieten hervorragenden Sitzkomfort – auch auf langen Strecken.",
                        "fixed": true,
                        "hidden": false,
                        "id": "I-P75",
                        "includedComponents": {
                            "componentCategories": [
                                {
                                    "cardinality": "ARBITRARY",
                                    "categoryId": "13-Interieur",
                                    "categoryName": "Interieur",
                                    "categorySortId": 1,
                                    "componentIds": [
                                        "S-58U",
                                        "S-L3E",
                                        "S-H80"
                                    ],
                                    "subcategories": []
                                }
                            ],
                            "vehicleComponents": {
                                "S-58U": {
                                    "code": "58U",
                                    "codeType": "S",
                                    "componentSortId": 2,
                                    "componentType": "SPECIAL_EQUIPMENT",
                                    "description": "Der Innenhimmel ist je nach Polsterung in der Farbe Kristallgrau ausgeführt und ergänzt damit den stimmigen Gesamteindruck Ihres Interieurs.",
                                    "fixed": true,
                                    "hidden": false,
                                    "id": "S-58U",
                                    "name": "Innenhimmel Stoff kristallgrau",
                                    "priceInformation": {
                                        "currency": "EUR",
                                        "netPrice": 0,
                                        "price": 0
                                    },
                                    "pseudoCode": false,
                                    "selected": true,
                                    "standard": true
                                },
                                "S-H80": {
                                    "code": "H80",
                                    "codeType": "S",
                                    "componentSortId": 1,
                                    "componentType": "TRIMS",
                                    "description": "Das Zierelement verleiht Ihrem Innenraum eine individuelle Ausstrahlung. Es fügt sich harmonisch ein und setzt dabei spannende Kontraste. So verstärkt und betont es das Interieur-Design. Gleichzeitig ist das Zierelement ein jederzeit wahrnehmbares Qualitätsmerkmal eines sorgfältig verarbeiteten Premium-Produkts.",
                                    "fixed": true,
                                    "hidden": false,
                                    "id": "S-H80",
                                    "name": "Zierelemente Klavierlackoptik schwarz",
                                    "priceInformation": {
                                        "currency": "EUR",
                                        "netPrice": 0,
                                        "price": 0
                                    },
                                    "pseudoCode": false,
                                    "selected": true,
                                    "standard": true
                                },
                                "S-L3E": {
                                    "code": "L3E",
                                    "codeType": "S",
                                    "componentSortId": 0,
                                    "componentType": "SPECIAL_EQUIPMENT",
                                    "fixed": true,
                                    "hidden": false,
                                    "id": "S-L3E",
                                    "includedComponents": {
                                        "componentCategories": [
                                            {
                                                "cardinality": "ARBITRARY",
                                                "categoryId": "13-Interieur",
                                                "categoryName": "Interieur",
                                                "categorySortId": 1,
                                                "componentIds": [
                                                    "S-428"
                                                ],
                                                "subcategories": []
                                            }
                                        ],
                                        "vehicleComponents": {
                                            "S-428": {
                                                "code": "428",
                                                "codeType": "S",
                                                "componentSortId": 0,
                                                "componentType": "SPECIAL_EQUIPMENT",
                                                "fixed": true,
                                                "hidden": false,
                                                "id": "S-428",
                                                "name": "Lenkradschaltpaddles",
                                                "priceInformation": {
                                                    "currency": "EUR",
                                                    "netPrice": 0,
                                                    "price": 0
                                                },
                                                "pseudoCode": false,
                                                "selected": true,
                                                "standard": true
                                            }
                                        }
                                    },
                                    "name": "Multifunktions-Sportlenkrad in Leder",
                                    "priceInformation": {
                                        "currency": "EUR",
                                        "netPrice": 0,
                                        "price": 0
                                    },
                                    "pseudoCode": false,
                                    "selected": true,
                                    "standard": true
                                }
                            }
                        },
                        "name": "Serienausstattung Interieur",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/paint?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "040",
                        "codeType": "L",
                        "componentSortId": 2,
                        "componentType": "PAINTS",
                        "fixed": false,
                        "hidden": false,
                        "id": "L-040",
                        "name": "schwarz",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": false
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/upholstery?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "001",
                        "codeType": "P",
                        "componentSortId": 3,
                        "componentType": "UPHOLSTERIES",
                        "fixed": false,
                        "hidden": false,
                        "id": "P-001",
                        "name": "Stoff Aberdeen schwarz",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": false
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/059?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "059",
                        "codeType": "S",
                        "componentSortId": 4,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": false,
                        "hidden": false,
                        "id": "S-059",
                        "name": "Steuercode Änderungsjahr 2018",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": false
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/08U?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "08U",
                        "codeType": "S",
                        "componentSortId": 5,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Volle Kontrolle, immer und überall: Mit der Fahrzeug Setup App auf Ihrem Smartphone können Sie auch aus der Ferne Einstellungen ändern und Informationen abrufen. So bringen Sie zum Beispiel den Innenraum auf die richtige Temperatur, senden Adressen an Ihr Navigationssystem oder verriegeln die Türen.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-08U",
                        "name": "Vorrüstung für Fahrzeug Setup",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/09U?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "09U",
                        "codeType": "S",
                        "componentSortId": 6,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Immer an Ihrer Seite: Das Fahrzeug Monitoring verbindet Sie mit dem Auto und sichert Ihnen einen permanenten Informationsvorsprung. So wissen Sie jederzeit, wo sich Ihr Fahrzeug befindet und können sogar bestimmen, in welchem Gebiet es sich aufhalten darf. Auch über ungewollte Bewegungen werden Sie sofort informiert.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-09U",
                        "name": "Vorrüstung für Fahrzeug Monitoring",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/15U?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "15U",
                        "codeType": "S",
                        "componentSortId": 7,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-15U",
                        "name": "Vorrüstung für Mercedes-Benz Link",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/258?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "258",
                        "codeType": "S",
                        "componentSortId": 8,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Mit der Polsterung Leder veredeln Sie Ihr Fahrzeug mit einem hochwertigen Naturprodukt. Das Interieur wird für Sie noch mehr zum emotionalen Erlebnisraum. Denn Leder ist optisch sehr attraktiv und fühlt sich ebenso gut an. Dabei unterstreichen die Ziernähte diese Anmutung. Das Material ist auch strapazierfähig und pflegeleicht: ein Langzeit-Genuss.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-258",
                        "name": "Aktiver Brems-Assistent",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/345?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "345",
                        "codeType": "S",
                        "componentSortId": 9,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Der elektronisch gesteuerte Regensensor denkt für Sie mit: Das System erkennt automatisch, wenn die Scheibe nass wird und steuert entsprechend die Scheibenwischer-Intervall-Schaltung – sofern Sie diese vorab aktiviert haben. Damit haben Sie als Fahrer bei Regen eine Aufgabe weniger und genießen freie Sicht.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-345",
                        "name": "Scheibenwischer mit Regensensor ",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/351?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "351",
                        "codeType": "S",
                        "componentSortId": 10,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Das Mercedes-Benz Notrufsystem kann im Notfall für den entscheidenden Zeitvorteil sorgen. Über ein Kommunikationsmodul mit eigener SIM-Karte wird bei einem erkannten Unfall automatisch ein Notruf ausgelöst, der die Zeit bis zum Eintreffen von Rettungskräften verkürzen kann. Der Notruf kann auch manuell ausgelöst werden, um Hilfe zu organisieren.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-351",
                        "name": "Mercedes-Benz Notrufsystem",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/362?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "362",
                        "codeType": "S",
                        "componentSortId": 11,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Das Kommunikationsmodul (LTE) bietet Ihnen ein klares Plus an Komfort und Sicherheit. Es verknüpft das Fahrzeug mit dem Internet – damit Sie hilfreiche Dienste wie die Live Traffic Information von Mercedes me connect nutzen können. Zwei Mobilfunkantennen und eine LTE-fähige SIM-Karte sorgen für eine schnelle Verbindung.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-362",
                        "name": "Kommunikationsmodul (LTE) für die Nutzung von Mercedes me connect Diensten",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/421?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "421",
                        "codeType": "S",
                        "componentSortId": 12,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Überlassen Sie Ihrem Fahrzeug die Schaltarbeit: Die Gangwechsel des Automatikgetriebes 9G-TRONIC spüren Sie kaum. Neun Gänge ermöglichen niedrige Drehzahlen, das senkt Ihren Kraftstoffverbrauch und sorgt für ein angenehmeres Geräuschniveau.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-421",
                        "includedComponents": {
                            "componentCategories": [
                                {
                                    "cardinality": "ARBITRARY",
                                    "categoryId": "13-Interieur",
                                    "categoryName": "Interieur",
                                    "categorySortId": 1,
                                    "componentIds": [
                                        "S-B59"
                                    ],
                                    "subcategories": []
                                }
                            ],
                            "vehicleComponents": {
                                "S-440": {
                                    "code": "440",
                                    "codeType": "S",
                                    "componentSortId": 0,
                                    "componentType": "SPECIAL_EQUIPMENT",
                                    "description": "Fahren Sie entspannt und kraftstoffsparend gerade auf längeren Strecken. Wählen Sie dazu Ihr Wunschtempo vor und Ihr Fahrzeug übernimmt die Geschwindigkeitsregelung. Neben der Reisegeschwindigkeit unterstützt Sie der Limiter um eine Höchstgeschwindigkeit einzuhalten. Das steigert die Verkehrssicherheit und schützt Sie vor teuren Strafzetteln.",
                                    "fixed": true,
                                    "hidden": false,
                                    "id": "S-440",
                                    "name": "TEMPOMAT",
                                    "priceInformation": {
                                        "currency": "EUR",
                                        "netPrice": 0,
                                        "price": 0
                                    },
                                    "pseudoCode": false,
                                    "selected": true,
                                    "standard": true
                                },
                                "S-B59": {
                                    "code": "B59",
                                    "codeType": "S",
                                    "componentSortId": 1,
                                    "componentType": "SPECIAL_EQUIPMENT",
                                    "description": "DYNAMIC SELECT verändert das Fahrverhalten auf Knopfdruck. Nutzen Sie verschiedene Fahrprogramme, die beispielsweise die Charakteristik von Motor, Getriebe, Fahrwerk und Lenkung verändern. Egal ob dynamisch im Sport-Modus, ganz entspannt im Comfort-Programm oder besonders sparsam im Modus ECO – Sie bestimmen, was Ihnen gerade wichtig ist.",
                                    "fixed": true,
                                    "hidden": false,
                                    "id": "S-B59",
                                    "name": "DYNAMIC SELECT",
                                    "priceInformation": {
                                        "currency": "EUR",
                                        "netPrice": 0,
                                        "price": 0
                                    },
                                    "pseudoCode": false,
                                    "selected": true,
                                    "standard": true
                                }
                            }
                        },
                        "name": "9G-TRONIC",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/428?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "428",
                        "codeType": "S",
                        "componentSortId": 13,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-428",
                        "name": "Lenkradschaltpaddles",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/440?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "440",
                        "codeType": "S",
                        "componentSortId": 14,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Fahren Sie entspannt und kraftstoffsparend gerade auf längeren Strecken. Wählen Sie dazu Ihr Wunschtempo vor und Ihr Fahrzeug übernimmt die Geschwindigkeitsregelung. Neben der Reisegeschwindigkeit unterstützt Sie der Limiter um eine Höchstgeschwindigkeit einzuhalten. Das steigert die Verkehrssicherheit und schützt Sie vor teuren Strafzetteln.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-440",
                        "name": "TEMPOMAT",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/475?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "475",
                        "codeType": "S",
                        "componentSortId": 15,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Die permanente Überwachung des Reifendrucks erhöht die Fahrsicherheit und die Lebensdauer der Reifen. Der Reifendruck aller 4 Räder wird mit Hilfe von Sensoren erfasst und im Multifunktionsdisplay angezeigt.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-475",
                        "name": "Reifendruckkontrolle",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/485?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "485",
                        "codeType": "S",
                        "componentSortId": 16,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Das AGILITY CONTROL Fahrwerk mit selektivem Dämpfungssystem vereint ausgewogenen Fahrkomfort und hohe Fahrstabilität. Dank des passiven Dämpfungssystems genießen Sie auf jeder Straßenoberfläche ein souveränes Fahrerlebnis: Abrollverhalten, Dämpfungswirkung und Stabilisierung werden kontinuierlich automatisch an den aktuellen Untergrund angepasst.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-485",
                        "name": "AGILITY CONTROL Fahrwerk mit selektivem Dämpfungssystem",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/506?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "506",
                        "codeType": "S",
                        "componentSortId": 17,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Audio 20 GPS bietet Ihnen vielseitige Unterhaltung und ein umfangreiches Angebot von Infotainment-Funktionen. Verbinden Sie Ihr Smartphone bequem per Bluetooth mit dem Auto und nutzen Sie die perfekt eingebundenen Telefonie- und Musik-Funktionen auf einem elegant ins Innenraumdesign integrierten Display mit 17,8 cm (7'') Bildschirmdiagonale.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-506",
                        "name": "Audio 20 GPS",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/580?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "580",
                        "codeType": "S",
                        "componentSortId": 18,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Individuellen Klimakomfort auf den vorderen Plätzen bietet die Klimatisierungsautomatik THERMATIC mit 2 Klimazonen: Fahrer und Beifahrer können die Temperatur separat für ihre Seite einstellen. Diese wird dank der Klimatisierungsautomatik und dem feinfühligen Sensorsystem konstant gehalten – ganz ohne manuelles Nachregulieren.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-580",
                        "name": "Klimatisierungsautomatik THERMATIC",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/58U?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "58U",
                        "codeType": "S",
                        "componentSortId": 19,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Der Innenhimmel ist je nach Polsterung in der Farbe Kristallgrau ausgeführt und ergänzt damit den stimmigen Gesamteindruck Ihres Interieurs.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-58U",
                        "name": "Innenhimmel Stoff kristallgrau",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/620?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "620",
                        "codeType": "S",
                        "componentSortId": 20,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Hohe Lichtintensität und lange Lebensdauer bieten die Halogen-Scheinwerfer in Reflexionstechnik. Das Tagfahrlicht in LED-Technik ist in den Scheinwerfer integriert.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-620",
                        "name": "Halogenscheinwerfer inklusive integriertem LED-Tagfahrlicht",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/70B?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "70B",
                        "codeType": "S",
                        "componentSortId": 21,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Für Ihre Sicherheit bei einer Panne sollten Sie außerhalb des Fahrzeugs unbedingt eine Warnweste tragen. Damit andere Verkehrsteilnehmer Sie auch in der Dunkelheit oder bei schlechten Sichtverhältnissen frühzeitiger erkennen können. Deshalb sind die Warnwesten von Mercedes-Benz in Gelb gehalten und haben je zwei auffällige Leucht-Querstreifen.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-70B",
                        "name": "Warnweste für Fahrer",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/809?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "809",
                        "codeType": "S",
                        "componentSortId": 22,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-809",
                        "name": "Modelljahr 2018",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/893?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "893",
                        "codeType": "S",
                        "componentSortId": 23,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Starten Sie Ihr Fahrzeug einfach auf Knopfdruck – ganz ohne den Schlüssel ins Zündschloss zu stecken. Dank der serienmäßigen KEYLESS-GO Start-Funktion reicht es aus, wenn Sie Ihren Schlüssel im Innenraum bei sich tragen. Das spart Zeit und Sie können Ihre Fahrt sofort beginnen.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-893",
                        "name": "KEYLESS-GO Start-Funktion",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/916?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "916",
                        "codeType": "S",
                        "componentSortId": 24,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Mit dem auf 66 Liter vergrößerten Kraftstoffbehälter müssen Sie deutlich seltener eine Tankstelle ansteuern. Der Kraftstoffbehälter mit größerem Volumen gibt Ihnen so gerade auf langen Fahrten das Gefühl zusätzlicher Freiheit.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-916",
                        "name": "Kraftstoffbehälter mit größerem Inhalt",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/927?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "927",
                        "codeType": "S",
                        "componentSortId": 25,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-927",
                        "name": "Abgasnorm EU6",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/969?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "969",
                        "codeType": "S",
                        "componentSortId": 26,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-969",
                        "name": "COC-Papier EU6 - mit Zulassungsbesch. Teil II",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/998?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "998",
                        "codeType": "S",
                        "componentSortId": 27,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-998",
                        "name": "Steuer-Code Umstellung WLTP mit RDE",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/B16?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "B16",
                        "codeType": "S",
                        "componentSortId": 28,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Mit den zwei sichtbaren, fest im Stoßfänger integrierten Endrohrblenden schärfen Sie den sportlichen Auftritt Ihres Fahrzeugs. So unterstreicht die Abgasanlage 2-flutig die Leistungsstärke Ihres Mercedes-Benz.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-B16",
                        "name": "Abgasanlage 2-flutig",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/B59?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "B59",
                        "codeType": "S",
                        "componentSortId": 29,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "DYNAMIC SELECT verändert das Fahrverhalten auf Knopfdruck. Nutzen Sie verschiedene Fahrprogramme, die beispielsweise die Charakteristik von Motor, Getriebe, Fahrwerk und Lenkung verändern. Egal ob dynamisch im Sport-Modus, ganz entspannt im Comfort-Programm oder besonders sparsam im Modus ECO – Sie bestimmen, was Ihnen gerade wichtig ist.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-B59",
                        "name": "DYNAMIC SELECT",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/trim?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "H80",
                        "codeType": "S",
                        "componentSortId": 30,
                        "componentType": "TRIMS",
                        "description": "Das Zierelement verleiht Ihrem Innenraum eine individuelle Ausstrahlung. Es fügt sich harmonisch ein und setzt dabei spannende Kontraste. So verstärkt und betont es das Interieur-Design. Gleichzeitig ist das Zierelement ein jederzeit wahrnehmbares Qualitätsmerkmal eines sorgfältig verarbeiteten Premium-Produkts.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-H80",
                        "name": "Zierelemente Klavierlackoptik schwarz",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/L3E?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "L3E",
                        "codeType": "S",
                        "componentSortId": 31,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-L3E",
                        "includedComponents": {
                            "componentCategories": [
                                {
                                    "cardinality": "ARBITRARY",
                                    "categoryId": "13-Interieur",
                                    "categoryName": "Interieur",
                                    "categorySortId": 1,
                                    "componentIds": [
                                        "S-428"
                                    ],
                                    "subcategories": []
                                }
                            ],
                            "vehicleComponents": {
                                "S-428": {
                                    "code": "428",
                                    "codeType": "S",
                                    "componentSortId": 0,
                                    "componentType": "SPECIAL_EQUIPMENT",
                                    "fixed": true,
                                    "hidden": false,
                                    "id": "S-428",
                                    "name": "Lenkradschaltpaddles",
                                    "priceInformation": {
                                        "currency": "EUR",
                                        "netPrice": 0,
                                        "price": 0
                                    },
                                    "pseudoCode": false,
                                    "selected": true,
                                    "standard": true
                                }
                            }
                        },
                        "name": "Multifunktions-Sportlenkrad in Leder",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/R01?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "R01",
                        "codeType": "S",
                        "componentSortId": 32,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-R01",
                        "name": "Sommerreifen",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/rim?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "R43",
                        "codeType": "S",
                        "componentSortId": 33,
                        "componentType": "WHEELS",
                        "description": "43,2 cm (17'') Leichtmetallräder im 5-Doppelspeichen-Design vanadiumsilber lackiert 225/50 R 17 auf 7 J x 17 ET 48,5.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-R43",
                        "name": "LMR 4fach 5-Doppelspeichen-Design, 43,2 cm (17'')",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/U10?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "U10",
                        "codeType": "S",
                        "componentSortId": 34,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "description": "Das System deaktiviert den Beifahrerairbag automatisch, sobald es einen rückwärtsgerichteten Kindersitz erkennt oder registriert, dass der Beifahrersitz unbelegt ist. Ein Transponder im Kindersitz ist nicht notwendig. Wird erkannt, dass ein Erwachsener Platz nimmt, wird der Airbag automatisch aktiviert und das Risiko von Fehlbedienungen verringert.",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-U10",
                        "name": "Automatische Beifahrerairbag-Abschaltung",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    },
                    {
                        "_links": {
                            "image": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/V56?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec"
                        },
                        "code": "V56",
                        "codeType": "S",
                        "componentSortId": 35,
                        "componentType": "SPECIAL_EQUIPMENT",
                        "fixed": true,
                        "hidden": false,
                        "id": "S-V56",
                        "name": "Speed- + LoadIndex 94W",
                        "priceInformation": {
                            "currency": "EUR",
                            "netPrice": 0,
                            "price": 0
                        },
                        "pseudoCode": false,
                        "selected": true,
                        "standard": true
                    }
                ]
            },
            "picturesUrl": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/vehicle?apikey=6c6b3950-29b6-4678-9497-4aa10409f9ec",
            "type": "FETCH_MODEL_CONFIGURATION_SUCCESS"
        }
    ];


export const bodyListExample = [
    {
        "bodyId": "13",
        "bodyName": "Sports Tourer",
        "_links": {
            "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/13?apikey=${API_KEY}`,
            "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=13&apikey=${API_KEY}`
        }
    },
    {
        "bodyId": "15",
        "bodyName": "Shooting Brake",
        "_links": {
            "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/15?apikey=${API_KEY}`,
            "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=15&apikey=${API_KEY}`
        }
    }];

export const modelListExample = [
    {
        "modelId": "13",
        "name": "Sports Tourer",
        "_links": {
            "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/13?apikey=${API_KEY}`,
            "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=13&apikey=${API_KEY}`
        }
    },
    {
        "modelId": "15",
        "name": "Shooting Brake",
        "_links": {
            "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/15?apikey=${API_KEY}`,
            "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=15&apikey=${API_KEY}`
        }
    }];

export const interExamplePhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BI1,PZM";

export const outherExamplePhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BE020,PZM";


export const modelConfigurationHeader = {
    "marketId": "de_DE",
    "modelId": "205066_000",
    "configurationId": "I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56",
    "initialPrice": {
        "price": 53776.1,
        "netPrice": 45190,
        "currency": "EUR",
        "taxes": [
            {
                "id": "VAT",
                "amount": 8586.1,
                "baseAmount": 45190,
                "charge": 0,
                "rate": 19
            }
        ]
    },
    "configurationPrice": {
        "price": 53776.1,
        "netPrice": 45190,
        "currency": "EUR",
        "taxes": [
            {
                "id": "VAT",
                "amount": 8586.1,
                "baseAmount": 45190,
                "charge": 0,
                "rate": 19
            }
        ]
    },
    "modelYear": "809",
    "changeYear": "059",
    "vehicleComponents": [
        {
            "id": "I-P15",
            "componentSortId": 0,
            "name": "AVANTGARDE Exterieur",
            "description": "Mit dem AVANTGARDE Exterieur unterstreichen Sie die Individualität und Sportlichkeit Ihres Fahrzeugs – und zeigen, dass Ihnen zeitgemäße Hochwertigkeit am Herzen liegt. Das Zusammenspiel der Design-Elemente ergibt ein außergewöhnlich ausdrucksstarkes Fahrzeug. Das tiefergelegte Fahrwerk bietet die ideale Balance aus Dynamik, Komfort und Sicherheit.",
            "code": "P15",
            "codeType": "I",
            "componentType": "LINES",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false
        },
        {
            "id": "I-P75",
            "componentSortId": 1,
            "name": "Serienausstattung Interieur",
            "description": "Mit dem Serien-Interieur setzen Sie auf zeitlose Attraktivität. Fließende Formen, dunkle Eleganz und sanfte Kontraste ergeben einen puristischen Gesamteindruck und interpretieren modernen Luxus gänzlich neu. Die teilelektrischen Seriensitze bieten hervorragenden Sitzkomfort – auch auf langen Strecken.",
            "code": "P75",
            "codeType": "I",
            "componentType": "LINES",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "includedComponents": {
                "vehicleComponents": {
                    "S-L3E": {
                        "id": "S-L3E",
                        "componentSortId": 0,
                        "name": "Multifunktions-Sportlenkrad in Leder",
                        "code": "L3E",
                        "codeType": "S",
                        "componentType": "SPECIAL_EQUIPMENT",
                        "priceInformation": {
                            "price": 0,
                            "netPrice": 0,
                            "currency": "EUR"
                        },
                        "standard": true,
                        "selected": true,
                        "fixed": true,
                        "hidden": false,
                        "pseudoCode": false,
                        "includedComponents": {
                            "vehicleComponents": {
                                "S-428": {
                                    "id": "S-428",
                                    "componentSortId": 0,
                                    "name": "Lenkradschaltpaddles",
                                    "code": "428",
                                    "codeType": "S",
                                    "componentType": "SPECIAL_EQUIPMENT",
                                    "priceInformation": {
                                        "price": 0,
                                        "netPrice": 0,
                                        "currency": "EUR"
                                    },
                                    "standard": true,
                                    "selected": true,
                                    "fixed": true,
                                    "hidden": false,
                                    "pseudoCode": false
                                }
                            },
                            "componentCategories": [
                                {
                                    "categoryId": "13-Interieur",
                                    "categorySortId": 1,
                                    "categoryName": "Interieur",
                                    "cardinality": "ARBITRARY",
                                    "subcategories": [],
                                    "componentIds": [
                                        "S-428"
                                    ]
                                }
                            ]
                        }
                    },
                    "S-H80": {
                        "id": "S-H80",
                        "componentSortId": 1,
                        "name": "Zierelemente Klavierlackoptik schwarz",
                        "description": "Das Zierelement verleiht Ihrem Innenraum eine individuelle Ausstrahlung. Es fügt sich harmonisch ein und setzt dabei spannende Kontraste. So verstärkt und betont es das Interieur-Design. Gleichzeitig ist das Zierelement ein jederzeit wahrnehmbares Qualitätsmerkmal eines sorgfältig verarbeiteten Premium-Produkts.",
                        "code": "H80",
                        "codeType": "S",
                        "componentType": "TRIMS",
                        "priceInformation": {
                            "price": 0,
                            "netPrice": 0,
                            "currency": "EUR"
                        },
                        "standard": true,
                        "selected": true,
                        "fixed": true,
                        "hidden": false,
                        "pseudoCode": false
                    },
                    "S-58U": {
                        "id": "S-58U",
                        "componentSortId": 2,
                        "name": "Innenhimmel Stoff kristallgrau",
                        "description": "Der Innenhimmel ist je nach Polsterung in der Farbe Kristallgrau ausgeführt und ergänzt damit den stimmigen Gesamteindruck Ihres Interieurs.",
                        "code": "58U",
                        "codeType": "S",
                        "componentType": "SPECIAL_EQUIPMENT",
                        "priceInformation": {
                            "price": 0,
                            "netPrice": 0,
                            "currency": "EUR"
                        },
                        "standard": true,
                        "selected": true,
                        "fixed": true,
                        "hidden": false,
                        "pseudoCode": false
                    }
                },
                "componentCategories": [
                    {
                        "categoryId": "13-Interieur",
                        "categorySortId": 1,
                        "categoryName": "Interieur",
                        "cardinality": "ARBITRARY",
                        "subcategories": [],
                        "componentIds": [
                            "S-58U",
                            "S-L3E",
                            "S-H80"
                        ]
                    }
                ]
            }
        },
        {
            "id": "L-040",
            "componentSortId": 2,
            "name": "schwarz",
            "code": "040",
            "codeType": "L",
            "componentType": "PAINTS",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": false,
            "selected": true,
            "fixed": false,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/paint?apikey=${API_KEY}`
            }
        },
        {
            "id": "P-001",
            "componentSortId": 3,
            "name": "Stoff Aberdeen schwarz",
            "code": "001",
            "codeType": "P",
            "componentType": "UPHOLSTERIES",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": false,
            "selected": true,
            "fixed": false,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/upholstery?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-059",
            "componentSortId": 4,
            "name": "Steuercode Änderungsjahr 2018",
            "code": "059",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": false,
            "selected": true,
            "fixed": false,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/059?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-08U",
            "componentSortId": 5,
            "name": "Vorrüstung für Fahrzeug Setup",
            "description": "Volle Kontrolle, immer und überall: Mit der Fahrzeug Setup App auf Ihrem Smartphone können Sie auch aus der Ferne Einstellungen ändern und Informationen abrufen. So bringen Sie zum Beispiel den Innenraum auf die richtige Temperatur, senden Adressen an Ihr Navigationssystem oder verriegeln die Türen.",
            "code": "08U",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/08U?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-09U",
            "componentSortId": 6,
            "name": "Vorrüstung für Fahrzeug Monitoring",
            "description": "Immer an Ihrer Seite: Das Fahrzeug Monitoring verbindet Sie mit dem Auto und sichert Ihnen einen permanenten Informationsvorsprung. So wissen Sie jederzeit, wo sich Ihr Fahrzeug befindet und können sogar bestimmen, in welchem Gebiet es sich aufhalten darf. Auch über ungewollte Bewegungen werden Sie sofort informiert.",
            "code": "09U",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/09U?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-15U",
            "componentSortId": 7,
            "name": "Vorrüstung für Mercedes-Benz Link",
            "code": "15U",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/15U?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-258",
            "componentSortId": 8,
            "name": "Aktiver Brems-Assistent",
            "description": "Mit der Polsterung Leder veredeln Sie Ihr Fahrzeug mit einem hochwertigen Naturprodukt. Das Interieur wird für Sie noch mehr zum emotionalen Erlebnisraum. Denn Leder ist optisch sehr attraktiv und fühlt sich ebenso gut an. Dabei unterstreichen die Ziernähte diese Anmutung. Das Material ist auch strapazierfähig und pflegeleicht: ein Langzeit-Genuss.",
            "code": "258",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/258?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-345",
            "componentSortId": 9,
            "name": "Scheibenwischer mit Regensensor ",
            "description": "Der elektronisch gesteuerte Regensensor denkt für Sie mit: Das System erkennt automatisch, wenn die Scheibe nass wird und steuert entsprechend die Scheibenwischer-Intervall-Schaltung – sofern Sie diese vorab aktiviert haben. Damit haben Sie als Fahrer bei Regen eine Aufgabe weniger und genießen freie Sicht.",
            "code": "345",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/345?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-351",
            "componentSortId": 10,
            "name": "Mercedes-Benz Notrufsystem",
            "description": "Das Mercedes-Benz Notrufsystem kann im Notfall für den entscheidenden Zeitvorteil sorgen. Über ein Kommunikationsmodul mit eigener SIM-Karte wird bei einem erkannten Unfall automatisch ein Notruf ausgelöst, der die Zeit bis zum Eintreffen von Rettungskräften verkürzen kann. Der Notruf kann auch manuell ausgelöst werden, um Hilfe zu organisieren.",
            "code": "351",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/351?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-362",
            "componentSortId": 11,
            "name": "Kommunikationsmodul (LTE) für die Nutzung von Mercedes me connect Diensten",
            "description": "Das Kommunikationsmodul (LTE) bietet Ihnen ein klares Plus an Komfort und Sicherheit. Es verknüpft das Fahrzeug mit dem Internet – damit Sie hilfreiche Dienste wie die Live Traffic Information von Mercedes me connect nutzen können. Zwei Mobilfunkantennen und eine LTE-fähige SIM-Karte sorgen für eine schnelle Verbindung.",
            "code": "362",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/362?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-421",
            "componentSortId": 12,
            "name": "9G-TRONIC",
            "description": "Überlassen Sie Ihrem Fahrzeug die Schaltarbeit: Die Gangwechsel des Automatikgetriebes 9G-TRONIC spüren Sie kaum. Neun Gänge ermöglichen niedrige Drehzahlen, das senkt Ihren Kraftstoffverbrauch und sorgt für ein angenehmeres Geräuschniveau.",
            "code": "421",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "includedComponents": {
                "vehicleComponents": {
                    "S-440": {
                        "id": "S-440",
                        "componentSortId": 0,
                        "name": "TEMPOMAT",
                        "description": "Fahren Sie entspannt und kraftstoffsparend gerade auf längeren Strecken. Wählen Sie dazu Ihr Wunschtempo vor und Ihr Fahrzeug übernimmt die Geschwindigkeitsregelung. Neben der Reisegeschwindigkeit unterstützt Sie der Limiter um eine Höchstgeschwindigkeit einzuhalten. Das steigert die Verkehrssicherheit und schützt Sie vor teuren Strafzetteln.",
                        "code": "440",
                        "codeType": "S",
                        "componentType": "SPECIAL_EQUIPMENT",
                        "priceInformation": {
                            "price": 0,
                            "netPrice": 0,
                            "currency": "EUR"
                        },
                        "standard": true,
                        "selected": true,
                        "fixed": true,
                        "hidden": false,
                        "pseudoCode": false
                    },
                    "S-B59": {
                        "id": "S-B59",
                        "componentSortId": 1,
                        "name": "DYNAMIC SELECT",
                        "description": "DYNAMIC SELECT verändert das Fahrverhalten auf Knopfdruck. Nutzen Sie verschiedene Fahrprogramme, die beispielsweise die Charakteristik von Motor, Getriebe, Fahrwerk und Lenkung verändern. Egal ob dynamisch im Sport-Modus, ganz entspannt im Comfort-Programm oder besonders sparsam im Modus ECO – Sie bestimmen, was Ihnen gerade wichtig ist.",
                        "code": "B59",
                        "codeType": "S",
                        "componentType": "SPECIAL_EQUIPMENT",
                        "priceInformation": {
                            "price": 0,
                            "netPrice": 0,
                            "currency": "EUR"
                        },
                        "standard": true,
                        "selected": true,
                        "fixed": true,
                        "hidden": false,
                        "pseudoCode": false
                    }
                },
                "componentCategories": [
                    {
                        "categoryId": "13-Interieur",
                        "categorySortId": 1,
                        "categoryName": "Interieur",
                        "cardinality": "ARBITRARY",
                        "subcategories": [],
                        "componentIds": [
                            "S-B59"
                        ]
                    }
                ]
            },
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/421?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-428",
            "componentSortId": 13,
            "name": "Lenkradschaltpaddles",
            "code": "428",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/428?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-440",
            "componentSortId": 14,
            "name": "TEMPOMAT",
            "description": "Fahren Sie entspannt und kraftstoffsparend gerade auf längeren Strecken. Wählen Sie dazu Ihr Wunschtempo vor und Ihr Fahrzeug übernimmt die Geschwindigkeitsregelung. Neben der Reisegeschwindigkeit unterstützt Sie der Limiter um eine Höchstgeschwindigkeit einzuhalten. Das steigert die Verkehrssicherheit und schützt Sie vor teuren Strafzetteln.",
            "code": "440",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/440?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-475",
            "componentSortId": 15,
            "name": "Reifendruckkontrolle",
            "description": "Die permanente Überwachung des Reifendrucks erhöht die Fahrsicherheit und die Lebensdauer der Reifen. Der Reifendruck aller 4 Räder wird mit Hilfe von Sensoren erfasst und im Multifunktionsdisplay angezeigt.",
            "code": "475",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/475?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-485",
            "componentSortId": 16,
            "name": "AGILITY CONTROL Fahrwerk mit selektivem Dämpfungssystem",
            "description": "Das AGILITY CONTROL Fahrwerk mit selektivem Dämpfungssystem vereint ausgewogenen Fahrkomfort und hohe Fahrstabilität. Dank des passiven Dämpfungssystems genießen Sie auf jeder Straßenoberfläche ein souveränes Fahrerlebnis: Abrollverhalten, Dämpfungswirkung und Stabilisierung werden kontinuierlich automatisch an den aktuellen Untergrund angepasst.",
            "code": "485",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/485?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-506",
            "componentSortId": 17,
            "name": "Audio 20 GPS",
            "description": "Audio 20 GPS bietet Ihnen vielseitige Unterhaltung und ein umfangreiches Angebot von Infotainment-Funktionen. Verbinden Sie Ihr Smartphone bequem per Bluetooth mit dem Auto und nutzen Sie die perfekt eingebundenen Telefonie- und Musik-Funktionen auf einem elegant ins Innenraumdesign integrierten Display mit 17,8 cm (7'') Bildschirmdiagonale.",
            "code": "506",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/506?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-580",
            "componentSortId": 18,
            "name": "Klimatisierungsautomatik THERMATIC",
            "description": "Individuellen Klimakomfort auf den vorderen Plätzen bietet die Klimatisierungsautomatik THERMATIC mit 2 Klimazonen: Fahrer und Beifahrer können die Temperatur separat für ihre Seite einstellen. Diese wird dank der Klimatisierungsautomatik und dem feinfühligen Sensorsystem konstant gehalten – ganz ohne manuelles Nachregulieren.",
            "code": "580",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/580?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-58U",
            "componentSortId": 19,
            "name": "Innenhimmel Stoff kristallgrau",
            "description": "Der Innenhimmel ist je nach Polsterung in der Farbe Kristallgrau ausgeführt und ergänzt damit den stimmigen Gesamteindruck Ihres Interieurs.",
            "code": "58U",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/58U?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-620",
            "componentSortId": 20,
            "name": "Halogenscheinwerfer inklusive integriertem LED-Tagfahrlicht",
            "description": "Hohe Lichtintensität und lange Lebensdauer bieten die Halogen-Scheinwerfer in Reflexionstechnik. Das Tagfahrlicht in LED-Technik ist in den Scheinwerfer integriert.",
            "code": "620",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/620?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-70B",
            "componentSortId": 21,
            "name": "Warnweste für Fahrer",
            "description": "Für Ihre Sicherheit bei einer Panne sollten Sie außerhalb des Fahrzeugs unbedingt eine Warnweste tragen. Damit andere Verkehrsteilnehmer Sie auch in der Dunkelheit oder bei schlechten Sichtverhältnissen frühzeitiger erkennen können. Deshalb sind die Warnwesten von Mercedes-Benz in Gelb gehalten und haben je zwei auffällige Leucht-Querstreifen.",
            "code": "70B",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/70B?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-809",
            "componentSortId": 22,
            "name": "Modelljahr 2018",
            "code": "809",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/809?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-893",
            "componentSortId": 23,
            "name": "KEYLESS-GO Start-Funktion",
            "description": "Starten Sie Ihr Fahrzeug einfach auf Knopfdruck – ganz ohne den Schlüssel ins Zündschloss zu stecken. Dank der serienmäßigen KEYLESS-GO Start-Funktion reicht es aus, wenn Sie Ihren Schlüssel im Innenraum bei sich tragen. Das spart Zeit und Sie können Ihre Fahrt sofort beginnen.",
            "code": "893",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/893?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-916",
            "componentSortId": 24,
            "name": "Kraftstoffbehälter mit größerem Inhalt",
            "description": "Mit dem auf 66 Liter vergrößerten Kraftstoffbehälter müssen Sie deutlich seltener eine Tankstelle ansteuern. Der Kraftstoffbehälter mit größerem Volumen gibt Ihnen so gerade auf langen Fahrten das Gefühl zusätzlicher Freiheit.",
            "code": "916",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/916?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-927",
            "componentSortId": 25,
            "name": "Abgasnorm EU6",
            "code": "927",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/927?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-969",
            "componentSortId": 26,
            "name": "COC-Papier EU6 - mit Zulassungsbesch. Teil II",
            "code": "969",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/969?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-998",
            "componentSortId": 27,
            "name": "Steuer-Code Umstellung WLTP mit RDE",
            "code": "998",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/998?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-B16",
            "componentSortId": 28,
            "name": "Abgasanlage 2-flutig",
            "description": "Mit den zwei sichtbaren, fest im Stoßfänger integrierten Endrohrblenden schärfen Sie den sportlichen Auftritt Ihres Fahrzeugs. So unterstreicht die Abgasanlage 2-flutig die Leistungsstärke Ihres Mercedes-Benz.",
            "code": "B16",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/B16?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-B59",
            "componentSortId": 29,
            "name": "DYNAMIC SELECT",
            "description": "DYNAMIC SELECT verändert das Fahrverhalten auf Knopfdruck. Nutzen Sie verschiedene Fahrprogramme, die beispielsweise die Charakteristik von Motor, Getriebe, Fahrwerk und Lenkung verändern. Egal ob dynamisch im Sport-Modus, ganz entspannt im Comfort-Programm oder besonders sparsam im Modus ECO – Sie bestimmen, was Ihnen gerade wichtig ist.",
            "code": "B59",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/B59?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-H80",
            "componentSortId": 30,
            "name": "Zierelemente Klavierlackoptik schwarz",
            "description": "Das Zierelement verleiht Ihrem Innenraum eine individuelle Ausstrahlung. Es fügt sich harmonisch ein und setzt dabei spannende Kontraste. So verstärkt und betont es das Interieur-Design. Gleichzeitig ist das Zierelement ein jederzeit wahrnehmbares Qualitätsmerkmal eines sorgfältig verarbeiteten Premium-Produkts.",
            "code": "H80",
            "codeType": "S",
            "componentType": "TRIMS",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/trim?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-L3E",
            "componentSortId": 31,
            "name": "Multifunktions-Sportlenkrad in Leder",
            "code": "L3E",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "includedComponents": {
                "vehicleComponents": {
                    "S-428": {
                        "id": "S-428",
                        "componentSortId": 0,
                        "name": "Lenkradschaltpaddles",
                        "code": "428",
                        "codeType": "S",
                        "componentType": "SPECIAL_EQUIPMENT",
                        "priceInformation": {
                            "price": 0,
                            "netPrice": 0,
                            "currency": "EUR"
                        },
                        "standard": true,
                        "selected": true,
                        "fixed": true,
                        "hidden": false,
                        "pseudoCode": false
                    }
                },
                "componentCategories": [
                    {
                        "categoryId": "13-Interieur",
                        "categorySortId": 1,
                        "categoryName": "Interieur",
                        "cardinality": "ARBITRARY",
                        "subcategories": [],
                        "componentIds": [
                            "S-428"
                        ]
                    }
                ]
            },
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/L3E?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-R01",
            "componentSortId": 32,
            "name": "Sommerreifen",
            "code": "R01",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/R01?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-R43",
            "componentSortId": 33,
            "name": "LMR 4fach 5-Doppelspeichen-Design, 43,2 cm (17'')",
            "description": "43,2 cm (17'') Leichtmetallräder im 5-Doppelspeichen-Design vanadiumsilber lackiert 225/50 R 17 auf 7 J x 17 ET 48,5.",
            "code": "R43",
            "codeType": "S",
            "componentType": "WHEELS",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/rim?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-U10",
            "componentSortId": 34,
            "name": "Automatische Beifahrerairbag-Abschaltung",
            "description": "Das System deaktiviert den Beifahrerairbag automatisch, sobald es einen rückwärtsgerichteten Kindersitz erkennt oder registriert, dass der Beifahrersitz unbelegt ist. Ein Transponder im Kindersitz ist nicht notwendig. Wird erkannt, dass ein Erwachsener Platz nimmt, wird der Airbag automatisch aktiviert und das Risiko von Fehlbedienungen verringert.",
            "code": "U10",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/U10?apikey=${API_KEY}`
            }
        },
        {
            "id": "S-V56",
            "componentSortId": 35,
            "name": "Speed- + LoadIndex 94W",
            "code": "V56",
            "codeType": "S",
            "componentType": "SPECIAL_EQUIPMENT",
            "priceInformation": {
                "price": 0,
                "netPrice": 0,
                "currency": "EUR"
            },
            "standard": true,
            "selected": true,
            "fixed": true,
            "hidden": false,
            "pseudoCode": false,
            "_links": {
                "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/components/equipments/V56?apikey=${API_KEY}`
            }
        }
    ],
    "technicalInformation": {
        "engine": {
            "fuelType": "SUPER",
            "alternativeFuelType": "UNDEFINED",
            "engineConcept": "MONO_REGULAR",
            "driveConcept": "COMBUSTOR",
            "fuelEconomy": {
                "fuelConsumptionCityMin": {
                    "value": 10.8,
                    "unit": "l/100 km"
                },
                "fuelConsumptionCityMax": {
                    "value": 11.2,
                    "unit": "l/100 km"
                },
                "fuelConsumptionOverlandMin": {
                    "value": 6,
                    "unit": "l/100 km"
                },
                "fuelConsumptionOverlandMax": {
                    "value": 6.4,
                    "unit": "l/100 km"
                },
                "fuelConsumptionCombinedMin": {
                    "value": 7.8,
                    "unit": "l/100 km"
                },
                "fuelConsumptionCombinedMax": {
                    "value": 8.2,
                    "unit": "l/100 km"
                },
                "emissionCO2Max": {
                    "value": 187,
                    "unit": "g/km"
                }
            },
            "powerHp": {
                "value": 333,
                "unit": "PS"
            },
            "powerKw": {
                "value": 245,
                "unit": "kW"
            },
            "cylinder": "6",
            "capacity": {
                "value": 2996,
                "unit": "cm³"
            },
            "emissionStandard": "Euro 6d-TEMP",
            "engineTorque": {
                "value": 480,
                "unit": "Nm"
            }
        },
        "dimensions": {
            "length": {
                "value": 4686,
                "unit": "mm"
            },
            "width": {
                "value": 2020,
                "unit": "mm"
            },
            "height": {
                "value": 1452,
                "unit": "mm"
            }
        },
        "energyEfficiencyClass": "D",
        "transmission": {
            "name": "9G-TRONIC",
            "code": "421",
            "codeType": "S"
        },
        "acceleration": {
            "value": 4.9,
            "unit": "s"
        },
        "topSpeed": {
            "value": 250,
            "unit": "km/h"
        },
        "doors": 4,
        "seats": 5,
        "actualMass": {
            "value": 1677,
            "unit": "kg"
        },
        "payload": {
            "value": 565,
            "unit": "kg"
        },
        "permanentRoofLoad": {
            "value": 75,
            "unit": "kg"
        },
        "kerbWeight": {
            "value": 1645,
            "unit": "kg"
        },
        "dragCoefficient": "0,3",
        "nedc": {
            "consumption": {
                "city": {
                    "primaryGear": {
                        "individual": {
                            "value": 11,
                            "unit": "l/100km"
                        }
                    }
                },
                "country": {
                    "primaryGear": {
                        "individual": {
                            "value": 6.2,
                            "unit": "l/100km"
                        }
                    }
                },
                "combined": {
                    "primaryGear": {
                        "individual": {
                            "value": 8,
                            "unit": "l/100km"
                        }
                    }
                }
            },
            "emission": {
                "city": {
                    "primaryGear": {
                        "individual": {
                            "value": 251,
                            "unit": "g/km"
                        }
                    }
                },
                "country": {
                    "primaryGear": {
                        "individual": {
                            "value": 142,
                            "unit": "g/km"
                        }
                    }
                },
                "combined": {
                    "primaryGear": {
                        "individual": {
                            "value": 182,
                            "unit": "g/km"
                        }
                    }
                }
            },
            "weight": {
                "individual": {
                    "value": 1700,
                    "unit": "‰"
                }
            }
        },
        "wltp": {
            "consumption": {
                "low": {
                    "primaryGear": {
                        "individual": {
                            "value": 13.2,
                            "unit": "l/100km"
                        }
                    }
                },
                "medium": {
                    "primaryGear": {
                        "individual": {
                            "value": 8.9,
                            "unit": "l/100km"
                        }
                    }
                },
                "high": {
                    "primaryGear": {
                        "individual": {
                            "value": 7.3,
                            "unit": "l/100km"
                        }
                    }
                },
                "extraHigh": {
                    "primaryGear": {
                        "individual": {
                            "value": 7.7,
                            "unit": "l/100km"
                        }
                    }
                },
                "total": {
                    "primaryGear": {
                        "individual": {
                            "value": 8.5,
                            "unit": "l/100km"
                        }
                    }
                }
            },
            "emission": {
                "low": {
                    "primaryGear": {
                        "individual": {
                            "value": 300,
                            "unit": "g/km"
                        }
                    }
                },
                "medium": {
                    "primaryGear": {
                        "individual": {
                            "value": 201,
                            "unit": "g/km"
                        }
                    }
                },
                "high": {
                    "primaryGear": {
                        "individual": {
                            "value": 165,
                            "unit": "g/km"
                        }
                    }
                },
                "extraHigh": {
                    "primaryGear": {
                        "individual": {
                            "value": 174,
                            "unit": "g/km"
                        }
                    }
                },
                "total": {
                    "primaryGear": {
                        "individual": {
                            "value": 193,
                            "unit": "g/km"
                        }
                    }
                }
            },
            "certification": {
                "hydrocarbons": {
                    "individual": {
                        "value": 249.1,
                        "unit": "mg CO/km"
                    }
                },
                "nitricOxide": {
                    "individual": {
                        "value": 20.7,
                        "unit": "mg/km"
                    }
                },
                "nonMethaneHydrocarbons": {
                    "individual": {
                        "value": 21.5,
                        "unit": "mg/km"
                    }
                },
                "particulateEmission": {
                    "individual": {
                        "value": 0.19,
                        "unit": "mg/km"
                    }
                },
                "particulateNumber": {
                    "individual": {
                        "value": 1.04,
                        "unit": "km^-1"
                    }
                },
                "totalHydrocarbonsNitricOxide": {
                    "individual": {
                        "value": 0,
                        "unit": "mg/km"
                    }
                },
                "totalHydrocarbons": {
                    "individual": {
                        "value": 25.3,
                        "unit": "mg/km"
                    }
                },
                "deviationFactor": {
                    "individual": {
                        "value": 0,
                        "unit": ""
                    }
                },
                "verificationFactor": {
                    "individual": {
                        "value": 0,
                        "unit": ""
                    }
                }
            }
        }
    },
    "wltpConfiguration": true,
    "_links": {
        "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/initial?apikey=${API_KEY}`,
        "image": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/images/vehicle?apikey=${API_KEY}`,
        "selectables": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/I-P15-P75_L-040_P-001_S-059-08U-09U-15U-258-345-351-362-421-428-440-475-485-506-580-58U-620-70B-809-893-916-927-969-998-B16-B59-H80-L3E-R01-R43-U10-V56/selectables?apikey=${API_KEY}`
    }
};

export const carModelImages = {
    "vehicle": {
        "INT1": {
            "url": "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BI1,PZM"
        },
        "EXT020": {
            "url": "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BE020,PZM"
        }
    }
};
