function setPermissionLevel(permissionLevel, ...rest) {
  rest.forEach((name)=> console.log(`${name} now has ${permissionLevel} level access.`))
}
setPermissionLevel('admin', 'Dave', 'Sally', 'Mike')
