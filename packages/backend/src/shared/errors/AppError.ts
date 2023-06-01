class AppError {
  constructor(public readonly message: string, public readonly status = 400) {}
}

export default AppError;
