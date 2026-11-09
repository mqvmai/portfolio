// 2 — Full-Page Code: entire page rendered as a GitHub-dark .ts file
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

const C = {
  bg: "#0d1117",
  text: "#c9d1d9",
  muted: "#8b949e",
  keyword: "#ff7b72",
  string: "#a5d6ff",
  number: "#79c0ff",
  prop: "#d2a8ff",
  comment: "#8b949e",
  border: "#30363d",
};

function Ln({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="flex gap-0 leading-6">
      <span
        className="select-none pr-6 text-right text-xs"
        style={{ color: C.muted, minWidth: "3rem" }}
      >
        {n}
      </span>
      <span className="flex-1 text-xs md:text-sm">{children ?? <>&nbsp;</>}</span>
    </div>
  );
}

export default function S2() {
  let line = 1;
  const l = () => line++;

  return (
    <div className="min-h-screen font-mono" style={{ background: C.bg, color: C.text }}>
      <ShowcaseNav current={2} />

      {/* File tab */}
      <div
        className="flex items-center gap-1 border-b px-4 py-2 text-xs"
        style={{ borderColor: C.border, background: "#161b22" }}
      >
        <span style={{ color: C.muted }}>portfolio / src /</span>
        <span style={{ color: C.text, fontWeight: 600 }}>mike-mai.ts</span>
      </div>

      <div className="py-6 overflow-x-auto">
        <Ln n={l()}/>
        <Ln n={l()}>
          <span style={{ color: C.keyword }}>import</span>
          <span style={{ color: C.text }}> type </span>
          <span style={{ color: C.prop }}>{"{ Engineer, Project }"}</span>
          <span style={{ color: C.text }}> </span>
          <span style={{ color: C.keyword }}>from</span>
          <span style={{ color: C.string }}> &quot;./types&quot;</span>
          <span style={{ color: C.text }}>;</span>
        </Ln>
        <Ln n={l()}/>
        <Ln n={l()}>
          <span style={{ color: C.comment }}>{"// ─── engineer ───────────────────────────────────────────────────"}</span>
        </Ln>
        <Ln n={l()}/>
        <Ln n={l()}>
          <span style={{ color: C.keyword }}>const</span>
          <span style={{ color: C.prop }}> mikeMai</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.number }}>Engineer</span>
          <span style={{ color: C.text }}> = {"{"}</span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>&nbsp;&nbsp;</span>
          <span style={{ color: C.prop }}>name</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.string }}>&quot;Mike Mai&quot;</span>
          <span style={{ color: C.text }}>,</span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>&nbsp;&nbsp;</span>
          <span style={{ color: C.prop }}>role</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.string }}>&quot;Senior Software Engineer&quot;</span>
          <span style={{ color: C.text }}>,</span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>&nbsp;&nbsp;</span>
          <span style={{ color: C.prop }}>experience</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.number }}>10</span>
          <span style={{ color: C.text }}>, </span>
          <span style={{ color: C.comment }}>{"// years"}</span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>&nbsp;&nbsp;</span>
          <span style={{ color: C.prop }}>industries</span>
          <span style={{ color: C.text }}>: [</span>
          <span style={{ color: C.string }}>&quot;Publishing&quot;</span>
          <span style={{ color: C.text }}>, </span>
          <span style={{ color: C.string }}>&quot;Healthcare&quot;</span>
          <span style={{ color: C.text }}>, </span>
          <span style={{ color: C.string }}>&quot;Fintech&quot;</span>
          <span style={{ color: C.text }}>],</span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>&nbsp;&nbsp;</span>
          <span style={{ color: C.prop }}>status</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.string }}>&quot;available_for_hire&quot;</span>
          <span style={{ color: C.text }}>,</span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>&nbsp;&nbsp;</span>
          <span style={{ color: C.prop }}>links</span>
          <span style={{ color: C.text }}>: {"{"} </span>
          <span style={{ color: C.prop }}>github</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.string }}>&quot;github.com/mqvmai&quot;</span>
          <span style={{ color: C.text }}>, </span>
          <span style={{ color: C.prop }}>email</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.string }}>&quot;mqmai.dev@gmail.com&quot;</span>
          <span style={{ color: C.text }}> {"}"}, </span>
        </Ln>
        <Ln n={l()}>
          <span style={{ color: C.text }}>{"}"}</span>
          <span style={{ color: C.text }}>;</span>
        </Ln>
        <Ln n={l()}/>
        <Ln n={l()}>
          <span style={{ color: C.comment }}>{"// ─── projects ──────────────────────────────────────────────────"}</span>
        </Ln>
        <Ln n={l()}/>
        <Ln n={l()}>
          <span style={{ color: C.keyword }}>export const</span>
          <span style={{ color: C.prop }}> projects</span>
          <span style={{ color: C.text }}>: </span>
          <span style={{ color: C.number }}>Project</span>
          <span style={{ color: C.text }}>[] = [</span>
        </Ln>

        {projects.map((p) => (
          <div key={p.title}>
            <Ln n={l()}><span style={{ color: C.text }}>&nbsp;&nbsp;{"{"}</span></Ln>
            <Ln n={l()}>
              <span style={{ color: C.text }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style={{ color: C.prop }}>name</span>
              <span style={{ color: C.text }}>: </span>
              <span style={{ color: C.string }}>&quot;{p.title}&quot;</span>
              <span style={{ color: C.text }}>,</span>
            </Ln>
            <Ln n={l()}>
              <span style={{ color: C.text }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style={{ color: C.prop }}>description</span>
              <span style={{ color: C.text }}>: </span>
              <span style={{ color: C.string }}>&quot;{p.description}&quot;</span>
              <span style={{ color: C.text }}>,</span>
            </Ln>
            <Ln n={l()}>
              <span style={{ color: C.text }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style={{ color: C.prop }}>stack</span>
              <span style={{ color: C.text }}>: [</span>
              {p.tags.map((t, i) => (
                <span key={t}>
                  <span style={{ color: C.string }}>&quot;{t}&quot;</span>
                  {i < p.tags.length - 1 && <span style={{ color: C.text }}>, </span>}
                </span>
              ))}
              <span style={{ color: C.text }}>],</span>
            </Ln>
            <Ln n={l()}><span style={{ color: C.text }}>&nbsp;&nbsp;{"}"}</span><span style={{ color: C.text }}>,</span></Ln>
          </div>
        ))}

        <Ln n={l()}><span style={{ color: C.text }}>];</span></Ln>
        <Ln n={l()}/>
        <Ln n={l()}>
          <span style={{ color: C.keyword }}>export default</span>
          <span style={{ color: C.text }}> mikeMai;</span>
        </Ln>
        <Ln n={l()}/>
      </div>

      {/* Status bar */}
      <div
        className="fixed bottom-0 left-0 right-0 flex justify-between px-4 py-1 text-xs"
        style={{ background: "#1f6feb", color: "white" }}
      >
        <span>TypeScript · UTF-8</span>
        <span>mike-mai.ts — 1 engineer, {projects.length} projects</span>
      </div>
    </div>
  );
}
