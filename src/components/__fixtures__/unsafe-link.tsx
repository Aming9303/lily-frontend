// This fixture intentionally violates react/jsx-no-target-blank to prove the rule is active.
// eslint-disable-next-line react/jsx-no-target-blank
export function UnsafeLink() {
  return <a href="https://example.com" target="_blank">Unsafe</a>;
}
