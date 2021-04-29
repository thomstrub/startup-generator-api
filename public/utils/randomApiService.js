export function getRandomIdea(){
    return fetch('/api/random').then(res => res.json());

}