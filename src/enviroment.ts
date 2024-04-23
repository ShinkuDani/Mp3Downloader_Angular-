// API Source: https://rapidapi.com/420vijay47/api/youtube-mp3-downloader2/

export class enviroment {
    mp3DownloaderUrl: string;
    mp3DownloaderOptions: object;

    constructor () {
        this.mp3DownloaderUrl = 'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url='
        this.mp3DownloaderOptions = {
            'X-RapidAPI-Key': '',
		    'X-RapidAPI-Host': ''
        }


    }
}


export const Mp3Video = {
    
    mp3DoanloaderBaseUrl: 'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=',
    mp3DoanloaderBaseUrlCustom: 'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=',

    
    XRapidAPIHostHeaderName: 'RapidAPI-Host',
    XRapidAPIHostHeaderValue: '',

    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: ''
}