import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6">
          <div className="max-w-lg w-full rounded-2xl border border-red-500/30 bg-white/5 p-10 text-center backdrop-blur-sm">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Something went wrong
            </h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              The page ran into an unexpected error. You can try refreshing or
              click below to reset.
            </p>
            {this.state.error && (
              <p className="mb-6 text-sm text-red-400 font-mono bg-black/30 rounded-lg p-3 text-left break-all">
                {this.state.error.message}
              </p>
            )}
            <button
              onClick={this.handleReset}
              className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400 hover:scale-105"
            >
              Reset Page
            </button>
            <button
              onClick={() => window.location.reload()}
              className="ml-3 rounded-xl border border-white/15 px-8 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
