export const catchAsync = <T>(fn: () => Promise<T>, onError?: (error: any) => void) =>
  fn().catch((error) => {
    if (onError) {
      onError(error);
    }
    throw error;
  });
