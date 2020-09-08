class Data{
    constructor(institute, branch, round, opening, closing){
        this.institute = institute;
        this.round = round;
        this.opening = opening;
        this.branch = branch;
        this.closing = closing;
    }
}



module.exports = function(data, rank, category){

    var finalData = [];

    data.forEach(institute =>{
        institute[category].forEach(branch =>{

            for(round of branch.data){
                if(round.closing >= rank-(rank*0.05)){
                    finalData.push(new Data(institute.shortID, branch.branch, round.round, round.opening, round.closing));
                    break;
                }
            }
        })
    })

    return finalData
            .sort(function(a, b){return Math.min(a.round, b.round)})
            .sort(function(a, b){return a.closing - b.closing})
            .sort(function(a, b){return a.institute - b.institute})
            .sort(function(a, b){return a.opening - b.opening});
}