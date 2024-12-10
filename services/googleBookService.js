export const googleBookService = {
    query,
    importSearchObject,
}

function query(txt){
    return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${txt}`)
        .then(res=>{
            return res.json()
        })

}


export const testObject = 
{
    "kind": "books#volumes",
    "totalItems": 576,
    "items": [
        {
            "kind": "books#volume",
            "id": "8mfLDwAAQBAJ",
            "etag": "WuKN1uQPH2o",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/8mfLDwAAQBAJ",
            "volumeInfo": {
                "title": "Fool Prince’s Super-power Consort",
                "subtitle": "Volume 2",
                "authors": [
                    "Xiao BaoBao"
                ],
                "publisher": "Funstory",
                "publishedDate": "2020-01-23",
                "description": "She was originally the eldest daughter of the direct descendant of the Duke of Zhenguo Palace. Her father did not like her and her mother had died a long time ago. An imperial edict had chosen the Mansion of The State Direct Daughter as the foolish Qin Wang Princess. She, who had originally admired the King of Zhao, had become the shield for her stepsister. After being killed by mistake, what kind of brilliance would a cowardly soul emit when replaced by a genius who possessed a Special Ability? So what if you're a foolish king, her plant Special Ability can take a person's life and can also send a person's life, what if you can't cure a fool?",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781648140174"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1648140173"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 662,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.3.3.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=8mfLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=8mfLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=8mfLDwAAQBAJ&pg=PT237&dq=Prince&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=8mfLDwAAQBAJ&dq=Prince&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Fool_Prince_s_Super_power_Consort.html?hl=&id=8mfLDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Fool_Prince_s_Super_power_Consort-sample-epub.acsm?id=8mfLDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Fool_Prince_s_Super_power_Consort-sample-pdf.acsm?id=8mfLDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=8mfLDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> Consort&#39;s poison so similar to the poison in the Godly Doctor Jiang? Although she had a strong personality, she had a very deep affection for <b>Prince</b> Consort Ma. Now that he suddenly died, she felt grief in her heart, &quot;Murong Ling&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "n_fyDwAAQBAJ",
            "etag": "XdHzIvGBtNM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/n_fyDwAAQBAJ",
            "volumeInfo": {
                "title": "Transmigrated To Be Prince's Consort",
                "subtitle": "Volume 6",
                "authors": [
                    "Yan HuaZhanYueHua"
                ],
                "publisher": "Funstory",
                "publishedDate": "2020-07-29",
                "description": "Once he crossed the Qing Dynasty, he even became the 'Eighth Lord's Blessing'. Chi He really wanted to give the God a middle finger! How could she, a lowly commoner, live to become a prince in the name of Fu Jin! Competing for a favor? No! A duel? No! A palace battle? Not to mention! However, she wasn't willing to die just like that! After some thought, Chi He River set a goal for himself! Even if he didn't have the love of a man, the company of a child was still worth it! Thus, every day she would open her eyes and think about one thing. Would she be able to make Eighth Lord stay for the night today?",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781649918277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1649918275"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 695,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.2.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=n_fyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=n_fyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=n_fyDwAAQBAJ&pg=PT100&dq=Prince&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=n_fyDwAAQBAJ&dq=Prince&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Transmigrated_To_Be_Prince_s_Consort.html?hl=&id=n_fyDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Transmigrated_To_Be_Prince_s_Consort-sample-epub.acsm?id=n_fyDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Transmigrated_To_Be_Prince_s_Consort-sample-pdf.acsm?id=n_fyDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=n_fyDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> was touched and nearly cried again ! The person behind the scenes had yet to be discovered , so how could Kang Xi be in the mood to sleep ? After pacifying the crown <b>prince</b> , he personally went to check on the progress of the&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "dF_cDwAAQBAJ",
            "etag": "8BqbYGte6wE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/dF_cDwAAQBAJ",
            "volumeInfo": {
                "title": "Prince's Favorite, Please Be My Consort",
                "subtitle": "Volume 2",
                "authors": [
                    "Zao ChunWanDong"
                ],
                "publisher": "Funstory",
                "publishedDate": "2020-04-17",
                "description": "Everyone said that the Third Young Miss of the Prime Minister's Estate was an immoral trash who would only chase after the crown prince's obsession. If the crown prince wasn't happy, she wouldn't be able to marry him in her entire life.F * ck.It was all nonsense!She was infatuated with him?The first thing Xia Sizhu did after entering the palace was to cancel the Crown Prince's engagement.She's trash?How could she not be adept at refining poison!That she couldn't get married?What was the matter with that famous war god, Dongfang Ye, chasing after her with all his might?!\"Dongfang Ye, let me beg you, please don't chase me, okay?\"The man smiled, \"Not good, Ah Zhu. If you don't let me chase after you, don't tell me you've fallen for someone else?\"",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781648847776"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1648847773"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 725,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.2.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=dF_cDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=dF_cDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=dF_cDwAAQBAJ&pg=PT515&dq=Prince&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=dF_cDwAAQBAJ&dq=Prince&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Prince_s_Favorite_Please_Be_My_Consort.html?hl=&id=dF_cDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Prince_s_Favorite_Please_Be_My_Consort-sample-epub.acsm?id=dF_cDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Prince_s_Favorite_Please_Be_My_Consort-sample-pdf.acsm?id=dF_cDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=dF_cDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> likes you. As long as you grasp his heart, so what if I&#39;m his concubine? When the Crown <b>Prince</b> becomes the emperor, you can always take care of her.&quot; Qi He walked in with a washbasin, consoling Xia Caixiu as she looked at her in&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "ccNfM6YPPdUC",
            "etag": "FbWktFwsgv0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ccNfM6YPPdUC",
            "volumeInfo": {
                "title": "Library of Congress Subject Headings",
                "authors": [
                    "Library of Congress"
                ],
                "publishedDate": "2004",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "WISC:89082992264"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 1384,
                "printType": "BOOK",
                "categories": [
                    "Subject headings, Library of Congress"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.5.5.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=ccNfM6YPPdUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=ccNfM6YPPdUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=ccNfM6YPPdUC&pg=PA5460&dq=Prince&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=ccNfM6YPPdUC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ccNfM6YPPdUC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=ccNfM6YPPdUC&rdid=book-ccNfM6YPPdUC&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/Library_of_Congress_Subject_Headings.epub?id=ccNfM6YPPdUC&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=ccNfM6YPPdUC&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> William Sound Earthquake , Alaska , 1964 USE Alaska Earthquake , Alaska , 1964 Princes ( May Subd Geog ) ... <b>Prince</b> , Diana ( Fictitious character ) USE Wonder Woman ( Fictitious character ) <b>Prince</b> Albert Hills ( N.W.T. ) USE&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "RSpJAQAAMAAJ",
            "etag": "rN0qmKL+kFw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/RSpJAQAAMAAJ",
            "volumeInfo": {
                "title": "The Clydesdale Stud-book. ...",
                "authors": [
                    "Clydesdale Horse Society of Great Britain and Ireland"
                ],
                "publishedDate": "1898",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "UIUC:30112050767265"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 394,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.4.6.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=RSpJAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=RSpJAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=RSpJAQAAMAAJ&pg=PA349&dq=Prince&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=RSpJAQAAMAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=RSpJAQAAMAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=RSpJAQAAMAAJ&rdid=book-RSpJAQAAMAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/The_Clydesdale_Stud_book.epub?id=RSpJAQAAMAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=RSpJAQAAMAAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> Alexis ( 10,399 ) <b>Prince</b> Alfred ( 618 ) . m . , p . 89 ; p . 89 ; 13,234 , 13,332 , 13,334 , ( 10,468 ) 13,310 . <b>Prince</b> Arbutus ( 9969 ) <b>Prince</b> Henry ( 1257 ) . m . 12 , 103 , p . 17 ; 8513 , p . 81 ; 13,081 , 13,255 , 13,256&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "4Hw3AAAAIAAJ",
            "etag": "M/z4G+eeAgU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/4Hw3AAAAIAAJ",
            "volumeInfo": {
                "title": "The Prince's Ball",
                "subtitle": "A Brochure. From \"Vanity Fair.\"",
                "authors": [
                    "Edmund Clarence Stedman",
                    "Henry Louis Stephens"
                ],
                "publisher": "New York : Rudd & Carleton",
                "publishedDate": "1860",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "UCAL:B3569272"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 80,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.4.6.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=4Hw3AAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=4Hw3AAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=4Hw3AAAAIAAJ&pg=PA8&dq=Prince&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=4Hw3AAAAIAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=4Hw3AAAAIAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=4Hw3AAAAIAAJ&rdid=book-4Hw3AAAAIAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/The_Prince_s_Ball.epub?id=4Hw3AAAAIAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "downloadLink": "http://books.google.com/books/download/The_Prince_s_Ball.pdf?id=4Hw3AAAAIAAJ&hl=&output=pdf&sig=ACfU3U0sgRVr6H25p5gLBJZN89S8hKhW8g&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=4Hw3AAAAIAAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> ; His lips were sweeter than sugared quince ; His locks as brown As <b>Prince</b> CHARMING&#39;S Own ; When he spoke , his tone Was nice to be heard , as that of the bird , To which <b>Prince</b> Ruby was cruelly turned By the spell his magical&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "KMgOAQAAMAAJ",
            "etag": "CLZ4eOWpFxw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/KMgOAQAAMAAJ",
            "volumeInfo": {
                "title": "The American Shropshire Sheep Record",
                "authors": [
                    "Mortimer Levering",
                    "Julia M. Wade"
                ],
                "publishedDate": "1891",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "PSU:000055549899"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 792,
                "printType": "BOOK",
                "categories": [
                    "Shropshire sheep"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.7.6.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=KMgOAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=KMgOAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=KMgOAQAAMAAJ&pg=PT11&dq=Prince&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=KMgOAQAAMAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=KMgOAQAAMAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=KMgOAQAAMAAJ&rdid=book-KMgOAQAAMAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/The_American_Shropshire_Sheep_Record.epub?id=KMgOAQAAMAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "downloadLink": "http://books.google.com/books/download/The_American_Shropshire_Sheep_Record.pdf?id=KMgOAQAAMAAJ&hl=&output=pdf&sig=ACfU3U0AR7-PKIkIb8_G7Gmeh_qtb7BXjQ&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=KMgOAQAAMAAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> . 13700 Rattler . .13882 Royal Heir .. 20936 <b>Prince</b> 2d . ..19098 Rattler 1st . .14582 Royal Lord 8th . .15584 <b>Prince</b> 8 ... .19990 Rattler 2d . .14583 Royal Lord 9th .15585 <b>Prince</b> Albert .. 14633 Ray&#39;s 4 . 20060 Royal Lord 10th 15586&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "VcUzIsIvC8QC",
            "etag": "Bcu1W6CYBZQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/VcUzIsIvC8QC",
            "volumeInfo": {
                "title": "Hạmishah hụmshe Torah",
                "subtitle": "ʻim ha-Haftạrot... : ʻim targum be-lashon Inglish... : ha-tefilot le-Shabatot...",
                "publishedDate": "1897",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "NYPL:33433060833617"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 458,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "2.4.5.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=VcUzIsIvC8QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=VcUzIsIvC8QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "iw",
                "previewLink": "http://books.google.com/books?id=VcUzIsIvC8QC&pg=PA146&dq=Prince&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=VcUzIsIvC8QC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=VcUzIsIvC8QC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=VcUzIsIvC8QC&rdid=book-VcUzIsIvC8QC&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/H%E1%BA%A1mishah_h%E1%BB%A5mshe_Torah.epub?id=VcUzIsIvC8QC&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=VcUzIsIvC8QC&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>prince</b> , Omar <b>prince</b> , Teman <b>prince</b> : Esau <b>prince</b> , Gatham <b>prince</b> , Nahath <b>prince</b> ter of Zibeon , wife : and she bare to Esau Jeush , and Jalam , and Ko- 15 These are the dukes of the sons of E- sau : the sons of Eliphaz the first- born&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "3SoOAAAAYAAJ",
            "etag": "oe8xbZnDKcU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/3SoOAAAAYAAJ",
            "volumeInfo": {
                "title": "The Historic Note-book, with an Appendix of Battles",
                "authors": [
                    "Ebenezer Cobham Brewer"
                ],
                "publishedDate": "1891",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "NYPL:33433082407044"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 1052,
                "printType": "BOOK",
                "categories": [
                    "History"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "3.9.10.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=3SoOAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=3SoOAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=3SoOAAAAYAAJ&pg=PA714&dq=Prince&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=3SoOAAAAYAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=3SoOAAAAYAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=3SoOAAAAYAAJ&rdid=book-3SoOAAAAYAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/The_Historic_Note_book_with_an_Appendix.epub?id=3SoOAAAAYAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "downloadLink": "http://books.google.com/books/download/The_Historic_Note_book_with_an_Appendix.pdf?id=3SoOAAAAYAAJ&hl=&output=pdf&sig=ACfU3U3uYTm72binsieIp86CqK1fpBGEAQ&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=3SoOAAAAYAAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Ebenezer Cobham Brewer. 714 <b>PRINCE Prince</b> Consort Prize ( The ) . For original historic research . Given every alternate year to graduates of not more than four years &#39; standing . Value about 100l . Founded from the surplus of a memorial&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "VCoebLiOdZEC",
            "etag": "5QgObeqM3Cw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/VCoebLiOdZEC",
            "volumeInfo": {
                "title": "The Chronicle and Directory for China, Japan & the Philippines for ...",
                "publishedDate": "1869",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "ONB:+Z218784305"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 710,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.5.5.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=VCoebLiOdZEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=VCoebLiOdZEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=VCoebLiOdZEC&pg=RA1-PA350&dq=Prince&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=VCoebLiOdZEC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=VCoebLiOdZEC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=VCoebLiOdZEC&rdid=book-VCoebLiOdZEC&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/The_Chronicle_and_Directory_for_China_Ja.epub?id=VCoebLiOdZEC&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=VCoebLiOdZEC&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Prince</b> of Soûo , Matsdaïra 60,000 38,400 Tanagoura Oshiou Soûo no Kami <b>Prince</b> of Kasousa , Tosaoua 60,000 38,400 Sin Dewa Kasousa Noskè <b>Prince</b> of Ki , Naïto Ki no Kami 60,000 38,400 Mourakami Etsigo <b>Prince</b> of Simosa , Owayama 60,000&nbsp;..."
            }
        }
    ]
}


function importSearchObject(inObject){

    const resBooks=inObject.items.map((book)=>{


        const authors = book.volumeInfo.authors || [""]
        const categories = book.volumeInfo.categories || [""]
        const publishedDate = book.volumeInfo.publishedDate ? String(new Date(book.volumeInfo.publishedDate).getFullYear()) : ""
        const pageCount = book.volumeInfo.pageCount || ""
        const language = book.volumeInfo.language || ""
        const description = book.volumeInfo.description || ""
        return(
            {
                id:book.id,
                title: book.volumeInfo.title,
                subtitle:  book.volumeInfo.subtitle,
                authors: [...authors],
                publishedDate: publishedDate,
                description: description,
                pageCount:pageCount,
                categories:[...categories],
                thumbnail: "",
                language: language,
                listPrice: {
                    amount: "",
                    currencyCode: "usd",
                    isOnSale: false,
                }
        })
    })
    return resBooks

}



