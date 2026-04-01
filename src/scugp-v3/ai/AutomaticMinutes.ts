/**
 * @fileOverview SCUGP 3.0 Automatic Minutes Generation.
 * Automates the creation of meeting minutes integrated with project health metrics.
 */

/**
 * Generates meeting minutes formatted for SCUGP 3.0 standards.
 * 
 * @param decisions List of decisions made during the meeting.
 * @param data7D The 7D project health data containing the CESI indicator.
 * @returns A formatted string containing the minutes.
 */
export const generateMeetingMinutes = (decisions: string[], data7D: any) => {
    const header = `PROJET : FPSO ANGOLA 2026 | VERSION : SCUGP 3.0\n`;
    const body = decisions.map(d => `- [DÉCISION] : ${d}`).join('\n');
    const footer = `\nINDICATEUR CESI : ${data7D.cesi} | SIGNATURE DIGITALE CERTIFIÉE.`;
    
    return `${header}${body}${footer}`;
};
