import { parseReportWithGemini } from '../parse_report_gemini/index';

export async function evaluateRisks(report: any) {
  // TODO: implementar motor de regras e integração com DB/Supabase
  console.log('evaluateRisks placeholder', report?.id);
  const parsed = await parseReportWithGemini(report.raw);
  return { alerts: [], parsed };
}

