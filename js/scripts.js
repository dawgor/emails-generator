function generateName(name, second_name, surname) {
	var name_first_letter,
		name_first_two_letters,
		second_name_first_letter,
		surname_first_letter,
		surname_first_two_letters;

	name_first_letter = name.substring(0,1);
	name_first_two_letters = name.substring(0,2);
	second_name_first_letter = second_name.substring(0,1);
	surname_first_letter = surname.substring(0,1);
	surname_first_two_letters = surname.substring(0,2);

	return [
		name + '.' + surname,
		name + surname,
		name,
		name_first_letter + '.' + surname,
		name_first_letter + surname,
		name_first_letter + surname_first_letter,
		surname,
		surname_first_letter,
		name + '_' + surname,
		name_first_letter + '_' + surname,
		name + surname_first_letter,
		name_first_letter + surname_first_two_letters,
		surname + '.' + name,
		name_first_two_letters + surname,
		name_first_two_letters + '.' + surname,
		surname + name_first_letter,
		//second name combination starts here
		name + '.' + second_name + '.' + surname,
		name + second_name + surname,
		name_first_letter + second_name_first_letter + surname_first_letter,
		name + '.' + second_name + '-' + surname,
		name + second_name,
		name + '.' + second_name
	]
}

function generateDomain(company) {
	var company;
	return [
		company
	]
}

function generator(name, second_name, surname, company) {
	var result = [];

	names = generateName(name, second_name, surname); 
	domains = generateDomain(company); 

	for (var i = 0; i < names.length; i++) {
		for (var y = 0; y < domains.length; y++) {
			var email = names[i] + '@' + domains[y];
			email = email.toLowerCase();
			result.push(email);
		}
	}

	return result;
}

jQuery(document).ready(function($){
    $('.generator').on('submit', function(e) {
		e.preventDefault();
		var name = $('#first_name').val();
		var second_name = $('#second_name').val();
		var surname = $('#last_name').val();
		var company = $('#company').val();

		var results = generator(name, second_name, surname, company);

		$('#results').val(results.join('\n'));
		$('#results').css('display', 'block');
	});
});
