import { CPUState } from "../storage/cpu";
import { EncodedInstructionMeta } from "@vega/types/assambler";

export class CPUStateManager {
  getState() {
    return CPUState.getState();
  }

  get setState() {
    return CPUState.setState;
  }

  reset() {
    CPUState.getState().reset();
  }

  nextStep(instruction: string, meta: EncodedInstructionMeta, pc: number) {
    CPUState.setState((state) => ({
      pipeline: {
        ...state.pipeline,
        WB: {
          ...state.pipeline["MEM"],
        },
        MEM: {
          ...state.pipeline["EX"],
        },
        EX: {
          ...state.pipeline["ID"],
        },
        ID: {
          ...state.pipeline["IF"],
        },
        IF: {
          instruction: instruction,
          imeta: meta,
          cumeta: {},
          cpumeta: {
            pc,
          },
        },
      },
    }));
  }
}
