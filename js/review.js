let userTags = [];
const drawStar = (target) => {
    let starRating = Math.floor(target.value / 2);
    $('.star span').css('width', `${starRating * 20}%`);
}
const addReview = () => {
    let userInput = $('#user-input').val();
    let starRating = Math.floor($('#star input').val() / 2);
    let reviewCode = `
        <div class="user-review">
            <div class='user'>
                <span>user-id</span>
            </div>
            <div class='review'>
                <div class="text-box">
                    <span>${userInput}</span>
                </div>
                <div class="star-box">
                    <span class="user-star">${'★'.repeat(starRating)}</span>
                </div>
            </div>
            <div class='user-tag'><span>${userTags}</span></div>
        </div>
    `;
    $('#review-container').append(reviewCode);
    $('#user-input').val('')
    $('#star input').val('0')
    $('#star span').css('width', '0')
    $('#tag-input input').val('')
    $('#tag-select span').remove()
    console.log(userTags)
    userTags=[];
}
const addTag = ()=>{
    $('#tag-select').append(`<span>#${$('#tag-input input').val()}</span>`)
    userTags.push(`#${$('#tag-input input').val()}`)
    $('#tag-input input').val('')
}
const resetTag = ()=>{
    $('#tag-select span').remove()
    userTags=[];
}
$('#tag').on('mouseover',()=>{
    $('#tag-select').css('display','block')
})
$('#tag-select').on('mouseleave',()=>{
    $('#tag-select').css('display','none')
})        
$('#input-btn').on('click',addReview)
$('#add-btn').on('click',addTag)
$('#remove-btn').on('click',resetTag)