
import pack from './package.json';

export class Logger {

    static PID = Logger.generateNDigitNumber();
    static PACKAGE_NAME = "[" +pack.name +"] ";

    public static info(...message: any[]) {
        console.info("\n"  +Logger.formatDateNow(), Logger.colorizeText(" INFO ").green, "   " ,Logger.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public static error(...message: any[]): void {
        console.error("\n"  +Logger.formatDateNow(), Logger.colorizeText(" ERROR ").red, "  ",  Logger.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public static debug(...message: any[]): void {
        console.debug("\n"  +Logger.formatDateNow(), Logger.colorizeText(" DEBUG ").blue,"  ",  Logger.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public static warn(...message: any[]): void {
        console.warn("\n"  +Logger.formatDateNow(), Logger.colorizeText(" WARNING ").yellow,"", Logger.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public static trace(...message: any[]): void {
        console.trace("\n"  +Logger.formatDateNow(), Logger.colorizeText(" TRACE ").cyan,"  ",  Logger.colorizeText(this.PID).default_color, "  ----  ", this.PACKAGE_NAME, ...message);
    }

    public static generateNDigitNumber(n: number = 6): number {

        let digit: number;

        do {
            digit = Math.random()

        }while (digit === 1);

        const min = Math.pow(10, n - 1); // Minimum n
        const max = Math.pow(10, n) - 1; // Maximum n
        return Math.floor( digit * (max - min + 1)) + min;
    }

    public static colorizeText = (...args: any[]) => ({
        black: `\x1b[30m${args.join(' ')}`,
        red: `\x1b[31m${args.join(' ')}`,
        green: `\x1b[32m${args.join(' ')}`,
        yellow: `\x1b[33m${args.join(' ')}`,
        blue: `\x1b[34m${args.join(' ')}`,
        magenta: `\x1b[35m${args.join(' ')}`,
        cyan: `\x1b[36m${args.join(' ')}`,
        white: `\x1b[37m${args.join(' ')}`,
        default_color: `\x1b[0m${args.join(' ')}`,
    });

    public static formatDateNow(): string {
        let dateNow: Date = new Date();

        let day = dateNow.getDate();
        let month = dateNow.getMonth() + 1;
        let year = dateNow.getFullYear();

        let shortDateFormat = day + "-" + month + "-" + year;

        let hour = dateNow.getHours();
        let minute = dateNow.getMinutes();
        let second = dateNow.getSeconds();

        let shortTimeFormat = hour + ":" + minute + ":" + second;

        return shortDateFormat + " " +shortTimeFormat;
    }


    /*     static colorizeBackground = (...args: any[]) => ({
             bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
             bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
             bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
             bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
             bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
             bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
             bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
             bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
         });*/
}

