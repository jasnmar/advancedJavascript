function setPermissionLevel(permissionLevel, name1, name2, name3) {
  console.log(`${name1} now has ${permissionLevel} level access.`)
  console.log(`${name2} now has ${permissionLevel} level access.`)
  console.log(`${name3} now has ${permissionLevel} level access.`)
}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike')
