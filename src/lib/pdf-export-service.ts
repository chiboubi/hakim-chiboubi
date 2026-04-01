/**
 * @fileOverview SCUGP PDF Export Service (Vector Render)
 * Génération de documents officiels sous l'autorité de la China University of Petroleum (CUPB).
 * Dr. Hakim Chibubi est le récipiendaire suprême.
 * VERSION : Ω 100000 | SCELLÉ ET ROBUSTE | Design Conforme au Modèle Bilingue avec Photo
 */

import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';
import { Diploma, SCUGP_CORE_OPTIONS } from './scugp-service';

export class PDFExportService {
  /**
   * Génère le diplôme suprême en format Portrait A4.
   */
  static async generateSupremeDiploma(): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
      const doc = new PDFDocument({
        size: 'A4',
        layout: 'portrait',
        margins: { top: 0, bottom: 0, left: 0, right: 0 }
      });

      const chunks: Buffer[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      try {
        await this._renderSupremeLayout(doc);
        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }

  private static async _renderSupremeLayout(doc: any) {
    const options = SCUGP_CORE_OPTIONS;
    
    // Fond papier crème prestige
    doc.rect(0, 0, 595, 842).fill('#FCFBF4');

    // Bordure Jade & Or
    doc.save();
    doc.lineWidth(25).strokeColor('#00A86B').rect(12, 12, 571, 818).stroke();
    doc.lineWidth(4).strokeColor('#D4AF37').rect(30, 30, 535, 782).stroke();
    doc.restore();

    // En-tête Institutionnel
    const univ = (options.university || "China University of Petroleum (Beijing)").toUpperCase();
    doc.font('Helvetica-Bold').fontSize(16).fillColor('#8B4513').text(univ, 0, 80, { align: 'center' });
    doc.fontSize(18).text(options.university_cn || '中国石油大学（北京）', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(7).fillColor('#64748b').text('BUREAU DE LA HAUTE CHANCELLERIE ACADÉMIQUE | 高等学术机构办公室', { align: 'center', characterSpacing: 2 });

    // Titre Central
    doc.moveDown(3);
    doc.fontSize(26).fillColor('#8B4513').text('DIPLÔME DE RECONNAISSANCE SUPRÊME', { align: 'center' });
    doc.fontSize(20).text('至高无上认可证书', { align: 'center' });

    // Nom du Récipiendaire
    doc.moveDown(2);
    doc.fontSize(11).fillColor('#333').text('DÉCERNÉ À / 授予 :', { align: 'center' });
    doc.moveDown(0.5);
    const fullName = `Dr. ${(options.owner.firstName || "")} ${(options.owner.lastName || "").toUpperCase()}`;
    doc.fontSize(38).fillColor('#8B0000').text(fullName, { align: 'center' });
    
    // Grade
    doc.moveDown(1);
    doc.fontSize(14).fillColor('#8B4513').text('MAÎTRE DE LA CONSCIENCE UNIVERSELLE', { align: 'center', characterSpacing: 1 });
    doc.fontSize(12).text('宇宙意识大师', { align: 'center' });

    // Coordonnées Régaliennes
    doc.moveDown(2);
    doc.fontSize(9).fillColor('#1a1a1a').text(`NIN: ${(options.owner.idNumber || "")} | ORCID: ${(options.owner.orcid || "")}`, 0, doc.y, { align: 'center' });
    
    // QR Code de Vérification
    const qrUrl = `https://scugp.cupb.edu.cn/verify/${(options.activationKey || "0x0")}`;
    const qrData = await QRCode.toDataURL(qrUrl, { margin: 1, color: { dark: '#8B4513', light: '#ffffff00' } });
    doc.image(qrData, 250, 680, { width: 95 });

    // Sceau Institutionnel CUPB
    doc.save();
    doc.translate(480, 720);
    doc.rect(-35, -35, 70, 70).lineWidth(3).strokeColor('#8B0000').stroke();
    doc.fillColor('#8B0000').fontSize(7).text('中国石油大学', -30, -20, { width: 60, align: 'center' });
    doc.fontSize(9).text('CUPB SEAL', -30, -2, { width: 60, align: 'center' });
    doc.fontSize(7).text('(北京) 印', -30, 15, { width: 60, align: 'center' });
    doc.restore();

    // Footer de Sécurité
    doc.fontSize(7).fillColor('#94a3b8').text(`DOI: ${(options.doi || "")} | PEKIN-BEJAIA | 2026-OMEGA`, 60, 810, { align: 'left' });
  }

  /**
   * Génère un certificat unitaire en format Paysage.
   */
  static async generateCertificate(diploma: Diploma): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
      const doc = new PDFDocument({
        size: 'A4',
        layout: 'landscape',
        margins: { top: 0, bottom: 0, left: 0, right: 0 }
      });

      const chunks: Buffer[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      try {
        await this._renderUnitaryLayout(doc, diploma);
        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }

  private static async _renderUnitaryLayout(doc: any, diploma: Diploma) {
    const options = SCUGP_CORE_OPTIONS;
    
    // Fond
    doc.rect(0, 0, 842, 595).fill('#FDFCF0');

    // Bordure Double
    doc.save();
    doc.strokeColor('#D4AF37').lineWidth(15).rect(20, 20, 802, 555).stroke();
    doc.restore();

    // Institution
    doc.fontSize(22).font('Helvetica-Bold').fillColor('#8B0000').text((options.university || "").toUpperCase(), 0, 60, { align: 'center' });
    doc.fontSize(18).text(options.university_cn || '', { align: 'center' });
    
    // Type de Titre
    doc.moveDown(2);
    const dType = (diploma.type || "DIPLOME").toUpperCase();
    doc.fontSize(36).text(dType, { align: 'center' });
    doc.fontSize(18).text(`"${(diploma.title || "").toUpperCase()}"`, { align: 'center' });

    // Détenteur
    doc.moveDown(2);
    const fullName = `Dr. ${(diploma.firstName || "")} ${(diploma.lastName || "").toUpperCase()}`;
    doc.fontSize(14).fillColor('#333').text(`Certifié pour l'Architecte : ${fullName}`, { align: 'center' });
    doc.text(`NIN: ${(options.owner.idNumber || "")} | DOI: ${(diploma.doi || options.doi || "")}`, { align: 'center' });

    // Description
    doc.moveDown(2);
    doc.fontSize(10).fillColor('#4b5563').text((diploma.description || ""), 100, doc.y, { align: 'center', width: 642 });

    // QR Code
    const qrUrl = `https://scugp.cupb.edu.cn/verify/${(diploma.certificateId || "0x0")}`;
    const qrData = await QRCode.toDataURL(qrUrl, { margin: 1, color: { dark: '#8B0000', light: '#ffffff00' } });
    doc.image(qrData, 80, 460, { width: 85 });

    // Sceau institutionnel
    doc.save();
    doc.translate(700, 480);
    doc.rect(-35, -35, 70, 70).lineWidth(3).strokeColor('#8B0000').stroke();
    doc.fillColor('#8B0000').fontSize(7).text('中国石油大学', -30, -20, { width: 60, align: 'center' });
    doc.fontSize(9).text('CUPB SEAL', -30, -2, { width: 60, align: 'center' });
    doc.fontSize(7).text('(北京) 印', -30, 15, { width: 60, align: 'center' });
    doc.restore();

    doc.font('Helvetica-Bold').fontSize(18).fillColor('#1a1a1a').text('CUPB CHANCELLERY', 550, 520, { align: 'center', width: 250 });
  }

  /**
   * Génère le portfolio complet.
   */
  static async generatePortfolio(diplomas: Diploma[]): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
      const doc = new PDFDocument({
        size: 'A4',
        layout: 'portrait',
        margins: { top: 0, bottom: 0, left: 0, right: 0 }
      });

      const chunks: Buffer[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      try {
        // Page de garde sombre prestige
        doc.rect(0, 0, 595, 842).fill('#050505');
        doc.fillColor('#f59e0b').fontSize(42).font('Helvetica-Bold').text('PORTFOLIO RÉGALIEN Ω', 0, 300, { align: 'center' });
        doc.fillColor('white').fontSize(24).text(`Dr. Hakim CHIBOUBI`, { align: 'center' });
        doc.fontSize(12).text(`SCELLÉ LE ${new Date().toLocaleDateString()}`, { align: 'center' });
        
        for (const diploma of diplomas) {
          doc.addPage({ layout: 'landscape' });
          await this._renderUnitaryLayout(doc, diploma);
        }

        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }
}
