function thetaFormula(...args) {
    if (args.length !== 3 || args.filter(item => item === '?').length > 1) return null
  
    const [radius, arc, angle] = args;
    if      (radius === '?') return (arc / angle).toFixed(3)
    else if (arc    === '?') return radius * angle
    else if (angle  === '?') return (arc / radius).toFixed(3)
  
    if ((angle === (arc / radius))) return true
    
    return false
  }