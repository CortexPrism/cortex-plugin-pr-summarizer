// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolCallResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolCallResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const pr_summarizeTool: Tool = {
  definition: {
    name: 'pr_summarize',
    description: 'Generate PR summary from diff',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[pr-summarizer] pr_summarize executed');
      return ok('pr_summarize', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'pr_summarize',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const pr_explain_impactTool: Tool = {
  definition: {
    name: 'pr_explain_impact',
    description: 'Explain the impact of changes',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[pr-summarizer] pr_explain_impact executed');
      return ok('pr_explain_impact', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'pr_explain_impact',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const pr_breaking_changesTool: Tool = {
  definition: {
    name: 'pr_breaking_changes',
    description: 'Identify breaking changes',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[pr-summarizer] pr_breaking_changes executed');
      return ok('pr_breaking_changes', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'pr_breaking_changes',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-pr-summarizer] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-pr-summarizer] Unloading...');
}
export const tools: Tool[] = [pr_summarizeTool, pr_explain_impactTool, pr_breaking_changesTool];
