import React, { useState } from 'react';
import {
	CarouselInput,
	CarouselSlide,
	CarouselImage,
} from '@strapi/design-system/CarouselInput';
import { Typography } from '@strapi/design-system/Typography';

interface Props {
	data: string[];
}

const MediaCell = ({ data }: Props) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	let type = 'images';

	if (data[0] && data[0].includes('mp4')) {
		type = 'videos';
	} else if (data[0] && data[0].includes('wav')) {
		type = 'audios';
	} else if (data[0] && data[0].includes('json')) {
		type = 'files';
	}

	const handleNext = () => {
		setSelectedIndex((current) =>
			current < data.length - 1 ? current + 1 : 0
		);
	};

	const handlePrevious = () => {
		setSelectedIndex((current) =>
			current > 0 ? current - 1 : data.length - 1
		);
	};

	const renderCarouselSlideContent = (url) => ({
		images: <CarouselImage src={url} alt={url} />,
		videos: <video loop autoPlay width={200} src={url}></video>,
		audios: <audio controls src={url}></audio>,
		files: <Typography>{url.split('/').reverse()[0]}</Typography>,
	});

	return (
		<CarouselInput
			selectedSlide={selectedIndex}
			label={`Carousel (${selectedIndex + 1}/${data.length})`}
			onNext={handleNext}
			onPrevious={handlePrevious}
			previousLabel='Previous slide'
			nextLabel='Next slide'>
			{data.map((url) => (
				<CarouselSlide key={url}>
					{renderCarouselSlideContent(url)[type]}
				</CarouselSlide>
			))}
		</CarouselInput>
	);
};

export default MediaCell;
