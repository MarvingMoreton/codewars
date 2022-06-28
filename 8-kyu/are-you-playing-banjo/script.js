function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === 'R' || name[0] === 'r') {
    return String(`${name} plays banjo`);
  } else {
    return String(`${name} does not play banjo`);
  }
}

areYouPlayingBanjo('rubi');
