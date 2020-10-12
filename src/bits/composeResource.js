export default function composeResource(
  name,
  get,
  upgradeCondition,
  unlockCondition
) {
  return {
    name: name,
    canUpgrade: () => upgradeCondition,
    isUnlocked: () => unlockCondition,
    get: () => get, // TODO: round this number for display (e.g. 5,000,000 -> 5M)
  };
}
