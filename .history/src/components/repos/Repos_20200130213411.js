import React from 'react'

 const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo = {repo} key = {repo.id}></RepoItem>)
}
export default Repos
