def maskify(cc)
  cc.size <= 4 ? cc : "#" * (cc.length-4) + cc[-4..-1]
end
