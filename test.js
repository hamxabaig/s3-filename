import test from 'ava';
import s3Filename from '.';

test('should throw error on invalid params', t => {
	t.throws(() => {
		s3Filename(123);
	}, Error);
	t.throws(() => {
		s3Filename(null);
	}, Error);
	t.throws(() => {
		s3Filename();
	}, Error);
	t.throws(() => {
		s3Filename({});
	}, Error);
	t.throws(() => {
		s3Filename('abc', {separator: '?'});
	}, Error);
});

test('should pass on valid params', t => {
	t.notThrows(() => {
		s3Filename('abc-s32', {separator: '-'});
	});
});

test('should remove special characters from string except !()-_*.', t => {
	t.is(s3Filename('123#@%$^&@456!-)+=*_'), '123456!-)*_');
});

test('should remove latin characters from string to their english counter parts', t => {
	t.is(s3Filename('áêīòü'), 'aeiou');
});

test('should make the filename sane', t => {
	t.is(s3Filename('some  漢字 ćööł %  #fíłéñàmé.jpg'), 'some-cool-filename.jpg');
});
